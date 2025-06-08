import type { TSESLint } from '@typescript-eslint/utils'

import gitignore from 'eslint-config-flat-gitignore'

import { GLOB_EXCLUDE } from '../globs.js'

// eslint-disable-next-line require-await
export async function ignores(): Promise<TSESLint.FlatConfig.Config[]> {
  return [
    {
      ignores: GLOB_EXCLUDE,
      name: 'will-stone/ignores',
    },
    {
      ...gitignore({
        // Prevent throw if gitignore not found.
        strict: false,
      }),
      name: 'will-stone/git-ignore',
    },
  ]
}
