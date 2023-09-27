import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  addressData:[
    {
        name: "广州商学院",
        address: "广东省广州市黄埔区龙湖街道汤村九龙大道222号",
        longitude: 113.575414,
        latitude: 23.309277,
        geohash: "113.575414,23.309277"
    },
    {
      name: "华南理工大学",
      address: "广州市番禺区外环东路382号",
      longitude: 113.411968,
      latitude: 23.054905,
      geohash: "113.411968,23.054905"
    },
    {
      name: "中山大学",
      address: "广州市海珠区新港街道中大社区新港西路135号",
      longitude: 113.304864,
      latitude: 23.102915,
      geohash: "113.304864,23.102915"
    },
  ],
  userInfo: null, //用户信息
  login: null,  //登录状态
  
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
