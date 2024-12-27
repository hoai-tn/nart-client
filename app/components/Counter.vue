<script lang="ts" setup>
const counter = useMyCounterStore()
</script>
<template>
  <div>
    {{ counter.count }}
  </div>
  <Button @click="counter.increment" />
  <Button @click="counter.decrement" />
</template>

<style></style>
