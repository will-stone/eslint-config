import type { Linter } from 'eslint'
// @ts-expect-error -- no types
import pluginNode from 'eslint-plugin-n'
import globals from 'globals'

export function node(): Linter.FlatConfig[] {
  return [
    {
      languageOptions: {
        globals: globals.node,
      },
      plugins: {
        n: pluginNode,
      },
      rules: {
        // Enforces return statements in callbacks of array's methods
        'n/callback-return': 'error',
        // require() should be called only in the top level of a module to make it
        // easier to identify dependencies.
        'n/global-require': 'error',
        // This rule expects that when you're using the callback pattern in Node.js
        // you'll handle the error.
        'n/handle-callback-err': 'error',
        // Disallow require calls to be mixed with regular variable declarations.
        'n/no-mixed-requires': 'error',
        // ❌ var appHeader = new require('app-header')
        // ✅ var AppHeader = require('app-header')
        //    var appHeader = new AppHeader()
        'n/no-new-require': 'error',
        // Disallow string concatenation when using __dirname and __filename.
        // Use path.join() instead.
        'n/no-path-concat': 'error',
        // Allow env vars in code
        'n/no-process-env': 'off',
        // Handled by Unicorn
        'n/no-process-exit': 'off',
        // No modules are restricted
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
