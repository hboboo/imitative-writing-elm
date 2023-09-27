<template>
  <header id="head_top">
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <svg-icon icon-class="back" height="100%" width="100%"></svg-icon>
    </section>
    <router-link :to="'/login'" class="head_login" v-if='signinUp'>
      <svg-icon v-if="userInfo" class="user_avatar" icon-class="mine" height="100%" width="100%"></svg-icon>
      <span class="login_span" v-else>登录|注册</span>
    </router-link>
    <section class="title_head ellipsis" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </section>
    <slot name="changecity"></slot>
  </header>
</template>

<script>
import svgIcon from '../../components/common/svgIcon.vue'

export default {
  name: 'Head',
  data() {
    return {
      userInfo: true,
      signinUp: true
    };
  },
  components:{
    svgIcon
  },
  props: ['goBack', 'headTitle']
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  #head_top{
    background-color: @blue;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    .wh(100%, 1.95rem)
  }
  .head_goback{
    left: 0.4rem;
    .wh(0.6rem, 1rem);
    line-height: 2.2rem;
    margin-left: .4rem;
  }
  .head_login{
    right: 0.55rem;
    .sc(0.65rem, #fff);
    .ct;
    .login_span{
      color: #fff;
    }
    .user_avatar{
      fill: #fff;
      .wh(.8rem, .8rem)
    }
  }
  .title_head{
    .center;
    width: 50%;
    color: #fff;
    text-align: center;
    .title_text{
      .sc(0.8rem, #fff);
      font-weight: bold;
    }
  }
</style>