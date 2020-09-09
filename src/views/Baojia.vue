<template>
  <div>
    <div class="qq">
      <div class="yuyue-img">
        <img src="../assets/yuyue/1.jpg" alt />
      </div>
      <div class="in-xinxi-put">
        <div class="guan">
          <span>官网预约 立享特权</span>
        </div>
        <div class="yname">
          <input type="text" placeholder="您的姓名" />
        </div>
        <div class="yname">
          <input
            type="number"
            oninput="if(value.length>11)value=value.slice(0,11)"
            placeholder="您的手机号码"
          />
        </div>
        <div class="yname">
          <input type="text" placeholder="小区地址" />
        </div>
        <div class="yname">
          <input type="text" placeholder="房屋面积" />
        </div>
        <mt-button type="danger" size="large" class="huoqu">一键预约</mt-button>
      </div>
      <div class="foot">
        <div class="foot-box">
          <div class="foot-item-one">
            <router-link :to="'/'">
              <span>触屏版</span>
            </router-link>
            <span>|</span>
            <span>电脑版</span>
          </div>
          <div class="foot-item-two">
            <span>华埔装饰</span>
          </div>
          <div class="foot-item-three">
            <span>豫ICP备16014376号</span>
          </div>
          <div class="foot-item-four">
            <span>华埔愿景：为中外精英阶层创造高品质家居生活。</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    this.axios.get('/baojia')
  },
}
</script>
<style>
.guan {
  display: block;
  margin-block-end: 1em;
  text-align: center;
  color: #ffff;
}
.yuyue-img {
  width: 375px;
}
.yuyue-img img {
  width: 375px;
}
.qq {
  margin-top: 40px;
  
}
.in-xinxi-put {
  padding: 20px 4%;
  background-color: #a42126;
  margin-bottom: 30px;
  margin-top: -2px;
}
.yname {
  width: 100%;
  height: 53px;
  margin: 0;
}
.yname input {
  width: 100%;
  height: 40px;
  background-color: #f7f7f7;
  outline: none;
  border: 0px;
}
.huoqu {
  font-size: 16px;
}

.foot-item-one {
  width: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.foot-item-one a {
  color: #e74c3c;
  font-size: 14px;
}
.foot-box {
  padding: 15px 0;
  height: 85px;
  color: gray;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.foot {
  margin-top: 40px;
  width: 375px;
  height: 125px;
  background-color: #2e2e2e;
}
</style>