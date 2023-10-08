<template>
  <div class="paddingTop search_page">
    <head-top head-title="搜索" go-back='true'></head-top>
    <form class="search_form">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input" v-model="searchValue">
      <input type="submit" name="submit" class="search_submit" @click.prevent="searchTarget">
    </form>
    <section v-if="filteredRestaurantList.length">
      <h4 class="title_restaurant">商家</h4>
      <ul class="list_container">
        <li v-for="item in filteredRestaurantList" :key="item.id" class="list_li">
          <router-link :to="'/home'" class="router">
            <section class="item_left">
              <img :src="imgUrl + item.image_path" class="restaurant_img">
            </section>
            <section class="item_right">
              <div class="item_right_text">
                <p>
                  <span>{{item.name}}</span>
                </p>
                <p>月售{{item.recent_order_num}}单</p>
                <p>{{item.float_minimum_order_amount}}元起送 / 距离{{item.distance}}</p>
              </div>
            </section>
          </router-link>
        </li>
      </ul>
    </section>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import axios from 'axios';
import headTop from '../../components/header/head.vue';
import footGuide from '../../components/footer/footGuide.vue'
export default {
  name: 'Search',

  data() {
    return {
      searchValue: '', //输入内容
      restaurantList: [], //请求后的数据
      filteredRestaurantList: [],  //过滤后的数据
      imgUrl: 'https://elm.cangdu.org/img/',
    };
  },

  mounted() {
    
  },

  methods: {
    //请求数据
    searchTarget(){
      axios.get('http://localhost:3008/shoplist').then(res => {
      this.restaurantList = res.data
      this.filterRestaurants(this.searchValue);
      })
    },
    //过滤器
    filterRestaurants(searchValue) {
    this.filteredRestaurantList = this.restaurantList.filter(restaurant => {
      return restaurant.name.includes(searchValue);
    });
  }
  },

  components: {
    headTop,
    footGuide
  }
};
</script>

<style lang="less" scoped>
  @import '../../style/mixin.less';
  
  .search_page{
    margin-bottom: 2rem;
  }
  .search_form{
    background-color: #fff;
    padding: 0.5rem;
    display: flex;
    input{
      height: 1.5rem;
    }
    .search_input{
      flex: 4;
      border: 0.025rem solid @bc;
      .sc(0.65rem, #333);
      border-radius: 0.125rem;
      background-color: #f2f2f2;
      font-weight: bold;
      padding: 0 0.25rem;
    }
    .search_submit{
      flex: 1;
      border: 0.025rem solid @blue;
      margin-left: .2rem;
      .sc(0.65rem, #fff);
      border-radius: 0.125rem;
      background-color: @blue;
      font-weight: bold;
      padding: 0 0.125rem;
    }
  }
  .title_restaurant{
    font-size: 0.6rem;
    line-height: 2rem;
    text-indent: 0.5rem;
    font-weight: bold;
    color: #666;
  }
  .list_container{
    background-color: #fff;
  }
  .router{
    display: flex;
    flex: auto
  }
  .list_li{
    display: flex;
    padding: 0.5rem;
    border-bottom: 0.025rem solid @bc;
    .item_left{
      margin-right: 0.25rem;
      .restaurant_img{
        .wh(1.7rem, 1.7rem);
      }
    }
    .item_right{
      font-size: 0.55rem;
      flex: 1;
      .item_right_text{
        width: 100%;
        padding-bottom: 0.25rem;
        border-bottom: 0.025rem solid @bc;
        p{
          line-height: .9rem;
        }
      }
    }
  }
</style>