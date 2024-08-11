/* eslint-disable no-console -- used to notify of enabled configs */

import type { Linter } from '@typescript-eslint/utils/ts-eslint'

import { astro } from './configs/astro.js'
import { base } from './configs/base.js'
import { ignores } from './configs/ignores.js'
import { imports } from './configs/imports.js'
import { jest } from './configs/jest.js'
import { node } from './configs/node.js'
import { react } from './configs/react.js'
import { tailwind } from './configs/tailwind.js'
import { typescript } from './configs/typescript.js'
import { unicorn } from './configs/unicorn.js'
import { vitest } from './configs/vitest.js'
import type { Options } from './types.js'
import { checkDepsExist } from './utils.js'

/**
 * Construct an array of ESLint flat config items.
 */
export function factory(options?: Options): Linter.ConfigType[] {
  const configs: Linter.ConfigType[][] = []

  configs.push(ignores(), base(), imports(), unicorn(), node())

  const packageExists = checkDepsExist([
    'typescript',
    'astro',
    'react',
    'tailwind',
    'jest',
    'vitest',
  ])

  const isAtLeastOnePackageExists = Object.values(packageExists).some(Boolean)

  if (isAtLeastOnePackageExists) {
    console.log('Auto configured plugins:')
  }

  if (packageExists.typescript) {
    console.log('  - TypeScript')
  }

  if (
    packageExists.typescript ||
    options?.typescript ||
    process.env.INSPECTOR
  ) {
    configs.push(typescript(options?.typescript))
  }

  if (packageExists.astro) {
    console.log('  - Astro')
  }

  if (packageExists.astro || options?.astro || process.env.INSPECTOR) {
    configs.push(astro())
  }

  if (packageExists.react) {
    console.log('  - React')
  }

  if (packageExists.react || options?.react || process.env.INSPECTOR) {
    configs.push(react())
  }

  if (packageExists.tailwind) {
    console.log('  - Tailwind')
  }

  if (packageExists.tailwind || options?.tailwind || process.env.INSPECTOR) {
    configs.push(tailwind())
  }

  if (packageExists.jest) {
    console.log('  - Tailwind')
  }

  if (packageExists.jest || options?.jest || process.env.INSPECTOR) {
    configs.push(jest())
  }

  if (packageExists.vitest) {
    console.log('  - Vitest')
  }

  if (packageExists.vitest || options?.vitest || process.env.INSPECTOR) {
    configs.push(vitest())
  }

  const merged = configs.flat()

  return merged
}
