import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";
import { BoardcastRouter } from "@/features/boardcast/BoardcastRouter";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "",
    component: AppLayout,
    children: [...BoardcastRouter()],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
