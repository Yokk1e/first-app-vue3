<template>
  <form @submit="onSubmit">
    <TextInputVue label="Header" placeholder="header" name="header" />
    <TextInputVue label="Detail" placeholder="detail" name="detail" />
    <ButtonVue label="Submit" />
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import ButtonVue from "@/components/Button.vue";
import TextInputVue from "@/components/TextInput.vue";
import { BoardcastForm } from "@/domians/boardcast";
import { useCreateBoardcast } from "@/applications/createBoardcast";

export default defineComponent({
  components: { ButtonVue, TextInputVue },
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

    const { validate, values, resetForm, handleSubmit } =
      useForm<BoardcastForm>({
        validationSchema: schema,
      });

    onMounted(() => {
      // initdata form api
    });

    const { submitCreateBoardCast, isLoading, isSuccess } =
      useCreateBoardcast();

    async function create() {
      try {
        submitCreateBoardCast(values);
        emit("success");
      } catch (error) {
        console.log(error);
      }
    }
    async function update() {
      try {
        console.log(values);
        emit("success");
      } catch (error) {
        console.log(error);
      }
    }
    const onSubmit = handleSubmit(async () => {
      if (props.state === "CREATE") {
        await create();
      } else if (props.state === "UPDATE") {
        await update();
      }
    });

    return { onSubmit, schema };
  },
});
</script>

<style scoped></style>
