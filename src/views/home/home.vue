<template>
  <div>
    <head-top>
      <span slot="logo" class="head_logo" @click="reload">elm.me</span>
    </head-top>
    <nav class="city_nav">
      <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to="'/city/' + guessCityid" class="guess_city">
        <span>{{guessCity}}</span>
        <svg-icon icon-class="right" height="100%" width="100%" class="arrow_right"></svg-icon>
      </router-link>
    </nav>
    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <router-link :to="'/city/' + item.id " v-for="item in hotcity" :key="item.id">
         <li>{{item.name}}</li>
        </router-link>
      </ul>
    </section>
    <section class="group_city_container">
      <ul class="letter_classify">
        <li class="letter_classify_li" v-for="(value, key, index) in sortgroupcity" :key="key">
          <h4 class="city_title">
            {{key}}<span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="groupcity_name_container citylistul clear">
            <router-link :to="'/city/' + item.id " v-for="item in value" :key="item.id">
              <li class="ellipsis">{{item.name}}</li>
            </router-link>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import headTop from '../../components/header/head.vue'
import svgIcon from '../../components/common/svgIcon.vue'
import {cityGuess, groupcity, hotcity} from '../../service/getData'

export default {
  name: 'Home',

  data() {
    return {
      guessCity: '',        //当前城市
      guessCityid:'',       //当前城市id
      hotcity: [],          //热门城市列表
      groupcity: {},        //所以城市列表     
    };
  },

  mounted(){

    //获取当前城市
    cityGuess().then(res => {
      this.guessCity = res.name
      this.guessCityid = res.id
    })

    //获取热门城市
    hotcity().then(res => {
      this.hotcity = res
    })

    //获取所有城市
    groupcity().then(res => {
      this.groupcity = res
    })
  },
  
  computed:{
    //将获取的数据按照A-Z字母开头排序
    sortgroupcity(){
      let sortobj = {}
      for (let i = 65; i <= 90; i++) {
        if(this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)]
        }
      }
      return sortobj
    }
  },

  methods:{
    //点击图标刷新页面
    reload(){
      window.location.reload()
    }
  },

  components: {
    headTop,
    svgIcon
  }
  
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';
  .head_logo{
    left: 0.4rem;
    font-weight: 400;
    .sc(0.7rem, #fff);
    .wh(2.3rem, 0.7rem);
    .ct
  }
  .city_nav{
    padding-top: 2.35rem;
    border-top: 1px solid @bc;
    background-color: #fff;
    margin-bottom: 0.4rem;
    .city_tip{
      .fj;
      line-height: 1.45rem;
      padding: 0 0.45rem;
      span:nth-of-type(1){
        .sc(0.55rem, #666);
      }
      span:nth-of-type(2){
        font-weight: 900;
        .sc(0.475rem, #9f9f9f)
      }
    }
    .guess_city{
      .fj;
      align-items: center;
      height: 1.8rem;
      padding: 0 0.45rem;
      border-top: 1px solid @bc;
      border-bottom: 2px solid @bc;
      .font(0.75rem, 1.8rem);
      span:nth-of-type(1){
        color: @blue;
      }
      .arrow_right{
        .wh(.6rem, .6rem);
        fill:#999;
      }
    }
  }
  #hot_city_container{
    background-color: #fff;
    margin-bottom: 0.4rem;
  }
  .citylistul{
    li{
      float: left;
      text-align: center;
      color: @blue;
      border-bottom: 0.025rem solid @bc;
      border-right: 0.025rem solid @bc;
      .wh(25%, 1.75rem);
      .font(0.6rem, 1.75rem)
    }
    li:nth-of-type(4n){
      border-right: none;
    }
  }
  .city_title{
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid @bc;
    border-bottom: 1px solid @bc;
    .font(0.55rem, 1.45rem, "Helvetica Neue");
    span{
      .sc(0.475rem, #999)
    }
    position: sticky;
    top: 1.95rem;
    background-color: #fff;
  }
  .letter_classify_li{
    margin-bottom: 0.4rem;
    background-color: #fff;
    border-bottom: 1px solid @bc;
    .groupcity_name_container{
      li{
        color: #666;
      }
    }
  }
</style>