import { BoardCastForm } from "@/features/boardcast/forms/BoardCastForm";
import { UpdateBoardCastForm } from "@/features/boardcast/forms/UpdateBoardCastForm";
import { Boardcast } from "@/features/boardcast/models/Boardcast";
import { httpClient } from "./httpClient";

export const postBoardCast = async (form: BoardCastForm) => {
  await httpClient.post<Boardcast>(`/boardcasts`, form);
};

export const patchBoardCast = async (id: string, form: UpdateBoardCastForm) => {
  const { data } = await httpClient.patch<Boardcast>(`/boardcasts/${id}`, form);
  return data;
};

export const getBoardCastById = async (id: string) => {
  const { data } = await httpClient.get<Boardcast>(`/boardcasts/${id}`);
  return data;
};

// export const getBoardCasts = async (params: BoardCastPaginationForm) => {
//   const { data } = await httpClient.get<Pagination<Boardcast>>(`/boardcasts`, {
//     params,
//   });
//   return data;
// };

export const deleteBoardCastById = async (id: string) => {
  const { data } = await httpClient.delete<Boardcast>(`/boardcasts/${id}`);
  return data;
};
