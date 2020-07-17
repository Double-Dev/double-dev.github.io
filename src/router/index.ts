import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects.vue'),
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('@/views/Project.vue'),
    children: [
      {
        path: 'limitengine',
        components: {
          banner: () => import('@/components/projects/limitengine/Banner.vue'),
          content: () => import('@/components/projects/limitengine/Content.vue'),
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  {
    path: '*',
    name: '404 Not Found',
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
