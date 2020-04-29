const routList = []
function importAllRoutes(routeItem) {
  routeItem.keys().forEach((item) => {
    routList.push(routeItem(item).default)
  })
}
importAllRoutes(require.context('./', false, /\.route\.js/))
export default [
  {
    path: '/',
    redirect: '/engineeringManagement/projectManagementDetail'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/401',
    name: 'error_401',
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/view/error-page/404.vue')
  },
  ...routList
]
