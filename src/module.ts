import { defineNuxtModule, addImports } from '@nuxt/kit'
import * as etk from 'es-toolkit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Prefix to be added before every lodash function
   *
   * `false` to disable uppercasing
   *
   * @defaultValue `use`
   */
  prefix: false | string
  /**
   * Functions that starts with this keywords will be skipped by prefix
   *
   * `false` to disable uppercasing
   *
   * @defaultValue 'is'
   */
  prefixSkip: string | string[] | false
  /**
   * Array of lodash funcions to be exluded from auto-imports
   *
   * @defaultValue []
   */
  exclude: string[]
  /**
   * Iterable of string pairs to alias each function
   *
   * @defaultValue []
   */
  alias: Iterable<[string, string]>
  /**
   * Upper case first letter after prefix
   *
   * `false` to disable uppercasing
   *
   * @defaultValue true
   */
  upperAfterPrefix: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-es-toolkit',
    configKey: 'es-toolkit',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'use',
    prefixSkip: 'is',
    exclude: [],
    alias: [],
    upperAfterPrefix: true,
  },
  setup(options, _nuxt) {
    const aliasMap = new Map<string, string>(options.alias)
    const excludes = [...options.exclude]
    const prefixSkip = options.prefixSkip ? Array.isArray(options.prefixSkip) ? options.prefixSkip : [options.prefixSkip] : []

    for (const name of Object.keys(etk)) {
      if (!excludes.includes(name)) {
        const alias = aliasMap.has(name) ? aliasMap.get(name)! : name
        const prefix = (!prefixSkip.some(key => alias.startsWith(key)) && options.prefix) || ''
        const as = prefix ? prefix + (options.upperAfterPrefix ? etk.camelCase(alias) : alias) : alias
        addImports({ name, as, from: 'es-toolkit' })
      }
    }
  },
})
