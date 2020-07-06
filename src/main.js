import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 3RD PARTY
import Buefy from 'buefy';
import StarRating from 'vue-star-rating';
Vue.component('star-rating', StarRating);
import VueResource from 'vue-resource';
Vue.use(VueResource);

// STYLES
import '@/styles.scss';

// COMPONENTS
import Navbar from '@/components/Navbar/Navbar.vue';
Vue.component('navbar', Navbar);

Vue.use(Buefy);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
