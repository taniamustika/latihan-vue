import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import listToDo from "../views/ListToDo.vue";

const routes: Array<RouteRecordRaw> = [
{
  path: '/list-to-do',
  name: 'list-to-do',
  component: listToDo
}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router