<template>
  <div class="barEchart">
      <div id="echart" style="width:100%;height:100vh;"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.initEchart();
    },
    methods:{
        initEchart(){
            let myEchart = this.echarts.init(document.getElementById('echart'));
            let option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            }
            myEchart.setOption(option);
        }
    }
}
</script>

<style>

</style>