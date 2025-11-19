<template>
  <span :class="bgColor">
    <small>{{ props.statusName?.toUpperCase() }}</small>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  statusName: String,
})

const bgColor = computed(() => {
  switch (props.statusName) {
    case 'pendente':
      return 'pico-background-yellow-100'

    case 'registrado':
      return 'pico-background-blue-500'

    case 'pago':
      return 'pico-background-green-500'

    case 'cancelado':
      return 'pico-background-red-500'

    default:
      return 'pico-background-grey-300'
  }
})
</script>

<style scoped>
span {
  padding: 0.25rem 0.5rem;
  width: 120px;
  display: inline-block;
  border-radius: 5px;
  white-space: nowrap;
  font-size: small;
  letter-spacing: 0.15rem;
  font-weight: bold;
}
</style>
