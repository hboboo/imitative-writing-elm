<template>
  <div>
    <section class="shop-container">
      <nav class="goback" @click="goback">
        <svg-icon iconClass="back" width="1rem" height="100%"></svg-icon>
      </nav>
      <header class="shop-datail-header">
        <div class="header-cover-img-con">
          <img src="https://elm.cangdu.org/img/189be9b049a115913.png"  class="header-cover-img">
        </div>
        <section class="description-header">
          <router-link to="/home" class="description-top">
            <section class="description-left">
              <img src="https://elm.cangdu.org/img/189be9b049a115913.png">
            </section>
            <section class="description-right">
              <h4 class="description-title ellipsis">{{shopDetailData.name}}</h4>
              <p class="description-text">商家配送／{{shopDetailData.time}}分钟送达／配送费¥{{shopDetailData.fee}}</p>
              <p class="description-promotion ellipsis">公告：{{shopDetailData.promotion}}</p>
            </section>
            <svg-icon iconClass="right" class="description-arrow" width="18" height="18"></svg-icon>
          </router-link>
          <footer class="description-footer">
            <p class="ellipsis">
              <span class="tip-icon">{{shopDetailData.iconName}}</span>
              <span>{{shopDetailData.description}}（APP专享）</span>
            </p>
            <p>{{shopDetailData.activitiesLength}}个活动</p>
            <svg-icon iconClass="right" class="footer-arrow" width="18" height="18"></svg-icon>
          </footer>
        </section>
      </header>
      <section class="change-show-type">
        <div>
          <span :class="{ activity_show: changeShow == 'food'}" @click="changeShow = 'food'">商品</span>
        </div>
        <div>
          <span :class="{ activity_show: changeShow == 'rating'}" @click="changeShow = 'rating'">评价</span>
        </div>
      </section>
      <transition>
        <section v-show="changeShow == 'food'" class="food-container">
            <section class="menu-container">
              <section class="menu-left">
                <ul>
                  <li v-for="(item,index) in menuList" :key="index" class="menu-left-li" :class="{activity_menu : index == menuIndex}" @click="chooseMenu(index)">
                    <span>{{item.name}}</span>
                  </li>
                </ul>
              </section>
              <section class="menu-right">
                <ul>
                  <li v-for="(item, index) in menuList" :key="index">
                    <header class="menu-detail-header">
                      <section class="menu-detail-header-left">
                        <strong class="menu-item-tiile">{{item.name}}</strong>
                        <span class="menu-item-description">{{item.description}}</span>
                      </section>
                    </header>
                    <section class="menu-detail-list" v-for="(foods,foodindex) in item.foods" :key="foodindex">
                      <router-link  class="menu-detail-link" to="/home" custom v-slot="{navigate}">
                        <div @click="navigate" role="link">
                          <section class="menu-food-img">
                          <img :src="foods.image_url" >
                        </section>
                        <section class="menu-food-description">
                          <h3 class="food-description-head">
                            <strong class="description-foodname">{{foods.name}}</strong>
                          </h3>
                          <p class="food-description-content">{{foods.description}}</p>
                          <p class="food-description-sale-rating">
                            <span>月售{{foods.month_sales}}份</span>
                            <span>好评率{{foods.satisfy_rate}}%</span>
                          </p>
                          <p class="food-activity">
                            <span>{{foods.activity}}</span>
                          </p>
                        </section>
                        </div>
                      </router-link>
                      <footer class="menu-detail-footer">
                        <section class="food-price">
                          <span>￥</span>
                          <span>15</span>
                        </section>
                        <button>+</button>
                      </footer>
                    </section>
                  </li>
                </ul>
              </section>
            </section>
            <section class="buy-cart-container">
              <section class="cart-icon-num">
                <div class="cart-icon-container">
                  <!-- <span class="cart-list-length">1</span> -->
                  <svg-icon iconClass="shopping_cart" class="cart-icon-num"></svg-icon>
                </div>
                <div class="cart-num">
                  <div>￥12</div>
                  <div>费送费￥15</div>
                </div>
              </section>
              <section class="gotopay">
                <span class="gotopay-button-style">还差￥20起送</span>
              </section>
            </section>
        </section>
      </transition>
    </section>
  </div>
</template>

<script>
import svgIcon from '../../components/common/svgIcon.vue'
export default {
  name: 'Shop',

  data() {
    return {
      shopDetailData:{
        name: '11111',
        time: 30,
        fee: 2,
        promotion: '绿色健康环保',
        iconName: '减',
        description: '满30减5，满60减8',
        activitiesLength: 1,
      },
      changeShow: 'food',
      menuIndex: 0,
      menuList: [
        {
          name:'炒饭',
          description:'吃炒饭',
          foods:[
            {
              name:'兰州炒饭',
              description: '+++++',
              month_sales: 400,
              satisfy_rate: 98,
              image_url: "https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",
              activity: '按时到达',
            },
            {
              name:'广州炒饭',
              description: '好吃的',
              month_sales: 1200,
              satisfy_rate: 88,
              image_url: "https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg",
              activity: '活动',
            },
            {
              name:'无情铁手',
              description: '速速下单',
              month_sales: 800,
              satisfy_rate: 95,
              image_url: "https://fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg",
              activity: '热卖',
            }
          ],
        },
        {
          name:'早餐',
          description:'吃早餐',
          foods:[
            {
              name:'面包',
              description: '2块一个',
              month_sales: 3500,
              satisfy_rate: 96,
              image_url: "https://fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg",
              activity: '活动++',
            },
            {
              name:'肉包',
              description: '买买买',
              month_sales: 1600,
              satisfy_rate: 80,
              image_url: "https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg",
              activity: '准时到',
            },
            {
              name:'炒粉',
              description: '难吃的炒粉',
              month_sales: 150,
              satisfy_rate: 60,
              image_url: "https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg",
              activity: '不退换',
            }
          ],
        },
        {
          name:'晚餐',
          description:'吃晚餐',
          foods:[
            {
              name:'广式套餐',
              description: '腊肠',
              month_sales: 150,
              satisfy_rate: 50,
              image_url: "https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
              activity: '活动---',
            },
            {
              name:'青瓜炒肉',
              description: '非常好吃',
              month_sales: 1800,
              satisfy_rate: 98,
              image_url: "https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg",
              activity: '活动1111',
            },
            {
              name:'难吃的菜',
              description: '不多说',
              month_sales: 80,
              satisfy_rate: 75,
              image_url: "https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg",
              activity: '无',
            }
          ],
        },
        {
          name:'宵夜',
          description:'吃宵夜',
          foods:[
            {
              name:'烧烤套餐',
              description: '肥仔套餐',
              month_sales: 900,
              satisfy_rate: 87,
              image_url: "https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg",
              activity: '晚活动',
            },
            {
              name:'啤酒套餐',
              description: '痛风套餐',
              month_sales: 4500,
              satisfy_rate: 76,
              image_url:"https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
              activity: '送送送',
            },
            {
              name:'凌晨的粥',
              description: '喝完整一碗',
              month_sales: 320,
              satisfy_rate: 87,
              image_url:"https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg",
              activity: '试试',
            }
          ],
        },
      ]
    }
  },

  mounted() {
    
  },

  methods: {
    goback(){
      this.$router.go(-1)
    },
    chooseMenu(index) {
      this.menuIndex = index
    }
  },

  components: {
    svgIcon
  }
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .shop-container{
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
  }
  .goback{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    z-index: 11;
    padding-top: 0.2rem;
    padding-left: 0.2rem;
  }
  .shop-datail-header{
    position: relative;
    .header-cover-img-con{
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: absolute;
      .header-cover-img{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        filter: blur(10px);
      }
    }
    .description-header{
      position: relative;
      z-index: 10;
      background-color: rgba(119,103,137,.43);
      padding: 0.4rem 0 0.4rem 0.4rem;
      width: 100%;
      overflow: hidden;
      .description-top{
        display: flex;
        .description-left{
          margin-right: 0.3rem;
          img{
            .wh(2.9rem, 2.9rem);
            display: block;
            border-radius: 0.15rem;
          }
        }
        .description-right{
          flex: 1;
          .description-title{
            .sc(.8rem, #fff);
            font-weight: bold;
            width: 100%;
            margin-bottom: 0.3rem;
          }
          .description-text{
            .sc(.5rem, #fff);
            margin-bottom: 0.3rem;
          }
          .description-promotion{
            .sc(.5rem, #fff);
            width: 11.5rem;
          }
        }
        .description-arrow{
          .ct;
          right: 0.3rem;
          z-index: 11;
          fill: #fff;
        }
      }
      .description-footer{
        .fj;
        margin-top: 0.5rem;
        padding-right: 1rem;
        p{
          .sc(.5rem, #fff);
          span{
            color: #fff;
          }
          .tip-icon{
            padding: 0 .04rem;
            border: 0.025rem solid rgb(240, 115, 115);
            background-color: rgb(240, 115, 115);
            border-radius: 0.1rem;
            font-size: .4rem;
            display: inline-block;
          }
        }
        .ellipsis span:nth-of-type(2){
          margin-left: 0.3rem;
        }
        .footer-arrow{
          .wh(.45rem, .45rem);
          position: absolute;
          right: .3rem;
          fill: #fff;
        }
      }
    }
  }
  .change-show-type{
    display: flex;
    background: #fff;
    padding: .3rem 0 .6rem;
    border-bottom: 1px solid #ebebeb;
    div{
      flex: 1;
      text-align: center;
      span{
        .sc(.65rem, #666);
        padding: .2rem .1rem;
        border-bottom: 0.12rem solid #fff;
      }
      .activity_show{
        color: #3190e8;
        border-color: #3190e8;
      }
    }
  }
  .food-container{
    display: flex;
    flex: 1;
    padding-bottom: 2rem;
    overflow: hidden;
  }
  .menu-container{
    display: flex;
    flex: 1;
    overflow-y: hidden;
    position: relative;
    .menu-left{
      width: 3.8rem;
      .menu-left-li{
        padding: .7rem .3rem;
        border-bottom: 0.025rem solid #ededed;
        box-sizing: border-box;
        border-left: 0.15rem solid #f8f8f8;
        position: relative;
        span{
          .sc(.6rem, #666)
        }
      }
      .activity_menu{
        border-left: 0.15rem solid #3190e8;
        background-color: #fff;
        span:nth-of-type(1){
          font-weight: bold;
        }
      }
    }
    .menu-right{
      flex: 4;
      overflow-y: auto;
      .menu-detail-header{
        width: 100%;
        padding: .4rem;
        position: relative;
        .fj;
        align-items: center;
        .menu-detail-header-left{
          width: 11rem;
          white-space: nowrap;
          overflow: hidden;
          .menu-item-tiile{
            .sc(.6rem, #666);
            font-weight: bold;
          }
          .menu-item-description{
            .sc(.5rem, #999);
            padding-left: .4rem;
            width: 30%;
            overflow: hidden;
          }
        }
      }
      .menu-detail-list{
        background-color: #fff;
        padding: .6rem .4rem;
        border-bottom: 1px solid #f8f8f8;
        position: relative;
        overflow: hidden;
        .menu-detail-link{
          display: flex;
          .menu-food-img{
            margin-right: .4rem;
            img{
              .wh(2rem, 2rem);
              display: block;
            }
          }
          .menu-food-description{
            width: 100%;
            .food-description-head{
              .fj;
              margin-bottom: .2rem;
              .description-foodname{
                .sc(.7rem, #333);
              }
            }
            .food-description-content{
              .sc(.5rem, #999);
              line-height: .6rem;
            }
            .food-description-sale-rating{
              line-height: .8rem;
              span{
                .sc(.5rem, #333);
                margin-right:.3rem;
              }
            }
            .food-activity{
              line-height: .4rem;
              span{
                font-size: .3rem;
                border: 1px solid currentColor;
                border-radius: 0.3rem;
                padding: .08rem;
                display: inline-block;
                transform: scale(.8);
                margin-left: -0.35rem;
                color: rgb(241, 136, 79);
                border-color: rgb(240, 115, 115);
              }
            }
          }
        }
        .menu-detail-footer{
          margin-left: 2.4rem;
          font-size: 0;
          margin-top: .3rem;
          .fj;
          .food-price{
            span{
              font-family: 'Helvetica Neue',Tahoma,Arial;
            }
            span:nth-of-type(1){
              .sc(.5rem, #f60);
              margin-right: .05rem;
            }
            span:nth-of-type(2){
              .sc(.7rem, #f60);
              font: bold;
              margin-right: .3rem;
            }
          }
        }
      }
    }
  }
  .buy-cart-container{
    position: absolute;
    background-color: #3d3d3f;
    bottom: 0;
    left: 0;
    z-index: 13;
    display: flex;
    .wh(100%, 2rem);
    .cart-icon-num{
      flex: 1;
      .cart-icon-container{
        display: flex;
        background-color: #3d3d3f;
        position: absolute;
        padding: .4rem;
        border: 0.18rem solid #444;
        border-radius: 50%;
        left: .5rem;
        top: -.7rem;
        .cart-icon-num{
          .wh(1.2rem, 1.2rem);
        }
        .cart-list-length{
          position: absolute;
          top: -.25rem;
          right: -.25rem;
          background-color: #ff461d;
          line-height: .7rem;
          text-align: center;
          border: 0.025rem solid #ff461d;
          min-width: .7rem;
          height: .7rem;
          .sc(.5rem, #fff);
          font-family: Helvetica Neue,Tahoma,Arial;
        }
      }
      .cart-num{
        .ct;
        left: 3.5rem;
        div{
          color: #fff;
        }
        div:nth-of-type(1){
          font-size: .8rem;
          font-weight: bold;
          margin-bottom: .1rem;
        }
        div:nth-of-type(2){
          font-size: .4rem;
        }
      }
    }
    .gotopay{
      position: absolute;
      right: 0;
      background-color: #535356;
      .wh(5rem, 100%);
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .gotopay-button-style{
        .sc(.7rem, #fff);
        font-weight: bold;
      }
    }
  }
</style>