<template>
  <div class="shoplist_container">
    <ul type="1">
      <li v-for="item in shopListArr" :key="item.id" class="shop_li">
        <router-link :to="'/home'" class="shop_link">
          <section>
            <img :src="imgUrl + item.image_path" class="shop_img">
          </section>
          <div class="shop_right">
            <header class="shop_detail_header">
              <h4 class="shop_title ellipsis">品牌测试</h4>
            </header>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Shoplist',

  data() {
    return {
      imgUrl: 'https://elm.cangdu.org/img/',
      shopListArr: []
    };
  },

  mounted() {
    //请求数据列表
    axios.get('http://localhost:3008/shoplist').then(res => {
      this.shopListArr = res.data
    })
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';

  .shoplist_container{
    background-color: #fff;
    margin-bottom: 2rem;
  }
  .shop_li{
    display: flex;
    border-bottom: 0.025rem solid #f1f1f1;
    padding: 0.7rem 0.4rem;
  }
  .shop_img{
    .wh(2.7rem, 2.7rem);
    display: block;
    margin-right: 0.4rem;
  }
  .shop_link {
  display: flex;
  // align-items: center;
  flex: auto;
  }
  .shop_right{
    flex: auto;
    .shop_detail_header{
      .fj;
      align-items: center;
      .shop_title{
        
      }
    }
  }
</style>