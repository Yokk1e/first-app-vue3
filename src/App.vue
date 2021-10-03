<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useQueryProvider } from "vue-query";
export default defineComponent({
  setup() {
    useQueryProvider();
  },
});
</script>

<style></style>
