import type { Linter } from 'eslint'
// @ts-expect-error -- no types
import pluginJest from 'eslint-plugin-jest'
import globals from 'globals'

export function jest(): Linter.FlatConfig[] {
  return [
    {
      files: ['**/__mocks__/**/*', '**/*.{spec,test}.{js,cjs,mjs,jsx,ts,tsx}'],
      languageOptions: {
        globals: globals.jest,
      },
    },
    {
      files: ['**/*.{spec,test}.{js,cjs,mjs,jsx,ts,tsx}'],
      plugins: {
        jest: pluginJest,
      },
      rules: {
        // Consistent test function names
        // test
        // describe -> it
        'jest/consistent-test-it': [
          'error',
          { fn: 'test', withinDescribe: 'it' },
        ],
        // Enforce assertion to be made in a test body
        'jest/expect-expect': 'error',
        // Have as many expects as you like
        'jest/max-expects': 'off',
        'jest/max-nested-describe': 'off',
        // Consistent expect methods
        'jest/no-alias-methods': 'error',
        'jest/no-commented-out-tests': 'error',
        // Prevent calling expect conditionally
        'jest/no-conditional-expect': 'error',
        'jest/no-conditional-in-test': 'error',
        'jest/no-deprecated-functions': 'warn',
        'jest/no-disabled-tests': 'warn',
        // Avoid using a callback in asynchronous tests and hooks
        'jest/no-done-callback': 'error',
        // Do not allow multiple beforeEach, for example
        'jest/no-duplicate-hooks': 'error',
        // Disallow using exports in files containing tests
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': 'off',
        'jest/no-identical-title': 'error',
        // Conditional logic in tests is usually an indication that a test is attempting to cover too much
        'jest/no-if': 'error',
        // Disallow string interpolation inside snapshots
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jasmine-globals': 'warn',
        'jest/no-large-snapshots': 'off',
        // Disallow manually importing from __mocks__
        'jest/no-mocks-import': 'error',
        // No methods that need restricting
        'jest/no-restricted-jest-methods': 'off',
        'jest/no-restricted-matchers': 'off',
        // No standalone expect in a describe block
        'jest/no-standalone-expect': 'error',
        // Use .only and .skip over f and x
        'jest/no-test-prefixes': 'warn',
        // Tests shouldn't return anything
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'off',
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
        'jest/prefer-comparison-matcher': 'warn',
        'jest/prefer-each': 'error',
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
        'jest/prefer-equality-matcher': 'error',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-expect-resolves': 'warn',
        // Put lifecycle hooks in particular order
        'jest/prefer-hooks-in-order': 'error',
        // beforeEach, beforeAll, afterEach etc. should be at top of test block
        'jest/prefer-hooks-on-top': 'error',
        // Allow any case in test names
        'jest/prefer-lowercase-title': 'off',
        // When working with mocks of functions that return promises, Jest provides
        // some API sugar functions to reduce the amount of boilerplate you have to write.
        'jest/prefer-mock-promise-shorthand': 'warn',
        'jest/prefer-snapshot-hint': 'error',
        // By overwriting a property with `jest.fn()` you have to manually restore
        // the original implementation when cleaning up. When using jest.spyOn()
        // Jest keeps track of changes, and they can be restored.
        'jest/prefer-spy-on': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-be': 'warn',
        // expect(a.includes(b)).toBe(true) -> expect(a).toContain(b)
        'jest/prefer-to-contain': 'error',
        // expect(files.length).toBe(1) -> expect(files).toHaveLength(1)
        'jest/prefer-to-have-length': 'error',
        // When test cases are empty then it is better to mark them as test.todo
        // as it will be highlighted in the summary output
        'jest/prefer-todo': 'error',
        // Require setup and tear down code to be within lifecycle hooks
        'jest/require-hook': 'error',
        // Requiring a message ensures that the intended error is thrown
        'jest/require-to-throw-message': 'error',
        'jest/require-top-level-describe': 'off',
        'jest/unbound-method': 'off',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        // Titles are...
        // - not empty
        // - is a string
        // - not prefixed with their block name
        // - have no leading or trailing spaces
        'jest/valid-title': 'error',
      },
    },
    {
      files: ['**/*.{spec,test}.{ts,tsx}'],
      rules: {
        'jest/no-untyped-mock-factory': 'warn',
      },
    },
  ]
}
