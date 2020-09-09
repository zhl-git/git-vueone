<template>
  <div class="qq">123456</div>
</template>

<script>
export default {
data() {
  return {
    
  }
},
mounted() {
  this.axios.get('/node')
},
}
</script>

<style>
.qq{
  margin-top: 40px;
}
</style>