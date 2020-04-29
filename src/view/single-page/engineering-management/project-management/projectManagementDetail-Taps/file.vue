<template>
  <div class="file">
    <div class="file-data-title bg-white mt-15 mb-15">
      <span>关键文档： 21/78</span>
      <span>嵌入式文档： 6  </span>
      <span> 结算审计：1/2 </span>
      <span>决算审计：1/2 </span>
      <span>归档：24/110 </span>
    </div>
    <div class="file-block mt-30">
      <div class="title">
        <div class="title-left">
          <div class="divider ml-5 mr-20"></div>
          <span>结算评审材料</span>
        </div>
        <div>
          <Button type="primary" class="mr-5">下载所选</Button>
          <Button type="error">删除所选</Button>
        </div>
      </div>
      <div class="file-main">
        <div class="file-main-title">
          <h3></h3>
          <h3>文档名称</h3>
          <h3>原始文件</h3>
          <h3>扫描文件</h3>
          <h3></h3>
        </div>
        <div class="file-review-main-study mt-15 pt-10">
          <div class="file-review-main-item mr-88 mt-10">
            <Checkbox size="large">里程碑：可研批复</Checkbox>
          </div>
          <div class="file-review-main-item mt-10">
            <Checkbox size="large">结算评审材料</Checkbox>
            <Button type="primary" class="ml-5" size="small" @click="upload()">点击上传</Button>
          </div>
          <div class="file-review-main-item ml-120">
            <CheckboxGroup class="CheckboxGroup mt-10" v-for="item in attach_list" :key="item.file_id">
              <Checkbox label="twitter" size="large">
                <Icon type="ios-document-outline" class="ml-5" size="24"/>
                <span class="ml-5">{{item.file_name}}</span>
              </Checkbox>
              <Icon type="md-close" class="ml-5" size="24" @click="delFile(item)" style="cursor: pointer"/>
            </CheckboxGroup>
          </div>
          <div class="file-review-main-item ml-120">
            <CheckboxGroup class="CheckboxGroup mt-10" v-for="item in attach_list" :key="item.file_id">
              <Checkbox label="twitter" size="large">
                <Icon type="ios-document-outline" class="ml-5" size="24"/>
                <span class="ml-5">{{item.file_name}}</span>
              </Checkbox>
              <Icon type="md-close" class="ml-5" size="24" @click="delFile(item)" style="cursor: pointer"/>
            </CheckboxGroup>
          </div>
          <div class="file-review-main-item mt-10">
            <Icon type="ios-arrow-down" size="24" @click="ifShow()" style="cursor: pointer"/>
          </div>
        </div>
        <div class="file-review-main-study mt-15 pt-10">
          <div class="file-review-main-item mr-88 mt-10">
            <Checkbox size="large">里程碑：设计批复</Checkbox>
          </div>
          <div class="file-review-main-item mt-10">
            <Checkbox size="large">结算评审材料</Checkbox>
            <Button type="primary" class="ml-5" size="small" @click="upload()">点击上传</Button>
          </div>
          <div class="file-review-main-item ml-120">
            <CheckboxGroup class="CheckboxGroup mt-10" v-for="item in attach_list" :key="item.file_id">
              <Checkbox label="twitter" size="large">
                <Icon type="ios-document-outline" class="ml-5" size="24"/>
                <span class="ml-5">{{item.file_name}}</span>
              </Checkbox>
              <Icon type="md-close" class="ml-5" size="24" @click="delFile(item)" style="cursor: pointer"/>
            </CheckboxGroup>
          </div>
          <div class="file-review-main-item ml-120">
            <CheckboxGroup class="CheckboxGroup mt-10" v-for="item in attach_list" :key="item.file_id">
              <Checkbox label="twitter" size="large">
                <Icon type="ios-document-outline" class="ml-5" size="24"/>
                <span class="ml-5">{{item.file_name}}</span>
              </Checkbox>
              <Icon type="md-close" class="ml-5" size="24" @click="delFile(item)" style="cursor: pointer"/>
            </CheckboxGroup>
          </div>
          <div class="file-review-main-item mt-10">
            <Icon type="ios-arrow-down" size="24" @click="ifShow()" style="cursor: pointer"/>
          </div>
        </div>
      </div>
    </div>
    <div class="file-block mt-50">
      <div class="title">
        <div class="title-left">
          <div class="divider ml-5 mr-20"></div>
          <span>结算审计材料</span>
        </div>
      </div>
      <div class="file-main">
        <div class="file-review-main-study mt-15 pt-10">
          <div class="file-review-main-item mr-88 mt-10">
            <Checkbox size="large">里程碑：设计批复</Checkbox>
          </div>
          <div class="file-review-main-item mt-10">
            <Checkbox size="large">结算评审材料</Checkbox>
            <Button type="primary" class="ml-5" size="small" @click="upload()">点击上传</Button>
          </div>
          <div class="file-review-main-item ml-120">
            <CheckboxGroup class="CheckboxGroup mt-10" v-for="item in attach_list" :key="item.file_id">
              <Checkbox label="twitter" size="large">
                <Icon type="ios-document-outline" class="ml-5" size="24"/>
                <span class="ml-5">{{item.file_name}}</span>
              </Checkbox>
              <Icon type="md-close" class="ml-5" size="24" @click="delFile(item)" style="cursor: pointer"/>
            </CheckboxGroup>
          </div>
          <div class="file-review-main-item ml-120">
            <CheckboxGroup class="CheckboxGroup mt-10" v-for="item in attach_list" :key="item.file_id">
              <Checkbox label="twitter" size="large">
                <Icon type="ios-document-outline" class="ml-5" size="24"/>
                <span class="ml-5">{{item.file_name}}</span>
              </Checkbox>
              <Icon type="md-close" class="ml-5" size="24" @click="delFile(item)" style="cursor: pointer"/>
            </CheckboxGroup>
          </div>
          <div class="file-review-main-item mt-10">
            <Icon type="ios-arrow-down" size="24" @click="ifShow()" style="cursor: pointer"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'file',
    data () {
      return {
        attach_list: [
          { 'file_id': 1, 'file_name': '预算表' },
          { 'file_id': 2, 'file_name': '预算表' }
        ]
      }
    },
    mounted() {
    },
    methods: {
      ifShow() {},
      upload() {},
      delFile(item) {
        console.dir(item)
      }
    }
  }
</script>

<style lang="less">
  .file{
    .file-data-title{
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .file-review-main-study{
      border-top: 1px solid #bcbaba;
      display: flex;
      justify-content: space-around;
      .file-review-main-item{
        width: 200px;
      }
    }
    .file-block{
      .file-main{
        .file-main-title{
          display: flex;
          justify-content: space-around;
        }
      }
    }
    .file-block{
    }
  }
</style>
