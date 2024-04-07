import type { ESLint, Linter } from 'eslint'
// @ts-expect-error -- no types
import pluginTailwind from 'eslint-plugin-tailwindcss'

export function tailwind(): Linter.FlatConfig[] {
  return [
    {
      files: ['**/*.{jsx,tsx,astro}'],
      name: 'will-stone/tailwind',
      plugins: { tailwindcss: pluginTailwind as ESLint.Plugin },
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
