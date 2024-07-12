# es-toolkit for Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]


[es-toolkit](https://es-toolkit.slash.page/) auto-import module for [Nuxt](https://nuxtjs.org).

## 📦 Install

Install `nuxt-es-tookit` as development dependency:

```bash
npm i nuxt-es-tookit -D
```

Add it to the `modules` section of your `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: ["nuxt-es-tookit"],
});
```

## 🚀 Example

Use any [es-tookit](https://es-toolkit.slash.page/intro.html) methods in your Nuxt application, they will be auto-imported!

```html
<script setup>
<template>
  <div>
    <pre>{{ countBy }}</pre>
    <pre>{{ meanBy }}</pre>
    <pre>{{ capitalize }}</pre>
  </div>
</template>

<script setup>
const fish = [
  {
    name: 'Marlin',
    weight: 105,
    source: 'ocean',
  },
  {
    name: 'Bass',
    weight: 8,
    source: 'lake',
  },
  {
    name: 'Trout',
    weight: 1,
    source: 'lake',
  },
]

const ra = {
  Mode: 'god',
  Power: 'sun',
}

// array
const countBy = useCountby(fish, 'weight')
// math
const meanBy = useMeanby(fish, 'weight')
// object
const pick = usePick(ra, ['Mode', 'Power'])
// predicate
const isnil = isNil(ra)
// string
const capitalize = useCapitalize('hello')
</script>

```

## 🔨 Config

| Name               | Default | Description                                                                           |
| ------------------ | ------- | ------------------------------------------------------------------------------------- |
| `prefix`           | `'use'` | String to prepend before each Radash function (false to disable)                      |
| `prefixSkip`       | `'is'`  | Functions that starts with this keywords will be skipped by prefix (false to disable) |
| `upperAfterPrefix` | `true`  | If true it will automatically uppercase first letter after prefix (false to disable)  |
| `alias`            | `[]`    | Array of array pairs to rename specific Radash functions (prefix is still added)      |

## 💻 Example - Config

```ts
export default defineNuxtConfig({
  modules: ["nuxt-es-tookit"],
  'es-tookit': {
    prefix: 'use',
    prefixSkip: 'is',
    upperAfterPrefix: true,
    alias: [
      ['snake', 'stringToSnake'], // => stringToSnake
    ]
  }
});
```

## Acknowledgement
The development of `nuxt-es-tookit` was made possible thanks to the inspiration and code base from [nuxt-lodash](https://github.com/cipami/nuxt-lodash).

## 📄 License

[MIT License](https://github.com/mangmax/nuxt-es-toolkit/blob/main/LICENSE) © 2024 - [Mang](https://github.com/bbg)


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-es-toolkit/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-es-toolkit

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-es-toolkit.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-es-toolkit

[license-src]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://github.com/mangmax/nuxt-es-toolkit/blob/main/LICENSE

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
