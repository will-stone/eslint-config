import type { Linter } from 'eslint'
// @ts-expect-error -- no types
import * as pluginImport from 'eslint-plugin-i'
// @ts-expect-error -- no types
import pluginSimpleImport from 'eslint-plugin-simple-import-sort'

export function imports(): Linter.FlatConfig[] {
  return [
    {
      plugins: {
        'import': pluginImport,
        'simple-import-sort': pluginSimpleImport,
      },
      rules: {
        // Prefer inline types
        'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
        // Reports funny business with exports,
        // like repeated exports of names or defaults
        'import/export': 'error',
        // Stating exports at the end of the file can make refactoring a two-step process
        'import/exports-last': 'off',
        // Same as import/exports-last
        'import/group-exports': 'off',
        // There must be a line's space between imports and code
        'import/newline-after-import': 'warn',
        // ❌ import {} from 'mod'
        'import/no-empty-named-blocks': 'warn',
        // When there is only a single export from a module,
        // this _would_ prefer using default export over named export, but it
        // causes too many issues and it soon becomes tiresome with some tools
        // requiring defaults and others forbidding them or requiring a certain
        // named export.
        'import/prefer-default-export': 'off',
        // Sort all the imports!
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
