import * as VueReform from '../dist/vue-reform.esm';
import App from './App.vue';
import Vue from 'vue';

Vue.use(VueReform);
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
});
