<template>
  <section id="foot_guide">
    <section class="guide_item" @click="gotoAddress">
      <svg-icon icon-class="takeout" class="icon_style"></svg-icon>
      <span>外卖</span>
    </section>
    <section class="guide_item" @click="gotoAddress">
      <svg-icon icon-class="probe" class="icon_style"></svg-icon>
      <span>搜索</span>
    </section>
    <section class="guide_item" @click="gotoAddress">
      <svg-icon icon-class="order" class="icon_style"></svg-icon>
      <span>订单</span>
    </section>
    <section class="guide_item" @click="gotoAddress">
      <svg-icon :icon-class="iconClass" class="icon_style"></svg-icon>
      <span>我的</span>
    </section>
  </section>
</template>

<script>
import svgIcon from '../../components/common/svgIcon.vue'
export default {
  name: 'footGuide',

  data() {
    return {
      isActiv: false
    };
  },

  mounted() {
    
  },

  computed: {
    iconClass(){
      return this.isActiv  ? 'myhomepageactive' : 'myhomepage';
    }
  },

  methods: {
    gotoAddress(){
      this.isActiv = !this.isActiv
    }
  },
  
  components: {
    svgIcon
  }
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  #foot_guide{
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    .wh(100%, 1.95rem);
    display: flex;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, .1);
  }
  .guide_item{
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    .icon_style{
      .wh(.8rem, .8rem);
      margin-top: .3rem;
      fill: #ccc;
    }
    .active{
        fill: @blue;
    }
    span{
      .sc(.45rem, #666)
    }
  }

</style>