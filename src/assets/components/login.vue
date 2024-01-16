<template>
  <div class="login">
    <div id="reminder" class="reminder">
      <span>账户或密码输入错误</span>
    </div>
    <div class="loginBox">
      <div class="pageName"><a href="#">登录</a></div>
      <el-form :model="ruleForm" ref="ruleForm">
        <div class="userNameBox">
          <el-input type="text" v-model="ruleForm.username" placeholder="请输入账户" autofocus="autofocus"></el-input>
        </div>

        <div class="pswBox">
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" show-password></el-input>
        </div>
      </el-form>
      <div class="buttonBox">
        <el-row>
          <el-button type="primary" @click="login('ruleForm')" round>登录</el-button>
          <router-link to="/register">
            <el-button type="primary" round>注册</el-button>
          </router-link>
        </el-row>
        <div class="forgetPsw"><el-button type="text">忘记密码</el-button></div>

      </div>
    </div>
  </div>
</template>

<script >
import axios from 'axios'
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      loading: false, // 是否显示加载动画
    };
  },
  methods: {
    login(formName) {
      console.log("你点击“登录”按钮了");

      // 处理登录逻辑:
      this.$refs[formName].validate((valid) => {// 通过 $refs 获取表单引用并调用 validate 方法
        // 点击登录后，让登录按钮开始转圈圈（展示加载动画）
        this.loading = true;
        if (valid) {
          let that = this;
          // 使用 axios 将登录信息发送到后端
          console.log(that.ruleForm.username)
          axios.post('http://localhost:8890/login', {
            username: that.ruleForm.username,
            password: that.ruleForm.password,
          }, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }).then((res) => { // 当收到后端的响应时执行该括号内的代码，res 为响应信息，也就是后端返回的信息
            if (res.data === 1) {  // 当响应的编码为 0 时，说明登录成功
              console.log("登录成功");
              // 将用户信息存储到sessionStorage中
              sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
              // 跳转页面到首页
              // this.$router.push('./views/home.vue');
              this.$router.push('./home');

              // 将用户名存储到state数据中
              // this.$store.dispatch('asyncUpdateUser',{name:this.ruleForm.username})


          
            } else {  // 当响应的编码不为 0 时，说明登录失败
              console.log("账户或密码输入错误");
              document.getElementById("reminder").style.display = "inline";
              setTimeout(
                function() { 
                  document.getElementById("reminder").style.display = "none";
                }, 3000); 
            }
            // 不管响应成功还是失败，收到后端响应的消息后就不再让登录按钮显示加载动画了
            that.loading = false;
            console.log(res);
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  // components: { router }
}
</script>

<style scoped>
.login {
  padding: 8rem 2rem;
}

.loginBox {
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #b8b8b8;
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
  letter-spacing: 5px;
}

form>div {
  padding: 10px;
}

.buttonBox {
  text-align: center;
}

.el-button {
  min-width: 100px;
  letter-spacing: 5px;
  margin: 10px;
}

.forgetPsw>span {
  font-size: 14px;
  color: #b8b8b8;
  cursor: default;

}


@media screen and (max-width: 440px) {
  .loginBox {
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 1px 1px 10px #b8b8b8;
    padding: 10px;
    border-top: 10px solid #409EFF;
    width: 320px;
    margin: 0 auto;
  }

  .buttonBox>div {
    padding: 1px;
  }
}

.reminder {
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translate(-50%, 5%);
  text-align: center;
  color: rgb(255, 95, 95);
  border: 1px solid rgb(255, 95, 95);
  padding: 10px 15px;
  background-color: #fff7f7;
  margin: 0 auto;
  border-radius: 5px;
  display: none;
}

.reminder>span {
  margin: 20px;
}
</style>
