
<template>
  <div class="register">

    <div class="registerBox">
      <div class="pageName"><a href="#">注册</a></div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <div class="userNameBox">
          <el-input type="text" v-model="ruleForm.username" placeholder="请输入账户" autofocus="autofocus"></el-input>
        </div>
        <div class="pswBox">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" show-password
            autocomplete="off"></el-input>
        </div>
        <div class="pswBox">
          <el-input type="password" placeholder="请确认密码" v-model="ruleForm.password2" show-password></el-input>
        </div>
      </el-form>
      <div class="buttonBox">
        <el-row>
          <el-button type="primary" @click="register('ruleForm')" round>注册</el-button>
        </el-row>
        <router-link to="/login">
          <div class="forgetPsw"><el-button type="text">已有账号？去登录</el-button></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        password2: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空！", trigger: "blur" },
        ],
        password: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        password2: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  methods:{
    register(formName) {
      console.log("点击注册");
      // 注册逻辑
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
}
</script>


<style scoped>
.register {
  padding: 8rem 2rem;
}

.registerBox {
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

.buttonBox>div {
  padding: 10px;
}

.el-row>button {
  min-width: 100px;
  letter-spacing: 5px;
}

.forgetPsw>span {
  font-size: 14px;
  color: #b8b8b8;
  cursor: default;
}


@media screen and (max-width: 440px) {
  .registerBox {
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
</style>
