import type { TSESLint } from '@typescript-eslint/utils'

import pluginPackageJson from 'eslint-plugin-package-json'

export function packageJson(): TSESLint.FlatConfig.Config[] {
  return [
    {
      ...pluginPackageJson.configs.recommended,
      name: 'will-stone/package.json',
      rules: {
        'package-json/no-empty-fields': 'error',
        'package-json/no-redundant-files': 'error',
        'package-json/order-properties': 'warn',
        'package-json/repository-shorthand': 'warn',
        'package-json/require-author': 'error',
        'package-json/require-bugs': ['error', { ignorePrivate: true }],
        'package-json/require-bundleDependencies': 'off',
        'package-json/require-dependencies': 'off',
        'package-json/require-description': 'error',
        'package-json/require-devDependencies': 'off',
        'package-json/require-engines': 'error',
        'package-json/require-files': ['error', { ignorePrivate: true }],
        'package-json/require-keywords': 'error',
        'package-json/require-name': 'error',
        'package-json/require-optionalDependencies': 'off',
        'package-json/require-peerDependencies': 'off',
        'package-json/require-type': 'error',
        // This rule is a little too strict as it's better to use "exports".
        'package-json/require-types': 'off',
        'package-json/require-version': 'error',
        'package-json/restrict-dependency-ranges': 'error',
        'package-json/sort-collections': 'warn',
        'package-json/unique-dependencies': 'error',
        'package-json/valid-author': 'error',
        'package-json/valid-bin': 'error',
        'package-json/valid-bundleDependencies': 'error',
        'package-json/valid-config': 'error',
        'package-json/valid-cpu': 'error',
        'package-json/valid-dependencies': 'error',
        'package-json/valid-description': 'error',
        'package-json/valid-devDependencies': 'error',
        'package-json/valid-exports': 'error',
        'package-json/valid-license': 'error',
        'package-json/valid-name': 'error',
        'package-json/valid-optionalDependencies': 'error',
        'package-json/valid-package-definition': 'error',
        'package-json/valid-peerDependencies': 'error',
        'package-json/valid-repository-directory': 'error',
        'package-json/valid-scripts': 'error',
        'package-json/valid-type': 'error',
        'package-json/valid-version': 'error',
      },
    },
  ]
}
