<template>
  <div>
    <pre>{{ countBy }}</pre>
    <pre>{{ meanBy }}</pre>
    <pre>{{ pick }}</pre>
    <pre>{{ isnil }}</pre>
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

const array = [1, 2, 3, 4, 5, 6]
// array
const countBy = useCountby(array, x => x % 2 === 0 ? 'even' : 'odd')
// math
const meanBy = useMeanby(fish, x => x.weight)
// // object
const pick = usePick(ra, ['Mode', 'Power'])
// // predicate
const isnil = isNil(ra)
// // string
const capitalize = useCapitalize('hello')
</script>
