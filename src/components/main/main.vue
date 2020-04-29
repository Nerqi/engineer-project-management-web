<template>
  <Layout class="layout">
    <Header>
      <HeaderBar @headerChange="headerChange"></HeaderBar>
    </Header>
    <div class="breadcrumb">
      <div class="breadcrumb-divider"></div>
      <Breadcrumb separator=">">
        <BreadcrumbItem class="breadcrumb-main">工程项目管理</BreadcrumbItem>
        <BreadcrumbItem v-for="(item,index) in breadcrumb_list" :key="index" v-if="item.meta.title">{{item.meta.title}}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div style="overflow: auto">
      <!--<Sider :style="{overflow: 'auto'}">-->
        <!--<Menu theme="dark" width="auto" ref="menu" @on-select="handleSelect" :active-name="activeName" :open-names="openName" accordion>-->
          <!--<div v-for="item in menu_list" :key="item.menu_id">-->
            <!--<MenuItem v-if="!item.children_list" :name="item.menu_url">{{item.menu_name}}</MenuItem>-->
            <!--<menuItem  v-if="item.children_list" :itemData="item"></menuItem>-->
          <!--</div>-->
        <!--</Menu>-->
      <!--</Sider>-->
      <!--<div class="breadcrumb">-->
        <!--<div class="breadcrumb-divider"></div>-->
        <!--<Breadcrumb separator=">">-->
          <!--<BreadcrumbItem class="breadcrumb-main">工程项目管理</BreadcrumbItem>-->
          <!--<BreadcrumbItem v-for="(item,index) in breadcrumb_list" :key="index" v-if="item.meta.title">{{item.meta.title}}</BreadcrumbItem>-->
        <!--</Breadcrumb>-->
      <!--</div>-->
      <Content class="content">
        <router-view></router-view>
      </Content>
    </div>
  </Layout>
</template>
<script>
  import HeaderBar from './components/header'
  import menuItem from './components/menuItem'
  import Menu from './menu'
  export default {
    name: 'Main',
    components: {
      HeaderBar,
      menuItem
    },
    data () {
      return {
        type: 'main',
        activeName: '',
        openName: [],
        breadcrumb_list: []
      }
    },
    computed: {
      menu_list() {
        return Menu
      },
      siderMenuMap () {
        return this.$publicFunc.getSiderMenuMap(this.$store.getters['menu/getMenuList'] || [])
      }
    },
    watch: {
      '$route' (newRoute) {
        this.getBreadcrumbList()
        // this.openName = []
        // this.activeName = newRoute.name
        // this.updateOpened()
      }
    },
    mounted () {
      this.getBreadcrumbList()
      // this.$store.commit('menu/setMenuList', Menu)
      // let url = window.location.href
      // let name = url.substring(url.lastIndexOf('/') + 1, url.length)
      // this.activeName = name
      // this.updateOpened()
    },
    methods: {
      getBreadcrumbList() {
        this.breadcrumb_list = []
        this.breadcrumb_list = this.$route.matched
      },
      headerChange(headerName) {
        this.$router.push({ name: headerName })
      },
      handleSelect (name) {
        this.$router.push({ name: name })
      },
      updateOpened() {
        if (this.siderMenuMap.has(this.activeName) && this.siderMenuMap.get(this.activeName).parent_menu_id) {
          if (this.openName.indexOf(this.siderMenuMap.get(this.activeName).parent_menu_id) === -1) {
            this.openName.push(this.siderMenuMap.get(this.activeName).parent_menu_id)
          }
        } else {
          this.openName = []
        }
        this.$nextTick(() => this.$refs.menu.updateOpened())
      }
    }
  }
</script>
<style lang="less">
  .layout{
    height: 100%;
    width: 100%;
    .ivu-layout-header {
      background: #062638;
      padding: 0;
    }
    .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title {
      padding-left: 43px;
    }
    .ivu-menu {
      font-size: 1rem!important;
    }
    .ivu-menu-item {
      font-size: 1rem!important;
    }
    .breadcrumb{
      display: flex;
      margin: 10px 50px;
      .breadcrumb-divider{
        width: 5px;
        height: 20px;
        background-color: #007cff;
      }
      .breadcrumb-main{
        margin-left: 20px;
      }
    }
    .content{
      padding: 0 20px 20px;
    }
  }
</style>
