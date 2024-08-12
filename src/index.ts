import type { Linter as TSLinter } from '@typescript-eslint/utils/ts-eslint'

import { autoConfigs, defaultConfigs } from './configs/index.js'
import type { Options } from './model.js'
import { checkDepsExist } from './utils/check-deps-exist.js'

/**
 * Construct an array of ESLint flat config items.
 */
function config(options?: Options): TSLinter.ConfigType[] {
  const configs: TSLinter.ConfigType[][] = []

  const autoConfigDeps = Object.values(autoConfigs).map(({ dep }) => dep)
  const existingAutoConfigDeps = checkDepsExist(autoConfigDeps)

  for (const defaultConfig of defaultConfigs) {
    configs.push(defaultConfig.config())
  }

  const enabledAutoConfigs = autoConfigs.filter(({ dep, optionName }) => {
    return (
      // Is forced on.
      options?.[optionName] ||
      // Is present and not forced off.
      (existingAutoConfigDeps[dep] && options?.[optionName] !== false)
    )
  })

  if (enabledAutoConfigs.length > 0) {
    // eslint-disable-next-line no-console
    console.log('Auto-configured plugins:')
  }

  for (const autoConfig of enabledAutoConfigs) {
    // eslint-disable-next-line no-console
    console.log(`- ${autoConfig.name}`)
    const autoConfigOptions = options?.[autoConfig.optionName]
    configs.push(autoConfig.config(autoConfigOptions))
  }

  const merged = configs.flat()

  return merged
}

export default config
