<template>
  <div class="map">
    <h3>this is map</h3>
    <div id="map" style="width: 100%; height: 100vh"></div>
  </div>
</template>

<script>
import { getMapJson } from "../../../api/api";
export default {
  data() {
    return {};
  },
  created(){},
  mounted() {
    // this.mapInit();
    this.setOptionInit();
  },
  methods: {
    mapInit() {
      let myMap = this.echarts.init(document.getElementById("map"));
      getMapJson().then((res) => {
        console.log(res, "aaaaa");
        let data = res.data;
        let busLines = [].concat.apply(
          [],
          data.map(function (busLine, idx) {
            let prevPt = [];
            let points = [];
            for (let i = 0; i < busLine.length; i += 2) {
              let pt = [busLine[i], busLine[i + 1]];
              if (i > 0) {
                pt = [prevPt[0] + pt[0], prevPt[1] + pt[1]];
              }
              prevPt = pt;
              points.push([pt[0] / 1e4, pt[1] / 1e4]);
            }
            return {
              coords: points,
            };
          })
        );
        let mapOption = {
          bmap: {
            center: [116.46, 39.92],
            zoom: 10,
            roam: true,
            mapStyle: {
              styleJson: [
                {
                  featureType: "water",
                  elementType: "all",
                  stylers: {
                    color: "#d1d1d1",
                  },
                },
                {
                  featureType: "land",
                  elementType: "all",
                  stylers: {
                    color: "#f3f3f3",
                  },
                },
                {
                  featureType: "railway",
                  elementType: "all",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "highway",
                  elementType: "all",
                  stylers: {
                    color: "#fdfdfd",
                  },
                },
                {
                  featureType: "highway",
                  elementType: "labels",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "arterial",
                  elementType: "geometry",
                  stylers: {
                    color: "#fefefe",
                  },
                },
                {
                  featureType: "arterial",
                  elementType: "geometry.fill",
                  stylers: {
                    color: "#fefefe",
                  },
                },
                {
                  featureType: "poi",
                  elementType: "all",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "green",
                  elementType: "all",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "subway",
                  elementType: "all",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "manmade",
                  elementType: "all",
                  stylers: {
                    color: "#d1d1d1",
                  },
                },
                {
                  featureType: "local",
                  elementType: "all",
                  stylers: {
                    color: "#d1d1d1",
                  },
                },
                {
                  featureType: "arterial",
                  elementType: "labels",
                  stylers: {
                    visibility: "off",
                  },
                },
                {
                  featureType: "boundary",
                  elementType: "all",
                  stylers: {
                    color: "#fefefe",
                  },
                },
                {
                  featureType: "building",
                  elementType: "all",
                  stylers: {
                    color: "#d1d1d1",
                  },
                },
                {
                  featureType: "label",
                  elementType: "labels.text.fill",
                  stylers: {
                    color: "#999999",
                  },
                },
              ],
            },
          },
          series: [
            {
              type: "lines",
              coordinateSystem: "bmap",
              polyline: true,
              data: busLines,
              silent: true,
              lineStyle: {
                color: "rgb(200, 35, 45)",
                opacity: 0.2,
                width: 1,
              },
              progressiveThreshold: 500,
              progressive: 200,
            },
          ],
        };
        myMap.setOption(mapOption);
      });
    },
    setOptionInit(){
        let myMap = this.echarts.init(document.getElementById("map"));
        let options =  {
            tooltip: {
                triggerOn: "mousemove",   //mousemove、click
                padding:8,
                borderWidth:1,
                borderColor:'#409eff',
                backgroundColor:'rgba(255,255,255,0.7)',
                textStyle:{
                    color:'#000000',
                    fontSize:13
                },
                formatter: function(e, t, n) {
                    let data = e.data;
                    //模拟数据
                    data.specialImportant = Math.random()*1000 | 0;
                    data.import = Math.random()*1000 | 0;
                    data.compare = Math.random()*1000 | 0;
                    data.common = Math.random()*1000 | 0;
                    data.specail = Math.random()*1000 | 0;

                    let context = `
                    <div>
                        <p><b style="font-size:15px;">${data.name}</b>(2020年第一季度)</p>
                        <p class="tooltip_style"><span class="tooltip_left">事件总数</span><span class="tooltip_right">${data.value}</span></p>
                        <p class="tooltip_style"><span class="tooltip_left">特别重大事件</span><span class="tooltip_right">${data.specialImportant}</span></p>
                        <p class="tooltip_style"><span class="tooltip_left">重大事件</span><span class="tooltip_right">${data.import}</span></p>
                        <p class="tooltip_style"><span class="tooltip_left">较大事件</span><span class="tooltip_right">${data.compare}</span></p>
                        <p class="tooltip_style"><span class="tooltip_left">一般事件</span><span class="tooltip_right">${data.common}</span></p>
                        <p class="tooltip_style"><span class="tooltip_left">特写事件</span><span class="tooltip_right">${data.specail}</span></p>
                    </div>
                    `
                    return context;
                }
            },
            visualMap: {
                show:true,
                left: 26,
                bottom: 40,
                showLabel:true,
                pieces: [
                    {
                    gte: 100,
                    label: ">= 1000",
                    color: "#1f307b"
                    },
                    {
                    gte: 500,
                    lt: 999,
                    label: "500 - 999",
                    color: "#3c57ce"
                    },
                    {
                    gte: 100,
                    lt:499,
                    label: "100 - 499",
                    color: "#6f83db"
                    },
                    {
                    gte: 10,
                    lt: 99,
                    label: "10 - 99",
                    color: "#9face7"
                    },
                    {
                    lt:10,
                    label:'<10',
                    color: "#bcc5ee"
                    }
                ]
            },
            geo: {
                map: "china",
                scaleLimit: {
                    min: 1,
                    max: 2
                },
                zoom: 1,
                top: 120,
                label: {
                    normal: {
                    show:true,
                    fontSize: "14",
                    color: "rgba(0,0,0,0.7)"
                    }
                },
                itemStyle: {
                    normal: {
                    //shadowBlur: 50,
                    //shadowColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: "rgba(0, 0, 0, 0.2)"
                    },
                    emphasis: {
                    areaColor: "#f2d5ad",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    borderWidth: 0
                    }
                }
            },
            series: [{
                name: "突发事件",
                type: "map",
                geoIndex: 0,
                data:[
                    {
                    name: "南海诸岛",
                    value: 100,
                    eventTotal:100,
                    specialImportant:10,
                    import:10,
                    compare:10,
                    common:40,
                    specail:20
                    },
                    {
                    name: "北京",
                    value: 540
                    },
                    {
                    name: "天津",
                    value: 130
                    },
                    {
                    name: "上海",
                    value: 400
                    },
                    {
                    name: "重庆",
                    value: 750
                    },
                    {
                    name: "河北",
                    value: 130
                    },
                    {
                    name: "河南",
                    value: 830
                    },
                    {
                    name: "云南",
                    value: 110
                    },
                    {
                    name: "辽宁",
                    value: 19
                    },
                    {
                    name: "黑龙江",
                    value: 150
                    },
                    {
                    name: "湖南",
                    value: 690
                    },
                    {
                    name: "安徽",
                    value: 60
                    },
                    {
                    name: "山东",
                    value: 39
                    },
                    {
                    name: "新疆",
                    value: 4
                    },
                    {
                    name: "江苏",
                    value: 31
                    },
                    {
                    name: "浙江",
                    value: 104
                    },
                    {
                    name: "江西",
                    value: 36
                    },
                    {
                    name: "湖北",
                    value: 52
                    },
                    {
                    name: "广西",
                    value: 33
                    },
                    {
                    name: "甘肃",
                    value: 7
                    },
                    {
                    name: "山西",
                    value: 5
                    },
                    {
                    name: "内蒙古",
                    value: 778
                    },
                    {
                    name: "陕西",
                    value: 22
                    },
                    {
                    name: "吉林",
                    value: 4
                    },
                    {
                    name: "福建",
                    value: 18
                    },
                    {
                    name: "贵州",
                    value: 5
                    },
                    {
                    name: "广东",
                    value: 98
                    },
                    {
                    name: "青海",
                    value: 1
                    },
                    {
                    name: "西藏",
                    value: 0
                    },
                    {
                    name: "四川",
                    value: 44
                    },
                    {
                    name: "宁夏",
                    value: 4
                    },
                    {
                    name: "海南",
                    value: 22
                    },
                    {
                    name: "台湾",
                    value: 3
                    },
                    {
                    name: "香港",
                    value: 5
                    },
                    {
                    name: "澳门",
                    value: 555
                    }
                ]
            }]
        };
        myMap.setOption(options);
    }
  },
};
</script>

<style>
</style>