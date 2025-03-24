import type { TSESLint } from '@typescript-eslint/utils'
import * as pluginImport from 'eslint-plugin-import-x'

// eslint-disable-next-line require-await
export async function imports(): Promise<TSESLint.FlatConfig.Config[]> {
  return [
    {
      name: 'will-stone/imports',
      plugins: {
        'import-x': pluginImport,
      },
      rules: {
        'import-x/consistent-type-specifier-style': [
          'warn',
          'prefer-top-level',
        ],
        'import-x/export': 'error',
        'import-x/exports-last': 'off',
        'import-x/group-exports': 'off',
        'import-x/newline-after-import': 'warn',
        'import-x/no-empty-named-blocks': 'warn',
        'import-x/no-rename-default': 'off',
        'import-x/prefer-default-export': 'off',

        // The rest of the rules, off until required
        'import-x/default': 'off',
        'import-x/dynamic-import-chunkname': 'off',
        'import-x/extensions': 'off',
        'import-x/first': 'off',
        'import-x/max-dependencies': 'off',
        'import-x/named': 'off',
        'import-x/namespace': 'off',
        'import-x/no-absolute-path': 'off',
        'import-x/no-amd': 'off',
        'import-x/no-anonymous-default-export': 'off',
        'import-x/no-commonjs': 'off',
        'import-x/no-cycle': 'off',
        'import-x/no-default-export': 'off',
        'import-x/no-deprecated': 'off',
        'import-x/no-duplicates': 'off',
        'import-x/no-dynamic-require': 'off',
        'import-x/no-extraneous-dependencies': 'off',
        'import-x/no-import-module-exports': 'off',
        'import-x/no-internal-modules': 'off',
        'import-x/no-mutable-exports': 'off',
        'import-x/no-named-as-default': 'off',
        'import-x/no-named-as-default-member': 'off',
        'import-x/no-named-default': 'off',
        'import-x/no-named-export': 'off',
        'import-x/no-namespace': 'off',
        'import-x/no-nodejs-modules': 'off',
        'import-x/no-relative-packages': 'off',
        'import-x/no-relative-parent-imports': 'off',
        'import-x/no-restricted-paths': 'off',
        'import-x/no-self-import': 'off',
        'import-x/no-unassigned-import': 'off',
        'import-x/no-unresolved': 'off',
        'import-x/no-unused-modules': 'off',
        'import-x/no-useless-path-segments': 'off',
        'import-x/no-webpack-loader-syntax': 'off',
        'import-x/order': [
          'warn',
          {
            alphabetize: {
              caseInsensitive: true,
              order: 'asc',
            },
            'newlines-between': 'always',
          },
        ],
        'import-x/unambiguous': 'off',
      },
    },
  ]
}
