<script setup lang="ts">
// unxt 中 不需要路由，创建的每一个文件 都会自动生成一个路由


const config = useRuntimeConfig()
// if (config.name) {
//   console.log(`我的服务端名字叫做${config.name}`)
// } else {
//   console.log(`这是客户端`)
// }
if (import.meta.server) { // 正确区分服务端
  console.log(`我的服务端名字叫做${config.name}`)
} else {
  console.log(`这是客户端`)
}

const name = ref('周正方')
let age = ref(1)
console.log(name.value)
const ageAdd = function (e) {
  console.log(e)
  age.value = age.value + 1
}
</script>

<template>
  <!--  <div>{{ name }}</div>-->
  <!--  <button @click="ageAdd">{{ age }}</button>-->
  <!--  <h1>wowowo</h1>-->
  <!--  <div class="aa">namamamam</div>-->
  <!--  <el-button type="danger">按钮</el-button>-->
  <!--  <el-button @click="ElMessage('hello')">button</el-button>-->
  <!--  <ElButton :icon="ElIconEditPen" type="success">button</ElButton>-->
  <!--  <LazyElButton type="warning">lazy button</LazyElButton>-->

  <div class="min">
    <div>
      <el-affix :offset="0">
       999999999
      </el-affix>
    </div>
    <div style="flex:1;">
      <!--  <router-view></router-view>-->
      <!--  nuxt 的 路由组件 比router-view 更加强大-->
      <NuxtPage/>
    </div>
    <div>
      足部footer
    </div>
  </div>

</template>

<style scoped lang="scss">

.aa {
  color: $colorRed;
}

.min {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
}
</style>
