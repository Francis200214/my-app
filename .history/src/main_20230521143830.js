import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

//
import ElementUI from 'element-ui'


import 'element-ui/lib/theme-chalk/index.css'
// Vue-Router
import router from './router'
// Vuex
import store from './store'


Vue.config.productionTip = false

// 全局引入Element UI
Vue.use(ElementUI);


// 按需引入Element UI
// Vue.use(Row);
// Vue.use(Button);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
