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
