<template>
  <div class="projectBase">
    <Form :model="projectForm" :label-width="90">
      <Row>
        <Col span="6">
          <FormItem label="项目名称：">
            <Input v-model="projectForm.a" placeholder="请填写项目名称"></Input>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="需求部门：">
            <Select v-model="projectForm.b" placeholder="请选择需求部门">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="项目年度：">
            <Select v-model="projectForm.c"  placeholder="请选择项目年度">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="项目类型：">
            <Select v-model="projectForm.d" multiple :max-tag-count="2" placeholder="请选择项目类型">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="6">
          <FormItem label="项目编号：">
            <Input v-model="projectForm.e" placeholder="请填写项目编号"></Input>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="建设类型：">
            <Select v-model="projectForm.f" multiple :max-tag-count="2" placeholder="请选择建设类型">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="其他类型：">
            <Select v-model="projectForm.g" multiple :max-tag-count="2" placeholder="请选择其他类型">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span="6">
          <FormItem label="项目经理：">
            <Select v-model="projectForm.h" placeholder="请选择项目经理">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <FormItem label="项目描述：">
            <Input v-model="projectForm.i" type="textarea" :rows="2" placeholder="请填写项目描述"></Input>
          </FormItem>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>
  export default {
    name: 'projectBase',
    data () {
      return {
        projectForm: {
          a: '',
          b: '',
          c: '',
          d: [],
          e: '',
          f: [],
          g: [],
          h: '',
          i: ''
        }
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="less">
  .projectBase{}
</style>
