/**
 * This is a set of optional features that can be turned on.
 */
export type Options = {
  astro?: boolean
  react?: boolean
  tailwind?:
    | {
        config?: string
        cssFiles?: string[]
      }
    | boolean
  typescript?:
    | boolean
    | {
        tsconfigPath?: string
      }
  vitest?: boolean
}
