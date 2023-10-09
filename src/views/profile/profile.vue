<template>
  <div class="profile_page">
    <head-top :goBack="true" :headTitle="profiletitle"></head-top>
    <section>
      <section class="profile_number">
        <router-link to="/home" class="profile_link">
          <span class="privateImage">
            <svg-icon class="privateImage_svg" iconClass="privateImage"></svg-icon>
          </span>
          <div class="user_info">
            <p>{{username}}</p>
            <p>
              <span class="user_icon">
                <svg-icon iconClass="mobile" class="icon_mobile"></svg-icon>
              </span>
              <span class="icon_mobile_number">{{mobile}}</span>
            </p>
          </div>
          <span class="arrow">
            <svg-icon iconClass="right" class="arrow_svg"></svg-icon>
          </span>
        </router-link>
      </section>
      <section class="info_data">
        <ul class="clear">
          <li class="info_data_link">
            <router-link to="/home">
              <span class="info_data_top"><b>{{balance.toFixed(2)}}</b>元</span>
              <span class="info_data_bottom">我的余额</span>
            </router-link>
          </li>
          <li class="info_data_link">
            <router-link to="/home">
              <span class="info_data_top"><b>{{count}}</b>个</span>
              <span class="info_data_bottom">我的优惠</span>
            </router-link>
          </li>
          <li class="info_data_link">
            <router-link to="/home">
              <span class="info_data_top"><b>{{pointNumber}}</b>元</span>
              <span class="info_data_bottom">我的积分</span>
            </router-link>
          </li>
        </ul>
      </section>
      <section class="user-section-container">
        <router-link to="/home" class="router-container">
          <aside>
            <svg-icon iconClass="order"></svg-icon>
          </aside>
          <div class="text-container">
            <span>我的订单</span>
            <svg-icon iconClass="right" class="right-svg"></svg-icon>
          </div>
        </router-link>
        <router-link to="/home" class="router-container">
          <aside>
            <svg-icon iconClass="store"></svg-icon>
          </aside>
          <div class="text-container">
            <span>积分商店</span>
            <svg-icon iconClass="right" class="right-svg"></svg-icon>
          </div>
        </router-link>
        <router-link to="/home" class="router-container">
          <aside>
            <svg-icon iconClass="member" :style="{fill: 'orange'}"></svg-icon>
          </aside>
          <div class="text-container">
            <span>饿了么会员卡</span>
            <svg-icon iconClass="right" class="right-svg"></svg-icon>
          </div>
        </router-link>
      </section>
      <section class="user-section-container">
        <router-link to="/home" class="router-container">
          <aside>
            <svg-icon iconClass="service"></svg-icon>
          </aside>
          <div class="text-container">
            <span>服务中心</span>
            <svg-icon iconClass="right" class="right-svg"></svg-icon>
          </div>
        </router-link>
        <router-link to="/home" class="router-container">
          <aside>
            <svg-icon iconClass="download"></svg-icon>
          </aside>
          <div class="text-container">
            <span>下载饿了么APP</span>
            <svg-icon iconClass="right" class="right-svg"></svg-icon>
          </div>
        </router-link>
      </section>
    </section>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import headTop from '../../components/header/head.vue';
import svgIcon from '../../components/common/svgIcon.vue'
import footGuide from '../../components/footer/footGuide.vue'
export default {
  name: 'Profile',

  data() {
    return {
      profiletitle: '我的',
      username: '登录/注册',
      mobile: '暂无绑定手机号',
      balance: 0,
      count: 3,
      pointNumber: 0,
    };
  },

  mounted() {
    
  },

  methods: {
    
  },

  components: {
    headTop,
    svgIcon,
    footGuide
  }
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .profile_page{
    p, span{
      font-family: Helvetica Neue,Tahoma,Arial;
    }
  }
  .profile_number{
    padding-top: 1.95rem;
    .profile_link{
      display: flex;
      align-items: center;
      background: @blue;
      padding: .66666rem .6rem;
      .privateImage{
        display: inline-block;
        .wh(2.5rem, 2.5rem);
        border-radius: 50%;
        vertical-align: middle;
        .privateImage_svg{
          background: @fc;
          border-radius: 50%;
          .wh(2.5rem, 2.5rem);
          fill: #ccc;
        }
      }
      .user_info{
        margin-left: .48rem;
        flex-grow: 1;
        p{
          font-weight: 700;
          .sc(.8rem, @fc);
          .user_icon{
            .wh(0.5rem, 0.75rem);
            display: inline-block;
            vertical-align: middle;
            line-height: 0.75rem;
            .icon_mobile{
              .wh(100%, 100%);
              fill: #fff;
            }
          }
          .icon_mobile_number{
            display: inline-block;
            .sc(.57333rem, @fc)
          }
        }
      }
      .arrow{
        .wh(.46667rem, .98rem);
        display: inline-block;
        .arrow_svg{
          .wh(100%, 100%);
          fill: #fff;
        }
      }
    }
  }
  .info_data{
    widows: 100%;
    background: @fc;
    box-sizing: border-box;
    ul{
      .info_data_link{
        float: left;
        width: 33.33%;
        border-right: 1px solid #f1f1f1;
        span{
          display: block;
          width: 100%;
          text-align: center;
        }
        .info_data_top{
          .sc(.55rem, #333);
          padding: .853333rem 0 .453333rem;
          b{
            display: inline-block;
            .sc(1.2rem, #f90);
            font-weight: 700;
            line-height: 1rem;
            font-family: Helvetica Neue,Tahoma;
          }
        }
        .info_data_bottom{
          .sc(.57333rem, #666);
          font-weight: 400;
          padding-bottom: .453333rem;
        }
      }
      .info_data_link:nth-of-type(2){
        .info_data_top{
          b{
            color: #ff5f3e;
          }
        }
      }
      .info_data_link:nth-of-type(3){
        border: 0;
        .info_data_top{
          b{
            color: #6ac20b;
          }
        }
      }
    }
  }
  .user-section-container{
    margin-top: .4rem;
    background: @fc;
    .router-container{
      padding-left: 1.6rem;
      display: flex;
      align-items: center;
      aside{
        .wh(.7rem, .7rem);
        margin-left: -.866667rem;
        margin-right: .266667rem;
        display: flex;
        align-items: center;
      }
      .text-container{
        width: 100%;
        border-bottom:1px solid #f1f1f1;
        padding:.433333rem .266667rem .433333rem 0;
        .sc(.7rem, #333);
        display: flex;
        justify-content: space-between;
        .right-svg{
          .wh(.46667rem,.466667rem);
        }
      }
    }
    .router-container:nth-of-type(3) .text-container{
      border:0;
    }
  }
</style>