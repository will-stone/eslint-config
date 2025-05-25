import type { TSESLint } from '@typescript-eslint/utils'
import pluginPackageJson from 'eslint-plugin-package-json'

// eslint-disable-next-line require-await
export async function packageJson(): Promise<TSESLint.FlatConfig.Config[]> {
  return [
    {
      ...pluginPackageJson.configs.recommended,
      rules: {
        'package-json/no-empty-fields': 'error',
        'package-json/no-redundant-files': 'error',
        'package-json/order-properties': 'warn',
        'package-json/repository-shorthand': 'warn',
        'package-json/require-author': 'error',
        'package-json/require-description': 'error',
        'package-json/require-engines': 'error',
        'package-json/require-files': 'off',
        'package-json/require-keywords': 'error',
        'package-json/require-name': 'error',
        // This rule is a little too strict as it's better to use "exports".
        'package-json/require-types': 'off',
        'package-json/require-version': 'error',
        'package-json/restrict-dependency-ranges': 'error',
        'package-json/sort-collections': 'warn',
        'package-json/unique-dependencies': 'error',
        'package-json/valid-local-dependency': 'error',
        'package-json/valid-name': 'error',
        'package-json/valid-package-definition': 'error',
        'package-json/valid-repository-directory': 'error',
        'package-json/valid-version': 'error',
      },
    },
  ]
}
