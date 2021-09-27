<template>
  <div>
    <p class="text-lg sm:text-2xl font-bold leading-none text-gray-800">
      Create Boardcast
    </p>
    <!-- <div>{{ boardcastForm.header }}</div> -->
    <boardcast-editor-vue v-model:form="boardcastForm" @submit="submit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BoardcastEditorVue from "../components/BoardcastEditor.vue";
import { BoardCastForm } from "../forms/BoardCastForm";

export default defineComponent({
  components: { BoardcastEditorVue },
  setup() {
    const boardcastForm = ref<BoardCastForm>({ header: "rer", detail: "" });
    return { boardcastForm };
  },
  methods: {
    submit() {
      console.log(this.boardcastForm);
    },
  },
});
</script>

<style scoped></style>
