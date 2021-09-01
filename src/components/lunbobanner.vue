<template>
  <div class="xtx-carousel" @mouseenter="stop" @mouseleave="start">
    <ul class="carousel-body">
      <li
        class="carousel-item"
        :class="{ fade: i === index }"
        v-for="(item, i) in list"
        :key="item.id"
      >
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:;" class="carousel-btn prev" @click.prevent="toggle(-1)"
      ><i class="iconfont icon-angle-left"></i
    ></a>
    <a href="javascript:;" class="carousel-btn next" @click.prevent="toggle(1)"
      ><i class="iconfont icon-angle-right"></i
    ></a>
    <div class="carousel-indicator">
      <span v-for="i in 5" :key="i"></span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getNewGoods } from "../api";
export default {
  name: "XtxCarousel",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    //自动轮播
    let index = ref(0); //轮播索引
    let timer = null;
    function autoplay() {
      clearInterval(timer);
      timer = setInterval(() => {
        index.value++;
        if (index.value >= props.list.length) {
          index.value = 0;
        }
      }, 2000);
    }
    autoplay();
    //鼠标移入，停止轮播
    function stop() {
      if (timer) {
        clearInterval(timer);
      }
    }
    //鼠标离开，开始轮播
    function start() {
      if (props.list.length > 0) {
        autoplay();
      }
    }
    //轮播的翻页
    function toggle(step) {
      let newindex = index.value + step;
      //判断是否超过长度
      if (newindex >= props.list.length) {
        index.value = 0;
        return;
      }
      if (newindex < 0) {
        index.value = props.list.length - 1;
        return;
      }
      index.value = newindex;
    }
    return {
      index,
      start,
      stop,
      toggle,
    };
  },
};
</script>
<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 500px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
