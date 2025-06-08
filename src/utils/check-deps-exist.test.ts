import type * as Globby from 'globby'

import { fs, vol } from 'memfs'
import { beforeEach, expect, test, vi } from 'vitest'

import { checkDepsExist } from './check-deps-exist.js'

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
  // Load the package.json fixtures into the virtual fs.
  vol.fromJSON({
    'package.json': JSON.stringify({
      dependencies: { bar: '^4.2.1', moo: '^9.0.0', react: '~1.2.3' },
      peerDependencies: { not: '^6.0.0', pkg: '^5.5.0' },
    }),
    'this/is/a/nested/package.json': JSON.stringify({
      dependencies: { ipsum: '^0.2.2', lorem: '^9.9.9' },
      devDependencies: { bloggs: '^6.0.0', joe: '^5.5.0' },
    }),
  })
})

test('should find deps in package.json files', () => {
  const readFileSpy = vi.spyOn(fs, 'readFileSync')

  expect(checkDepsExist(['react', 'moo', 'lorem', 'joe'])).toStrictEqual({
    joe: true,
    lorem: true,
    moo: true,
    react: true,
  })
  expect(readFileSpy).toHaveBeenCalledTimes(2)
})

test('should not find deps not in package.json files', () => {
  expect(checkDepsExist(['absolute-rubbish', 'what'])).toStrictEqual({
    'absolute-rubbish': false,
    what: false,
  })
})

test('should not find deps only in peerDependencies', () => {
  expect(checkDepsExist(['not', 'pkg'])).toStrictEqual({
    not: false,
    pkg: false,
  })
})

test('should exit early if all deps found', () => {
  const readFileSpy = vi.spyOn(fs, 'readFileSync')

  expect(checkDepsExist(['bar'])).toStrictEqual({ bar: true })
  expect(readFileSpy).toHaveBeenCalledOnce()
})
