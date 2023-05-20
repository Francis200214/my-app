import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import Home from '../views/Home'
import User from '../views/User'


// 路由与组件映射
const routes = [
    { path: '/home', component: Home },
    { path: '/user', component: User }
]

// 创建Routershi'li
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })

// 引入Vue-Router
Vue.use(VueRouter);

