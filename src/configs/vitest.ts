import { fixupPluginRules } from '@eslint/compat'
import type { Linter } from '@typescript-eslint/utils/ts-eslint'
import pluginVitest from 'eslint-plugin-vitest'

export function vitest(_options: unknown): Linter.ConfigType[] {
  return [
    {
      files: ['**/*.{spec,test}.{js,cjs,mjs,jsx,ts,tsx}'],
      name: 'will-stone/vitest',
      plugins: { vitest: fixupPluginRules(pluginVitest) },
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
        'vitest/no-focused-tests': 'warn',
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
        // These two could be dangerous as you may actually want to ensure that
        // something is exactly `false` or `true`, and not something that
        // equates to that if run through Boolean().
        'vitest/prefer-to-be-falsy': 'off',
        'vitest/prefer-to-be-truthy': 'off',
        'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
        // No need to nest everything in useless describe blocks:
        'vitest/require-top-level-describe': 'off',
        'vitest/valid-describe-callback': 'error',
        'vitest/valid-expect': 'error',
        'vitest/valid-title': 'warn',
      },
    },
  ]
}
