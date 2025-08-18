import type { TSESLint } from '@typescript-eslint/utils'

import pluginPerfectionist from 'eslint-plugin-perfectionist'

export function perfectionist(): TSESLint.FlatConfig.Config[] {
  return [
    {
      name: 'will-stone/perfectionist',
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        'perfectionist/sort-imports': 'warn',
        'perfectionist/sort-named-imports': 'warn',
        'perfectionist/sort-object-types': [
          'warn',
          {
            partitionByNewLine: true,
            type: 'natural',
          },
        ],
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
