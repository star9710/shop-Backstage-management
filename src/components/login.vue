<script >
export default {
  data() {
    return {
      input: '',
      inputPassword:''
    }
  }
}
</script>

<template>
  <div class="login">
    
    <div class="loginBox" >
      <div class="pageName"><a href="#">登录</a></div>
      <div class="userNameBox">
        <el-input v-model="input" placeholder="请输入账户"  autofocus="autofocus"></el-input>
      </div>
      <div class="pswBox">
        <el-input placeholder="请输入密码" v-model="inputPassword" show-password></el-input>
      </div>
      <div class="buttonBox">
        <el-row>
          <el-button type="primary" round>登录</el-button>
          <el-button type="primary" round>注册</el-button>
        </el-row>
        <div class="forgetPsw" ><el-button type="text">忘记密码</el-button></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loginBox {
  margin: 0 auto;
  border-radius:10px;
  box-shadow:1px 1px 10px #b8b8b8;
  padding: 20px;
  border-top: 10px solid #409EFF;
  width: 360px;
}
.pageName {
  margin: auto;
  text-align: center;
}
.pageName>a {
  font-size: 25px;
  color: #409EFF;
  font-weight: bold;
  letter-spacing:5px;
}
.loginBox>div {
  padding: 10px;
}

.buttonBox {
  text-align: center;
}
.buttonBox>div {
padding: 10px;
}
.el-row>button {
  min-width: 100px;
  letter-spacing:5px;
}
.forgetPsw>span {
  font-size: 14px;
  color: #b8b8b8;
  cursor:default;

}
/* .forgetPsw>span:hover{
  color: #409EFF;
  cursor:default;
} */

@media screen and (max-width: 440px) {
  .loginBox {
  margin: 0 auto;
  border-radius:10px;
  box-shadow:1px 1px 10px #b8b8b8;
  padding: 20px;
  border-top: 10px solid #409EFF;
  width: 320px;
  margin: 0 auto;
}
}
</style>
