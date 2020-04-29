<template>
  <Modal v-model="ifShow" width="360" @on-cancel="cancel">
    <p slot="header" style="color:#f60;text-align:center">
      <Icon type="ios-information-circle"></Icon>
      <span>删除</span>
    </p>
    <div style="text-align:center">
      <p>是否删除该条数据？{{id}}</p>
    </div>
    <div slot="footer">
      <Button type="error" size="large" long @click="ok">确认删除</Button>
    </div>
  </Modal>
</template>

<script>
  export default {
    name: 'delModal',
    props: {
      id: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        ifShow: true
      }
    },
    mounted() {
    },
    methods: {
      cancel () {
        this.$emit('delOutput')
      },
      ok () {
        this.$emit('delOutput', this.id)
      }
    }
  }
</script>

<style lang="less">
  .setReport{
  }
</style>
