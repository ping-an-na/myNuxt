<script setup lang="ts">
// unxt 中 不需要路由，创建的每一个文件 都会自动生成一个路由


const config = useRuntimeConfig() // 获取config文件runtimeConfig对象

if (import.meta.server) { // 正确区分服务端
  console.log(`我的服务端名字叫做${config.name}`)
} else {
  console.log(`这是客户端`)

  let img
  const openimages = async () => {
    img = await import('~/assets/image/rainyday.png')
    console.log(RainyDay,'==')
  }
  openimages();


  // var canvas = document.getElementById('rain');
  // var rainyday = new RainyDay({
  //   image: img, // 背景图像的路径
  //   blur: 10, // 背景模糊度
  //   opacity: 1, // 背景透明度
  //   gravity: 0.1, // 雨滴重力
  //   frameRate: 30, // 帧率
  //   enableSizeChange: true, // 允许大小变化
  //   dropFrequency: 500, // 雨滴频率
  //   minDropSize: 1, // 最小雨滴大小
  //   maxDropSize: 5, // 最大雨滴大小
  //   renderSpeed: 100, // 渲染速度
  // });
  // rainyday.rain();
}


// const config = useRuntimeConfig()
// // if (config.name) {
// //   console.log(`我的服务端名字叫做${config.name}`)
// // } else {
// //   console.log(`这是客户端`)
// // }
// if (import.meta.server) { // 正确区分服务端
//   console.log(`我的服务端名字叫做${config.name}`)
// } else {
//   console.log(`这是客户端`)
// }
//
// const name = ref('周正方')
// let age = ref(1)
// console.log(name.value)
// const ageAdd = function (e) {
//   console.log(e)
//   age.value = age.value + 1
// }
</script>


<template>

  <!--  <div class="min">-->
  <!--    <div style="flex: 1">-->
  <!--      <el-affix :offset="0">-->
  <!--        999999999-->
  <!--      </el-affix>-->
  <!--    </div>-->
  <!--    <div style="height: 100%;">-->
  <!--      &lt;!&ndash;  <router-view></router-view>&ndash;&gt;-->
  <!--      &lt;!&ndash;  nuxt 的 路由组件 比router-view 更加强大&ndash;&gt;-->
  <!--      <NuxtPage/>-->
  <!--    </div>-->
  <!--    <div style="flex: 1">-->
  <!--      足部footer-->
  <!--    </div>-->
  <!--  </div>-->
  <div>
    <div class="acas">
      <canvas id="rain" class="rain"></canvas>
      <div class="zhang_index">
        首页
      </div>
      <div class="zhang_index2">
        首页2
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.rain {
  width: 100%;
  height: 100vh;
}

.acas {
  display: flex;
  flex-flow: column;
}

.zhang_index {
  width: 100%;
  height: 100vh;
  background: pink;

}

.zhang_index2 {
  width: 100%;
  height: 100vh;
  background: yellow;
}

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
