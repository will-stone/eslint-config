import type { TSESLint } from '@typescript-eslint/utils'

import type { ConfigContext, Options } from './model.js'

import { autoConfigs, defaultConfigs } from './configs/index.js'
import { checkDepsExist } from './utils/check-deps-exist.js'

const defaultOptions = {}

/**
 * Construct an array of ESLint flat config items.
 */
async function config(
  options: Options = defaultOptions,
): Promise<TSESLint.FlatConfig.Config[]> {
  const configs: TSESLint.FlatConfig.Config[][] = []

  const autoConfigDeps = Object.values(autoConfigs).map(({ dep }) => dep)
  const existingAutoConfigDeps = checkDepsExist(autoConfigDeps)

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

  const configContext: ConfigContext = {
    options,
  }

  for (const defaultConfig of defaultConfigs) {
    configs.push(defaultConfig.config(configContext))
  }

  await Promise.all(
    enabledAutoConfigs.map(async (autoConfig) => {
      // eslint-disable-next-line no-console
      console.log(`- ${autoConfig.name}`)
      configs.push(await autoConfig.config(configContext))
    }),
  )

  const merged = configs.flat()

  return merged
}

export default config
