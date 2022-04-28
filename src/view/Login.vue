<template>
  <div class="GroundGlass">
      <div class="login_form">
        <fieldset class="layui-elem-field layui-field-title">
          <legend>{{ isRegister ? '注册页' : '登录页' }}</legend>
        </fieldset>
        <div>
            <Input prefix="ios-contact" v-model="userName" placeholder="用户名" style="width: auto" />
            <Input prefix="ios-lock" type="password" v-model="password" placeholder="密码" style="width: auto" />
            <div class="tab_register" @click="isRegister = !isRegister">{{ isRegister ? '已有账号' : '没有账号'}} <a>{{ (isRegister ? '去登录' : '去注册') + '>>'}}</a></div>
            <Button type="primary" v-if="!isRegister" @click="login">登录</Button>
            <Button type="primary" v-else @click="register">注册</Button>
        </div>
        <!-- <div class="layui-btn-container">
          <button type="button" class="layui-btn layui-btn-primary">原始按钮</button>
          <button type="button" class="layui-btn">默认按钮</button>
          <button type="button" class="layui-btn layui-btn-normal">百搭按钮</button>
          <button type="button" class="layui-btn layui-btn-warm">暖色按钮</button>
          <button type="button" class="layui-btn layui-btn-danger">警告按钮</button>
          <button type="button" class="layui-btn layui-btn-disabled">禁用按钮</button>
        </div>

        <div class="layui-btn-container">
          <button class="layui-btn layui-btn-primary layui-border">原始按钮</button>
          <button class="layui-btn layui-btn-primary layui-border-green">主色按钮</button>
          <button class="layui-btn layui-btn-primary layui-border-blue">百搭按钮</button>
          <button class="layui-btn layui-btn-primary layui-border-orange">暖色按钮</button>
          <button class="layui-btn layui-btn-primary layui-border-red">警告按钮</button>
          <button class="layui-btn layui-btn-primary layui-border-black">深色按钮</button>
        </div> -->
      </div>
  </div>
</template>

<script>
import { loginApi } from '../api/user.api';
import { mapMutations, mapGetters } from 'vuex';
export default {
    data() {
        return {
            isRegister: false,  //是否为注册
            userName: '',        //用户名
            password: '',       //密码
        }
    },
    computed:{
        ...mapGetters([
            'getToken'
        ])
    },
    mounted(){},
    methods:{
        ...mapMutations([
            'setToken',
        ]),
        //登录函数
        login(){
            // console.log(this.userName.length,this.password.length,'用户名和密码');
            if(this.userName == '' || this.password == ''){
                this.$Message.warning('用户名和密码不能为空！');
                return ;
            }
            if(this.userName.length>12){
                this.$Message.warning('用户名长度需要小于等于12！');
                return ;
            }
            if(this.password.length > 8 || this.password.length < 6){
                this.$Message.warning('密码长度需要再6-8位！')
            }
            loginApi({user_name:this.userName,password:this.password}).then((res)=>{
                console.log(res,'登录接口返回结果');
                if(res.status == 200){
                    res.data && res.data.result && this.$store.commit('setToken',res.data.result.token), sessionStorage.setItem('token',res.data.result.token);
                    this.$Message.success('登录成功');
                    this.$router.push('/home/mine');
                }
            })

        },
        register(){
            console.log(this.userName,this.password,'注册用户名和密码');
        }
    }
}
</script>

<style lang="stylus" scoped>
.GroundGlass
    width: 100%
    height: 100vh
    background-image: url('../../static/images/3.jpg')
    background-size: cover
    position relative
    .login_form
        width: 600px
        height: 300px
        background: rgba(255,255,255,.5);
        border-radius: 10px
        position absolute
        left: 50%
        top: 50%
        margin: -150px 0 0 -300px
        backdrop-filter: blur(6px);
        padding: 20px 50px
        .tab_register
            float: right
            margin-bottom: 20px
            a
                color: #e22
                cursor: pointer
</style>
<style lang="stylus" scoped>
.ivu-input-wrapper
    display: block
    width: 500px !important
    margin: 20px 0
.ivu-btn-primary
    display: block
    width: 500px
    margin: 20px 0
</style>
