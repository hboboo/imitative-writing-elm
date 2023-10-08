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
                <section class="order_section">
                  月售{{item.recent_order_num}}单
                </section>
              </section>
              <section class="rating_order_num_right">
                <span class="delivery_style delivery_left">{{item.delivery_mode.text}}</span>
                <span class="delivery_style delivery_right">准时达</span>
              </section>
            </h5>
            <h5 class="fee_distance">
              <p class="fee">
                ￥{{item.float_minimum_order_amount}}起送
                <span class="segmentation">/</span>
                {{item.piecewise_agent_fee.tips}}
              </p>
              <p class="distance_time">
                <span>{{item.distance}}</span>
                <span class="segmentation">/</span>
                <span class="order_time">{{item.order_lead_time}}</span>
              </p>
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
    margin-bottom: 5rem;
    padding-bottom: 1.8rem;
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
        .rating_section{
          display: flex;
          .rating_num{
            .sc(0.4rem, #ff6000);
            margin: 0 0.2rem;
          }
        }
        .order_section{
          transform: scale(.8);
          margin-left: -0.2rem;
          .sc(0.4rem, #666)
        }
      }
      .rating_order_num_right{
        display: flex;
        align-items: center;
        transform: scale(.7);
        min-width: 5rem;
        justify-content: flex-end;
        margin-right: -0.8rem;
        .delivery_style{
          font-size: 0.4rem;
          padding: 0.04rem 0.08rem 0;
          border-radius: 0.08rem;
          margin-left: 0.08rem;
          border: 1px;
        }
        .delivery_left{
          color: #fff;
          background-color: @blue;
          border: 0.025rem solid @blue;
        }
        .delivery_right{
          color: @blue;
          border: 0.025rem solid @blue;
        }
      }
    }
    .fee_distance{
      margin-top: 0.52rem;
      .fj;
      .sc(0.5rem, #333);
      .fee{
        transform: scale(.9);
        .sc(0.5rem, #666)
      }
      .distance_time{
        transform: scale(.9);
        span{
          color: #999;
        }
        .order_time{
          color: @blue;
        }
        .segmentation{
          color: #ccc;
        }
      }
    }
  }
</style>