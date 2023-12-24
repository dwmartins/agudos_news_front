import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import CategoryPage from '../views/CategoryPage.vue';
import NewPasswordPage from '../views/NewPasswordPage.vue';

const routes = [
    {path: '/', name: 'home', component: HomePage},
    {path: '/categorias', name: 'categorias', component: CategoryPage},
    {path: '/nova-senha', name: 'nova-senha', component: NewPasswordPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;