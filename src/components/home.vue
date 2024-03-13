<template>
  <el-container style="height: 100%;border: 1px solid #eee">
    <el-aside id="el-aside" width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '5']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>首页</template>
          <el-menu-item index="1-1">仪表盘</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>商品</template>
          <el-menu-item index="2-1">商品列表</el-menu-item>
          <el-menu-item index="2-2">添加商品</el-menu-item>
          <el-menu-item index="2-3">商品分类</el-menu-item>
          <el-menu-item index="2-4">商品类型</el-menu-item>

        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>订单</template>
          <el-menu-item index="3-1">订单列表</el-menu-item>
          <el-menu-item index="3-2">订单设置</el-menu-item>
          <el-menu-item index="3-3">退货申请处理</el-menu-item>
          <el-menu-item index="3-4">退货原因设置</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>营销</template>
          <el-menu-item index="4-1">秒杀活动列表</el-menu-item>
          <el-menu-item index="4-2">优惠券列表</el-menu-item>
          <el-menu-item index="4-3">品牌推荐</el-menu-item>
          <el-menu-item index="4-4">新品推荐</el-menu-item>
          <el-menu-item index="4-5">人气推荐</el-menu-item>
          <el-menu-item index="4-6">专题推荐</el-menu-item>
          <el-menu-item index="4-6">广告列表</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-setting"></i>权限</template>
          <el-menu-item index="5-1">用户列表</el-menu-item>
          <el-menu-item index="5-2">角色列表</el-menu-item>
          <el-menu-item index="5-3">菜单列表</el-menu-item>
          <el-menu-item index="5-4">资源列表</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <!-- 点击收缩 -->
        <i class="el-icon-s-fold" @click="toggleWidth" style=""></i>
        <el-dropdown>
          <!-- <i class="el-icon-setting" style="margin-right: 15px"></i> -->
          <span>王小虎</span>
          <span class="avatar">
            <img src="../assets/head.jpg" alt="">
          </span>
        </el-dropdown>

      </el-header>

      <el-main>
        <!-- 内容区域 -->
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      // tableData: Array(20).fill(item)
    }
  },
  methods: {
    toggleWidth() {
      // 点击按钮时切换导航栏宽度
      console.log("点击了");
      // 获取按钮元素
      var buttonElement = document.getElementById('el-aside');
      // 获取按钮当前的宽度
      var currentWidth = buttonElement.style.width;
      console.log(currentWidth);




      if (currentWidth === '200px') {
        // 修改样式宽度
        buttonElement.style.width = '60px';
      } else {
        // 修改样式宽度
        buttonElement.style.width = '200px';
      }
    }
  }
};
</script>

<style scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #FFFFFF;
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #dfdfdf;
}

.el-aside {
  color: #333;
}

.el-submenu {
  background-color: #B3C0D1;
}

.el-submenu__title {
  background-color: #304156;
}

.el-header {
  font-size: 20px !important;
}

.el-icon-s-fold {
  line-height: inherit !important;
  height: 100%;
}

.el-dropdown {
  display: flex;
  width: 120px;
  height: 100%;
  white-space: nowrap;
}



.el-main {
  background-color: #fff;
}

.avatar>img {
  width: 40px;
  border-radius: 50%;
  margin: 10px;

}
</style>