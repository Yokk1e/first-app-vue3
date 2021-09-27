<template>
  <TextInputVue label="Header" placeholder="header" v-model:value="header" />
  <TextInputVue label="Detail" placeholder="detail" v-model:value="detail" />
  <ButtonVue @submit="submit" label="Submit" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { BoardCastForm } from "../forms/BoardCastForm";
import ButtonVue from "@/components/Button.vue";
import TextInputVue from "@/components/TextInput.vue";

export default defineComponent({
  components: { ButtonVue, TextInputVue },
  props: {
    form: {
      type: Object as () => BoardCastForm,
      default: () => {
        return { header: "", detail: "" };
      },
    },
  },

  emits: ["submit", "input"],
  computed: {
    header: {
      get(): any {
        return (this as any).form.header;
      },
      set(value: any) {
        return this.$emit("input", { ...(this as any).form, header: value });
      },
    },
    detail: {
      get(): any {
        return (this as any).form.detail;
      },
      set(value: any) {
        return this.$emit("input", { ...(this as any).form, detail: value });
      },
    },
  },
  methods: {
    submit() {
      console.log("test", this);

      this.$emit("submit");
    },
  },
});
</script>

<style scoped></style>
