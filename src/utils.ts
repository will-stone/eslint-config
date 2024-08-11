import { readFileSync } from 'node:fs'

import { globbySync } from 'globby'

export function checkDepsExist<T extends string>(
  depNames: T[],
): Record<T, boolean> {
  const depCount = depNames.length

  const allPackageJsonPaths = globbySync([
    '**/package.json',
    '!**/node_modules/**',
  ])

  const hasPackageMap: Record<string, boolean> = {}
  let foundCount = 0

  for (const packageJsonPath of allPackageJsonPaths) {
    const buffer = readFileSync(packageJsonPath)
    const data = new TextDecoder().decode(buffer)
    const package_ = JSON.parse(data)

    for (const depName of depNames) {
      if (
        package_ &&
        (package_?.dependencies[depName] || package_?.devDependencies[depName])
      ) {
        hasPackageMap[depName] = true
        foundCount = foundCount + 1
        if (foundCount === depCount) {
          break
        }
      }
    }

    if (foundCount === depCount) {
      break
    }
  }

  return hasPackageMap
}
