<template>
  <TextInputVue label="Header" placeholder="header" v-model:value="header" />
  <TextInputVue label="Detail" placeholder="detail" v-model:value="detail" />
  <ButtonVue @submit="submit" label="Submit" />
</template>

<script lang="ts">
import { defineComponent, PropType, computed, toRefs } from "vue";

import { BoardCastForm } from "../forms/BoardCastForm";
import ButtonVue from "@/components/Button.vue";
import TextInputVue from "@/components/TextInput.vue";

export default defineComponent({
  components: { ButtonVue, TextInputVue },
  props: {
    form: {
      type: Object as PropType<BoardCastForm>,
      default: () => {
        return { header: "", detail: "" };
      },
    },
  },
  emits: ["submit", "update:form"],
  setup(props, { emit }) {
    const { detail, header } = toRefs(props.form);
    function submit() {
      emit("submit");
    }

    return { submit, detail, header };
  },
});
</script>

<style scoped></style>
