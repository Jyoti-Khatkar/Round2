import { createRouter, createWebHistory } from "vue-router";
import Table from "./components/Table.vue";
import Card from "./components/Card.vue";
import Setting from "./components/Setting.vue";



const routes = [
  {
    name: "Table-Component",
    component: Table,
    path: "/",
  },
  {
    name: "Card-Component",
    component: Card,
    path: "/card",
  },
  {
    name: "Setting-Component",
    component: Setting,
    path: "/setting",
  },
  
  {
    redirect: "/",
    path: "/:NotFound(.*)*",
  },
 
];
const router = new createRouter({
  history: createWebHistory(),
  routes,
});
export default router;