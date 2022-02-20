import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import './index.css';
import ConstantsPlugin from '@/plugins/constantsPlugin.js';

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.use(ConstantsPlugin);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
