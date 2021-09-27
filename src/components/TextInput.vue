<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="label">
      {{ label }}
    </label>
    <input
      :value="value"
      :id="label"
      :placeholder="placeholder"
      @input="$emit('update:value', $event.target.value)"
      class="
        shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline
      "
      type="text"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  emits: ["update:value"],
});
</script>

<style scoped></style>
