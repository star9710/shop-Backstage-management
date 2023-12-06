<!-- 页面顶部组件 -->
<template>
  <div class="pageTop">
    <div class="pageTopLeft">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="pageTopRight">
      <div class="demo-type">
        <el-avatar :size="60" src="https://empty" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
      errorHandler() {
        return true
      }
    }
}

</script>

<style scoped>
.pageTopLeft {
  
}
.pageTopRight {
  position: relative;
}
</style>
