import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import About from '@/components/about/About';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
