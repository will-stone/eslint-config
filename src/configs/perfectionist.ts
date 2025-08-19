import type { TSESLint } from '@typescript-eslint/utils'

import pluginPerfectionist from 'eslint-plugin-perfectionist'

const sortOrder = [
  // Flux standard actions.
  {
    customGroups: {
      type: '^type$',
      payload: '^payload$',
      error: '^error$',
      meta: '^meta$',
    },
    groups: ['type', 'payload', 'error', 'meta'],
    useConfigurationIf: {
      allNamesMatchPattern: '^type|payload|meta|error$',
    },
  },
  // Fallback for everything else.
  {
    partitionByNewLine: true,
    type: 'natural',
  },
] as const

export function perfectionist(): TSESLint.FlatConfig.Config[] {
  return [
    {
      name: 'will-stone/perfectionist',
      plugins: {
        perfectionist: pluginPerfectionist,
      },
      rules: {
        'perfectionist/sort-array-includes': 'off',
        'perfectionist/sort-classes': 'off',
        'perfectionist/sort-decorators': 'off',
        'perfectionist/sort-enums': 'off',
        'perfectionist/sort-exports': 'off',
        'perfectionist/sort-heritage-clauses': 'off',
        'perfectionist/sort-imports': ['warn', { type: 'natural' }],
        'perfectionist/sort-interfaces': 'off',
        'perfectionist/sort-intersection-types': 'off',
        'perfectionist/sort-jsx-props': 'off',
        'perfectionist/sort-maps': 'off',
        'perfectionist/sort-modules': 'off',
        'perfectionist/sort-named-exports': 'off',
        'perfectionist/sort-named-imports': 'warn',
        'perfectionist/sort-object-types': ['warn', ...sortOrder],
        'perfectionist/sort-objects': ['warn', ...sortOrder],
        'perfectionist/sort-sets': 'off',
        'perfectionist/sort-switch-case': 'off',
        'perfectionist/sort-union-types': 'off',
        'perfectionist/sort-variable-declarations': 'off',
      },
    },
  ]
}
