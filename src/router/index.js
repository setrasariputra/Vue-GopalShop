import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Error404 from "../views/Error404.vue";

const routes = [
    {
        path: "/:pathMatch(.*)*",
        name: "Error404",
        component: Error404,
      },
      {
        path: "/",
        name: "/",
        redirect: "/login",
      },  
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
