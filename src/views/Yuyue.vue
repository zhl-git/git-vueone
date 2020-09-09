<template>
  <div class="www">
    <div class="qw" v-if="huihua">
      <div class="huikuang">
        <div class="huikuang-box">
          <div class="huikuang-box-header">
            <div class="huikuang-box-header-text">
              <span>华埔客服</span>
            </div>
            <div class="huikuang-box-header-right">
              <div class="right-phone">
                <img src="../assets/wei-icon/phone new.png" alt />
              </div>
              <div class="right-off" @click="btn()">
                <img src="../assets/wei-icon/down.png" alt />
              </div>
            </div>
          </div>
          <div class="huikuang-box-center">
            <div class="huikuang-box-center-title">
              <span>加载更多历史消息</span>
            </div>
            <div class="huikuang-box-center-text" >
              <div class="huikuang-box-center-tou">
                <img src="../assets/wei-icon/tou.png" alt />
              </div>
              <div class="huikuang-box-center-neirong">
                <div class="huikuang-box-center-time">
                  <span>{{gettime}}</span>
                </div>
                <div class="huikuang-box-center-span">
                  <div>{{Hello}}</div>
                </div>
              </div>
            </div>
            

            <!-- 底部 -->
            <div class="huikuang-foot">
              <div class="huikuang-foot-box">
                <div class="huikuang-foot-box-left">
                  <div class="rigth-biaoqing">
                    <img src="../assets/wei-icon/biaoqing.png" alt />
                  </div>
                  <div class="right-img">
                    <img src="../assets/wei-icon/img.png" alt />
                  </div>
                  <div class="right-zan">
                    <img src="../assets/wei-icon/zan1.png" alt />
                  </div>
                </div>
                <div class="huikuang-foot-box-center">
                  <input type="text" v-model="put"/>
                </div>
                <div class="huikuang-foot-box-right">
                  <button class="fasong" @click="fs()"> 
                    <span>发送</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="huikuang-box-center-title">
              <span>加载更多历史消息</span>
            </div>
            <div class="huikuang-box-center-text">
              <div class="huikuang-box-center-tou">
                <img src="../assets/wei-icon/tou.png" alt />
              </div>
              <div class="huikuang-box-center-neirong">
                <div class="huikuang-box-center-time">
                  <span>{{timer}}</span>
                </div>
                <div class="huikuang-box-center-span">
                  <div>{{mySpeak}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 点击对话框 -->
    <div class="huihua" @click="btn()">
      <div class="huihua-box">
        <div class="huihua-img">
          <img src="../assets/wei-icon/huihua.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      huihua: false,
      gettime: "",
      timer: "",
      Hello: "您好",
      mySpeak:'',
      put:'',
      arr:[],
    };
  },
  mounted() {
    this.getTime();
    this.Timer();
  },
  updated() {
    this.Timer();
  },
  
  methods: {
    fs(){
    this.mySpeak = this.put;
    console.log(this.mySpeak)
    this.mySpeak = this.arr.push()
    console.log(this.arr)
    return this.put = '';
    },
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
    Timer: function () {
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
      _this.timer = hh + ":" + mf + ":" + ss;
    },
  },
};
</script>

<style scope>
.huikuang-foot-box-right {
  display: flex;
  align-items: center;
}
.fasong {
  background-color: #ee0e1c;
  border: none;
  width: 48px;
  height: 30px;
  color: #fff;
}
.huikuang-foot-box-center input {
  width: 188px;
  height: 33px;
  outline: none;
  border: 0;
  font-size: 14px;
}
.huikuang-foot-box-center input:focus {
  outline: none;
}

.huikuang-foot-box-left {
  width: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.huikuang-foot {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 7px 5px;
  background-color: #fcfcfc;
  width: 355px;
}
.huikuang-foot-box {
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.huikuang-box-center-neirong {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 15px;
}
.huikuang-box-center-span:before {
  content: "";
  border-right: 6px solid #ccc;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 0;
  position: absolute;
  left: 0;
  top: 50%;
  margin-left: -7px;
  margin-top: -8px;
}
.huikuang-box-center-span:after {
  content: "";
  border-right: 6px solid #fcfcfc;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 0;
  position: absolute;
  left: 0;
  top: 50%;
  margin-left: -6px;
  margin-top: -8px;
}
.huikuang-box-center-span {
  border: 1px solid #ccc;
  position: relative;
  max-width: 265px;
  padding: 10px 10px;
  word-wrap: break-word;
  border-radius: 4px;
}
.huikuang-box-center-time {
  font-size: 12px;
  color: gray;
  margin-bottom: 8px;
}
.huikuang-box-center-text {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.huikuang-box-center-title {
  position: absolute;
  top: 10px;
  text-align: center;
  line-height: 20px;
  font-size: 13px;
  color: gray;
  width: 100%;
  left: 0;
}
.huikuang-box-center-tou {
  margin-top: 15px;
  width: 36px;
}
.huikuang-box-center {
  padding: 40px 14px 14px;
  height: 433px;
  position: relative;
  z-index: 999;
  overflow: auto;
}
.huikuang-box-header-text {
  color: #fcfcfc;
}
.huikuang-box-header-right {
  width: 60px;
  display: flex;
  justify-content: space-between;
}
.huikuang-box-header {
  height: 40px;
  background-color: red;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
}
.qw img {
  width: 100%;
}
.qw {
  margin-top: 65px;
  width: 375px;
  z-index: 10 !important;
  background-color: #fff;
}
.huihua {
  position: fixed;
  right: 0;
  z-index: 99;
}
.huihua-box {
  width: 62px;
  height: 62px;
  background-color: #e23939;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 300px;
}
.www {
  margin-top: 55px;
}
</style>