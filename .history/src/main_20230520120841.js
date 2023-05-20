import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'

Vue.config.productionTip = false

// 全局引入Element UI
Vue.use(ElementUI);

// 按需引入
// Vue.use(Row);
// Vue.use(Button);

new Vue({
  render: h => h(App),
}).$mount('#app')
