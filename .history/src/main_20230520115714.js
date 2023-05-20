import Vue from 'vue'
import App from './App.vue'
import { Row, Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// 全局引入Element UI
// Vue.use(ElementUI);

// 按需引入
Vue.use(Row);
Vue.use(Button);

new Vue({
  render: h => h(App),
}).$mount('#app')
