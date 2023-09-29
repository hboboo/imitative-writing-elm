<template>
  <div class="shoplist_container">
    <ul type="1">
      <li v-for="item in shopListArr" :key="item.id" class="shop_li">
        <router-link :to="'/home'" class="shop_link">
          <section>
            <img :src="imgUrl + item.image_path" class="shop_img">
          </section>
          <div class="shop_right">
            <header class="shop_detail_header">
              <h4 class="shop_title ellipsis premium">{{item.name}}</h4>
              <ul class="shop_detail_ul">
                <li v-for="item in item.supports" :key="item.id" class="supports">{{item.icon_name}}</li>
              </ul>
            </header>
            <h5 class="rating_order_num">
              <section class="rating_order_num_left">
                <section class="rating_section">
                  <rating-star :rating='item.rating'></rating-star>
                  <span class="rating_num">{{item.rating}}</span>
                </section>
              </section>
            </h5>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import ratingStar from './ratingStar.vue'
export default {
  name: 'Shoplist',

  data() {
    return {
      imgUrl: 'https://elm.cangdu.org/img/',
      shopListArr: []
    };
  },

  mounted() {
    //请求数据列表
    axios.get('http://localhost:3008/shoplist').then(res => {
      this.shopListArr = res.data
    })
  },

  methods: {
    
  },
  components: {
    ratingStar
  }
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .shoplist_container{
    background-color: #fff;
    margin-bottom: 2rem;
  }
  .shop_li{
    display: flex;
    border-bottom: 0.025rem solid #f1f1f1;
    padding: 0.7rem 0.4rem;
  }
  .shop_img{
    .wh(2.7rem, 2.7rem);
    display: block;
    margin-right: 0.4rem;
  }
  .shop_link {
  display: flex;
  flex: auto;
  }
  .shop_right{
    flex: auto;
    .shop_detail_header{
      .fj;
      align-items: center;
      .shop_title{
        width: 8.5rem;
        color: #333;
        padding-top: .01rem;
        .font(0.65rem, 0.65rem, 'PingFangSC-Regular');
      }
      .premium::before{
        content: '品牌';
        display: inline-block;
        font-size: 0.5rem;
        line-height: .6rem;
        color: #333;
        background-color: #ffd930;
        padding: 0 0.1rem;
        border-radius: 0.1rem;
        margin-right: 0.2rem;
      }
      .shop_detail_ul{
        display: flex;
        transform: scale(.8);
        margin-right: -0.3rem;
        .supports{
          .sc(0.5rem, #999);
          border: 0.025rem solid #f1f1f1;
          padding: 0 0.04rem;
          border-radius: 0.08rem;
          margin-left: 0.05rem;
        }
      }
    }
    .rating_order_num{
      .fj(space-between);
      height: 0.6rem;
      margin-top: 0.52rem;
      .rating_order_num_left{
        .fj(flex-start);
        .rating_num{
          .sc(0.4rem, #ff6000);
          margin: 0 0.2rem;
        }
      }
    }
  }
</style>