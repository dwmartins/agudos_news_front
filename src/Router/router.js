import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import CategoryPage from '../views/CategoryPage.vue';

const routes = [
    {path: '/', component: HomePage},
    {path: '/categorias', component: CategoryPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;