<template>
  <div class="rating_container">
    <section class="star_container">
      <svg-icon icon-class="star" v-for="num in 5" :key="num" class="grey_fill"></svg-icon>
    </section>
    <div class="star_overflow" :style="'width:' + rating*2/5 + 'rem'">
      <section class="star_container">
        <svg-icon icon-class="star" v-for="num in 5" :key="num" class="orange_fill"></svg-icon>
      </section>
    </div>
  </div>
</template>

<script>
import svgIcon from './svgIcon.vue'
export default {
  name: 'RatingStar',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },

  components: {
    svgIcon
  },

  props: ['rating']
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .rating_container{
    position: relative;
    top: .2rem;
    .wh(2rem, .4rem);
    .star_overflow{
      overflow: hidden;
      position: relative;
      height: 100%;
    }
    .star_container{
      position: absolute;
      display: flex;
      width: 2rem;
      height: 0.4rem;
      top: -0.02rem;
      left: -0.02rem;
      .grey_fill{
        fill: #d1d1d1;
      }
      .orange_fill{
        fill: #ff9a0d;
      }
    }
  }
</style>