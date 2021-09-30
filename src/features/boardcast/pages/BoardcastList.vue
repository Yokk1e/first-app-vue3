<template>
  <div>
    <p class="text-lg sm:text-2xl font-bold leading-none text-gray-800">
      Boardcast
    </p>
    <ModalForm :isOpen="openCreateModal" :headerDialog="state">
      <BoardcastEditorVue :state="state" />
    </ModalForm>
    <Button label="Create" @submit="setOpenCreateModal(true)" />
    <!-- <boardcast-editor-vue @submit="onSubmit" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BoardcastEditorVue from "../components/BoardcastEditor.vue";
import ModalForm from "@/components/ModalForm.vue";
import Button from "@/components/Button.vue";
import { BoardCastForm } from "../forms/BoardCastForm";

export default defineComponent({
  components: { ModalForm, Button, BoardcastEditorVue },
  setup() {
    const openCreateModal = ref(false);
    const state = ref<"CREATE" | "UPDATE">("CREATE");
    function setOpenCreateModal(value: boolean) {
      openCreateModal.value = value;
      setState("CREATE");
    }
    function setOpenUpdateModal(value: boolean) {
      openCreateModal.value = value;
      setState("UPDATE");
    }
    function setState(value: "CREATE" | "UPDATE") {
      state.value = value;
    }
    return { setOpenCreateModal, openCreateModal, setOpenUpdateModal, state };
  },
});
</script>

<style scoped></style>
