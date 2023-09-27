<template>
  <div class="city_container">
    <head-top :head-title="cityname" go-back='true'>
      <!-- <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link> -->
    </head-top>
    <form class="city_form" @submit.prevent>
      <div>
        <input type="search" name="city" placeholder="输入厂商地址" class="city_input input_style" v-model="inputVaule">
      </div>
      <div>
        <input type="submit" name="submit" required class="city_submit input_style" value="提交" @click="postpois">
      </div>
    </form>
    <header v-if="historytitle" class="pois_search_history">搜索历史</header>
    <ul class="getpois_ul" v-if="getpoisVif">
      <li v-for="(item, index) in addressData" :key="index" @click="nextpage">
        <h4 class="pois_name ellipsis">{{item.name}}</h4>
        <p class="pois_address ellipsis">{{item.address}}</p>
      </li>
    </ul>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import headTop from '../../components/header/head.vue'
// import {currentcity} from '../../service/getData'
import {mapState} from 'vuex'
import footGuide from '../../components/footer/footGuide.vue'
export default {
  name: 'City',

  data() {
    return {
      cityname: '广州',    //当前城市名字
      cityid: '',         //当前城市id
      inputVaule:'',       //输入地址
      historytitle: true,   //搜索历史
      getpoisVif: false
    };
  },

  mounted() {
    // this.cityid = this.$route.params.cityid
    // //获取当前城市名字
    // currentcity(this.chityid).then(res => {
    //   console.log(res.name);
    //   this.cityname = res.name
    // })
  },

  computed: {
    ...mapState([
      'addressData',
    ])
  },

  methods: {
    postpois(){
      if (this.inputVaule) {
        this.historytitle = false
        this.getpoisVif = true
      }
    },
    //跳转下一页
    nextpage() {
      this.$router.push('/msite')
    }
  },
  components: {
    headTop,
    footGuide
  }
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .city_container{
    padding-top: 2.35rem;
  }
  .change_city{
    right: 0.4rem;
    .sc(0.6rem, #fff);
    .ct;
  }
  .city_form{
    background-color: #fff;
    border-top: 1px solid @bc;
    border-bottom: 1px solid @bc;
    padding-top: 0.4rem;
    div{
      width: 90%;
      margin: 0 auto;
      text-align: center;
      .input_style{
        border-radius: 0.1rem;
        margin-bottom: 0.1rem;
        .wh(100%, 1.4rem)
      }
      .city_input{
        border: 1px solid @bc;
        padding: 0 0.3rem;
        .sc(0.6rem, #333)
      }
      .city_submit{
        background-color: @blue;
        .sc(0.65rem, #fff)
      }
    }
  }
  .pois_search_history{
    border-top: 1px solid @bc;
    border-bottom: 1px solid @bc;
    padding-left: 0.5rem;
    .font(0.475rem, 0.8rem)
  }
  .getpois_ul{
    background-color: #fff;
    border-top: 1px solid @bc;
    li{
      margin: 0 auto;
      padding-top: 0.65rem;
      border-bottom: 1px solid @bc;
      .pois_name{
        margin: 0 auto 0.35rem;
        width: 90%;
        .sc(0.65rem, #333);
      }
      .pois_address{
        width: 90%;
        margin: 0 auto 0.55rem;
        .sc(0.45rem, #999)
      }
    }
  }
</style>