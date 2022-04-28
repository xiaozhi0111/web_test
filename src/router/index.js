import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home';
import Login from '@/view/Login';

//测试页面文件
import Test from '@/view/Test';
import barEchart from '@/view/test/echarts/barEchart';
import Map from '@/view/test/echarts/Map';
import Canvas from '@/view/test/echarts/Canvas';
import WangEditor from '@/view/common/wangEditor';
import ViewTable from '@/view/common/ViewTable';
import GroundGlass from '@/view/test/GroundGlass';
import Json from '@/view/test/Json';
import Swiper from '@/view/test/swiper';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/login'
    },
    {
      path: '/home',
      name:'首页',
      component: Home
    },
    {
      path: '/login',
      name: '登录页',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      children:[
        {
          path:'barEchart',
          name:'BarEchart',
          component:barEchart
        },
        {
          path:'map',
          name:'Map',
          component:Map
        },
        {
          path:'canvas',
          name:'Canvas',
          component:Canvas
        },
        {
          path:'wangEditor',
          name:'WangEditor',
          component:WangEditor
        },
        {
          path:'viewTable',
          name:'ViewTable',
          component:ViewTable
        },{
          path:'groundGlass',
          name:'毛玻璃',
          component:GroundGlass
        },{
          path:'json',
          name:'json格式化工具',
          component:Json
        },{
          path:'swiper',
          name:'swiper轮播图',
          component:Swiper
        }
      ]
    }
  ]
})
