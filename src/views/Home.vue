<template>
  
  <div class="qq">
    <mt-tabbar v-model="bar" fixed>
      <mt-tab-item id="index">
        <img src="../assets/wei-icon/home.png" alt="" slot="icon" class="" v-if="bar=='index'">
        <img src="../assets/wei-icon/homeenable.png" alt="" slot="icon" class="" v-else>
        <span>首页</span>
      </mt-tab-item>
      <mt-tab-item id="yuyue">
        <img src="../assets/wei-icon/yuyueable.png" alt="" slot="icon" v-if="bar=='yuyue'">
        <img src="../assets/wei-icon/yuyue.png" alt="" slot="icon" v-else>
        <span>预约</span>
      </mt-tab-item>
      <mt-tab-item id="phone">
        <img src="../assets/wei-icon/yuyueable.png" alt="" slot="icon" v-if="bar=='yuyue'">
        <img src="../assets/wei-icon/yuyue.png" alt="" slot="icon" v-else>
        <span>预约</span>
      </mt-tab-item>
    </mt-tabbar>
     <div>
    <mt-tab-container v-model="bar">
      <mt-tab-container-item id="index">
        <Home></Home>
      </mt-tab-container-item>
      <mt-tab-container-item id="yuyue">
       <Yuyue></Yuyue>
      </mt-tab-container-item>
     <mt-tab-container-item id="phone">
       <Phone></Phone>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
  </div>

</template>

<script>
import Home from '../views/About'
import Yuyue from '../views/Yuyue'
import Phone from '../views/Phone'
export default {
    data() {
      return {
        bar:"index",
      }
    },
    components:{
      
    Home,
    Yuyue,
    Phone,
  }
}
</script>

<style  scoped>

.qq{
  margin-bottom: 55px;
  z-index: 9;
}
</style>