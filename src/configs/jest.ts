import type { Linter } from 'eslint'
// @ts-expect-error -- no types
import pluginJest from 'eslint-plugin-jest'
import globals from 'globals'

export function jest(): Linter.Config[] {
  return [
    {
      files: ['**/__mocks__/**/*', '**/*.{spec,test}.{js,cjs,mjs,jsx,ts,tsx}'],
      languageOptions: {
        globals: globals.jest,
      },
      name: 'will-stone/jest/globals',
    },
    {
      files: ['**/*.{spec,test}.{js,cjs,mjs,jsx,ts,tsx}'],
      name: 'will-stone/jest/base',
      plugins: {
        jest: pluginJest,
      },
      rules: {
        'jest/consistent-test-it': [
          'error',
          { fn: 'test', withinDescribe: 'it' },
        ],
        'jest/expect-expect': 'error',
        'jest/max-expects': 'off',
        'jest/max-nested-describe': 'off',
        'jest/no-alias-methods': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/no-conditional-expect': 'error',
        'jest/no-conditional-in-test': 'error',
        'jest/no-deprecated-functions': 'warn',
        'jest/no-disabled-tests': 'warn',
        'jest/no-done-callback': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': 'off',
        'jest/no-identical-title': 'error',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jasmine-globals': 'warn',
        'jest/no-large-snapshots': 'off',
        'jest/no-mocks-import': 'error',
        'jest/no-restricted-jest-methods': 'off',
        'jest/no-restricted-matchers': 'off',
        'jest/no-standalone-expect': 'error',
        'jest/no-test-prefixes': 'warn',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'off',
        'jest/prefer-comparison-matcher': 'warn',
        'jest/prefer-each': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-expect-resolves': 'warn',
        'jest/prefer-hooks-in-order': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-lowercase-title': 'off',
        'jest/prefer-mock-promise-shorthand': 'warn',
        'jest/prefer-snapshot-hint': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-be': 'warn',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-hook': 'error',
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'off',
        'jest/unbound-method': 'off',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-title': 'error',
      },
    },
    {
      files: ['**/*.{spec,test}.{ts,tsx}'],
      name: 'will-stone/jest/typescript',
      rules: {
        'jest/no-untyped-mock-factory': 'warn',
      },
    },
  ]
}
