<template>
  <button
    class="
      bg-blue-500
      hover:bg-blue-700
      text-white
      font-bold
      py-2
      px-4
      rounded
      focus:outline-none focus:shadow-outline
    "
    @click="$emit('submit')"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
    },
  },
  emits: ["submit"],
});
</script>

<style scoped></style>
