<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <TextInputVue label="Header" placeholder="header" name="header" />
    <TextInputVue label="Detail" placeholder="detail" name="detail" />
    <ButtonVue label="Submit" type="submit" />
  </Form>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Form } from "vee-validate";
import * as yup from "yup";
import { BoardCastForm } from "../forms/BoardCastForm";
import ButtonVue from "@/components/Button.vue";
import TextInputVue from "@/components/TextInput.vue";

export default defineComponent({
  components: { ButtonVue, TextInputVue, Form },
  props: {
    state: {
      type: String as PropType<"CREATE" | "UPDATE">,
      default: "CREATE",
    },
  },
  emits: ["success"],
  setup(props, { emit }) {
    const schema = yup.object({
      header: yup.string().required(),
      detail: yup.string().required().min(8),
    });

    async function create(form: BoardCastForm) {
      try {
        console.log(form);
        emit("success");
      } catch (error) {
        console.log(error);
      }
    }
    async function update(form: BoardCastForm) {
      try {
        console.log(form);
        emit("success");
      } catch (error) {
        console.log(error);
      }
    }
    async function onSubmit(form: BoardCastForm) {
      if (props.state === "CREATE") {
        await create(form);
      } else if (props.state === "UPDATE") {
        await update(form);
      }
    }

    return { onSubmit, schema };
  },
});
</script>

<style scoped></style>
