<template>
  <div class="header-layout">
    <div class="header-left">
      <div class="header-left-image"></div>
      <h3>工程项目管理</h3>
    </div>
    <div class="header-menu">
      <div v-for="item in headermenu" :key="item.menu_id" class="header-menu-item" :class="{navChangeStyle: selectStyle === item.menu_name}"
           @click="getSelectType(item.menu_name, item.menu_url)">{{item.menu_name}}</div>
    </div>
    <div class="header-right">
      <div class="header-right-person-image"></div>
      <div>用户中心</div>
      <Icon class="header-right-out" type="ios-power" @click="confirm" size="20"/>
    </div>
  </div>
</template>
<script>
  import headermenu from './headermenu'
  export default {
    name: 'HeaderBar',
    props: {
      type: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        user_info: '管理员',
        groupName: '前端开发',
        selectStyle: '',
        headermenu: []
      }
    },
    computed: {},
    mounted() {
      this.headermenu = headermenu
    },
    methods: {
      getSelectType(menu_name, menu_url) {
        this.selectStyle = menu_name
        this.$emit('headerChange', menu_url)
      },
      confirm () {
        this.$Modal.confirm({
          title: '确认退出？',
          onOk: () => {
            this.$store.dispatch('user/access_token', '')
            localStorage.clear()
            sessionStorage.clear()
            this.$router.push({ name: 'login' })
            this.$Message.info('成功退出')
          },
          onCancel: () => {
            this.$Message.info('已取消退出')
          }
        })
      }
    }
  }
</script>
<style lang="less">
  .header-layout{
    display: flex;
    color: #fff;
    padding-left: 20px;
    width: 100%;
    .header-left{
      width: 15%;
      display: flex;
      align-items: center;
      .header-left-image{
        height: 30px;
        width: 30px;
        margin-right: 20px;
        background-image: url("../../../assets/images/1.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
    .header-menu{
      width: 60%;
      display: flex;
      align-items: center;
      .header-menu-item{
        margin-left: 50px;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        cursor: pointer;
        text-align: center;
      }
      .navChangeStyle{
        background-color: #007cff;
      }
    }
    .header-right{
      background-color: #007cff;
      float: right;
      right:0;
      position:fixed;
      display: flex;
      align-items: center;
      padding: 0 10px;
      .header-right-person-image{
        height: 30px;
        width: 30px;
        background-image: url("../../../assets/images/person.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .header-right-out{
        margin-left: 10px;
        cursor: pointer
      }
    }
  }
</style>
