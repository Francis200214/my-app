import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from './router/index.js'


Vue.config.productionTip = false

// 全局引入Element UI
Vue.use(ElementUI);


// 按需引入Element UI
// Vue.use(Row);
// Vue.use(Button);


new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
