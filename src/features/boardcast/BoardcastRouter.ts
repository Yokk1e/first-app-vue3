import { RouteRecordRaw } from "vue-router";
import BoardcastCreatePage from "./pages/BoardcastCreatePage.vue";
export const BoardcastRouter: (prefix?: string) => RouteRecordRaw[] = (
  prefix = "boardcast"
) => [
  {
    name: "BoardcastCreatePage",
    path: `${prefix}/create`,
    component: BoardcastCreatePage,
  },
];
