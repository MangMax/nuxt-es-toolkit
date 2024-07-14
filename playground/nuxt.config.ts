export default defineNuxtConfig({
  'modules': ['../src/module'],
  'es-toolkit': {
    prefix: 'use',
    prefixSkip: 'is',
    exclude: [],
    alias: [],
    upperAfterPrefix: true,
  },
  'devtools': { enabled: true },
  'compatibilityDate': '2024-07-14',
})
