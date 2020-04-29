<template>
  <div class="baseInfo">
    <div class="baseInfo-main">
      <div class="title">
        <div class="title-left">
          <div class="divider mr-20"></div>
          <span>工程负责情况（可修改字段）</span>
        </div>
      </div>
      <div class="baseInfo-form">
        <Form :model="form" :label-width="120" class="form">
          <Row>
            <Col span="6">
              <FormItem label="工程需求部门" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
            <Col span="6">
              <FormItem label="项目经理" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
            <Icon type="ios-add-circle-outline" class="ml-20" style="cursor: pointer"/>
          </Row>
          <Row>
            <Col span="6">
              <FormItem label="工程实施部门" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
            <Col span="6">
              <FormItem label="项目经理" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
            <Icon type="ios-add-circle-outline" class="ml-20" style="cursor: pointer"/>
          </Row>
          <Row>
            <Col span="6">
              <FormItem label="工程维护部门" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
            <Col span="6">
              <FormItem label="项目经理" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
            <Icon type="ios-add-circle-outline" class="ml-20" style="cursor: pointer"/>
          </Row>
          <Row>
            <Col span="6">
              <FormItem label="工程计划部门" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
            <Col span="6">
              <FormItem label="项目经理" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
            <Icon type="ios-add-circle-outline" class="ml-20" style="cursor: pointer"/>
          </Row>
          <Row>
            <Col span="6">
              <FormItem label="工程管理部门" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
            <Col span="6">
              <FormItem label="项目经理" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
            <Icon type="ios-add-circle-outline" class="ml-20" style="cursor: pointer"/>
          </Row>
        </Form>
      </div>
    </div>
    <div class="baseInfo-main">
      <div class="title">
        <div class="title-left">
          <div class="divider mr-20"></div>
          <span>金额情况（自动更新信息）</span>
        </div>
      </div>
      <div class="baseInfo-form">
        <Form :model="form" :label-width="120" class="form">
          <Row>
            <Col span="6">
              <FormItem label="可研批复金额" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
            <Col span="6">
              <FormItem label="设计批复金额" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="6">
              <FormItem label="单项合同金额" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="6">
              <FormItem label="硬件订单金额" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="6">
              <FormItem label="服务订单金额" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span="6">
              <FormItem label="2020年期初余额" prop="input">
                <Input v-model="form.input" placeholder="请填写"></Input>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'baseInfo',
    data () {
      return {
        form: {
          input: ''
        }
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="less">
  .baseInfo{
    .baseInfo-main{
      .baseInfo-form{
        .form{
          padding: 30px;
        }
      }
    }
  }
</style>
