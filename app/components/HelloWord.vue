<script lang="ts" setup>
withDefaults(
  defineProps<{
    name: string
  }>(),
  {
    name: '',
  },
)
</script>

<template>
  <h1>hello nha</h1>
  <div>{{ name }}</div>
</template>
