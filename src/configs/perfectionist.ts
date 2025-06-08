import type { TSESLint } from '@typescript-eslint/utils'

import pluginPerfectionist from 'eslint-plugin-perfectionist'

// eslint-disable-next-line require-await
export async function perfectionist(): Promise<TSESLint.FlatConfig.Config[]> {
  return [
    {
      name: 'will-stone/perfectionist',
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        'perfectionist/sort-imports': 'warn',
        'perfectionist/sort-named-imports': 'warn',
        'perfectionist/sort-objects': [
          'warn',
          {
            partitionByNewLine: true,
            type: 'natural',
          },
        ],
      },
    },
  ]
}
