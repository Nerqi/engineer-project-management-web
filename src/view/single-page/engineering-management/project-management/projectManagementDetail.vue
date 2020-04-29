<template>
  <div class="projectManagementDetail">
    <div class="projectManagementDetail-title">
      <div class="projectManagementDetail-title-left bg-white">
        <div class="projectManagementDetail-title-left-divider ml-30 mr-20"></div>
        <span>集中化4A系统一期工程</span>
        <div class="projectManagementDetail-title-left-status ml-50">正常</div>
      </div>
      <div class="projectManagementDetail-title-right bg-white ml-20">
        <span>当前阶段： 立项阶段</span>
        <span>该阶段预计结束时间：2020-04-09</span>
        <span> 剩余天数： 20天</span>
        <span>已使用工期：200天/400天</span>
      </div>
    </div>
    <div class="projectManagementDetail-base bg-white">
      <div class="title pt-10 pb-10">
        <div class="title-left">
          <div class="divider ml-30 mr-20"></div>
          <span>项目基本信息</span>
        </div>
      </div>
      <div class="projectManagementDetail-base-main">
        <projectBase></projectBase>
      </div>
    </div>
    <div class="projectManagementDetail-edit bg-white">
      <Tabs type="card">
        <TabPane label="项目进度配置" class="projectManagementDetail-card">
          <schedule></schedule>
        </TabPane>
        <TabPane label="文档信息">
          <file></file>
        </TabPane>
        <TabPane label="基本信息">
          <baseInfo></baseInfo>
        </TabPane>
        <TabPane label="其他">
          <other></other>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import projectBase from './projectManagementDetail-Taps/projectBase'
  import schedule from './projectManagementDetail-Taps/schedule'
  import file from './projectManagementDetail-Taps/file'
  import baseInfo from './projectManagementDetail-Taps/baseInfo'
  import other from './projectManagementDetail-Taps/other'
  export default {
    name: 'projectManagementDetail',
    components: {
      projectBase,
      schedule,
      file,
      baseInfo,
      other
    },
    data () {
      return {
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="less">
  .projectManagementDetail{
    width: 100%;
    .projectManagementDetail-title{
      height: 40px;
      display: flex;
      width: 100%;
      .projectManagementDetail-title-left{
        display: flex;
        align-items: center;
        width: 30%;
        .projectManagementDetail-title-left-divider{
          width: 5px;
          height: 25px;
          background-color: #007cff;
        }
        .projectManagementDetail-title-left-status{
          color: #f8f8f9;
          border-radius: 5px;
          padding: 0 20px;
          background-color: #08a308;
        }
      }
      .projectManagementDetail-title-right{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 70%;
      }
    }
    .projectManagementDetail-base{
      margin: 20px 0;
      width: 100%;
      .projectManagementDetail-base-main{
        padding: 10px;
      }
    }
    .projectManagementDetail-edit{
      padding: 20px;
      .projectManagementDetail-card{
        padding: 10px;
      }
    }
  }
</style>
