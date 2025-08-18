import type { TSESLint } from '@typescript-eslint/utils'

import type { Options } from './model.js'

import { autoConfigs, defaultConfigs } from './configs/index.js'
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

  await Promise.all(
    enabledAutoConfigs.map(async (autoConfig) => {
      // eslint-disable-next-line no-console
      console.log(`- ${autoConfig.name}`)
      configs.push(await autoConfig.config(options?.[autoConfig.optionName]))
    }),
  )

  const merged = configs.flat()

  return merged
}

export default config
