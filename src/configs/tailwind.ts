import type { TSESLint } from '@typescript-eslint/utils'

import { GLOB_TAILWIND } from '../globs.js'
import type { Options } from '../model.js'
import { interopDefault } from '../utils/interop-default.js'

export async function tailwind(
  rawOptions?: Options['tailwind'],
): Promise<TSESLint.FlatConfig.Config[]> {
  const options = !rawOptions || rawOptions === true ? {} : rawOptions

  const plugin = await interopDefault(
    // @ts-expect-error -- no types
    import('eslint-plugin-tailwindcss'),
  )

  return [
    {
      files: [GLOB_TAILWIND],
      name: 'will-stone/tailwind',
      plugins: { tailwindcss: plugin },
      rules: {
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/enforces-negative-arbitrary-values': 'warn',
        'tailwindcss/enforces-shorthand': 'warn',
        'tailwindcss/migration-from-tailwind-2': 'off',
        'tailwindcss/no-arbitrary-value': 'off',
        'tailwindcss/no-contradicting-classname': 'warn',
        'tailwindcss/no-custom-classname': 'error',
        'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
      },
      settings: {
        tailwindcss: {
          config: options.config,
          /**
           * Default to no custom CSS files, due to performance issue with the
           * plugin can be somewhat mitigated by setting this config to `[]` so
           * that cssFiles do not need to be found automatically.
           * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/276
           * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/174
           */
          cssFiles: options.cssFiles || [],
        },
      },
    },
  ]
}
