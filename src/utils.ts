import { existsSync, readFileSync } from 'node:fs'

import { globSync } from 'glob'
import type { PackageJson } from 'type-fest'

export function checkEnvironment(): {
  isGitIgnore: boolean
  isNode: boolean
  isTailwind: boolean
  testingFramework: 'jest' | null
} {
  const isGitIgnore = existsSync('.gitignore')
  let isNodeEngine = false
  let isTailwind = false
  let testingFramework = null

  // In a monorepo environment with one eslint instance at the root of the project,
  // we must traverse every child package.json to find out if certain dependencies
  // are included, so that we know which plugins and rules to include.
  const allPackageJsonPaths = globSync('**/package.json', {
    ignore: '**/node_modules/**',
  })

  for (const packageJsonPath of allPackageJsonPaths) {
    const buffer = readFileSync(packageJsonPath)
    const data = new TextDecoder().decode(buffer)
    const packageJson = JSON.parse(data) as PackageJson

    if (
      !testingFramework &&
      Boolean(
        packageJson.dependencies?.jest || packageJson.devDependencies?.jest,
      )
    ) {
      testingFramework = 'jest' as const
    }

    if (!isNodeEngine && Boolean(packageJson.engines?.node)) {
      isNodeEngine = true
    }

    if (
      !isTailwind &&
      Boolean(
        packageJson.dependencies?.tailwindcss ||
          packageJson.devDependencies?.tailwindcss,
      )
    ) {
      isTailwind = true
    }
  }

  const isNode =
    isNodeEngine || existsSync('.nvmrc') || existsSync('.node-version')

  return {
    isGitIgnore,
    isNode,
    isTailwind,
    testingFramework,
  }
}
