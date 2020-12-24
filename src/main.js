import Vue from 'vue'
import App from './App.vue'
import '../src/assets/vendors/grid.css';
import '../src/assets/vendors/MediaQueries.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
