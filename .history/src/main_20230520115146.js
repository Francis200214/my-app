import Vue from 'vue'
import App from './App.vue'
import {ROW} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// 全局注入Element UI
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
