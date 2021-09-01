<template>
  <!-- 顶部通栏 -->
  <Nav></Nav>
  <!-- 头部导航 -->
  <Header></Header>
  <!-- 主题内容 -->
  <router-view></router-view>
  <!-- 底部 -->
  <Footer></Footer>
</template>

<script>

import Nav from "../components/nav.vue";
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
export default {
  components: {
    Nav,
    Footer,
    Header,
  },
};
</script>
<style lang="less" scoped></style>
