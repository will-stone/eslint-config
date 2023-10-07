import { existsSync } from 'node:fs'

import { globbySync } from 'globby'
import { loadJsonFileSync } from 'load-json-file'
import type { PackageJson } from 'type-fest'

export function checkEnvironment(): {
  isGitIgnore: boolean
  isNode: boolean
  isPrettier: boolean
  isTailwind: boolean
  testingFramework: 'jest' | null
} {
  const isGitIgnore = existsSync('.gitignore')
  let isNodeEngine = false
  let isPrettier = false
  let isTailwind = false
  let testingFramework = null

  // In a monorepo environment with one eslint instance at the root of the project,
  // we must traverse every child package.json to find out if certain dependencies
  // are included, so that we know which plugins and rules to include.
  const allPackageJsonPaths = globbySync([
    '**/package.json',
    // Could use the `gitIgnore` option but the negative pattern is about 8 times faster.
    // https://github.com/sindresorhus/globby/issues/50
    '!**/node_modules',
  ])

  for (const packageJsonPath of allPackageJsonPaths) {
    const packageJson = loadJsonFileSync(packageJsonPath) satisfies PackageJson

    if (
      !testingFramework &&
      Boolean(
        packageJson.dependencies?.jest || packageJson.devDependencies?.jest,
      )
    )
      testingFramework = 'jest' as const

    if (!isNodeEngine && Boolean(packageJson.engines?.node)) isNodeEngine = true

    if (
      !isPrettier &&
      Boolean(
        packageJson.dependencies?.prettier ||
          packageJson.devDependencies?.prettier,
      )
    )
      isPrettier = true

    if (
      !isTailwind &&
      Boolean(
        packageJson.dependencies?.tailwindcss ||
          packageJson.devDependencies?.tailwindcss,
      )
    )
      isTailwind = true
  }

  const isNode =
    isNodeEngine || existsSync('.nvmrc') || existsSync('.node-version')

  return {
    isGitIgnore,
    isNode,
    isPrettier,
    isTailwind,
    testingFramework,
  }
}
