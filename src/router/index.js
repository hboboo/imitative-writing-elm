import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

const home = () => import('../views/home/home.vue')
const city = () => import('../views/city/city.vue')
const login = () => import('../views/login/login.vue')
const msite = () => import('../views/msite/msite.vue')
const search = () => import('../views/search/search.vue')



Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: App,
  children: [
    //定重向到home页面
    {
      path: '',
      redirect: '/home'
    },
    //首页城市列表页
    {
      path: '/home',
      component: home
    },
    {
      path: '/city/:cityid',
      component: city
    },
    //登录注册页
    {
      path: '/login',
      component: login
    },
    //所有商铺首页
    {
      path: '/msite',
      component: msite
    },
    //搜索页
    {
      path: '/search',
      component: search
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
