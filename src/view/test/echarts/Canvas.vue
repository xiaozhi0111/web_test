<template>
  <div class="canvas">
      <h3>Canvas</h3>
      <canvas id="canvas_init" width="300" height="300"></canvas>
      <canvas id="canvas_test" width="300" height="300"></canvas>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){},
    mounted(){
        // this.canvasInit();
        this.canvasTest();
    },
    methods:{
        canvasTest(){
            let canvas = document.getElementById('canvas_test');
            let ctx = canvas.getContext('2d');

            ctx.save();

            ctx.fillStyle = 'skyblue';
            ctx.fillRect(10,10,30,15);

            ctx.translate(100,100);
            
            ctx.save();
            
            ctx.fillStyle = 'red';
            ctx.fillRect(0,0,40,20);
            
            ctx.restore();
            ctx.translate(50,50);

            ctx.fillStyle = 'blue';
            ctx.fillRect(0,0,50,25);

        },
        canvasInit(){
            let canvas = document.getElementById('canvas_init');
            let ctx = canvas.getContext('2d');
            ctx.save(); //保存坐标原点平移之前的位置
            ctx.clearRect(0,0,300,300); //清空画布
            // ctx.arc(0,0,30,0,2*Math.PI);     //从0，0的位置以300为半径，从0到epi画圆弧
            // ctx.fill();                      //对上边画的图进行填充。


            // ctx.fillStyle = 'rgb(200,0,0)';      //设置填充样式
            // ctx.fillRect(10,10,55,50);           总10，10画一个宽55高50的图案，并且填充。

            // ctx.fillStyle = 'rgba(0,0,200,0.5)';
            // ctx.fillRect(30,30,55,50);

            ctx.beginPath();            //路径开始。
            ctx.translate(150,150);         //移动原点位置，相对于现在的坐标。
            ctx.strokeStyle = '#aaa'        //设置线条的样式。
            ctx.arc(0,0,100,0,2*Math.PI);   
            ctx.stroke();                   //画线条。

            let time = new Date();
            ctx.rotate(2*Math.PI/60*time.getSeconds() + 2*Math.PI/60000*time.getMilliseconds());                //旋转对应的弧度。
            ctx.translate(100,0);

            ctx.beginPath();
            ctx.strokeStyle = '#bbb';
            ctx.arc(0,0,30,0,2*Math.PI);
            ctx.stroke();

            ctx.rotate(2*Math.PI/60*time.getSeconds() + 2*Math.PI/60000*time.getMilliseconds());            
            ctx.translate(30,0);

            ctx.beginPath();
            ctx.strokeStyle = '#ccc';
            ctx.arc(0,0,10,0,2*Math.PI);
            ctx.stroke();

            ctx.restore();          //回复到最初状态。
            // this.canvasInit();
            setTimeout(() => {
                this.canvasInit();
            }, 1000);
        }
    }
}
</script>

<style lnag='stylus' stoped>
.canvas {
    width: 500px;
    height: 100vh;
    padding: 0 1%;
    margin: 0px auto;
    background: #ddd;
}
canvas{
    border: 1px solid #ccc;
}
</style>