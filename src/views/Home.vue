<template>
  <div class="home">
      <!-- 轮播 -->
      <lunbobanner :list="state.banners"></lunbobanner>
      <!-- 新鲜毫无 -->
    <div class="home-new">
      <div class="home-panel">
        <div class="container">
          <div class="head">
            <h3>新鲜好物<small>新鲜出炉 品质靠谱</small></h3>
            <a
              aria-current="page"
              href="#/"
              class="router-link-active router-link-exact-active xtx-more"
              ><span>查看全部</span><i class="iconfont icon-angle-right"></i
            ></a>
          </div>
          <div style="position: relative; height: 426px;">
            <ul class="goods-list">
              <li v-for="item in state.newlist" :key="item.id">
                <a href="#" class=""
                  ><img :src="item.picture" alt="" />
                  <p class="name ellipsis">{{ item.name }}</p>
                  <p class="price">¥{{ item.price }}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "@vue/runtime-core";
import { getNewGoods,getBanners } from "../api/index";
import lunbobanner from "../components/lunbobanner.vue";
export default {
  components: {lunbobanner},
  setup() {
    let state = reactive({
      newlist: [],
      banners:[]
    });
    onMounted(async () => {
      let newGoodList = await getNewGoods();
      state.newlist = newGoodList.data.result;
    //   console.log(state.newlist);

      let banners=await getBanners()
      state.banners=banners.data.result
     // console.log( state.banners);
    });
    return {
      state,
    };
  },
};
</script>

<style lang="less" scoped>
.home-panel {
  background-color: #fff;
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: #cf4444;
    }
  }
}
</style>
