<template>
  
  <div class="qq">
    <mt-tabbar v-model="bar" class="bar-fixed" fixed>
      <mt-tab-item id="index">
        <img src="../../assets/wei-icon/home.png" alt="" slot="icon" class="" v-if="bar=='index'">
        <img src="../../assets/wei-icon/homeenable.png" alt="" slot="icon" class="" v-else>
        <span>首页</span>
      </mt-tab-item>
      <mt-tab-item id="yuyue">
        <img src="../../assets/wei-icon/yuyueable.png" alt="" slot="icon" v-if="bar=='yuyue'">
        <img src="../../assets/wei-icon/yuyue.png" alt="" slot="icon" v-else>
        <span>预约</span>
      </mt-tab-item>
      <mt-tab-item id="phone">
        <img src="../../assets/wei-icon/yuyueable.png" alt="" slot="icon" v-if="bar=='phone'">
        <img src="../../assets/wei-icon/yuyue.png" alt="" slot="icon" v-else>
        <span>电话</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>

</template>
<script>

export default {
    data() {
      return {
        bar:"index",
      }
    },
    components:{

  },
  watch: {
     bar(newValue){
          switch(newValue){
              case 'index':
                this.$router.push('/');
                break;
              case 'yuyue':
                this.$router.push('/yuyue');
                break;
              case 'phone':
                this.$router.push('/phone');
                break;
          }
      }
  },

}
</script>

<style scope>

  .qq{
    z-index: 9;
  }
</style>