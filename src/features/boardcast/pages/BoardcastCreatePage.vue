<template>
  <div>
    <p class="text-lg sm:text-2xl font-bold leading-none text-gray-800">
      Create Boardcast
    </p>
    <boardcast-editor-vue v-model:form="boardcastForm" @submit="submit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import BoardcastEditorVue from "../components/BoardcastEditor.vue";
import { BoardCastForm } from "../forms/BoardCastForm";

export default defineComponent({
  components: { BoardcastEditorVue },
  setup() {
    const boardcastForm = reactive<BoardCastForm>({ header: "", detail: "" });
    function submit() {
      console.log(boardcastForm);
    }
    return { boardcastForm, submit };
  },
});
</script>

<style scoped></style>
