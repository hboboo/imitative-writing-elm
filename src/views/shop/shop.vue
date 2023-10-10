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
        activitiesLength: 1
      }
    };
  },

  mounted() {
    
  },

  methods: {
    goback(){
      this.$router.go(-1)
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
</style>