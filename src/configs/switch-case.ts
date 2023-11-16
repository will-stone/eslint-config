import type { ESLint, Linter } from 'eslint'
// @ts-expect-error -- no types
import pluginSwitchCase from 'eslint-plugin-switch-case'

export function switchCase(): Linter.FlatConfig[] {
  return [
    {
      plugins: {
        'switch-case': pluginSwitchCase as ESLint.Plugin,
      },
      rules: {
        'switch-case/newline-between-switch-case': [
          'warn',
          'always',
          { fallthrough: 'never' },
        ],
        'switch-case/no-case-curly': 'off',
      },
    },
  ]
}
