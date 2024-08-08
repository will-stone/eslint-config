import type { Linter } from 'eslint'

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
import type { Options } from './types'
import { checkEnvironment } from './utils'

/**
 * Construct an array of ESLint flat config items.
 */
export function factory(options?: Options): Linter.Config[] {
  const { isNode, isTailwind, testingFramework } = checkEnvironment()

  const configs: Linter.Config[][] = []

  configs.push(
    ignores(),
    base(),
    imports(),
    unicorn(),
    typescript(options),
    astro(),
    react(),
  )

  if (isNode) {
    configs.push(node())
  }

  if (isTailwind) {
    configs.push(tailwind())
  }

  if (testingFramework === 'jest') {
    configs.push(jest())
  }

  const merged = configs.flat()

  return merged
}
