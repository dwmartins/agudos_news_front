import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import CategoryPage from '../views/CategoryPage.vue';
import NewPasswordPage from '../views/NewPasswordPage.vue';
import ProfilePage from '../views/ProfilePage';

const routes = [
    {path: '/', name: 'home', component: HomePage},
    {path: '/categorias', name: 'categorias', component: CategoryPage},
    {path: '/nova-senha', name: 'nova-senha', component: NewPasswordPage},
    {path: '/perfil/:id', name: 'perfil', component: ProfilePage, beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('userData');

        if(!token) {
            next('/');
        } else {
            next();
        }
    }}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;