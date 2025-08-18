import config from './src/index.js'

export default config({
  astro: true,
  react: true,
  tailwind: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  vitest: true,
})
