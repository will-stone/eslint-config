import type { ESLint, Linter } from 'eslint'
// @ts-expect-error -- no types
import * as pluginImport from 'eslint-plugin-i'
// @ts-expect-error -- no types
import pluginSimpleImport from 'eslint-plugin-simple-import-sort'

export function imports(): Linter.FlatConfig[] {
  return [
    {
      plugins: {
        'import': pluginImport as ESLint.Plugin,
        'simple-import-sort': pluginSimpleImport as ESLint.Plugin,
      },
      rules: {
        'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
        'import/export': 'error',
        'import/exports-last': 'off',
        'import/group-exports': 'off',
        'import/newline-after-import': 'warn',
        'import/no-empty-named-blocks': 'warn',
        'import/prefer-default-export': 'off',
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': 'warn',

        // The rest of the rules, off until required
        'import/default': 'off',
        'import/dynamic-import-chunkname': 'off',
        'import/extensions': 'off',
        'import/first': 'off',
        'import/max-dependencies': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-absolute-path': 'off',
        'import/no-amd': 'off',
        'import/no-anonymous-default-export': 'off',
        'import/no-commonjs': 'off',
        'import/no-cycle': 'off',
        'import/no-default-export': 'off',
        'import/no-deprecated': 'off',
        'import/no-duplicates': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-import-module-exports': 'off',
        'import/no-internal-modules': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-default': 'off',
        'import/no-named-export': 'off',
        'import/no-namespace': 'off',
        'import/no-nodejs-modules': 'off',
        'import/no-relative-packages': 'off',
        'import/no-relative-parent-imports': 'off',
        'import/no-restricted-paths': 'off',
        'import/no-self-import': 'off',
        'import/no-unassigned-import': 'off',
        'import/no-unresolved': 'off',
        'import/no-unused-modules': 'off',
        'import/no-useless-path-segments': 'off',
        'import/no-webpack-loader-syntax': 'off',
        'import/order': 'off',
        'import/unambiguous': 'off',
      },
    },
  ]
}
