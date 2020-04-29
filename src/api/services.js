// 接口服务
export default {
  // 下拉框
  commonSel: {
    getCycleList: '/cbbs/balcycle/getCycleList'// 结算周期
  },
  // 结算报表
  setReport: {
    getReportTaskList: '/cbbs/report/getReportTaskList', // 结算报表分页查询
    getEstimateTask: '/cbbs/estimateReport/getEstimateTask', // 暂估报表
    getReverseTask: '/cbbs/reverseReport/getReverseTask', // 冲销报表-分页查询
    getRepTemplateListByCon: '/cbbs/reptemp/getRepTemplateListByCon', // 模板配置-分页查询
    getRptType: '/cbbs/reptemp/getRptType', // 模板配置-新增-报表类型下拉菜单
    addRepTemplate: '/cbbs/reptemp/addRepTemplate', // 模板配资-新增-提交
    getRepTemplateObj: '/cbbs/reptemp/getRepTemplateObj', // 模板配置-编辑-获取编辑信息
    updateRepTemplate: '/cbbs/reptemp/updateRepTemplate', // 模板配置-编辑-提交
    deleteRepTemplate: '/cbbs/reptemp/deleteRepTemplate'// 模板配置-删除
  },
  // 公共报表组件
  reportDemo: {
    collectReport: '/cbbs/report/collectReport', // 总表
    partReport: '/cbbs/report/partReport' // 分表
  }
}
