<template>
  <div id="App">
    <el-button>按钮</el-button>
  </div>
</template>

<script>
// 按需引入注册路由模块
import { registerAPI } from '@/api'
export default {
  async created() {
    const res = await registerAPI()
    console.log(res)
  }
}
</script>

<style lang="less" scoped></style>
