import type { Linter } from 'eslint'
import gitignore from 'eslint-config-flat-gitignore'

import { astro } from './configs/astro'
import { base } from './configs/base'
import { ignores } from './configs/ignores'
import { imports } from './configs/imports'
import { jest } from './configs/jest'
import { node } from './configs/node'
import { prettier } from './configs/prettier'
import { react } from './configs/react'
import { switchCase } from './configs/switch-case'
import { typescript } from './configs/typescript'
import { unicorn } from './configs/unicorn'
import type { Options } from './types'
import { checkEnvironment } from './utils'

/**
 * Construct an array of ESLint flat config items.
 */
export function factory(options?: Options): Linter.FlatConfig[] {
  const { isGitIgnore, isNode, isPrettier, isTailwind, testingFramework } =
    checkEnvironment()

  const configs: Linter.FlatConfig[][] = []

  if (isGitIgnore) {
    configs.push([gitignore()])
  }

  configs.push(
    ignores(),
    base(),
    imports(),
    switchCase(),
    unicorn(),
    typescript(options),
    astro(),
    react(),
  )

  if (isNode) {
    configs.push(node())
  }

  if (isTailwind) {
    configs.push(node())
  }

  if (testingFramework === 'jest') {
    configs.push(jest())
  }

  if (isPrettier) {
    configs.push(prettier())
  }

  const merged = configs.flat()

  return merged
}
