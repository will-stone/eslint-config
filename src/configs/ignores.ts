import type { Linter } from 'eslint'
import gitignore from 'eslint-config-flat-gitignore'

import { GLOB_EXCLUDE } from '../globs'

export function ignores(): Linter.Config[] {
  return [
    {
      ignores: GLOB_EXCLUDE,
      name: 'will-stone/ignores',
    },
    {
      name: 'will-stone/git-ignores',
      ...gitignore({
        // Prevent throw if gitignore not found.
        strict: false,
      }),
    },
  ]
}
