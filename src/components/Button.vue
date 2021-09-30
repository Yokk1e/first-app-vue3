<template>
  <button
    class="
      inline-flex
      justify-center
      py-2
      px-4
      border border-transparent
      shadow-sm
      text-sm
      font-medium
      rounded-md
      text-white
      bg-indigo-600
      hover:bg-indigo-700
      focus:outline-none
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
