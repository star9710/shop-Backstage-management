<template>
  <div class="contentPage">
    <h2>欢迎{{ user.uname }}！您的 uid 为{{ user.uid }}</h2>
    <router-link to="/login">
      <el-button> 退出登录 </el-button>
    </router-link>
      <div class="navMenu"></div>
      <div class="header"></div>
      <div class="exhibiArea"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        uname: "",
        uid: null,
      },
    };
  },
};
</script>

<style scoped>
</style>