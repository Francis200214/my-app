import Vue from 'vue'
import VueRouter from 'vue-router'

// 1、引入组件
import Home from '../views/Home.vue'
import User from '../views/User.vue'
// 引入Vue-Router
Vue.use(VueRouter);

// 2、路由与组件映射
const routes = [
    { path: '/home', component: Home },
    { path: '/user', component: User }
]

// 3、创建Router实例
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 4、将 router 暴露
export default router


