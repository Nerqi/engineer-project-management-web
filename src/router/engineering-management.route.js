import Main from '@/components/main'
// 系统管理板块
export default {
  path: '/engineeringManagement',
  name: 'engineeringManagement',
  component: Main,
  children: [
    {
      path: 'projectManagementDetail',
      name: 'projectManagementDetail',
      meta: {
        title: '工程项目列表（具体信息由具体页面确定）'
      },
      component: () => import('@/view/single-page/engineering-management/project-management/projectManagementDetail.vue')
    },
    {
      path: 'projectManagement',
      name: 'projectManagement',
      meta: {
        title: '工程总体页面'
      },
      component: () => import('@/view/single-page/engineering-management/project-management/projectManagement.vue')
    },
    {
      path: 'projectManagementSchedule',
      name: 'projectManagementSchedule',
      meta: {
        title: '项目进度查询'
      },
      component: () => import('@/view/single-page/engineering-management/project-management/projectManagementSchedule.vue')
    }
  ]
}
