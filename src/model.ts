/**
 * This is a set of optional features that can be turned on.
 */
export type Options = {
  /**
   * Set this to `import.meta.dirname` as some IDEs look for deps in the wrong directory.
   */
  cwd: string

  astro?: boolean
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

/**
 * A context of data and options passed to all configs.
 */
export type ConfigContext = {
  options: Options
}
