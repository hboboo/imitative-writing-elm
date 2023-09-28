<template>
  <div>
    <head-top>
      <router-link to="" slot="search">
        <svg-icon icon-class="search" class="line_search"></svg-icon>
      </router-link>
    </head-top>
    <nav class="msite_nav">
      <div class="app-container">
        <swiper :options="swiperOption" ref="mySwiper" id="mySwiper">
          <swiper-slide v-for="(item, index) in foodType" :key="index" class="swiper_slide_item food_types_container">
            <router-link v-for="foodItem in item" :key="foodItem.id" class="link_to_food" :to="'/home'">
              <figure>
                <img :src="foodItem.image_url" >
                <figcaption>{{foodItem.title}}</figcaption>
              </figure>
            </router-link>
          </swiper-slide>
          <!-- <swiper-slide class="swiper_slide_item">I'm Slide 2</swiper-slide> -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </nav>
    <div class="shop_list_container">
      <header class="shop_header"> 
        <svg-icon iconClass="shop" class="shop_icon"></svg-icon>
        <span class="shop_header_title">附近商家</span>
      </header>
    </div>
    <shop-list></shop-list>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import headTop from '../../components/header/head.vue'
import svgIcon from '../../components/common/svgIcon.vue'
import footGuide from '../../components/footer/footGuide.vue'
import shopList from '../../components/common/shoplist.vue'
import axios from 'axios';

export default {
  name: 'Msite',

  data() {
    return {
       //swiperOption：swiper配置项信息，需要绑定在swiper标签的 :option 属性中
      swiperOption: {
        //分页器配置项
        pagination: {
          el: ".swiper-pagination", //分页器的类名
          clickable: true, // 点击分页器跳切换到相应的幻灯片
          type: 'bullets' , //小圆点|进度条|数字页码
          dynamicBullets: true,  //动态小圆点(type:'bullets'时)
          //自定义分页器，需设置样式
          // renderBullet(index, className) {
          //     return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
          //   },
        },
      },
      foodType: [],
    };
  },

  mounted() {
    axios.get('http://localhost:3008/foodType').then(res => {
      let resArr = res.data;
      let resLength = resArr.length
      let foodArr = []
      for (let i = 0, j = 0; i < resLength; i += 8, j++) {
        foodArr[j] = resArr.splice(0, 8)
      }
      this.foodType = foodArr
    })
  },

  computed: {

  },

  methods: {

  },
  
  components: {
    headTop,
    svgIcon,
    footGuide,
    shopList
  }
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';
 
  .line_search{
    .wh(.9rem, .9rem);
    .ct;
    left: 0.7rem;
    fill: #fff;
  }
   #mySwiper{
    .wh(100%, auto);
    padding-bottom: 0.6rem;
  }
 .swiper-slide.swiper_slide_item{
    height: 300px;
    background-color:#fff;
  }
  #mySwiper /deep/ .swiper-pagination-bullet-custom.swiper-pagination-bullet{
    width: 15px !important;
    height: 15px !important;
  }
  .msite_nav{
    padding-top: 2rem;
    background-color: #fff;
    border-bottom: 0.025rem solid @bc;
    height: 10.6rem;
  }
  .food_types_container{
    display: flex;
    flex-wrap: wrap;
    .link_to_food{
      width: 25%;
      padding: 0.3rem 0rem;
      .fj(center);
      figure{
        img{
          margin-bottom: 0.3rem;
          .wh(1.8rem, 1.8rem)
        }
        figcaption{
          text-align: center;
          .sc(0.55rem, #666)
        }  
      }
    }
  }
  .shop_list_container{
    margin-top: .4rem;
    border-top: 0.025rem solid @bc;
    background-color: #fff;
    .shop_header{
      .shop_icon{
        fill: #999;
        margin-left: 0.6rem;
        vertical-align: middle;
        .wh(0.6rem, 0.6rem);
      }
      .shop_header_title{
        color: #999;
        .font(0.55rem, 1.6rem);
        margin-left: 0.4rem;
      }
    }
  }
</style>