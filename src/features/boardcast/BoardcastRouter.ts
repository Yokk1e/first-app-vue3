import { RouteRecordRaw } from "vue-router";
import BoardcastCreatePage from "./pages/BoardcastList.vue";
export const BoardcastRouter: (prefix?: string) => RouteRecordRaw[] = (
  prefix = "boardcast"
) => [
  {
    name: "BoardcastList",
    path: `${prefix}`,
    component: BoardcastCreatePage,
  },
];
