import type { Linter } from '@typescript-eslint/utils/ts-eslint'
// @ts-expect-error -- no types
import pluginTailwind from 'eslint-plugin-tailwindcss'

export function tailwind(): Linter.ConfigType[] {
  return [
    {
      files: ['**/*.{jsx,tsx,astro}'],
      name: 'will-stone/tailwind',
      plugins: { tailwindcss: pluginTailwind },
      rules: {
        'tailwindcss/classnames-order': 'warn',
        'tailwindcss/enforces-negative-arbitrary-values': 'warn',
        'tailwindcss/enforces-shorthand': 'warn',
        'tailwindcss/migration-from-tailwind-2': 'off',
        'tailwindcss/no-arbitrary-value': 'off',
        'tailwindcss/no-contradicting-classname': 'warn',
        'tailwindcss/no-custom-classname': 'error',
      },
    },
  ]
}
