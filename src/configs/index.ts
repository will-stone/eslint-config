import { astro } from './astro.js'
import { base } from './base.js'
import { ignores } from './ignores.js'
import { imports } from './imports.js'
import { jest } from './jest.js'
import { node } from './node.js'
import { packageJson } from './package-json.js'
import { react } from './react.js'
import { tailwind } from './tailwind.js'
import { tsdoc } from './tsdoc.js'
import { typescript } from './typescript.js'
import { unicorn } from './unicorn.js'
import { vitest } from './vitest.js'

export const defaultConfigs = [
  { config: ignores, name: 'Ignores' },
  { config: base, name: 'Base' },
  { config: imports, name: 'Imports' },
  { config: unicorn, name: 'Unicorn' },
  { config: node, name: 'Node' },
  { config: packageJson, name: 'package.json' },
  { config: tsdoc, name: 'TSDoc' },
] as const

export const autoConfigs = [
  {
    config: typescript,
    dep: 'typescript',
    name: 'Typescript',
    optionName: 'typescript',
  },
  {
    config: astro,
    dep: 'astro',
    name: 'Astro.js',
    optionName: 'astro',
  },
  {
    config: jest,
    dep: 'jest',
    name: 'Jest',
    optionName: 'jest',
  },
  {
    config: react,
    dep: 'react',
    name: 'React',
    optionName: 'react',
  },
  {
    config: tailwind,
    dep: 'tailwindcss',
    name: 'Tailwind',
    optionName: 'tailwind',
  },
  {
    config: vitest,
    dep: 'vitest',
    name: 'Vitest',
    optionName: 'vitest',
  },
] as const
