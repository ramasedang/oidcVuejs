import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '../views/AuthView.vue';
import idsrvAuth from '@/oidc';

const routes = [
  {
    path: '/',
    name: 'home',
    component: AuthView,
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      authName: idsrvAuth.authName,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/RedirectView.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

idsrvAuth.useRouter(router);

export default router;
