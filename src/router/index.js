import { createRouter, createWebHistory } from 'vue-router';
import PublicLayout from '@/components/public/PublicLayout.vue';
import AuthLayout from '@/components/auth/AuthLayout.vue';
import AdminLayout from '@/components/admin/AdminLayout.vue';

import PublicHomeView from '@/views/public/PublicHomeView.vue';
import AuthHomeView from '@/views/auth/AuthHomeView.vue';
import AdminHomeView from '@/views/admin/AdminHomeView.vue';

import PublicAboutView from '@/views/public/PublicAboutView.vue';
import AuthAboutView from '@/views/auth/AuthAboutView.vue';
import AdminAboutView from '@/views/admin/AdminAboutView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '',
            component: PublicLayout,
            children: [
                {
                    path: '',
                    component: PublicHomeView,
                },
                {
                    path: 'about',
                    component: PublicAboutView,
                },
            ],
        },
        {
            path: '/auth',
            component: AuthLayout,
            children: [
                {
                    path: '',
                    component: AuthHomeView,
                },
                {
                    path: 'about',
                    component: AuthAboutView,
                },
            ],
        },
        {
            path: '/admin',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminHomeView,
                },
                {
                    path: 'about',
                    component: AdminAboutView,
                },
            ],
        },
    ],
});

export default router;
