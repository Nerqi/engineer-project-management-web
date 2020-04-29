<template>
  <div class="schedule">
    <div class="title">
      <div class="title-left">
        <div class="divider mr-20"></div>
        <h3>工程立项阶段</h3>
      </div>
    </div>
    <div class="schedule-approval-main pb-10 pt-10">
      <Card class="card" v-for="item of approval_list" :key="item.b">
        <div class="card-header">
          <div v-for="title of item.children" :key="title.a" :class="title.color" class="card-item">{{title.a}}</div>
        </div>
        <div class="card-main">
          <h2>{{item.c}}</h2>
          <Input v-model="item.input1" class="card-input mt-10" />
          <Input v-model="item.input2" class="card-input mt-10" />
        </div>
      </Card>
    </div>
    <div class="title">
      <div class="title-left">
        <div class="divider mr-20"></div>
        <h3>工程设计与实施阶段</h3>
      </div>
    </div>
    <div class="schedule-imp-main pb-10 pt-10">
      <div class="schedule-imp-main-left">
        <div class="schedule-imp-main-left-item">
          <Card class="card" v-for="item of imp_json.left_list.list1" :key="item.b">
            <div class="card-header">
              <div v-for="title of item.children" :key="title.a" :class="title.color" class="card-item">{{title.a}}</div>
            </div>
            <div class="card-main">
              <h2>{{item.c}}</h2>
              <Input v-model="item.input1" class="card-input mt-10" />
              <Input v-model="item.input2" class="card-input mt-10" />
            </div>
          </Card>
        </div>
        <div class="schedule-imp-main-left-item mt-10">
          <Card class="card" v-for="item of imp_json.left_list.list2" :key="item.b">
            <div class="card-header">
              <div v-for="title of item.children" :key="title.a" :class="title.color" class="card-item">{{title.a}}</div>
            </div>
            <div class="card-main">
              <h2>{{item.c}}</h2>
              <Input v-model="item.input1" class="card-input mt-10" />
              <Input v-model="item.input2" class="card-input mt-10" />
            </div>
          </Card>
        </div>
      </div>
      <div class="schedule-imp-main-right">
        <Card class="card" v-for="item of imp_json.right_list" :key="item.b">
          <div class="card-header">
            <div v-for="title of item.children" :key="title.a" :class="title.color" class="card-item">{{title.a}}</div>
          </div>
          <div class="card-main">
            <h2>{{item.c}}</h2>
            <Input v-model="item.input1" class="card-input mt-10" />
            <Input v-model="item.input2" class="card-input mt-10" />
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'schedule',
    data () {
      return {
        value: '2020-01-01'
      }
    },
    computed: {
      approval_list() {
        return this.get_approval_list()
      },
      imp_json() {
        return this.get_imp_json()
      }
    },
    mounted() {
    },
    methods: {
      get_approval_list() {
        let list = []
        list =
          [
            { 'c': '需求提出', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '环节' }, { 'a': '完成' } ] },
            { 'c': '需求评审', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '环节' }, { 'a': '逾期完成' } ] },
            { 'c': '需求评审', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '环节' }, { 'a': '未完成' } ] },
            { 'c': '需求评审', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '里程碑' }, { 'a': '未完成' } ] }
          ]
        list = this.getStyle(list)
        return list
      },
      get_imp_json() {
        let json = {}
        json = {
          'left_list': {
            'list1': [
              { 'c': '设计编制', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '环节' }, { 'a': '完成' } ] },
              { 'c': '设计评审', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '环节' }, { 'a': '完成' } ] },
              { 'c': '设计批复', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '里程碑' }, { 'a': '完成' } ] },
              { 'c': '开工启动会', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '里程碑' }, { 'a': '完成' } ] }
            ],
            'list2': [
              { 'c': '设计编制', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '环节' }, { 'a': '完成' } ] },
              { 'c': '设计评审', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '环节' }, { 'a': '完成' } ] },
              { 'c': '设计批复', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '里程碑' }, { 'a': '完成' } ] },
              { 'c': '开工启动会', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '里程碑' }, { 'a': '完成' } ] }
            ]
          },
          'right_list': [
            { 'c': '系统调试', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '环节' }, { 'a': '完成' } ] },
            { 'c': '验收测试', 'input1': '2020-01-01', 'input2': '2020-01-01', 'children': [ { 'a': '环节' }, { 'a': '完成' } ] }
          ] }
        json.left_list.list1 = this.getStyle(json.left_list.list1)
        json.left_list.list2 = this.getStyle(json.left_list.list2)
        json.right_list = this.getStyle(json.right_list)
        return json
      },
      getStyle(list) {
        list.forEach((item) => {
          item.children.forEach((title) => {
            if (title.a === '环节') {
              title.color = 'card-link'
            }
            if (title.a === '完成') {
              title.color = 'card-finish'
            }
            if (title.a === '逾期完成') {
              title.color = 'card-be-overdue'
            }
            if (title.a === '里程碑') {
              title.color = 'card-milepost'
            }
            if (title.a === '未完成') {
              title.color = 'card-no-finish'
            }
          })
        })
        return list
      }
    }
  }
</script>

<style lang="less">
  .schedule{
    .schedule-approval-main{
      display: flex;
    }
    .schedule-imp-main{
      display: flex;
      .schedule-imp-main-left{
        .schedule-imp-main-left-item{
          display: flex;
        }
      }
      .schedule-imp-main-right{
        display: flex;
        align-items: center;
      }
    }
    .card-header{
      display: flex;
      justify-content: space-between;
      .card-item{
        color: #f8f8f9;
        border-radius: 5px;
        padding: 0 10px;
      }
      .card-link{
        background-color: #007cff;
      }
      .card-finish{
        background-color: #08a308;
      }
      .card-no-finish{
        background-color: #c6c6c6;
      }
      .card-milepost{
        background-color: #fe7ddc;
      }
      .card-be-overdue{
        background-color: #f6a717;
      }
    }
    .card-main{
      padding-bottom: 10px;
      text-align: center;
      .card-input{
        width: 100px;
        line-height: 5px;
      }
    }
    .card{
      margin-left: 20px;
      width: 150px;
    }
    .ivu-card-head {
      border-bottom: 0;
    }
    .ivu-card-body {
      padding: 0;
    }
    .ivu-input{
      height: 25px;
    }
    .ivu-card-bordered {
      border: 1px solid #000000;
    }
  }
</style>
