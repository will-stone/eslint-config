import type { TSESLint } from '@typescript-eslint/utils'

import { GLOB_TESTS } from '../globs.js'
import { interopDefault } from '../utils/interop-default.js'

export async function vitest(
  _options: unknown,
): Promise<TSESLint.FlatConfig.Config[]> {
  const pluginVitest = await interopDefault(import('@vitest/eslint-plugin'))

  return [
    {
      files: GLOB_TESTS,
      name: 'will-stone/vitest',
      plugins: { vitest: pluginVitest },
      rules: {
        'vitest/consistent-test-filename': 'warn',
        'vitest/consistent-test-it': 'warn',
        'vitest/max-nested-describe': 'warn',
        'vitest/no-alias-methods': 'warn',
        'vitest/no-conditional-expect': 'warn',
        'vitest/no-conditional-in-test': 'warn',
        'vitest/no-conditional-tests': 'warn',
        'vitest/no-disabled-tests': 'warn',
        'vitest/no-duplicate-hooks': 'warn',
        'vitest/no-focused-tests': ['warn', { fixable: false }],
        'vitest/no-interpolation-in-snapshots': 'warn',
        'vitest/no-large-snapshots': 'warn',
        'vitest/no-mocks-import': 'warn',
        'vitest/no-restricted-matchers': 'warn',
        'vitest/no-restricted-vi-methods': 'warn',
        'vitest/no-standalone-expect': 'warn',
        'vitest/no-test-prefixes': 'warn',
        'vitest/no-test-return-statement': 'warn',
        'vitest/prefer-called-with': 'warn',
        'vitest/prefer-comparison-matcher': 'warn',
        'vitest/prefer-describe-function-title': 'warn',
        'vitest/prefer-each': 'warn',
        'vitest/prefer-equality-matcher': 'warn',
        'vitest/prefer-expect-resolves': 'warn',
        'vitest/prefer-hooks-in-order': 'warn',
        'vitest/prefer-hooks-on-top': 'warn',
        'vitest/prefer-lowercase-title': 'warn',
        'vitest/prefer-mock-promise-shorthand': 'warn',
        'vitest/prefer-snapshot-hint': 'warn',
        'vitest/prefer-spy-on': 'warn',
        'vitest/prefer-strict-equal': 'warn',
        'vitest/prefer-to-be': 'warn',
        'vitest/prefer-to-be-object': 'warn',
        'vitest/prefer-to-contain': 'warn',
        'vitest/prefer-to-have-length': 'warn',
        'vitest/prefer-todo': 'warn',
        'vitest/require-hook': 'warn',
        'vitest/require-to-throw-message': 'warn',

        'vitest/expect-expect': 'error',
        // Expect as much as you like. Is there any benefit to limiting this?
        'vitest/max-expects': 'off',
        'vitest/no-commented-out-tests': 'error',
        // The lifecycle hooks, like `beforeEach`, can be useful. I could move
        // to setup and teardown functions, but not sure yet.
        'vitest/no-hooks': 'off',
        'vitest/no-identical-title': 'warn',
        'vitest/no-import-node-test': 'warn',
        // Every test must have an expect, this is covered by expect-expect rule.
        'vitest/prefer-expect-assertions': 'off',
        'vitest/prefer-strict-boolean-matchers': 'warn',
        // These two could be dangerous as you may actually want to ensure that
        // something is exactly `false` or `true`, and not something that
        // equates to that if run through Boolean().
        'vitest/prefer-to-be-falsy': 'off',
        'vitest/prefer-to-be-truthy': 'off',
        'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
        'vitest/require-mock-type-parameters': 'warn',
        // No need to nest everything in useless describe blocks:
        'vitest/require-top-level-describe': 'off',
        'vitest/valid-describe-callback': 'error',
        'vitest/valid-expect': 'error',
        'vitest/valid-expect-in-promise': 'error',
        'vitest/valid-title': 'warn',

        'vitest/prefer-vi-mocked': 'warn',

        'vitest/padding-around-after-all-blocks': 'warn',
        'vitest/padding-around-after-each-blocks': 'warn',
        'vitest/padding-around-all': 'warn',
        'vitest/padding-around-before-all-blocks': 'warn',
        'vitest/padding-around-before-each-blocks': 'warn',
        'vitest/padding-around-describe-blocks': 'warn',
        'vitest/padding-around-expect-groups': 'warn',
        'vitest/padding-around-test-blocks': 'warn',
      },
    },
  ]
}
