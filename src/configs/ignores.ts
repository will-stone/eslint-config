import type { Linter } from '@typescript-eslint/utils/ts-eslint'
import gitignore from 'eslint-config-flat-gitignore'

import { GLOB_EXCLUDE } from '../globs.js'

export function ignores(): Linter.ConfigType[] {
  return [
    {
      ignores: GLOB_EXCLUDE,
      name: 'will-stone/ignores',
    },
    {
      name: 'will-stone/git-ignore',
      ...gitignore({
        // Prevent throw if gitignore not found.
        strict: false,
      }),
    },
  ]
}
