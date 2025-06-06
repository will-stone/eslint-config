import type * as Globby from 'globby'
import { fs, vol } from 'memfs'
import { beforeEach, expect, test, vi } from 'vitest'

import config from './index.js'

// Point node's file-system at virtual file system.
vi.mock('node:fs', () => fs)

// Inject package path look-up tool with virtual file system.
vi.mock('globby', async (importOriginal) => {
  const original = await importOriginal<typeof Globby>()
  return {
    ...original,
    globbySync: (paths: string[]) =>
      original.globbySync(paths, {
        // @ts-expect-error -- memfs and globby don't agree on type, but it works.
        fs,
      }),
  }
})

beforeEach(() => {
  // Reset the state of the in-memory fs.
  vol.reset()
})

test('should load default configs', async () => {
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => null)
  vol.fromJSON({
    'package.json': JSON.stringify({
      dependencies: { bar: '^4.2.1', foo: '^9.0.0' },
    }),
  })

  await expect(config()).resolves.toStrictEqual([
    expect.objectContaining({ name: 'will-stone/ignores' }),
    expect.objectContaining({ name: 'will-stone/git-ignore' }),
    expect.objectContaining({ name: 'will-stone/base' }),
    expect.objectContaining({ name: 'will-stone/imports' }),
    expect.objectContaining({ name: 'will-stone/unicorn' }),
    expect.objectContaining({ name: 'will-stone/node' }),
    expect.objectContaining({ name: 'will-stone/package.json' }),
    expect.objectContaining({ name: 'will-stone/tsdoc' }),
  ])
  expect(logSpy).not.toHaveBeenCalled()
})

test.each([
  {
    configNames: ['jest/base', 'jest/globals', 'jest/typescript'],
    dep: 'jest',
    name: 'Jest',
  },
  {
    configNames: ['react'],
    dep: 'react',
    name: 'React',
  },
  {
    configNames: ['tailwind'],
    dep: 'tailwindcss',
    name: 'Tailwind',
  },
  {
    configNames: ['typescript'],
    dep: 'typescript',
    name: 'Typescript',
  },
  {
    configNames: ['vitest'],
    dep: 'vitest',
    name: 'Vitest',
  },
])('should load auto configs', async ({ name, configNames, dep }) => {
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => null)
  vol.fromJSON({
    'package.json': JSON.stringify({ dependencies: { [dep]: '^9.0.0' } }),
  })

  await expect(config()).resolves.toStrictEqual(
    expect.arrayContaining(
      configNames.map((configName) =>
        expect.objectContaining({ name: `will-stone/${configName}` }),
      ),
    ),
  )
  expect(logSpy).toHaveBeenNthCalledWith(1, 'Auto-configured plugins:')
  expect(logSpy).toHaveBeenNthCalledWith(2, `- ${name}`)
  expect(logSpy).toHaveBeenCalledTimes(2)
})

test('should not load any auto-configs if forced off', async () => {
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => null)
  vol.fromJSON({
    'package.json': JSON.stringify({
      dependencies: {
        jest: '^9.0.0',
        react: '^9.0.0',
        tailwindcss: '^9.0.0',
        typescript: '^9.0.0',
        vitest: '^9.0.0',
      },
    }),
  })

  await expect(
    config({
      jest: false,
      react: false,
      tailwind: false,
      typescript: false,
      vitest: false,
    }),
  ).resolves.toStrictEqual([
    expect.objectContaining({ name: 'will-stone/ignores' }),
    expect.objectContaining({ name: 'will-stone/git-ignore' }),
    expect.objectContaining({ name: 'will-stone/base' }),
    expect.objectContaining({ name: 'will-stone/imports' }),
    expect.objectContaining({ name: 'will-stone/unicorn' }),
    expect.objectContaining({ name: 'will-stone/node' }),
    expect.objectContaining({ name: 'will-stone/package.json' }),
    expect.objectContaining({ name: 'will-stone/tsdoc' }),
  ])
  expect(logSpy).not.toHaveBeenCalled()
})

test('should load auto-configs if forced on', async () => {
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => null)
  vol.fromJSON({
    'package.json': JSON.stringify({ dependencies: { lorem: '^9.0.0' } }),
  })

  await expect(
    config({
      jest: true,
      react: true,
      tailwind: true,
      typescript: true,
      vitest: true,
    }),
  ).resolves.toStrictEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: 'will-stone/ignores' }),
      expect.objectContaining({ name: 'will-stone/git-ignore' }),
      expect.objectContaining({ name: 'will-stone/base' }),
      expect.objectContaining({ name: 'will-stone/imports' }),
      expect.objectContaining({ name: 'will-stone/unicorn' }),
      expect.objectContaining({ name: 'will-stone/node' }),
      expect.objectContaining({ name: 'will-stone/package.json' }),
      expect.objectContaining({ name: 'will-stone/tsdoc' }),
      expect.objectContaining({ name: 'will-stone/jest/base' }),
      expect.objectContaining({ name: 'will-stone/jest/globals' }),
      expect.objectContaining({ name: 'will-stone/jest/typescript' }),
      expect.objectContaining({ name: 'will-stone/react' }),
      expect.objectContaining({ name: 'will-stone/tailwind' }),
      expect.objectContaining({ name: 'will-stone/typescript' }),
      expect.objectContaining({ name: 'will-stone/vitest' }),
    ]),
  )
  expect(logSpy).toHaveBeenNthCalledWith(1, 'Auto-configured plugins:')
  expect(logSpy).toHaveBeenNthCalledWith(2, '- Typescript')
  expect(logSpy).toHaveBeenNthCalledWith(3, '- Jest')
  expect(logSpy).toHaveBeenNthCalledWith(4, '- React')
  expect(logSpy).toHaveBeenNthCalledWith(5, '- Tailwind')
  expect(logSpy).toHaveBeenNthCalledWith(6, '- Vitest')
  expect(logSpy).toHaveBeenCalledTimes(6)
})

test('should load multiple auto-configs', async () => {
  const logSpy = vi.spyOn(console, 'log').mockImplementation(() => null)
  vol.fromJSON({
    'package.json': JSON.stringify({
      dependencies: { react: '^9.0.0', vitest: '^9.0.0' },
    }),
  })

  await expect(config()).resolves.toStrictEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: 'will-stone/react' }),
      expect.objectContaining({ name: 'will-stone/vitest' }),
    ]),
  )
  expect(logSpy).toHaveBeenNthCalledWith(1, 'Auto-configured plugins:')
  expect(logSpy).toHaveBeenNthCalledWith(2, `- React`)
  expect(logSpy).toHaveBeenNthCalledWith(3, `- Vitest`)
  expect(logSpy).toHaveBeenCalledTimes(3)
})
