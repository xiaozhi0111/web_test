<template>
  <div class="json">
      <json-viewer :value="jsonData" :expand-depth=5 copyable sort ></json-viewer>
  </div>
</template>

<script>
export default {
    name:'JSON',
    data(){
        return{
            jsonData:{
                dbg_xml: "",
                description: "识别成功",
                error_code: 0,
                recognize_time: 311,
                request_id: "699cb8a6c1ef11eca20500163e0d18d7",
                result: {
                    chinese_key: "出生日期",
                    position: {left: 1368, top: 558, width: 268, height: 40},
                    height: 40,
                    left: 1368,
                    top: 558,
                    width: 268,
                    quad: "1368,558,1636,558,1636,598,1368,598",
                    score: 0.99962318,
                    words: "1977.12.02",
                    birth_place: {words: "辽宁省普兰店市", chinese_key: "出生地", score: 0.99996221},
                    chinese_key: "出生地",
                    position: {left: 439, top: 440, width: 368, height: 56},
                    height: 56,
                    left: 439,
                    top: 440,
                    width: 368,
                    quad: "439,440,807,440,807,496,439,496",
                    score: 0.99996221,
                    words: "辽宁省普兰店市",
                    blood_type: {words: "不明", chinese_key: "血型", score: 0.99956125,},
                    chinese_key: "血型",
                    position: {left: 1596, top: 757, width: 110, height: 56},
                    height: 56,
                    left: 1596,
                    top: 757,
                    width: 110,
                    quad: "1596,757,1706,757,1706,813,1596,813",
                    score: 0.99956125,
                    words: "不明",
                    education: {words: "中专毕业", chinese_key: "文化程度", score: 0.99876666,},
                    chinese_key: "文化程度",
                    position: {left: 449, top: 869, width: 209, height: 58},
                    height: 58,
                    left: 449,
                    top: 869,
                    width: 209,
                    quad: "449,869,658,869,658,927,449,927",
                    score: 0.99876666,
                    words: "中专毕业",
                    employer: {words: "大连皮子窝化工厂新滩分场", chinese_key: "服务处所", score: 0.99984139,},
                    chinese_key: "服务处所",
                    position: {left: 447, top: 968, width: 631, height: 61},
                    height: 61,
                    left: 447,
                    top: 968,
                    width: 631,
                    quad: "447,971,1078,968,1078,1025,447,1029",
                    score: 0.99984139,
                    words: "大连皮子窝化工厂新滩分场",
                    faith: {words: "无宗教信仰", chinese_key: "宗教信仰", score: 0.99991208,},
                    chinese_key: "宗教信仰",
                    position: {left: 1459, top: 658, width: 265, height: 53},
                    height: 53,
                    left: 1459,
                    top: 658,
                    width: 265,
                    quad: "1459,658,1724,658,1724,711,1459,711",
                    score: 0.99991208,
                    words: "无宗教信仰",
                    from: {words: "辽宁省普兰店市", chinese_key: "籍贯", score: 0.99996406,},
                    chinese_key: "籍贯",
                    position: {left: 441, top: 540, width: 368, height: 56},
                    height: 56,
                    left: 441,
                    top: 540,
                    width: 368,
                    quad: "441,540,809,540,809,596,441,596",
                    score: 0.99996406,
                    words: "辽宁省普兰店市",
                    gender: {words: "男", chinese_key: "性别", score: 0.99999642,},
                    chinese_key: "性别",
                    position: {left: 1364, top: 342, width: 54, height: 54},
                    height: 54,
                    left: 1364,
                    top: 342,
                    width: 54,
                    quad: "1364,342,1418,342,1418,396,1364,396",
                    score: 0.99999642,
                    words: "男",
                    height: {words: "175cm", chinese_key: "身高", score: 0.9998768,},
                    chinese_key: "身高",
                    position: {left: 1247, top: 767, width: 131, height: 40},
                    height: 40,
                    left: 1247,
                    top: 767,
                    width: 131,
                    quad: "1247,767,1378,767,1378,807,1247,807",
                    score: 0.9998768,
                    words: "175cm",
                    idno: {words: "130224197712026835", chinese_key: "公民身份证件编号", score: 0.99998242,},
                    chinese_key: "公民身份证件编号",
                    position: {left: 445, top: 769, width: 470, height: 40},
                    height: 40,
                    left: 445,
                    top: 769,
                    width: 470,
                    quad: "445,769,915,769,915,809,445,809",
                    score: 0.99998242,
                    words: "130224197712026835",
                    marriage: {words: "已婚", chinese_key: "婚姻状况", score: 0.99981254,},
                    chinese_key: "婚姻状况",
                    position: {left: 1044, top: 871, width: 103, height: 54},
                    height: 54,
                    left: 1044,
                    top: 871,
                    width: 103,
                    quad: "1044,871,1147,871,1147,925,1044,925",
                    score: 0.99981254,
                    words: "已婚",
                    military_serve: {words: "未服兵役", chinese_key: "兵役状况", score: 0.99982232,},
                    chinese_key: "兵役状况",
                    position: {left: 1435, top: 869, width: 213, height: 56},
                    height: 56,
                    left: 1435,
                    top: 869,
                    width: 213,
                    quad: "1435,869,1648,869,1648,925,1435,925",
                    score: 0.99982232,
                    words: "未服兵役",
                    name: {words: "王东", chinese_key: "户主姓名", score: 0.99972451,},
                    chinese_key: "户主姓名",
                    position: {left: 441, top: 232, width: 116, height: 60},
                    height: 60,
                    left: 441,
                    top: 232,
                    width: 116,
                    quad: "441,232,557,232,557,292,441,292",
                    score: 0.99972451,
                    words: "王东",
                    nation: {words: "汉族", chinese_key: "民族", score: 0.99988198,},
                    chinese_key: "民族",
                    position: {left: 1364, top: 440, width: 107, height: 56},
                    height: 56,
                    left: 1364,
                    top: 440,
                    width: 107,
                    quad: "1364,440,1471,440,1471,496,1364,496",
                    score: 0.99988198,
                    words: "汉族",
                    occupation: {words: "生产员", chinese_key: "职业", score: 0.9999373,},
                    chinese_key: "职业",
                    position: {left: 1437, top: 969, width: 159, height: 58},
                    height: 58,
                    left: 1437,
                    top: 969,
                    width: 159,
                    quad: "1437,969,1596,969,1596,1027,1437,1027",
                    score: 0.9999373,
                    words: "生产员",
                    other_address: {words: "", chinese_key: "本市(县)其他住址", score: 0, position: {left: 0, top: 0, width: 0, height: 0},},
                    chinese_key: "本市(县)其他住址",
                    position: {left: 0, top: 0, width: 0, height: 0},
                    height: 0,
                    left: 0,
                    top: 0,
                    width: 0,
                    quad: "0,0,0,0,0,0,0,0",
                    score: 0,
                    words: "",
                    register_datetime: {words: "2008年06月10日", chinese_key: "登记日期", score: 0, position: {left: 0, top: 0, width: 0, height: 0},},
                    chinese_key: "登记日期",
                    position: {left: 0, top: 0, width: 0, height: 0},
                    height: 0,
                    left: 0,
                    top: 0,
                    width: 0,
                    quad: "0,0,0,0,0,0,0,0",
                    score: 0,
                    words: "2008年06月10日",
                    relationship: {words: "户主", chinese_key: "户主或与户主关系", score: 0.99973685,},
                    chinese_key: "户主或与户主关系",
                    position: {left: 1362, top: 220, width: 107, height: 60},
                    height: 60,
                    left: 1362,
                    top: 220,
                    width: 107,
                    quad: "1362,220,1469,220,1469,280,1362,280",
                    score: 0.99973685,
                    words: "户主",
                    used_name: {words: "", chinese_key: "曾用名", score: 0, position: {left: 0, top: 0, width: 0, height: 0},},
                    chinese_key: "曾用名",
                    position: {left: 0, top: 0, width: 0, height: 0},
                    height: 0,
                    left: 0,
                    top: 0,
                    width: 0,
                    quad: "0,0,0,0,0,0,0,0",
                    score: 0,
                    words: "",
                    when_to_address: {words: "2008.06.10由皮口镇海北路22号235", chinese_key: "何时由何地迁来本址", score: 0.95005393,},
                    chinese_key: "何时由何地迁来本址",
                    position: {left: 561, top: 1201, width: 242, height: 52},
                    height: 52,
                    left: 561,
                    top: 1201,
                    width: 242,
                    quad: "561,1201,803,1201,803,1253,561,1253",
                    score: 0.95005393,
                    words: "2008.06.10由皮口镇海北路22号235",
                    when_to_city: {words: "", chinese_key: "何时由何地迁来本市(县)", score: 0, position: {left: 0, top: 0, width: 0, height: 0},},
                    chinese_key: "何时由何地迁来本市(县)",
                    position: {left: 0, top: 0, width: 0, height: 0},
                    height: 0,
                    left: 0,
                    top: 0,
                    width: 0,
                    quad: "0,0,0,0,0,0,0,0",
                    score: 0,
                    words: "",
                },
                rotation: 0,
                template_name: "register",
            }
        }
    },
    mounted(){
        // console.log(this.$message,'this指的是');
        let that = this;
        setTimeout(() => {
            that.$message({type:'success',message:'成功调用的方法',duration:3000})
        }, 1000);
        setTimeout(() => {
            that.$message({type:'warning',message:'警告调用的方法',duration:4000})
        }, 2000);
        setTimeout(() => {
            that.$message({type:'error',message:'失败调用的方法',duration:5000})
        }, 3000);
    }
}
</script>

<style lang="stylus" scoped>
.json
    width: 90%
    height: 500px
    border: 1px solid #ccc
    border-radius: 5px
    margin: 10px auto
    overflow: auto
</style>