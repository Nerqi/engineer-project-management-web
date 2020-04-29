<template>
  <div class="projectManagementSchedule bg-white">
    <div class="projectManagementSchedule-search">
      <div class="title">
        <div class="title-left">
          <div class="divider mr-20"></div>
          <h3>项目进度查询</h3>
        </div>
      </div>
      <div class="mt-30">
        <Form :model="form" :label-width="120">
          <Row>
            <Col span="6">
              <FormItem label="项目名称：">
                <Input placeholder="请输入" class="ml-10"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="24">
              <FormItem label="部门：">
                <CheckboxGroup>
                  <Checkbox v-for="item of list1" :key="item.id" class="ml-10 mr-10" size="large">{{item.name}}</Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="类型：">
                <CheckboxGroup>
                  <Checkbox v-for="item of list2" :key="item.id" class="ml-10 mr-10" size="large">{{item.name}}</Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="类型：">
                <CheckboxGroup>
                  <Checkbox v-for="item of list3" :key="item.id" class="ml-10 mr-10" size="large">{{item.name}}</Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="年度：">
                <CheckboxGroup>
                  <Checkbox v-for="item of list4" :key="item.id" class="ml-10 mr-10" size="large">{{item.name}}</Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="状态：">
                <CheckboxGroup>
                  <Checkbox v-for="item of list5" :key="item.id" class="ml-10 mr-10" size="large">{{item.name}}</Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="12">
              <FormItem label="状态：">
                <CheckboxGroup>
                  <Checkbox v-for="item of list6" :key="item.id" class="ml-10 mr-10" size="large">{{item.name}}</Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="状态：">
                <CheckboxGroup>
                  <Checkbox v-for="item of list7" :key="item.id" class="ml-10 mr-10" size="large">{{item.name}}</Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
    <div class="projectManagementSchedule-echart">
      <div class="title">
        <div class="title-left">
          <div class="divider mr-20"></div>
          <h3>项目进度柱状图</h3>
          <Button type="primary" @click="search" class="ml-30">查&#12288;询</Button>
        </div>
      </div>
      <div id="myChart" :style="{width: '800px', height: '300px'}"></div>
    </div>
    <div class="projectManagementSchedule-table">
      <div class="title">
        <div class="title-left">
          <div class="divider mr-20"></div>
          <h3>项目进度列表</h3>
          <Button type="primary" @click="search" class="ml-30">查&#12288;询</Button>
        </div>
      </div>
      <Table :columns="columns" :data="data" class="mt-30">
        <template slot-scope="{ row, index }" slot="a">
          <Input type="text" v-model="a" v-if="editIndex === index" />
          <span v-else>{{ row.a }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="b">
          <Input type="text" v-model="b" v-if="editIndex === index" />
          <span v-else>{{ row.b }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="c">
          <Input type="text" v-model="c" v-if="editIndex === index" />
          <span v-else>{{ row.c }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="d">
          <Input type="text" v-model="d" v-if="editIndex === index" />
          <span v-else>{{ row.d }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="e">
          <Input type="text" v-model="e" v-if="editIndex === index" />
          <span v-else>{{ row.e }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="f">
          <Input type="text" v-model="f" v-if="editIndex === index" />
          <span v-else>{{ row.f }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="g">
          <Input type="text" v-model="g" v-if="editIndex === index" />
          <span v-else>{{ row.g }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="h">
          <Input type="text" v-model="h" v-if="editIndex === index" />
          <span v-else>{{ row.h }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="i">
          <Input type="text" v-model="i" v-if="editIndex === index" />
          <span v-else>{{ row.i }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="j">
          <Input type="text" v-model="j" v-if="editIndex === index" />
          <span v-else>{{ row.j }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="k">
          <Input type="text" v-model="k" v-if="editIndex === index" />
          <span v-else>{{ row.k }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="l">
          <Input type="text" v-model="l" v-if="editIndex === index" />
          <span v-else>{{ row.l }}</span>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <div v-if="editIndex === index">
            <Button @click="handleSave(index)">保存</Button>
            <Button @click="editIndex = -1" class="ml-5">取消</Button>
          </div>
          <div v-else>
            <Button @click="handleEdit(row, index)">操作</Button>
          </div>
        </template>
      </Table>
      <div class="table-pages">
        <Page :total="100" show-total show-sizer/>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'projectManagementSchedule',
    components: {},
    data () {
      return {
        form: {},
        list1: [
          { 'id': 1, 'name': '全部' },
          { 'id': 2, 'name': '基础平台部' },
          { 'id': 3, 'name': '电子渠道运营中心' },
          { 'id': 4, 'name': '北京业务支撑中心' },
          { 'id': 5, 'name': '大数据平台部' },
          { 'id': 6, 'name': '大数据应用部' },
          { 'id': 7, 'name': '安全管理中心' },
          { 'id': 8, 'name': '政企业务支撑中心' },
          { 'id': 9, 'name': '广州业务支撑中心' },
          { 'id': 10, 'name': '深圳业务支撑中心' },
          { 'id': 11, 'name': '研发创新中心' },
          { 'id': 12, 'name': '国际业务运营中心' },
          { 'id': 13, 'name': '交易业务运营中心' },
          { 'id': 14, 'name': '运营管理部' },
          { 'id': 15, 'name': '广州业务支撑中心' },
          { 'id': 16, 'name': '河北中心' },
          { 'id': 17, 'name': '天津中心' },
          { 'id': 18, 'name': '宁夏中心' },
          { 'id': 19, 'name': '海南中心' },
          { 'id': 20, 'name': '黑龙江中心' }
        ],
        list2: [
          { 'id': 1, 'name': '全部' },
          { 'id': 2, 'name': '自建项目' },
          { 'id': 3, 'name': '直投项目' }
        ],
        list3: [
          { 'id': 1, 'name': '全部' },
          { 'id': 2, 'name': '新建' },
          { 'id': 3, 'name': '续建' }
        ],
        list4: [
          { 'id': 1, 'name': '全部' },
          { 'id': 2, 'name': '2020' },
          { 'id': 3, 'name': '2019' },
          { 'id': 4, 'name': '2018' },
          { 'id': 5, 'name': '2017' }
        ],
        list5: [
          { 'id': 1, 'name': '全部' },
          { 'id': 2, 'name': '立项' },
          { 'id': 3, 'name': '在建' },
          { 'id': 4, 'name': '竣工' },
          { 'id': 5, 'name': '关闭' }
        ],
        list6: [
          { 'id': 1, 'name': '综合' },
          { 'id': 2, 'name': '年度' },
          { 'id': 3, 'name': '编号' },
          { 'id': 4, 'name': '工期' }
        ],
        list7: [
          { 'id': 1, 'name': '出现延误' },
          { 'id': 2, 'name': '超长工期' },
          { 'id': 3, 'name': '超长工期' },
          { 'id': 4, 'name': '超长工期' }
        ],
        columns: [
          {
            title: '年度',
            slot: 'a',
            minWidth: 100,
            align: 'center'
          },
          {
            title: '项目编号',
            slot: 'b',
            minWidth: 200,
            align: 'center'
          },
          {
            title: '项目名称',
            slot: 'c',
            minWidth: 200,
            align: 'center'
          },
          {
            title: '可研批复',
            slot: 'd',
            align: 'center',
            minWidth: 120
          },
          {
            title: '合同签订',
            slot: 'e',
            align: 'center',
            minWidth: 120
          },
          {
            title: '设计批复',
            slot: 'f',
            align: 'center',
            minWidth: 120
          },
          {
            title: '开工启动',
            slot: 'g',
            align: 'center',
            minWidth: 120
          },
          {
            title: '割接上线',
            slot: 'h',
            align: 'center',
            minWidth: 120
          },
          {
            title: '竣工批复',
            slot: 'i',
            align: 'center',
            minWidth: 120
          },
          {
            title: '项目关闭',
            slot: 'j',
            align: 'center',
            minWidth: 120
          },
          {
            title: '1',
            slot: 'k',
            align: 'center',
            minWidth: 120
          },
          {
            title: '已用工期',
            slot: 'l',
            align: 'center',
            minWidth: 120
          },
          {
            title: '操作',
            slot: 'action',
            align: 'center',
            fixed: 'right',
            minWidth: 200
          }
        ],
        data: [
          {
            a: '2019',
            b: 'D1920123124124',
            c: '集中化4A一期工程项目建设',
            d: '2021-12-3',
            e: '2021-12-3',
            f: '2021-12-3',
            g: '2021-12-3',
            h: '2021-12-3',
            i: '2021-12-3',
            j: '2021-12-3',
            k: '2021-12-3',
            l: '300/600'
          },
          {
            a: '2019',
            b: 'D1920123124124',
            c: '集中化4A一期工程项目建设',
            d: '2021-12-3',
            e: '2021-12-3',
            f: '2021-12-3',
            g: '2021-12-3',
            h: '2021-12-3',
            i: '2021-12-3',
            j: '2021-12-3',
            k: '2021-12-3',
            l: '300/600'
          },
          {
            a: '2019',
            b: 'D1920123124124',
            c: '集中化4A一期工程项目建设',
            d: '2021-12-3',
            e: '2021-12-3',
            f: '2021-12-3',
            g: '2021-12-3',
            h: '2021-12-3',
            i: '2021-12-3',
            j: '2021-12-3',
            k: '2021-12-3',
            l: '300/600'
          },
          {
            a: '2019',
            b: 'D1920123124124',
            c: '集中化4A一期工程项目建设',
            d: '2021-12-3',
            e: '2021-12-3',
            f: '2021-12-3',
            g: '2021-12-3',
            h: '2021-12-3',
            i: '2021-12-3',
            j: '2021-12-3',
            k: '2021-12-3',
            l: '300/600'
          }
        ],
        editIndex: -1, // 当前聚焦的输入框的行数
        a: '', // 每一列列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        i: '',
        j: '',
        k: '',
        l: ''
      }
    },
    mounted() {
      this.drawLine()
    },
    methods: {
      search() {},
      drawLine() {
        let myChart = echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          tooltip: {},
          label: {
            show: true,
            position: 'top',
            color: '#3D383A',
            formatter: '{c}个'
          },
          color: ['#F5686F'],
          xAxis: {
            type: 'category',
            data: ['出现延误', '超长工期', '超长工期', '超长工期', '立项', '在建', '竣工', '关闭']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130, 80],
            type: 'bar'
          }]
        })
      },
      handleEdit (row, index) {
        this.a = row.a
        this.b = row.b
        this.c = row.c
        this.d = row.d
        this.e = row.e
        this.f = row.f
        this.g = row.g
        this.h = row.h
        this.i = row.i
        this.j = row.j
        this.k = row.k
        this.l = row.l
        this.editIndex = index
      },
      handleSave (index) {
        this.data[index].a = this.a
        this.data[index].b = this.b
        this.data[index].c = this.c
        this.data[index].d = this.d
        this.data[index].e = this.e
        this.data[index].f = this.f
        this.data[index].g = this.g
        this.data[index].h = this.h
        this.data[index].i = this.i
        this.data[index].j = this.j
        this.data[index].k = this.k
        this.data[index].l = this.l
        this.editIndex = -1
      }
    }
  }
</script>

<style lang="less">
  .projectManagementSchedule{
    padding: 10px 30px;
    .ivu-form .ivu-form-item-label{
      padding-top: 6px;
      font-size: 16px;
    }
  }
</style>
