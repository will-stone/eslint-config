import type { Linter } from 'eslint'
// @ts-expect-error -- no types
import pluginSwitchCase from 'eslint-plugin-switch-case'

export function switchCase(): Linter.FlatConfig[] {
  return [
    {
      plugins: {
        'switch-case': pluginSwitchCase,
      },
      rules: {
        // Switches must have new lines between case groups
        'switch-case/newline-between-switch-case': [
          'warn',
          'always',
          { fallthrough: 'never' },
        ],
        // It can be useful for switch cases to have their own scope.
        'switch-case/no-case-curly': 'off',
      },
    },
  ]
}
