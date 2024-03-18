// 使用模块化机制编程，导入Vue和VueRouter，调用 Vue.use(VueRouter)
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 1. 定义 (路由) 组件。可以从其他文件 import 进来
import register from '../components/register.vue'//导入组件
import login from '../components/login.vue'//导入组件
import Home from '../views/home.vue'//导入组件
import PageTop from '../components/pageTop.vue'//导入组件


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  {
    path: '/',          // 路径
    redirect: '/login'  // 重定向   此处作用是将首页设置为登录页面
  },
  {
    path: '/register',// 路径
    component: register// 跳转到的组件
  },//一个路由应该映射一个组件
  {
    path: '/login',
    component: login
  },//一个路由应该映射一个组件
  {
    path:'/home',
    component:Home
  },
  {
    path:'/pagetop',
    component:PageTop
  }
  // 可以根据需要添加更多路由
]

// 3. 创建 router 实例，然后传 `routes` 配置（还可以传别的配置参数）
const router = new VueRouter({
  mode: 'history',    // 路由模式，该模式不会在地址中显示井号#
  routes  // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能

export default router  //把router暴露出来