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
        <ul>
          <li>
            <router-link to="/home">
              <span class="info_data_top"><b>{{balance.toFixed(2)}}</b>元</span>
              <span class="info_data_bottom">我的余额</span>
            </router-link>
          </li>
          <li>
            <router-link to="/home">
              <span class="info_data_top"><b>{{count}}</b>个</span>
              <span>我的优惠</span>
            </router-link>
          </li>
          <li>
            <router-link to="/home">
              <span class="info_data_top"><b>{{pointNumber}}</b>元</span>
              <span>我的积分</span>
            </router-link>
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
import headTop from '../../components/header/head.vue';
import svgIcon from '../../components/common/svgIcon.vue'
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
    svgIcon
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
  }
</style>