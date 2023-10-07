import type { Linter } from 'eslint'
import pluginPrettier from 'eslint-plugin-prettier'

export function prettier(): Linter.FlatConfig[] {
  return [
    {
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        'prettier/prettier': 'warn',
      },
    },
  ]
}
