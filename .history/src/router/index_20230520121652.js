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



// 引入Vue-Router
Vue.use(VueRouter);

