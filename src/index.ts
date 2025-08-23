import type { TSESLint } from '@typescript-eslint/utils'
import type { Linter } from 'eslint'

import tseslint from 'typescript-eslint'

import type { ConfigContext, Options } from './model.js'

import { autoConfigs, defaultConfigs } from './configs/index.js'
import { checkDepsExist } from './utils/check-deps-exist.js'

const defaultOptions = {}

/**
 * The shared configuration factory.
 */
async function configImpl(
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

  const activatedAutoConfigs = await Promise.all(
    enabledAutoConfigs.map((autoConfig) => {
      // eslint-disable-next-line no-console
      console.log(`- ${autoConfig.name}`)
      return autoConfig.config(configContext)
    }),
  )

  configs.push(...activatedAutoConfigs)

  const merged = configs.flat()

  return merged
}

/**
 * An ESLint Flat Config factory function that auto-configures to your
 * environment.
 *
 * @param options - Tweak the factory's behaviour.
 * @param extraConfigs - Each extra argument is an optional Flat Config.
 * @returns An array of ESLint Flat Configs.
 */
const config = async (
  options?: Options,
  ...extraConfigs: (TSESLint.FlatConfig.Config | Linter.Config)[]
): Promise<(TSESLint.FlatConfig.Config | Linter.Config)[]> =>
  tseslint.config(await configImpl(options), ...extraConfigs)

export default config
