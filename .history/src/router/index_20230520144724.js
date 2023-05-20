import Vue from 'vue'
import VueRouter from 'vue-router'

// 1、引入组件
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

// 引入Vue-Router
Vue.use(VueRouter);

// 2、路由与组件映射
const routes = [
    {
        path: '/',
        component: Main,
        children: [
            {
              // 当 /user/:id/profile 匹配成功，
              // UserProfile 会被渲染在 User 的 <router-view> 中
              path: 'profile',
              component: UserProfile
            },
            {
              // 当 /user/:id/posts 匹配成功
              // UserPosts 会被渲染在 User 的 <router-view> 中
              path: 'posts',
              component: UserPosts
            }
        ]
    }
    
]

// 3、创建Router实例
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 4、将 router 暴露
export default router


