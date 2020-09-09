<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Tablebar></Tablebar>
  </div>
</template>
<script>
import Header from './components/demo/Header'
import Tablebar from './components/demo/Tablebar'
export default {
  components:{
    Header,
    Tablebar,
  }
}
</script>
<style scoped>

</style>
