import type { Linter } from '@typescript-eslint/utils/ts-eslint'

import { astro } from './configs/astro'
import { base } from './configs/base'
import { ignores } from './configs/ignores'
import { imports } from './configs/imports'
import { jest } from './configs/jest'
import { node } from './configs/node'
import { react } from './configs/react'
import { tailwind } from './configs/tailwind'
import { typescript } from './configs/typescript'
import { unicorn } from './configs/unicorn'
import { vitest } from './configs/vitest'
import type { Options } from './types'

/**
 * Construct an array of ESLint flat config items.
 */
export function factory(options?: Options): Linter.ConfigType[] {
  const configs: Linter.ConfigType[][] = []

  configs.push(
    ignores(),
    base(),
    imports(),
    unicorn(),
    typescript(options),
    astro(),
    react(),
    node(),
    tailwind(),
  )

  if (options?.testingFramework === 'jest') {
    configs.push(jest())
  } else if (options?.testingFramework === 'vitest') {
    configs.push(vitest())
  }

  const merged = configs.flat()

  return merged
}
