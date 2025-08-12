export default defineNuxtConfig({
  'compatibilityDate': '2024-07-14',
  'devtools': { enabled: true },
  'es-toolkit': {
    prefix: 'use',
    prefixSkip: 'is',
    exclude: [],
    alias: [],
    upperAfterPrefix: true,
  },
  'modules': ['../src/module'],
})
