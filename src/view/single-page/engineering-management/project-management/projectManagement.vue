<template>
  <div class="projectManagement">
    <div class="projectManagement-col-left">
      <div class="projectManagement-block-left">
        <div class="projectManagement-item bg-white">
          <div class="title">
            <div class="title-left">
              <div class="divider mr-20"></div>
              <h3>工程负责情况（可修改字段）</h3>
            </div>
            <div class="title-right">
              <div class="title-right-button" :class="[ifSelectedDataCount ? 'button-select' : 'button-no-select']" @click="changeifSelectedDataCount">近7天</div>
              <div class="title-right-button ml-20" :class="[!ifSelectedDataCount ? 'button-select' : 'button-no-select']" @click="changeifSelectedDataCount">近30天</div>
            </div>
          </div>
          <div class="projectManagement-item-main mt-15">
            <div class="projectManagement-item-main-block">
              <div class="projectManagement-item-main-block-item">
                <h3 style="color: #f3930f">22</h3>
                <h4 class="bg-grey">新建项目</h4>
                <h3 style="color: #f3930f">+10</h3>
              </div>
              <div class="projectManagement-item-main-block-item">
                <h3 style="color: #e1e83e">12</h3>
                <h4 class="bg-grey">立项</h4>
                <h3 style="color: #e1e83e">+2</h3>
              </div>
              <div class="projectManagement-item-main-block-item">
                <h3 style="color: #4dd048">5</h3>
                <h4 class="bg-grey">开工</h4>
                <h3 style="color: #4dd048">+3</h3>
              </div>
              <div class="projectManagement-item-main-block-item">
                <h3 style="color: #26edf3">5</h3>
                <h4 class="bg-grey">竣工</h4>
                <h3 style="color: #26edf3">+4</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="projectManagement-item bg-white mt-15">
          <div class="title">
            <div class="title-left">
              <div class="divider mr-20"></div>
              <h3>2020年新建项目</h3>
            </div>
            <div class="title-right">
              <div class="title-right-button" :class="[ifSelectedAddProject ? 'button-select' : 'button-no-select']" @click="changeifSelectedAddProject">打开已关闭项目</div>
              <div class="title-right-button ml-20" :class="[!ifSelectedAddProject ? 'button-select' : 'button-no-select']" @click="changeifSelectedAddProject">隐藏已关闭项目</div>
            </div>
          </div>
          <div class="projectManagement-item-table bg-white mt-10">
            <Table size="small" height="300"  width="100%" stripe border :columns="columns" :data="data">
              <template slot-scope="{ row, index }" slot="action">
                <span class="handle" @click="toDetail()">查看详情</span>
              </template>
            </Table>
            <div class="table-pages">
              <Page :total="100" show-total show-sizer/>
            </div>
          </div>
        </div>
        <div class="projectManagement-item bg-white mt-15">
          <div class="title">
            <div class="title-left">
              <div class="divider mr-20"></div>
              <h3>2020年续建项目</h3>
            </div>
            <div class="title-right">
              <div class="title-right-button" :class="[ifSelectedContinuedProject ? 'button-select' : 'button-no-select']" @click="changeifSelectedContinuedProject">打开已关闭项目</div>
              <div class="title-right-button ml-20" :class="[!ifSelectedContinuedProject ? 'button-select' : 'button-no-select']" @click="changeifSelectedContinuedProject">隐藏已关闭项目</div>
            </div>
          </div>
          <div class="projectManagement-item-table bg-white mt-10">
            <Table size="small" height="300" width="100%" stripe border :columns="columns" :data="data">
              <template slot-scope="{ row, index }" slot="action">
                <span class="handle" @click="toDetail()">查看详情</span>
              </template>
            </Table>
            <div class="table-pages">
              <Page :total="100" show-total show-sizer/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="projectManagement-col-right ml-20">
      <div class="projectManagement-item bg-white">
        <div class="title">
          <div class="title-left">
            <div class="divider mr-20"></div>
            <h3>进度延期预警</h3>
          </div>
        </div>
        <div class="projectManagement-block-right-list bg-white pt-10 pb-10">
          <div class="projectManagement-block-right-list-item" v-for="(item, index) of list1" :key="item.id">
            <span v-if="index < 4">{{item.name}}</span>
            <span v-if="index < 4" class="handle" style="color: #68b1ff" @click="toDchedule()">查看</span>
          </div>
          <div class="projectManagement-block-right-list-item mt-10">
            <span>..........</span>
            <span class="handle" @click="toDchedule()">查看更多</span>
          </div>
        </div>
      </div>
      <div class="projectManagement-item bg-white mt-15">
        <div class="title">
          <div class="title-left">
            <div class="divider mr-20"></div>
            <h3>形象进度预警</h3>
          </div>
        </div>
        <div class="projectManagement-block-right-list bg-white pt-10 pb-10">
          <div class="projectManagement-block-right-list-item" v-for="(item, index) of list1" :key="item.id">
            <span v-if="index < 4">{{item.name}}</span>
            <span v-if="index < 4" class="handle" style="color: #68b1ff" @click="toDchedule()">查看</span>
          </div>
          <div class="projectManagement-block-right-list-item mt-10">
            <span>..........</span>
            <span class="handle" @click="toDchedule()">查看更多</span>
          </div>
        </div>
      </div>
      <div class="projectManagement-item bg-white mt-15">
        <div class="title">
          <div class="title-left">
            <div class="divider mr-20"></div>
            <h3>文档缺失统计</h3>
          </div>
        </div>
        <div class="projectManagement-block-right-list bg-white pt-10 pb-10">
          <div class="projectManagement-block-right-list-item" v-for="(item, index) of list1" :key="item.id">
            <span v-if="index < 4">{{item.name}}</span>
            <span v-if="index < 4" class="handle" style="color: #68b1ff" @click="toDchedule()">查看</span>
          </div>
          <div class="projectManagement-block-right-list-item mt-10">
            <span>..........</span>
            <span class="handle" @click="toDchedule()">查看更多</span>
          </div>
        </div>
      </div>
      <div class="projectManagement-item bg-white mt-15">
        <div class="title">
          <div class="title-left">
            <h3>里程碑日历，计算所有项目的里程碑点在本月的的具体日期，只是一个想法</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'projectManagement',
    components: {},
    data () {
      return {
        ifSelectedDataCount: true,
        ifSelectedAddProject: true,
        ifSelectedContinuedProject: true,
        columns: [
          {
            title: '序号',
            type: 'index',
            minWidth: 70,
            align: 'center'
          },
          {
            title: '年度',
            key: 'a',
            minWidth: 70,
            align: 'center'
          },
          {
            title: '项目编号',
            key: 'b',
            minWidth: 150,
            align: 'center'
          },
          {
            title: '项目名称',
            key: 'c',
            minWidth: 200,
            align: 'center'
          },
          {
            title: '当前环节',
            key: 'd',
            minWidth: 100,
            align: 'center'
          },
          {
            title: '剩余天数',
            key: 'e',
            minWidth: 100,
            align: 'center'
          },
          {
            title: '该环节计划结束时间',
            key: 'f',
            minWidth: 150,
            align: 'center'
          },
          {
            title: '已用工期',
            key: 'g',
            minWidth: 100,
            align: 'center'
          },
          {
            title: '总工期',
            key: 'h',
            minWidth: 100,
            align: 'center'
          },
          {
            title: '状态',
            key: 'i',
            minWidth: 70,
            align: 'center'
          },
          {
            title: '操作',
            slot: 'action',
            align: 'center',
            fixed: 'right',
            minWidth: 100
          }
        ],
        data: [
          {
            a: '2020',
            b: 'D1920123124124',
            c: '集中化4A一期工程项目建设',
            d: '设计评审',
            e: '14',
            f: '2020-01-01',
            g: '14',
            h: '28',
            i: '正常'
          },
          {
            a: '2020',
            b: 'D1920123124124',
            c: '集中化4A一期工程项目建设',
            d: '设计评审',
            e: '14',
            f: '2020-01-01',
            g: '14',
            h: '28',
            i: '正常'
          },
          {
            a: '2020',
            b: 'D1920123124124',
            c: '集中化4A一期工程项目建设',
            d: '设计评审',
            e: '14',
            f: '2020-01-01',
            g: '14',
            h: '28',
            i: '正常'
          },
          {
            a: '2020',
            b: 'D1920123124124',
            c: '集中化4A一期工程项目建设',
            d: '设计评审',
            e: '14',
            f: '2020-01-01',
            g: '14',
            h: '28',
            i: '正常'
          },
          {
            a: '2020',
            b: 'D1920123124124',
            c: '集中化4A一期工程项目建设',
            d: '设计评审',
            e: '14',
            f: '2020-01-01',
            g: '14',
            h: '28',
            i: '正常'
          },
          {
            a: '2020',
            b: 'D1920123124124',
            c: '集中化4A一期工程项目建设',
            d: '设计评审',
            e: '14',
            f: '2020-01-01',
            g: '14',
            h: '28',
            i: '正常'
          },
          {
            a: '2020',
            b: 'D1920123124124',
            c: '集中化4A一期工程项目建设',
            d: '设计评审',
            e: '14',
            f: '2020-01-01',
            g: '14',
            h: '28',
            i: '正常'
          }
        ],
        list1: [
          { 'id': 1, 'name': 'D2134234立项批复，还有10天结束' },
          { 'id': 1, 'name': 'D2134234立项批复，还有10天结束' },
          { 'id': 1, 'name': 'D2134234立项批复，还有10天结束' },
          { 'id': 1, 'name': 'D2134234立项批复，还有10天结束' },
          { 'id': 1, 'name': 'D2134234立项批复，还有10天结束' },
          { 'id': 1, 'name': 'D2134234立项批复，还有10天结束' } ],
        list2: [],
        list3: []
      }
    },
    mounted() {
    },
    methods: {
      changeifSelectedDataCount() {
        this.ifSelectedDataCount = !this.ifSelectedDataCount
      },
      changeifSelectedAddProject() {
        this.ifSelectedAddProject = !this.ifSelectedAddProject
      },
      changeifSelectedContinuedProject() {
        this.ifSelectedContinuedProject = !this.ifSelectedContinuedProject
      },
      toDetail() {
        this.$router.push({ name: 'projectManagementDetail' })
      },
      toDchedule() {
        this.$router.push({ name: 'projectManagementSchedule' })
      }
    }
  }
</script>

<style lang="less">
  .projectManagement{
    display: flex;
    width: 100%;
    .projectManagement-item{
      padding: 10px 30px;
      .projectManagement-item-main{
        .projectManagement-item-main-block{
          display: flex;
          justify-content: space-around;
          .projectManagement-item-main-block-item{
            width: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }
      .projectManagement-item-table{}
      .projectManagement-block-right-list{
        display: flex;
        flex-direction: column;
        font-size: 15px;
        .projectManagement-block-right-list-item{
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .projectManagement-col-left{
      width: 75%;
      display: flex;
      flex-direction: column;
    }
    .projectManagement-col-right{
      width: 25%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
