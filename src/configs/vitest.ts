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
        // For now, I will turn on all rules and tweak them below.
        ...pluginVitest.configs.all.rules,
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
