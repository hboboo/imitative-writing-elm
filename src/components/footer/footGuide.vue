<template>
  <section id="foot_guide">
    <section class="guide_item" @click="gotoAddress(0)">
      <svg-icon icon-class="takeout" class="icon_style" :class="{active: isActiv[0]}"></svg-icon>
      <span>外卖</span>
    </section>
    <section class="guide_item" @click="gotoAddress(1)">
      <svg-icon icon-class="probe" class="icon_style" :class="{active: isActiv[1]}"></svg-icon>
      <span>搜索</span>
    </section>
    <section class="guide_item" @click="gotoAddress(2)">
      <svg-icon icon-class="order" class="icon_style" :class="{active: isActiv[2]}"></svg-icon>
      <span>订单</span>
    </section>
    <section class="guide_item" @click="gotoAddress(3)">
      <svg-icon icon-class="myhomepage" class="icon_style" :class="{active: isActiv[3]}"></svg-icon>
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
      isActiv: {
        0: false,
        1: false,
        2: false,
        3: false,
      },
      previousIndex: null
    };
  },

  mounted() {
    
  },

  computed: {
    
  },

  methods: {
     gotoAddress(index){
      if (this.previousIndex !== index) {
        this.isActiv[this.previousIndex] = false;
        this.previousIndex = index;
      }
      this.isActiv[index] = true;
    },
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