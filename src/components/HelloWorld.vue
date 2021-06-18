<template>
  <div class="hello">
    <img src="../assets/image/main_bg.png" alt="背景">
    <div class="title">数据可视化后台</div>
    <div class="login">
      <div class="user">
        <div class="user_title">用户</div>
        <div class="user_line">|</div>
        <input type="text" v-model="user">
      </div>
      <div class="password">
        <div class="password_title">密码</div>
        <div class="password_line">|</div>
        <input type="password" v-model="password">
      </div>
      <div class="login_but" @click="login()">
        <div>登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router'
  import {
    ElMessage
  } from 'element-plus'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        user: '',
        password: '',
      }
    },
    props: {
      msg: String
    },
    methods: {
      login() {
        if (this.user === 'admin' && this.password === '123') {
          router.push({
            path: '/manage'
          });
        } else if (this.user !== 'admin' && this.password === '123') {
          ElMessage({
            showClose: true,
            message: '用户名错误，请重新输入！',
            type: 'error'
          });
          this.user = '';
          this.password = '';
        } else if (this.user === 'admin' && this.password !== '123') {
          ElMessage({
            showClose: true,
            message: '密码错误，请重新输入！',
            type: 'error'
          });
          this.user = '';
          this.password = '';
        } else if (this.user !== 'admin' && this.password !== '123') {
          ElMessage({
            showClose: true,
            message: '用户名&密码 错误，请重新输入！',
            type: 'error'
          });
          this.user = '';
          this.password = '';
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @font-face {
    font-family: 'typeface1';
    src: url('../assets/font/王汉宗中行书繁.ttf');
  }

  body {
    margin: 0px;
  }

  a {
    text-decoration: none;
    color: aliceblue;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: -1;
  }

  .title {
    position: absolute;
    font-size: 32px;
    color: #ffffff;
    top: 17%;
    left: 14%;
    letter-spacing: 3px;
    text-shadow: 5px 5px 5px #493ea4;
    font-family: typeface1;
  }

  .login {
    /* border: 1px solid yellow; */
    position: absolute;
    width: 35%;
    height: 38%;
    top: 31%;
    left: 14%;
  }

  .user,
  .password {
    position: absolute;
    width: 50%;
    height: 16%;
    top: 22%;
    left: 11%;
    border: #75a6eb 1px solid;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cccccc;
    font-size: 18px;
  }

  .user:hover {
    border-color: #87eef7;
  }

  .password:hover {
    border-color: #87eef7;
  }

  .password {
    top: 50%;
  }

  .user>input {
    background: none;
    outline: none;
    border: none;
    width: 51%;
    height: 85%;
    font-size: 18px;
    color: aliceblue;
  }

  .password>input {
    background: none;
    outline: none;
    border: none;
    width: 51%;
    height: 85%;
    font-size: 18px;
    color: aliceblue;
  }

  .user_title,
  .password_title {
    margin-left: -3%;
    margin-right: 10%;
  }

  .user_line,
  .password_line {
    margin-right: 10%;
  }

  .login_but {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 50%;
    height: 16%;
    top: 77%;
    left: 11%;
    border-radius: 25px;
    color: aliceblue;
    background-image: linear-gradient(to right, #38cbf0, #563cf6);
    cursor: pointer;
  }

  .login_but:hover {
    transform: scale(1.03);
    box-shadow: 4px 7px 3px 0px #473da2;
  }
</style>