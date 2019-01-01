<template>
    <div class="login">
        <div class="header">
            <img :src="imgLogo" alt="">
        </div>
        <div class="middle">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="loginForm.username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" v-model="loginForm.password"></mt-field>
            <mt-button class="login_btn" type="default" @click="handleLogin">登陆</mt-button>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        name: "login",
        components:{

        },
        data(){
            return{
                imgLogo:require('@/assets/imgLib/ui_logo.jpg'),
                loginForm:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            handleLogin(){
                if(this.loginForm.username==''||this.loginForm.password==''){
                    Toast('用户信息不全！');
                }else {
                    this.$router.push({path:'/home'})
                }
            }
        }
    }
</script>

<style lang="scss">
      .login{
        .header{
            width: 150px;
            margin: auto;
            padding-top: 50px;
            img{
                width: 100%;
            }
        }
          .middle{
              margin-top: 50px;
              .login_btn{
                  width: 100%;
                  margin-top: 30px;
              }

          }
      }
</style>