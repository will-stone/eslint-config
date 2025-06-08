import type { TSESLint } from '@typescript-eslint/utils'

import stylistic from '@stylistic/eslint-plugin'

// eslint-disable-next-line require-await
export async function style(): Promise<TSESLint.FlatConfig.Config[]> {
  return [
    {
      name: 'will-stone/style',
      plugins: {
        '@stylistic': stylistic,
      },
      rules: {
        '@stylistic/padding-line-between-statements': [
          'warn',
          { blankLine: 'always', next: '*', prev: 'import' },
          { blankLine: 'any', next: 'import', prev: 'import' },
        ],
      },
    },
  ]
}
