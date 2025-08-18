import type { TSESLint } from '@typescript-eslint/utils'

import type { ConfigContext } from '../model.js'

import { astro } from './astro.js'
import { base } from './base.js'
import { ignores } from './ignores.js'
import { node } from './node.js'
import { packageJson } from './package-json.js'
import { perfectionist } from './perfectionist.js'
import { react } from './react.js'
import { style } from './style.js'
import { tailwind } from './tailwind.js'
import { tsdoc } from './tsdoc.js'
import { typescript } from './typescript.js'
import { unicorn } from './unicorn.js'
import { vitest } from './vitest.js'

export const defaultConfigs: {
  config: (configContext: ConfigContext) => TSESLint.FlatConfig.Config[]
  name: string
}[] = [
  { config: ignores, name: 'Ignores' },
  { config: base, name: 'Base' },
  { config: unicorn, name: 'Unicorn' },
  { config: node, name: 'Node' },
  { config: packageJson, name: 'package.json' },
  { config: tsdoc, name: 'TSDoc' },
  { config: style, name: 'Style' },
  { config: perfectionist, name: 'Perfectionist' },
]

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
] as const satisfies {
  config: (
    configContext: ConfigContext,
  ) => Promise<TSESLint.FlatConfig.Config[]>
  dep: string
  name: string
  optionName: string
  requiredPlugins: string[]
}[]
