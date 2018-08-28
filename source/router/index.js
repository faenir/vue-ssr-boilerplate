import Vue from 'vue';
import Router from 'vue-router';

const index = resolve => require(['../pages/index.vue'], resolve);

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})