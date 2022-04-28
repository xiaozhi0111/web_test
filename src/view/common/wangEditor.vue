<template>
  <div class="wangEditor">
    <div class="textNeirong" ref="editor"></div>
  </div>
</template>

// <script>
import E from 'wangeditor';
export default {
    name:'wangEditor',
    props:{
        value:{
            type:String,
            default:''
        },
        isClear:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            editor:null,
            html:'<p>zhaoshuaige</p>',
            toolbarConfig:{},
            editorConfig:{placeholder:'请输入内容...'},
            mode:'default', //or'simple'
            info_:null,
            token:null, //token
        }
    },
    watch:{
        isClear:(val)=>{
            if(val){
                this.editor.txt.clear();    //清空编辑器内容
                this.info_ = null;
            }
        },
        value:(val)=>{
            if(val !== this.editor.txt.html){
                this.editor.txt.html(this.value);
            }
        }
    },
    mounted(){
        this.setEditor();
        this.editor.txt.html(this.value);
    },
    beforeDestroy(){
        this.editor.destroy();  //销毁编辑器
        this.editor = null
    },
    methods:{
        setEditor(){
            this.editor = new E(this.$refs.editor);
            this.editor.config.uploadImgShowBase64 = false;               //base 64存储图片
            this.editor.config.uploadImgServer = '/trans/oss/uploadImageOss';       //填写配置服务器地址
            // this.editor.config.uploadImgHeaders = {'Authorization' : this.token};   //自定义header
            this.editor.config.uploadFileName = 'file';         //后端接受上传文件的参数名
            this.editor.config.uploadImgMaxSize = 8 * 1024 * 1024;      //限制图片大小为2M
            this.editor.config.uploadImgMaxLength = 6;          //限制一次最多上传6张图片
            this.editor.config.uploaImgTimeout = 3* 60 *1000;       //设置超时时间
            //自定义onchange出发的延迟时间，默认为200ms
            this.editor.config.onchangeTimeout = 1000   //单位 ms

            this.editor.config.placeholder = '请输入内容...';   //提示内容
            this.editor.config.focus = false;       //取消聚焦，默认聚焦，


            this.editor.config.onchange = (html)=>{
                this.info_ = html;      //绑定当前逐渐的值
                this.$emit('change',this.info_);    //将内容同步到父组件中
            }
            // 配置菜单
            this.editor.config.menus = [
                'head',
                'bold',
                'fontSize',
                'fontName',
                'italic',
                'underline',
                'strikeThrough',
                'indent',
                'lineHeight',
                'foreColor',
                'backColor',
                'link',
                'list',
                'todo',
                'justify',
                'quote',
                'emoticon',
                'image',
                'video',
                'table',
                'code',
                'splitLine',
                'undo',
                'redo'

            ]
            this.editor.config.showFullScreen = true        //配置全屏功能
            // this.editor.config.showMenuTooltips = false;        //隐藏菜单栏提示
            this.editor.config.menuTooltipPosition = 'down';      //菜单栏提示在上还是在下，or up,默认up



            this.editor.create()    //创建富文本编辑器

        },
        onCreated(editor){
            this.editor = Object.seal(editor);
        }
    },
    beforeDestroy(){
        const editor = this.editor;
        if(editor == null){
            return;
        }
        editor.destroy();   //组件销毁时，及时销毁编辑器。
    }
}
</script>

<style lang='stylus' scoped>
.wangEditor
    width: calc(100% - 40px)
    height: 100%
    border: 1px solid #ccc
    margin: 30px auto
    padding: 20px
</style>