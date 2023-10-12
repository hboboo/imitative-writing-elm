import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

const home = () => import('../views/home/home.vue')
const city = () => import('../views/city/city.vue')
const login = () => import('../views/login/login.vue')
const msite = () => import('../views/msite/msite.vue')
const search = () => import('../views/search/search.vue')
const profile = () => import('../views/profile/profile.vue')
const shop = () => import('../views/shop/shop.vue')
const order = () => import('../views/order/order.vue')



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
    },
    //我的页面
    {
      path: '/profile',
      component: profile
    },
    //商铺详情
    {
      path: '/shop',
      component: shop
    },
    //订单列表页
    {
      path: '/order',
      component: order
    },
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
