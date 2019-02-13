import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/login.vue'
// webpack项目模板 提供@ -> 自动找到src文件夹
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    name: 'home',
    path: '/',
    component: Home
  }, {
    name: 'login',
    path: '/login',
    component: Login
  }]
})
