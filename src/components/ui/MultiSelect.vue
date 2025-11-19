<template>
  <details class="dropdown">
    <summary class="text-truncate">{{ placeholder }}</summary>
    <ul>
      <li>
        <label>
          <input type="checkbox" name="item" v-model="isCheckAll" />
          TODOS
        </label>
      </li>
      <li v-for="(item, index) in props.items" :key="index">
        <label>
          <input type="checkbox" name="item" :value="`${item}`" v-model="checkboxItems" />
          {{ item.toUpperCase() }}
        </label>
      </li>
    </ul>
  </details>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps({
  items: {
    type: Array as () => string[],
    default: () => [],
  },
  itemName: String,
})

const isCheckAll = ref(false)
const checkboxItems = ref<string[]>([])

/**
 * Propriedade computada: placeholder
 */
const placeholder = computed(() => {
  if (isCheckAll.value) {
    return 'TODOS'
  }

  if (checkboxItems.value.length > 0) {
    return checkboxItems.value.join(', ')
  }

  if (props.itemName) {
    return `Filtrar por ${props.itemName}`
  }
  return 'Filtrar'
})

/**
 * Listener do checkbox de seleção de todos os itens
 */
watch(isCheckAll, (newVal) => {
  if (newVal) {
    checkboxItems.value = props.items.map((item) => item)
  } else {
    checkboxItems.value = []
  }
})

/**
 * Listener da seleção individual dos checkboxes
 * Se todos os individuais forem marcados, seleciona também o TODOS
 * Se todos os individuais forem desmarcados, desmarca também o TODOS
 */
watch(checkboxItems, () => {
  if (checkboxItems.value.length === props.items.length && !isCheckAll.value) {
    isCheckAll.value = true
    return
  }

  if (checkboxItems.value.length === 0 && isCheckAll.value) {
    isCheckAll.value = false
    return
  }
})

/**
 * @return string[] Um array com os itens selecionados
 */
const selectedItems = (): string[] => {
  return checkboxItems.value
}

defineExpose({
  selectedItems,
})
</script>
