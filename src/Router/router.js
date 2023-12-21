import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/Pages/HomePage/HomePage.vue';
import CategoryPage from '../components/Pages/CategoryPage/CategoryPage.vue';

const routes = [
    {path: '/', component: HomePage},
    {path: '/categorias', component: CategoryPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;