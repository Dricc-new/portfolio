import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
    { path: '/proyects', name: 'proyects', component: () => import('../views/ProyectsView.vue')}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})