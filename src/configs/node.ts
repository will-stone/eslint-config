import type { ESLint, Linter } from 'eslint'
// @ts-expect-error -- no types
import pluginNode from 'eslint-plugin-n'
import globals from 'globals'

export function node(): Linter.FlatConfig[] {
  return [
    {
      languageOptions: {
        globals: globals.node,
      },
      name: 'will-stone/node',
      plugins: {
        n: pluginNode as ESLint.Plugin,
      },
      rules: {
        'n/callback-return': 'error',
        'n/global-require': 'error',
        'n/handle-callback-err': 'error',
        'n/no-mixed-requires': 'error',
        'n/no-new-require': 'error',
        'n/no-path-concat': 'error',
        'n/no-process-env': 'off',
        // Handled by Unicorn
        'n/no-process-exit': 'off',
        'n/no-restricted-require': 'off',
        // I like synchronous functions
        'n/no-sync': 'off',
        // Not sure I need this...?
        // TODO check others' configs to see how they use this.
        'n/shebang': 'off',

        // Turn these off until I work out if I need them
        'n/exports-style': 'off',
        'n/file-extension-in-import': 'off',
        'n/no-callback-literal': 'off',
        'n/no-deprecated-api': 'off',
        'n/no-exports-assign': 'off',
        'n/no-extraneous-import': 'off',
        'n/no-extraneous-require': 'off',
        'n/no-missing-import': 'off',
        'n/no-missing-require': 'off',
        'n/no-restricted-import': 'off',
        'n/no-unpublished-bin': 'off',
        'n/no-unpublished-import': 'off',
        'n/no-unpublished-require': 'off',
        'n/no-unsupported-features/es-builtins': 'off',
        'n/no-unsupported-features/es-syntax': 'off',
        'n/no-unsupported-features/node-builtins': 'off',
        'n/prefer-global/buffer': 'off',
        'n/prefer-global/console': 'off',
        'n/prefer-global/process': 'off',
        'n/prefer-global/text-decoder': 'off',
        'n/prefer-global/text-encoder': 'off',
        'n/prefer-global/url': 'off',
        'n/prefer-global/url-search-params': 'off',
        'n/prefer-promises/dns': 'off',
        'n/prefer-promises/fs': 'off',
        'n/process-exit-as-throw': 'off',
      },
    },
  ]
}
