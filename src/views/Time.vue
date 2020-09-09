<template>
  <div class="time">
    <div class="qq">
    <span>{{gettime}}</span>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gettime: "",
    };
  },
  mounted() {
    this.getTime();
  },
  beforeUpdate() {
    this.getTime();
  },
  methods: {
    btn: function () {
      this.huihua = !this.huihua;
    },
    getTime: function () {
      var _this = this;

      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      _this.gettime = hh + ":" + mf + ":" + ss;
    },
  },
};
</script>

<style>
.time{
  margin-top: 40px;
}
.qq{
  width: 100px;
  height: 100px;
  margin-top: 40px;
  color: #000;
}
</style>