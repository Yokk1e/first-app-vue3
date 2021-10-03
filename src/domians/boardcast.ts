export type Boardcast = {
  id: number;
  boardcastId: string;
  header: string;
  detail: string;
  createdDate: string;
};

export interface BoardcastForm {
  header: string;
  detail: string;
}
