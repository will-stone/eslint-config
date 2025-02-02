import type { TSESLint } from '@typescript-eslint/utils'

import { autoConfigs, defaultConfigs } from './configs/index.js'
import type { Options } from './model.js'
import { checkDepsExist } from './utils/check-deps-exist.js'

/**
 * Construct an array of ESLint flat config items.
 */
async function config(
  options?: Options,
): Promise<TSESLint.FlatConfig.Config[]> {
  const configs: TSESLint.FlatConfig.Config[][] = []

  const autoConfigDeps = Object.values(autoConfigs).map(({ dep }) => dep)
  const existingAutoConfigDeps = checkDepsExist(autoConfigDeps)

  for await (const defaultConfig of defaultConfigs) {
    configs.push(await defaultConfig.config())
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

  for await (const autoConfig of enabledAutoConfigs) {
    // eslint-disable-next-line no-console
    console.log(`- ${autoConfig.name}`)
    const autoConfigOptions = options?.[autoConfig.optionName]
    configs.push(await autoConfig.config(autoConfigOptions))
  }

  const merged = configs.flat()

  return merged
}

export default config
