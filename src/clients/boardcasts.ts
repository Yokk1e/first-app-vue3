import { BoardcastForm, Boardcast } from "@/domians/boardcast";
import { httpClient } from "./HTTPClient";

export const postBoardCast = async (
  form: BoardcastForm
): Promise<Boardcast> => {
  const { data } = await httpClient.post<Boardcast>(`/boardcasts`, form);
  return data;
};

export const patchBoardCast = async (
  id: number,
  form: BoardcastForm
): Promise<Boardcast> => {
  const { data } = await httpClient.patch<Boardcast>(`/boardcasts/${id}`, form);
  return data;
};

export const getBoardCastById = async (id: string): Promise<Boardcast> => {
  const { data } = await httpClient.get<Boardcast>(`/boardcasts/${id}`);
  return data;
};

// export const getBoardCasts = async (params: BoardCastPaginationForm) => {
//   const { data } = await httpClient.get<Pagination<Boardcast>>(`/boardcasts`, {
//     params,
//   });
//   return data;
// };

export const deleteBoardCastById = async (id: string): Promise<Boardcast> => {
  const { data } = await httpClient.delete<Boardcast>(`/boardcasts/${id}`);
  return data;
};
