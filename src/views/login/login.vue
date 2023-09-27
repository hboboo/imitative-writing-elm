<template>
  <div class="loginContainer">
    <head-top head-title=" 密码登录" goBack="true"></head-top>
    <form class="loginForm">
      <section class="input_container">
        <input type="text" placeholder="账号" v-model.lazy="userAccount">
      </section>
      <section class="input_container">
        <input v-if="!showPassword" type="password" placeholder="密码" v-model="password">
        <input v-else type="text" placeholder="密码" v-model="password">
        <div class="button_switch" :class="{change_to_text: showPassword}">
          <div class="circle_button" :class="{trans_to_right: showPassword}" @click="changePassWordType"></div>
        </div>
      </section>
      <section class="input_container captcha_code_container">
        <input type="text" placeholder="验证码" maxlength="4" v-model="codeNumber">
        <div class="img_change_img">
          <img v-show="captchaCodeImg" :src="captchaCodeImg" >
          <div class="change_img" @click="getCaptchaCode">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </section>
    </form>
    <p class="login_tips">
      温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="login_tips">
      注册过的用户可凭账号密码登录</p>
    <div class="login_container" @click="mobileLogin">登录</div>
    <router-link class="to_forget" to="/forget">重置密码？</router-link>
    <alert-tip v-if="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </div>
</template>

<script>
import headTop from '../../components/header/head.vue'
import alertTip from '../../components/common/alertTip.vue'
import {getcaptchas, accountLogin} from '../../service/getData'
import {mapMutations} from 'vuex'
import axios from 'axios'
export default {
  name: 'Login',

  data() {
    return {
      userAccount: null,                    //用户名
      password: null,                        //密码
      showPassword: false,                   //是否显示密码
      captchaCodeImg: null,                  //验证码地址
      codeNumber: null,    //验证码
      showAlert: false,     //显示组件
      alertText: null,      //提示内容
      userInfo: null        //用户信息
    };
  },

  created(){
    this.getCaptchaCode()

    // axios.get(' http://localhost:3008/addressData').then(res =>{
    //   console.log(res.data);
    // })
  },

  mounted() {
    
  },

  computed: {
    ...mapMutations([
      'RECORD_USERINFO'
    ])
  },

  methods: {
    //是否显示密码
    changePassWordType() {
      this.showPassword = !this.showPassword
    },
    
    //获取验证码
    async getCaptchaCode() {
      let res = await getcaptchas()
      this.captchaCodeImg = res.code
    },

    //发送登录信息
    async mobileLogin() {
      if (!this.userAccount) {
        this.showAlert = true
        this.alertText = '请输入手机号/邮箱/用户名'
        return
      } else if (!this.password) {
        this.showAlert = true
        this.alertText = '请输入密码'
        return
      } else if (!this.codeNumber) {
        this.showAlert = true
        this.alertText = '请输入验证码'
        return
      }
      //用户名登录
      this.userInfo = await accountLogin(this.userAccount, this.password, this.codeNumber);
      
      //如果返回的值不正确，则弹出提示框，返回值正确则返回上一页
      if (!this.userInfo.user_id) {
        this.showAlert = true
        this.alertText = this.userInfo.message
        this.getCaptchaCode()
      } else {
        this.RECORD_USERINFO(this.userInfo)
        this.$router.go(-1)
      }
    },

    closeTip(){
      this.showAlert = false
    }
  },

  components: {
    headTop,
    alertTip
  }
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .loginContainer{
    padding-top: 1.95rem;
    p, span, input{
      font-family: Helvetica Neue, Tahoma, Arial;
    }
  }
  .loginForm{
    background-color: #fff;
    margin-top: .6rem;
    .input_container{
      display: flex;
      justify-content: space-between;
      padding: .6rem .8rem;
      border-bottom: 1px solid #f1f1f1;
      input{
        .sc(.7rem, #666);
      }
    }
    .captcha_code_container{
      height: 2.2rem;
      .img_change_img{
        display: flex;
        align-items: center;
        img{
        .wh(3.5rem, 1.5rem);
        margin-right: .2rem;
        }
        .change_img{
        display: flex;
        flex-direction: 'column';
        flex-wrap: wrap;
        width: 2rem;
        justify-content: center;
        p{
          .sc(.55rem, #666);
        }
        p:nth-of-type(2){
          color: #3b95e9;
          margin-top: .2rem;
        }
        }
      }
    }
  }
  .button_switch{
    background-color: #ccc;
    display: flex;
    justify-content: center;
    .wh(2rem, .7rem);
    padding: 0 .2rem;
    border: 1px;
    border-radius: 0.5rem;
    position: relative;
    .circle_button{
      transform: all .3s;
      position: absolute;
      top: -0.2rem;
      z-index: 1;
      left: -0.3rem;
      .wh(1.2rem, 1.2rem);
      box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0, 0, 0, .1);
      background-color: #f1f1f1;
      border-radius: 50%;
    }
    .trans_to_right{
      transform: translateX(1.3rem);
    }
  }
  .change_to_text{
    background-color: #4cd964;
  }
  
  .login_tips{
    .sc(.5rem, red);
    padding: .4rem .6rem;
    line-height: .5rem;
  }
  .login_container{
    margin: 0 .5rem 1rem;
    .sc(.7rem, #fff);
    background-color: #4cd964;
    padding: .5rem 0;
    border: 1px;
    border-radius: 0.15rem;
    text-align: center;
  }
  .to_forget{
    float: right;
    .sc(.6rem, #3b95e9);
    margin-right: .3rem;
  }
</style>