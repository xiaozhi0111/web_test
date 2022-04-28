<template>
  <div class="GroundGlass">
      <div class="login_form">
        <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
          <legend>登录页</legend>
        </fieldset>
        
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
export default {

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
        width: 900px
        height: 400px
        background: rgba(255,255,255,.5);
        border-radius: 10px
        position absolute
        left: 50%
        top: 50%
        margin: -200px 0 0 -450px
        backdrop-filter: blur(6px);
</style>