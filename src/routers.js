import { createRouter, createWebHistory } from "vue-router";
// import Page from "./components/Page.vue";
import Table from "./components/Table.vue";
import Card from "./components/Card.vue";
import Setting from "./components/Setting.vue";



const routes = [
//   {
//     name: "Page-Component",
//     component: Page,
//     path: "/",
//   },
  {
    name: "Table-Component",
    component: Table,
    path: "/table",
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