<template>
  <div class="order-page">
    <head-top goBack="true" headTitle="订单列表"></head-top>
    <ul class="order-list-ul" >
      <li class="order-list-li" v-for="item in orderList" :key="item.id">
        <img :src="imgBaseUrl + item.restaurant_image_url" class="restaurant-image">
        <section class="order-item-right">
          <section>
            <header class="order-item-right-header">
              <section class="order-header">
                <h4>
                  <span class="ellipsis">{{item.restaurant_name}}</span>
                  <svg-icon iconClass="right" class="arrow-right"></svg-icon>
                </h4>
                <p class="order-time">{{item.formatted_created_at}}</p>
              </section>
              <p class="order-status">{{item.status_bar.title}}</p>
            </header>
            <section class="order-basket">
              <p class="order-name ellipsis">{{item.basket.group[0][0].name}}{{item.basket.group[0].length > 1 ? ' 等' + item.basket.group[0].length + '件商品' : ''}}</p>
              <p class="order-amount">￥{{item.total_amount.toFixed(2)}}</p>
            </section>
          </section>
          <div class="order-again">
            <router-link to="/home" custom v-slot="{navigate}">
              <span @click="navigate" role="link" class="buy-again">再来一单</span>
            </router-link>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
import headTop from '../../components/header/head.vue'
import svgIcon from '../../components/common/svgIcon.vue'
import axios from 'axios';
export default {
  name: 'Order',

  data() {
    return {
      orderList: [],
      imgBaseUrl: 'https://elm.cangdu.org/img/'
    };
  },

  mounted() {
    axios.get('http://localhost:3008/orderList').then(res => {
      this.orderList = res.data
    })
  },

  methods: {
    
  },
  components: {
    headTop,
    svgIcon
  }
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .order-page{
    background-color: #f1f1f1;
    margin-bottom: 1.95rem;
    p, span, h4{
      font-family: Helvetica Neue,Tahoma,Arial;
    }
  }
  .order-list-ul{
    padding-top: 1.95rem;
    .order-list-li{
      background-color: #fff;
      display: flex;
      margin-bottom: 0.5rem;
      padding: .6rem .6rem 0;
      .restaurant-image{
        .wh(2rem, 2rem);
        margin-right: 0.4rem;
      }
      .order-item-right{
        flex: 5;
        .order-item-right-header{
          border-bottom: 0.025rem solid #f5f5f5;
          padding-bottom: .3rem;
          .fj;
          .order-header{
            h4{
              display: flex;
              align-items: center;
              justify-content: flex-start;
              .sc(.75rem, #333);
              line-height: 1rem;
              width: 9rem;
              .arrow-right{
                .wh(.6rem, .6rem);
                fill: #ccc;
                margin-right: .2rem;
              }
            }
            .order-time{
              .sc(.55rem, #999);
              line-height: .8rem;
            }
          }
          .order-status{
            .sc(.6rem, #333)
          }
        }
        .order-basket{
          .fj;
          line-height: 2rem;
          border-bottom: 0.025rem solid #f5f5f5;
          .order-name{
            .sc(.6rem, #666);
            width: 10rem;
          }
          .order-amount{
            .sc(.6rem, #f60);
            font-weight: bold;
          }
        }
        .order-again{
          text-align: right;
          line-height: 1.6rem;
          .buy-again{
            .sc(.55rem, #3190e8);
            border: 0.025rem solid #3190e8;
            padding: .1rem .2rem;
            border-radius: .15rem;
          }
        }
      }
    }
  }
</style>