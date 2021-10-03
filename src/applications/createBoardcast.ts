import { useMutation } from "vue-query";
import { postBoardCast } from "@/clients/boardcasts";
import { BoardcastForm } from "@/domians/boardcast";

export function useCreateBoardcast() {
  const {
    mutateAsync: createBoardCast,
    isLoading,
    isSuccess,
  } = useMutation(async ({ form }: any) => await postBoardCast(form));

  async function submitCreateBoardCast(form: BoardcastForm) {
    try {
      await createBoardCast({ form });
    } catch (error) {
      console.log(error);
    }
  }

  return { submitCreateBoardCast, isLoading, isSuccess };
}
