import { readFileSync } from 'node:fs'

import { globbySync } from 'globby'
import type { PackageJson } from 'type-fest'

/**
 * Given an array of dependency names, this will scan all package.json files in
 * the project, and return whether each exists in either a dependencies or
 * devDependencies field.
 */
export function checkDepsExist<T extends string>(
  depNames: readonly T[],
): Record<T, boolean> {
  const depCount = depNames.length

  const allPackageJsonPaths = globbySync([
    '**/package.json',
    '!**/node_modules/**',
  ])

  const hasPackageMap: Record<string, boolean> = {}

  // Begin by assuming all packages do not exist.
  for (const depName of depNames) {
    hasPackageMap[depName] = false
  }

  let foundCount = 0

  for (const packageJsonPath of allPackageJsonPaths) {
    const buffer = readFileSync(packageJsonPath)
    const data = new TextDecoder().decode(buffer)
    const package_ = JSON.parse(data) as PackageJson

    for (const depName of depNames) {
      if (
        package_ &&
        (package_.dependencies?.[depName] ||
          package_.devDependencies?.[depName])
      ) {
        hasPackageMap[depName] = true
        foundCount = foundCount + 1
        // Stop checking if all deps found.
        if (foundCount === depCount) {
          break
        }
      }
    }

    // Stop checking if all deps found.
    if (foundCount === depCount) {
      break
    }
  }

  return hasPackageMap
}
