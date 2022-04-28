<template>
  <div class="viewTable">
      <h3>View Table</h3>
      <div class="btn">
        <div class="btn_item">
            <!-- <Button type="primary" size="small">btn</Button>
            <Button type="error" size="small">error</Button> -->
        </div>
        <div class="btn_item control_column">
            <Icon type="ios-apps" />
        </div>
      </div>
      <div class="table">
          <Table stripe border height="298" context-menu show-context-menu :columns="columns" :data="tableData" @on-contextmenu="handleContextMenu">
              <template slot-scope="{row}" slot="name">
                  <strong>{{row.name}}</strong>
              </template>
              <template slot-scope="{row,index}" slot="action">
                  <Button type="primary" size="small" style="margin-right:5px;" @click="show(row,index)">查看</Button>
                  <Button type="error" size="small" @click="remove(index)">删除</Button>
              </template>
              <template slot="contextMenu">
                <DropdownItem @click.native="handleContextMenuEdit">编辑</DropdownItem>
                <DropdownItem @click.native="handleContextMenuDelete" style="color: #ed4014">删除</DropdownItem>
              </template>
          </Table>
      </div>
  </div>
</template>

<script>
export default {
    name:'viewTable',
    components:{},
    props:{},
    data(){
        return {
            //表格头数据
            columns: [
                {type: 'selection',align: 'center',width:'60',resizable: true,},
                {type: 'index',width:'60',align: 'center',resizable: true,},
                {title: '姓名',key: 'name',width:'100',resizable: true,},
                {title: '年龄',key: 'age',align:'center',width:'100',resizable: true},
                {title: '出生日期',key: 'birthday',width:'130',resizable: true},
                {title: '地址',key: 'address',resizable: true},
                {title:'操作',slot:'action',align:'center',width:'150',resizable: true}
            ],
            // 表格数据
            tableData:[
                {name:'王小明',age:23,birthday:'1999-2-21',address:'北京市海淀区西二旗',date:'2016-10-03'},
                {name:'张晓刚',age:30,birthday:'1992-1-23',address:'上海市浦东新区世纪大道',date:'2016-10-01'},
                {name:'李小红',age:31,birthday:'1991-10-10',address:'深圳市南山区深南大道',date:'2016-10-02'},
                {name:'周晓威',age:35,birthday:'1987-11-10',address:'河北石家庄河北科技大学东校区',date:'2016-10-04'},
                {name:'赵天',age:24,birthday:'1998-4-6',address:'北京市海淀区西北旺',date:'2000-00-00'},
                {name:'职玺',age:23,birthday:'1999-1-11',address:'北京市朝阳区芍药居',date:'2020-07-27'},
            ],
            contextLine:0,
        }
    },
    watch:{},
    mounted(){
    },
    methods:{
        // 查看事件
        show(row,index){
            console.log(row,'单条数据');
            this.$Modal.info({
                title:'详情',
                content:`姓名：${this.tableData[index].name}<br>年龄：${this.tableData[index].age}<br>地址：${this.tableData[index].address}`
            })
        },
        // 删除事件
        remove(index){
            console.log(index,'删除数据下标');
            this.tableData.splice(index,1);
        },

        handleContextMenu (row) {
            console.log(row,'单条数据');
            const index = this.tableData.findIndex(item => item.name === row.name);
            this.contextLine = index + 1;
        },
        // 右键编辑事件
        handleContextMenuEdit () {
            this.$Message.info('Click edit of line' + this.contextLine);
        },
        // 右键删除事件
        handleContextMenuDelete () {
            this.$Message.info('Click delete of line' + this.contextLine);
        }
    }
}
</script>

<style lang="stylus" scoped>
.viewTable
    width: 90%
    height: 100%
    border: 1px solid #ccc
    margin: 30px auto
    padding: 30px
    .btn
        height: 35px
        width: 100%
        line-height: 35px
        .btn_item
            display: inline-block
        .control_column
            float: right
            height: 30px
            width: 30px
            border: 1px solid #2d8cf0
            border-radius: 5px
            text-align: center
            line-height 27px
            font-size 24px
            cursor pointer
            color: #2d8cf0
            margin-top 2px
    .table
        width: 100%
        height: 300px
        border 1px solid #ccc
        margin-top: 10px
        overflow: auto
</style>