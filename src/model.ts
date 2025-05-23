/**
 * This is a set of optional features that can be turned on.
 */
export type Options = {
  astro?: boolean
  jest?: boolean
  react?: boolean
  tailwind?:
    | {
        config?: string
        cssFiles?: string[]
      }
    | boolean
  typescript?: boolean
  vitest?: boolean
}
