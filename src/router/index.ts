import { createWebHashHistory, createWebHistory, createRouter } from 'vue-router';
// const history = createWebHashHistory();
const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('../components/HelloWorld.vue')
    }
  ]
});

export default router;
