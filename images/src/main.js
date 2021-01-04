import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import AuthHandler from './components/AppHeader';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{ path: '/oauth2/callback', component: AuthHandler }],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
