<template>
  <div id="app">
    <!-- 轮播图 -->
    <div class="fixed">
<div class="qw" v-if="huihua">
      <div class="huikuang">
        <div class="huikuang-box">
          <div class="huikuang-box-header">
            <div class="huikuang-box-header-text">
              <span>华埔客服</span>
            </div> 
            <div class="huikuang-box-header-right">
              <div class="right-phone">
                <img src="../assets/wei-icon/phone new.png" alt="">
              </div>
              <div class="right-off" @click="btn()">
                <img src="../assets/wei-icon/down.png" alt="">
              </div>
            </div> 
          </div>
          <div class="huikuang-box-center">
            <div class="huikuang-box-center-title">
              <span>加载更多历史消息</span>
            </div>
          <div class="huikuang-box-center-text">
            <div class="huikuang-box-center-tou">
            <img src="../assets/wei-icon/tou.png" alt="">
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
                  <img src="../assets/wei-icon/biaoqing.png" alt="">
                </div>
                <div class="right-img">
                  <img src="../assets/wei-icon/img.png" alt="">
                </div>
                <div class="right-zan">
                  <img src="../assets/wei-icon/zan1.png" alt="">
                </div>
              </div>  
              <div class="huikuang-foot-box-center">
               <input type="text">
              </div>
              <div class="huikuang-foot-box-right">
                <button class="fasong">
                  <span>发送</span>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 点击对话框 -->
    <div class="huihua" @click="btn()" >
      <div class="huihua-box">
      <div class="huihua-img" >
        <img src="../assets/wei-icon/huihua.png" alt="">
      </div>
    </div>
    </div>
    </div>
    <div v-if="box">

    <div class="mt-swiper-box">
      <mt-swipe :auto="3000" :speed="500">
        <mt-swipe-item>
          <a href>
            <img src="../assets/swiper/20191229175659031839.jpg" alt />
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href>
            <img src="../assets/swiper/20191109152846731900.png" alt />
          </a>
        </mt-swipe-item>
        <mt-swipe-item option>
          <a href>
            <img src="../assets/swiper/20200808164956179764.jpg" alt class="sw-three" />
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 头部滚动栏 -->
    <div class="notice">
      <div class="notice-in">
        <marquee behavior="scroll" direction="left" class="notice-in-text">
          <div class="laba-icon">
            <div class="laba-icon-img">
              <img src="../assets/wei-icon/laba.png" alt />
            </div>
            <p>公告：本月惠全城！即日起官网预约直接享受本公司头等优惠！预约热线037156096600</p>
          </div>
        </marquee>
      </div>
    </div>
    <!-- 中间选项导航栏 -->
    <div class="na-choose">
      <div class="na-choose-box" >
        <router-link :to="'/detail'" class="na-choose-item">
          <div class="na-choose-item-box">
            <div class="na-choose-item-one">
              <img src="../assets/wei-icon/sa.png" alt />
            </div>
            <span>软装定制</span>
          </div>
        </router-link>
      </div>
      <div class="na-choose-box">
        <router-link :to="'/detail'" class="na-choose-item">
          <div class="na-choose-item-box">
            <div class="na-choose-item-one na-choose-item-two">
              <img src="../assets/wei-icon/quan.png" alt />
            </div>
            <span>全包套餐</span>
          </div>
        </router-link>
      </div>
      <div class="na-choose-box">
        <router-link :to="'/detail'" class="na-choose-item">
          <div class="na-choose-item-box">
            <div class="na-choose-item-one na-choose-item-three">
              <img src="../assets/wei-icon/zuanshi.png" alt />
            </div>
            <span>别墅专区</span>
          </div>
        </router-link>
      </div>
      <div class="na-choose-box">
        <router-link :to="'/detail'" class="na-choose-item">
          <div class="na-choose-item-box">
            <div class="na-choose-item-one na-choose-item-four">
              <img src="../assets/wei-icon/fanxin.png" alt />
            </div>
            <span>旧房翻新</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="na-choose">
      <div class="na-choose-box">
        <router-link :to="'/detail'" class="na-choose-item">
          <div class="na-choose-item-box">
            <div class="na-choose-item-one" style="background-color:#f09d39">
              <img src="../assets/wei-icon/sheji2.png" alt />
            </div>
            <span>找设计师</span>
          </div>
        </router-link>
      </div>
      <div class="na-choose-box">
        <router-link :to="'/detail'" class="na-choose-item">
          <div class="na-choose-item-box">
            <div class="na-choose-item-one na-choose-item-two" style="background-color:#458ddb">
              <img src="../assets/wei-icon/pic.png" alt />
            </div>
            <span>案例品鉴</span>
          </div>
        </router-link>
      </div>
      <div class="na-choose-box">
        <router-link :to="'/detail'" class="na-choose-item">
          <div class="na-choose-item-box">
            <div class="na-choose-item-one na-choose-item-three" style="background-color:#659c47">
              <img src="../assets/wei-icon/money.png" alt />
            </div>
            <span>计算报价</span>
          </div>
        </router-link>
      </div>
      <div class="na-choose-box">
        <router-link :to="'/detail'" class="na-choose-item">
          <div class="na-choose-item-box">
            <div class="na-choose-item-one na-choose-item-four" style="background-color:#e58361">
              <img src="../assets/wei-icon/VR.png" alt />
            </div>
            <span>VR样板间</span>
          </div>
        </router-link>
      </div>
    </div>
    <!-- 我家装修需要多少钱？ -->
    <div class="in-xinxi">
      <div class="in-xinxi-box">
        <div class="in-xinxi-title">
          <h1>我家装修需要多少钱？</h1>
        </div>
        <!-- 随机价格 -->
        <div class="in-xinxi-price">
          <div class="in-xinxi-price-box">
            <div class="in-xinxi-suiji">
              <div>
              <h1>{{money0}}{{price}}{{money}}{{money1}}{{money2}}{{money3}}</h1>
            </div>
              <!-- <div>
              <h1>{{price}}</h1>
            </div>
            <div>
              <h1>{{money}}</h1>
            </div>
            <div>
              <h1>{{money1}}</h1>
            </div>
            <div>
              <h1>{{money2}}</h1>
            </div>
            <div>
              <h1>{{money3}}</h1>
            </div> -->
            </div>
            
            <span>元</span>
          </div>
        </div>
        <!-- 姓名 电话 面积-->
        <div class="in-xinxi-put">
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
            <input type="text" placeholder="房屋面积" />
          </div>
          <mt-button type="danger" size="large" class="huoqu">立即获取</mt-button>
          <div class="bt-p">
            <p>您的信息将被严格保密！稍后会有专业人员致电为您服务</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 甄选家装服务 -->
    <div class="zhenxuan">
      <div class="zhenxuan-header">
        <mt-header>
          <div slot="left" class="zhenxuan-title">
            <span>甄选</span>家装服务
          </div>
          <router-link :to="'/detail'" slot="right">
            <div class="mintui-jiantou">
              1分钟了解华埔装饰
              <img src="../assets/wei-icon/j.png" alt />
            </div>
          </router-link>
        </mt-header>
      </div>
      <div class="zhenxuan-box">
        <router-link :to="'/detail'" class="zhenxuan-box-a">
          <img src="../assets/img/zhenxuan01.jpg" alt />
        </router-link>
        <router-link :to="'/detail'" class="zhenxuan-box-a">
          <img src="../assets/img/zhenxuan02.jpg" alt />
        </router-link>
      </div>
    </div>
    <!-- 快速报价-家装贷款-查询门店-优惠活动-免费验房-免费专车 -->
    <div class="center-nav">
      <div class="center-nav-up">
        <router-link :to="'/detail'" class="center-item">
          <div class="center-item-one">
            <div icon="jiantou1">
              <img src="../assets/wei-icon/jisuan.png" alt />
            </div>
            <span>快速报价</span>
          </div>
        </router-link>
        <router-link :to="'/detail'" class="center-item">
          <div class="center-item-one">
            <div icon="jiantou1">
              <img src="../assets/wei-icon/price.png" alt />
            </div>
            <span>家装贷款</span>
          </div>
        </router-link>
        <router-link :to="'/detail'" class="center-item">
          <div class="center-item-one">
            <div icon="jiantou1">
              <img src="../assets/wei-icon/pu.png" alt />
            </div>
            <span>查询门店</span>
          </div>
        </router-link>
      </div>
      <div class="center-nav-down">
        <router-link :to="'/detail'" class="center-item">
          <div class="center-item-one">
            <div icon="jiantou1">
              <img src="../assets/wei-icon/hui.png" alt />
            </div>
            <span>优惠活动</span>
          </div>
        </router-link>
        <router-link :to="'/detail'" class="center-item">
          <div class="center-item-one">
            <div icon="jiantou1">
              <img src="../assets/wei-icon/yanhome.png" alt />
            </div>
            <span>免费验房</span>
          </div>
        </router-link>
        <router-link :to="'/detail'" class="center-item">
          <div class="center-item-one">
            <div icon="jiantou1">
              <img src="../assets/wei-icon/mycar.png" alt />
            </div>
            <span>免费专车</span>
          </div>
        </router-link>
      </div>
    </div>
    <!-- 家装案例品鉴  借用甄选的头部-->
    <div class="zhenxuan">
      <div class="zhenxuan-header">
        <mt-header>
          <div slot="left" class="zhenxuan-title">家装案例品鉴</div>
          <router-link :to="'/detail'" slot="right">
            <div class="mintui-jiantou">
              查看全部
              <img src="../assets/wei-icon/j.png" alt />
            </div>
          </router-link>
        </mt-header>
      </div>
      <div class="jia-box">
        <div class="jia-box-item">
          <div class="jia-box-item-img">
            <img src="../assets/img/20190830113311787426.jpg" alt class="jia-box-item-big" />
            <div class="jia-box-item-tou">
              <div class="jia-box-item-tou-img">
                <img src="../assets/img/touxiang.jpg" alt />
              </div>
              <div class="jia-box-item-tou-text">
                <span>宋雪</span>
              </div>
            </div>
            <div class="jia-box-item-last-title">
              <span>四室两厅</span>
              <span class="jia-span">|</span>
              <span>港式</span>
              <span class="jia-span">|</span>
              <span>160平米-200平米</span>
            </div>
            <div class="jia-box-item-last-weilogo">
              <div class="jia-box-item-last-weilogo-one">
                <img src="../assets/wei-icon/tupian.png" alt />
                <span>4</span>
              </div>
              <div class="jia-box-item-last-weilogo-two">
                <img src="../assets/wei-icon/aixin.png" alt />
                <span>73</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 家装导航 -->
        <div class="jia-box-nav">
          <div class="jia-box-nav-item">
            <router-link :to="'/detail'">
              <span>现代简约</span>
            </router-link>
            <span class="jia-box-nav-item-fenge">|</span>
            <router-link :to="'/detail'">
              <span>中式</span>
            </router-link>
            <span class="jia-box-nav-item-fenge">|</span>

            <router-link :to="'/detail'">
              <span>简欧</span>
            </router-link>
            <span class="jia-box-nav-item-fenge">|</span>

            <router-link :to="'/detail'">
              <span>地中海</span>
            </router-link>
            <span class="jia-box-nav-item-fenge">|</span>

            <router-link :to="'/detail'">
              <span>更多</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 家装设计大师开始 -->
    <!-- 头部  引用 -->
    <div class="zhenxuan div-margin-top">
      <div class="zhenxuan-header">
        <mt-header>
          <div slot="left" class="zhenxuan-title">家装设计大师</div>
          <router-link :to="'/detail'" slot="right">
            <div class="mintui-jiantou">
              查看全部
              <img src="../assets/wei-icon/j.png" alt />
            </div>
          </router-link>
        </mt-header>
      </div>
      <!-- 内容 -->
      <div class="sheji-box">
        <div class="sheji-box-item">
          <div class="sheji-box-item-one">
            <img src="../assets/img/sheji1.jpg" alt />
            <div class="sheji-box-item-p">
              <p>张闪</p>
              <p class="sheji-box-item-p-p">首席设计师</p>
            </div>
          </div>
          <div class="sheji-box-item-one">
            <img src="../assets/img/sheji2.jpg" alt />
            <div class="sheji-box-item-p">
              <p>陈阳</p>
              <p class="sheji-box-item-p-p">首席设计师</p>
            </div>
          </div>
          <div class="sheji-box-item-one">
            <img src="../assets/img/sheji3.jpg" alt />
            <div class="sheji-box-item-p">
              <p>余要杰</p>
              <p class="sheji-box-item-p-p">设计总监</p>
            </div>
          </div>
          <div class="sheji-box-item-one">
            <img src="../assets/img/sheji4.jpg" alt />
            <div class="sheji-box-item-p">
              <p>王凯丽</p>
              <p class="sheji-box-item-p-p">首席设计师</p>
            </div>
          </div>
          <div class="sheji-box-item-one">
            <img src="../assets/img/sheji6.jpg" alt />
            <div class="sheji-box-item-p">
              <p>樊慧丹</p>
              <p class="sheji-box-item-p-p">主任设计师</p>
            </div>
          </div>
          <div class="sheji-box-item-one">
            <img src="../assets/img/sheji8.jpg" alt />
            <div class="sheji-box-item-p">
              <p>李婷婷</p>
              <p class="sheji-box-item-p-p">首席设计师</p>
            </div>
          </div>
        </div>
        <div class="sheji-box-inp">
          <input type="text" placeholder="您的姓名" />
          <input
            type="number"
            placeholder="您的手机号码"
            oninput="if(value.length>11)value=value.slice(0,11)"
          />
          <mt-button type="danger">
            <span>专属全屋设计</span>
          </mt-button>
        </div>
      </div>
    </div>
    <div class="zhenxuan loupan">
      <div class="zhenxuan-header">
        <mt-header>
          <div slot="left" class="zhenxuan-title">热装楼盘</div>
        </mt-header>
      </div>
      <div class="loupan-box">
        <div class="loupan-box-item">
          <img src="../assets/img/loupan1.jpg" alt />
          <span>永威城</span>
        </div>
        <div class="loupan-box-item">
          <img src="../assets/img/loupan2.jpg" alt />
          <span>华瑞紫韵城</span>
        </div>
      </div>
      <div class="sheji-box-inp see">
        <input type="text" placeholder="您的姓名" />
        <input
          type="number"
          placeholder="您的手机号码"
          oninput="if(value.length>11)value=value.slice(0,11)"
        />
        <mt-button type="danger">
          <span>报名参观楼盘</span>
        </mt-button>
      </div>
    </div>
    <div class="zhenxuan div-margin-top">
      <div class="zhenxuan-header">
        <mt-header>
          <div slot="left" class="zhenxuan-title">您身边的线下体验店</div>
          <router-link :to="'/detail'" slot="right">
            <div class="mintui-jiantou">
              查看全部
              <img src="../assets/wei-icon/j.png" alt />
            </div>
          </router-link>
        </mt-header>
      </div>
      <div class="tiyan-box">
        <router-link :to="'/detail'" class="tiyan-box-item">
          <div class="tiyan-box-item-img">
            <img src="../assets/img/tiyan1.jpg" alt="">
          </div>
          <div class="tiyan-box-item-text">
            <span class="tiyan-box-item-text-title">华埔南区旗舰店</span>
            <span class="tiyan-box-item-text-phone">0371-5690-6600</span>
          </div>
        </router-link>
        <router-link :to="'/detail'" class="tiyan-box-item">
          <div class="tiyan-box-item-img">
            <img src="../assets/img/tiyan2.jpg" alt="">
          </div>
          <div class="tiyan-box-item-text">
            <span class="tiyan-box-item-text-title">华埔花园店</span>
            <span class="tiyan-box-item-text-phone">0371-5690-6600</span>
          </div>
        </router-link>
        <router-link :to="'/detail'" class="tiyan-box-item">
          <div class="tiyan-box-item-img">
            <img src="../assets/img/tiyan3.jpg" alt="">
          </div>
          <div class="tiyan-box-item-text">
            <span class="tiyan-box-item-text-title">华埔装饰万达店</span>
            <span class="tiyan-box-item-text-phone">0371-5690-6600</span>
          </div>
        </router-link>
        <div class="sheji-box-inp">
        <input type="text" placeholder="您的姓名" />
        <input
          type="number"
          placeholder="您的手机号码"
          oninput="if(value.length>11)value=value.slice(0,11)"
        />
        <mt-button type="danger">
          <span>预约到点体验</span>
        </mt-button>
      </div>
      </div>
    </div>
    <div class="zhenxuan div-margin-top">
      <div class="zhenxuan-header">
        <mt-header>
          <div slot="left" class="zhenxuan-title">我们的优势</div>
          <router-link :to="'/detail'" slot="right">
            <div class="mintui-jiantou">
              查看全部
              <img src="../assets/wei-icon/j.png" alt />
            </div>
          </router-link>
        </mt-header>
      </div>
      <div class="youoshi-box">
        <div class="youshi-box-item">
          <div class="youshi-box-item-one">
            <div class="youshi-box-item-img">
              <img src="../assets/wei-icon/huangguan.png" alt="">
            </div>
            <div class="youshi-box-item-text">
              <div class="youshi-box-item-text-span">
              <span class="youshi-box-item-text-title">品牌优势</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>入住中原9年</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>深受业主好评</span>
              </div>
            </div>
          </div>
        </div>
        <div class="youshi-box-item">
          <div class="youshi-box-item-one">
            <div class="youshi-box-item-img">
              <img src="../assets/wei-icon/zan.png" alt="">
            </div>
            <div class="youshi-box-item-text">
              <div class="youshi-box-item-text-span">
              <span class="youshi-box-item-text-title">规模优势</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>郑州三家店面</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>经营面积16000多平</span>
              </div>
            </div>
          </div>
        </div>
        <div class="youshi-box-item">
          <div class="youshi-box-item-one">
            <div class="youshi-box-item-img">
              <img src="../assets/wei-icon/sheji.png" alt="">
            </div>
            <div class="youshi-box-item-text">
              <div class="youshi-box-item-text-span">
              <span class="youshi-box-item-text-title">设计优势</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>优秀设计团队</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>传承海派家居文化</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="youoshi-box">
        <div class="youshi-box-item">
          <div class="youshi-box-item-one">
            <div class="youshi-box-item-img">
              <img src="../assets/wei-icon/cailiao.png" alt="">
            </div>
            <div class="youshi-box-item-text">
              <div class="youshi-box-item-text-span">
              <span class="youshi-box-item-text-title">材料优势</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>230余家优质厂家</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>高环保、生态家装</span>
              </div>
            </div>
          </div>
        </div>
        <div class="youshi-box-item">
          <div class="youshi-box-item-one">
            <div class="youshi-box-item-img">
              <img src="../assets/wei-icon/shigong.png" alt="">
            </div>
            <div class="youshi-box-item-text">
              <div class="youshi-box-item-text-span">
              <span class="youshi-box-item-text-title">施工优势</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>自有工人持证上岗</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>绿金刚标准化管理</span>
              </div>
            </div>
          </div>
        </div>
        <div class="youshi-box-item">
          <div class="youshi-box-item-one">
            <div class="youshi-box-item-img">
              <img src="../assets/wei-icon/hezuo.png" alt="">
            </div>
            <div class="youshi-box-item-text">
              <div class="youshi-box-item-text-span">
              <span class="youshi-box-item-text-title">良心工地</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>严格监理制度</span>
              </div>
              <div class="youshi-box-item-text-span">
              <span>董事长亲自巡检</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="img-img">
        <router-link :to="'/detail'">
        <img src="../assets/img/img.jpg" alt="">
        </router-link>
      </div>
      <div class="sheji-box-inp inp-width">
        <input type="text" placeholder="您的姓名" />
        <input
          type="number"
          placeholder="您的手机号码"
          oninput="if(value.length>11)value=value.slice(0,11)"
        />
        <mt-button type="danger">
          <span class="baoming">我要报名</span>
        </mt-button>
      </div>
      </div>
       <!-- 流程 -->
      <div class="bg-liuceng">
        <div class="bg-liuceng-box">
        <div class="bg-liuceng-item">
          <div class="bg-liuceng-item-img">
            <div>
            <img src="../assets/wei-icon/kefu.png" alt="">
            </div>
          </div>
          <div class="bg-liuceng-item-text">
            <span>1.在线预约咨询</span>
          </div>
        </div>
        <div class="shengluehao">
          <img src="../assets/wei-icon/shenglue.png" alt="">
        </div>
         <div class="bg-liuceng-item">
          <div class="bg-liuceng-item-img">
            <div>
            <img src="../assets/wei-icon/sheji (1).png" alt="">
            </div>
          </div>
          <div class="bg-liuceng-item-text">
            <span>2.设计方案</span>
          </div>
        </div>
        <div class="shengluehao">
          <img src="../assets/wei-icon/shenglue.png" alt="">
        </div>
         <div class="bg-liuceng-item">
          <div class="bg-liuceng-item-img">
            <div>
            <img src="../assets/wei-icon/ben.png" alt="">
            </div>
          </div>
          <div class="bg-liuceng-item-text">
            <span>3.确定报价</span>
          </div>
        </div>
        <div class="shengluehao">
          <img src="../assets/wei-icon/shenglue.png" alt="">
        </div>
         <div class="bg-liuceng-item">
          <div class="bg-liuceng-item-img">
            <div>
            <img src="../assets/wei-icon/qianding.png" alt="">
            </div>
          </div>
          <div class="bg-liuceng-item-text">
            <span>4.签订装修合同</span>
          </div>
        </div>
        </div>
        <div class="bg-liuceng-box item-two">
        <div class="bg-liuceng-item">
          <div class="bg-liuceng-item-img">
            <div>
            <img src="../assets/wei-icon/gongdi.png" alt="">
            </div>
          </div>
          <div class="bg-liuceng-item-text">
            <span>5.工地施工</span>
          </div>
        </div>
        <div class="shengluehao">
          <img src="../assets/wei-icon/shenglue.png" alt="">
        </div>
         <div class="bg-liuceng-item">
          <div class="bg-liuceng-item-img">
            <div>
            <img src="../assets/wei-icon/yan.png" alt="">
            </div>
          </div>
          <div class="bg-liuceng-item-text">
            <span>6.节点验收</span>
          </div>
        </div>
        <div class="shengluehao">
          <img src="../assets/wei-icon/shenglue.png" alt="">
        </div>
         <div class="bg-liuceng-item">
          <div class="bg-liuceng-item-img">
            <div>
            <img src="../assets/wei-icon/jungong.png" alt="">
            </div>
          </div>
          <div class="bg-liuceng-item-text">
            <span>7.竣工验收</span>
          </div>
        </div>
        <div class="shengluehao">
          <img src="../assets/wei-icon/shenglue.png" alt="">
        </div>
         <div class="bg-liuceng-item">
          <div class="bg-liuceng-item-img">
            <div>
            <img src="../assets/wei-icon/shouhou.png" alt="">
            </div>
          </div>
          <div class="bg-liuceng-item-text">
            <span>8.售后保修</span>
          </div>
        </div>
        </div>
        </div>
      <!-- 装修学堂 -->
      <div class="zhenxuan div-margin-top">
      <div class="zhenxuan-header">
        <mt-header>
          <div slot="left" class="zhenxuan-title">装修学堂</div>
          <router-link :to="'/detail'" slot="right">
            <div class="mintui-jiantou">
              查看更多
              <img src="../assets/wei-icon/j.png" alt />
            </div>
          </router-link>
        </mt-header>
      </div>
      <div class="xuetang">
        <router-link class="xuetang-box" :to="'/detail'">
          <div class="xuetang-box-item xuetang-box-item-one">
            <div class="xuetang-item-data">
              <div class="xuetang-item-data-yue">
                07
              </div>
              <div class="xuetang-item-data-ri">
                / 11
              </div>
            </div>
            <div class="xuetang-item-text">
              <div class="xuetang-item-title">
                华埔软装丨避过各种装修的坑，可别败在窗帘上！
              </div>
              <div class="xuetang-item-span">
              电影《海街日记》中有这样一个场景：四妹蹲在门口，经典的日式老宅，亚麻落地窗帘，摄影师瞬间的....
              </div>
            </div>
          </div>
        </router-link>
        <router-link class="xuetang-box" :to="'/detail'">
          <div class="xuetang-box-item ">
            <div class="xuetang-item-data">
              <div class="xuetang-item-data-yue">
                05
              </div>
              <div class="xuetang-item-data-ri">
                / 23
              </div>
            </div>
            <div class="xuetang-item-text">
              <div class="xuetang-item-title">
                儿童房风水全攻略，父母必读
              </div>
              <div class="xuetang-item-span">
              房屋的风水讲究颇多，五行之间蕴含至理。家中有孩子的，父母在装修时会特别注意儿童房。在合理的....
              </div>
            </div>
          </div>
        </router-link>
        <router-link class="xuetang-box" :to="'/detail'">
          <div class="xuetang-box-item ">
            <div class="xuetang-item-data">
              <div class="xuetang-item-data-yue">
                05
              </div>
              <div class="xuetang-item-data-ri">
                / 23
              </div>
            </div>
            <div class="xuetang-item-text">
              <div class="xuetang-item-title">
                华埔软装丨赏美式灯具！
              </div>
              <div class="xuetang-item-span">
                关于灯具的选择，一直是业主比较头疼的一件事，单纯的喜欢还不行，一定要与自己家的风格相匹配，....
              </div>
            </div>
          </div>
        </router-link>
        <router-link class="xuetang-box" :to="'/detail'">
          <div class="xuetang-box-item ">
            <div class="xuetang-item-data">
              <div class="xuetang-item-data-yue">
                05
              </div>
              <div class="xuetang-item-data-ri">
                / 17
              </div>
            </div>
            <div class="xuetang-item-text">
              <div class="xuetang-item-title">
                装修灯光别忽视！用灯光提升幸福感
              </div>
              <div class="xuetang-item-span">
                家中的质感是必不可少的，那质感与什么息息相关呢？一定是灯光！有不少人认为灯光就是照明，事实....
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="xuetang-nav">
        <router-link :to="'/detail'">
          <div class="xuetang-nav-item">
            <div>
            <img src="../assets/wei-icon/zhishi.png" alt="">
            </div>
            <span>装修知识</span>
          </div>
        </router-link>
         <router-link :to="'/detail'">
          <div class="xuetang-nav-item gongdi">
            <div>
            <img src="../assets/wei-icon/lu1.png" alt="">
            </div>
            <span>在施工地</span>
          </div>
        </router-link>
         <router-link :to="'/detail'">
          <div class="xuetang-nav-item xiaoqu">
            <div>
            <img src="../assets/wei-icon/xiaoqu.png" alt="">
            </div>
            <span>热装小区</span>
          </div>
        </router-link>
         <router-link :to="'/detail'">
          <div class="xuetang-nav-item news">
            <div>
            <img src="../assets/wei-icon/news.png" alt="">
            </div>
            <span>企业新闻</span>
          </div>
        </router-link>
      </div>
      <div class="happy-img">
        <img src="../assets/img/syyjzz.jpg" alt="">
      </div>
      <div class="lianxi">
        <div class="lianxi-text">
          <span class="lianxi-text-title">联系我们</span>
          <span class="lianxi-text-phone">24小时家装服务热线: 0371-5609-6600</span>
        </div>
        <div class="lianxi-phone">
          <div>
          <img src="../assets/wei-icon/phone.png" alt="">
          </div>
        </div>
      </div>
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
             <span>华埔装饰</span> </div>
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
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/css/swiper.css");

export default {
  data() {
    return {
      bar: "index",
      price:'88888',
      money:'',
      money0:'',
      money1:'',
      money2:'',
      money3:'',
      timer:'',
      box:true,
       huihua:false,
      Hello:"您好",
      gettime: "",

    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  beforeUpdate() {
    this.getTime();
  },
   mounted() {
      this.timer = setInterval(this.getRandomInt, 1000);
      this.timer = setInterval(this.getRandomInttow, 1000);
      this.timer = setInterval(this.getRandomIntthree, 1000);
      this.timer = setInterval(this.getRandomIntfour, 1000);
      this.timer = setInterval(this.getRandomIntfive, 1000);
      this.timer = setInterval(this.getRandomIntzoo, 1000);
      this.getTime();
      
    },
  methods: {
      // 生成1-10的整数
      // Math.floor(); 向下舍入
      // console.log(Math.floor(3.8)); //向下舍入，小数点省略了 结果：3
      // Math.random()  random() 方法可返回介于 0（包含） ~ 1（不包含） 之间的一个随机数。
      // Math.floor((Math.random()*10)+1);取得介于 1 到 10 之间的一个随机数：
       // Math.floor((Math.random()*100)+1);取得介于 1 到 100 之间的一个随机数：
      getRandomInt() {
     var price = '';
      //设置长度，这里看需求，我这里设置了4
      var codeLength = 1;

      //设置随机字符
      var random = new Array(1,2,3,4,5,6,7,8,9,0);

      //循环codeLength 我设置的4就是循环4次
      for (var i = 0; i < codeLength; i++) {
          //设置随机数范围,这设置为0 ~ 36
          var index = Math.floor(Math.random() * 9);

          //字符串拼接 将每次随机的字符 进行拼接
          price += random[index];
      }

      //将拼接好的字符串赋值给展示的code
      this.price = price;
      },
      getRandomInttow() {
     var money = '';
      //设置长度，这里看需求，我这里设置了4
      var codeLength = 1;

      //设置随机字符
      var random = new Array(1,2,3,4,5,6,7,8,9,0);

      //循环codeLength 我设置的4就是循环4次
      for (var i = 0; i < codeLength; i++) {
          //设置随机数范围,这设置为0 ~ 36
          var index = Math.floor(Math.random() * 9);

          //字符串拼接 将每次随机的字符 进行拼接
          money += random[index];
      }
      //将拼接好的字符串赋值给展示的code
      this.money = money;
      },
      getRandomIntthree() {
     var money1 = '';
      //设置长度，这里看需求，我这里设置了4
      var codeLength = 1;

      //设置随机字符
      var random = new Array(1,2,3,4,5,6,7,8,9,0);

      //循环codeLength 我设置的4就是循环4次
      for (var i = 0; i < codeLength; i++) {
          //设置随机数范围,这设置为0 ~ 36
          var index = Math.floor(Math.random() * 9);

          //字符串拼接 将每次随机的字符 进行拼接
          money1 += random[index];
      }
      
      //将拼接好的字符串赋值给展示的code
      this.money1 = money1;
      },
       getRandomIntfour() {
     var money2 = '';
      //设置长度，这里看需求，我这里设置了4
      var codeLength = 1;

      //设置随机字符
      var random = new Array(1,2,3,4,5,6,7,8,9,0);

      //循环codeLength 我设置的4就是循环4次
      for (var i = 0; i < codeLength; i++) {
          //设置随机数范围,这设置为0 ~ 36
          var index = Math.floor(Math.random() * 9);

          //字符串拼接 将每次随机的字符 进行拼接
          money2 += random[index];
      }
       this.money2 = money2;
      },
      getRandomIntzoo() {
     var money0 = '';
      //设置长度，这里看需求，我这里设置了4
      var codeLength = 1;

      //设置随机字符
      var random = new Array(1,'','','');

      //循环codeLength 我设置的4就是循环4次
      for (var i = 0; i < codeLength; i++) {
          //设置随机数范围,这设置为0 ~ 36
          var index = Math.floor(Math.random() * 4);

          //字符串拼接 将每次随机的字符 进行拼接
          money0 += random[index];
      }
       this.money0 = money0;
      },
      getRandomIntfive() {
     var money3 = '';
      //设置长度，这里看需求，我这里设置了4
      var codeLength = 1;

      //设置随机字符
      var random = new Array(1,2,3,4,5,6,7,8,9,0);

      //循环codeLength 我设置的4就是循环4次
      for (var i = 0; i < codeLength; i++) {
          //设置随机数范围,这设置为0 ~ 36
          var index = Math.floor(Math.random() * 9);

          //字符串拼接 将每次随机的字符 进行拼接
          money3 += random[index];
      }
       this.money3 = money3;
      },
      btn:function(){
      this.huihua= !this.huihua;
      this.box= !this.box;

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
    
    }
};
</script>

<style scoped>

/* css开始 */

#app {
  min-width: 320px;
  min-height: 100%;
  background: #eeeeee;
}
.mint-header {
  background-color: #fff;
  color: #000;
  padding: 0 0;
}
body {
  background: #eeeeee;
}
body,
a {
  font-size: 14px;
  text-decoration: none;
  color: black;
}

.mint-swipe {
  margin-top: 40px;
  height: 200px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 滚动栏开始 */
.laba-icon {
  display: flex;
  color: red;
}
.laba-icon-img {
  margin-right: 8px;
}
.notice {
  height: 50px;
  display: flex;
  background: #eeeeee;
  justify-content: center;
  align-items: center;
}
.notice-in {
  width: 80%;
  height: 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 20px #ddd;
  display: flex;
  justify-content: center;
}
.notice-in-text {
  width: 60%;
  height: 31px;
  display: flex;
  align-items: center;
}
/* 选项导航栏开始 */

.na-choose {
  width: 100%;
  padding: 15px 0;
  display: flex;
  background-color: #fff;
}
.na-choose-box {
  width: 25%;
  height: 68px;
  display: flex;
  justify-content: center;
}
.na-choose-item-one {
  width: 35px;
  height: 35px;
  background-color: #ab6ac9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}
.na-choose-item-two {
  /* #6589e5 #4bb8d8*/
  background-color: #e09277;
}
.na-choose-item-three {
  background-color: #6589e5;
}
.na-choose-item-four {
  background-color: #4bb8d8;
}
.na-choose-item-one img {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
}
.na-choose-item-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.na-choose-item-box span {
  margin-top: 10px;
}
/* 计算价格开始 */
.in-xinxi {
  margin-top: 15px;
  background-color: #fff;
}
.in-xinxi-price h1 {
  font-size: 48px;
  font-weight: 600;
}
.in-xinxi-price {
  position: relative;
  height: 52px;
  margin: 0 auto;
  border: 6px solid #d2d1d1;
  border-radius: 4px;
  padding-bottom: 8px;
  margin-top: 5px;
}
.in-xinxi-price-box span {
  right: 10px;
  bottom: 10px;
  position: absolute;
}
.in-xinxi-price-box {
  height: 100%;
  padding-top: 5px;
  border-radius: 4px;
  border-top: 2px solid #3d3c30;
  border-bottom: 2px solid #6c6b60;
  border-left: 3px solid #3d3c30;
  border-right: 3px solid #3d3c30;
  background-color: #d3d3cb;
}
.in-xinxi-suiji{
  height: 100%;
  right: 30px;
  position: absolute;
 display: flex;
}
.in-xinxi-title {
  text-align: center;
  font-size: 24px;
  font-weight: 400;
}
.in-xinxi-title h1 {
  padding-top: 15px;
}
.in-xinxi-put {
  padding: 20px 4%;
}
.yname {
  width: 100%;
  height: 60px;
  margin: 0;
}
.yname input {
  width: 100%;
  height: 40px;
  background-color: #f7f7f7;
  border-radius: 10px;
  outline: none;
  border: 0px;
}
.huoqu {
  font-size: 16px;
}
.bt-p {
  margin: 5px auto;
  font-size: 12px;
  text-align: center;
  color: #9a9a9a;
}
/* 甄选开始 */
.zhenxuan-box {
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.zhenxuan-box img {
  width: 95%;
  height: 100%;
  border-radius: 10px;
}
.zhenxuan-header {
  padding-bottom: 5px;
  border-bottom: 1px solid #edecec;
}

.zhenxuan-title {
  font-size: 24px;
  font-weight: bold;
}
.zhenxuan-title span {
  color: red;
}
.mintui-jiantou {
  margin-top: 16px;
  color: red;
}
.zhenxuan {
  padding: 15px;
  margin-top: 20px;
  background-color: #fff;
}
/* 甄选结束 */
/* 计算报价开始 */
.center-nav-up,
.center-nav-down {
  display: flex;
  justify-content: space-around;
}
.center-nav-down {
  margin-top: 25px;
}
.center-item-one {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.center-item {
  display: flex;
}
.center-item span {
  margin-top: 5px;
  font-size: 12px;
}
.center-nav {
  margin-top: 10px;
  padding: 15px;
  background-color: #fff;
}
/* 计算报价结束 */
/* 家装案例品鉴 开始 */
.jia-box-item-last-weilogo {
  width: 100px;
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: 265px;
  right: 10px;
  align-items: center;
  padding: 0;
  color: white;
}
.jia-box-item-last-weilogo-one,
.jia-box-item-last-weilogo-two {
  width: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.jia-box-item {
  height: 300px;
  position: relative;
}
.jia-box-item-last-title {
  width: 225px;
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  opacity: 0.8;
  top: 270px;
  left: 8px;
}
.jia-span {
  padding: 0 5px;
}
.jia-box-item-tou {
  position: absolute;
  right: 20px;
  top: 20px;
}
.jia-box-item-tou-img {
  width: 45px;
  height: 45px;
  border-radius: 60%;
  overflow: hidden;
  border: 1px solid white;
}

.jia-box-item-tou-text {
  text-align: center;
  color: white;
}
.jia-box-item-tou img {
  width: 45px;
}
.jia-box-item-img {
  margin-top: 10px;
  width: 360px;
  height: 100%;
  object-fit: cover;
}
.jia-box-item-big {
  width: 100%;
  height: 300px;
  position: absolute;
  border-radius: 8px;
}
.jia-box-nav {
  margin: 10px 0;
  text-align: center;
}
.jia-box-nav span {
  font-size: 16px;
  color: gray;
}
.jia-box-nav-item-fenge {
  padding: 0 5px;
}
/* 家装案例品鉴 结束 */
/* 家装设计大师 开始*/
.sheji-box-inp {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
}
.sheji-box-inp input {
  width: 110px;
  background-color: #f7f7f7;
  outline: none;
  border: 0;
  margin-right: 5px;
  border-radius: 5px;
  padding-left: 8px !important;
}
.sheji-box-inp span {
  font-size: 12px;
}
.div-margin-top {
  margin-top: 0px !important;
}
.sheji-box-item-p {
  padding: 8px 5px 5px 5px;
  color: gray;
}
.sheji-box-item-p-p {
  font-size: 12px;
  padding: 4px 0;
}
.sheji-box {
  margin-top: 10px;
  width: 355px;
  overflow: hidden;
}
.sheji-box-item {
  display: flex;
  width: 355px;
  overflow: auto;
  padding-bottom: 15px;
}
.sheji-box-item-one {
  box-shadow: 2px 3px 10px lightgray;
  border-radius: 5px;
}
.sheji-box-item-one ~ .sheji-box-item-one {
  margin-left: 12px;
}
.sheji-box-item img {
  width: 115px;
  height: 115px;
  border-radius: 5px;
}
/* 家装设计大师 结束 */
/* 热装楼盘  开始 */
.see {
  width: 355px;
  margin-top: 30px;
}
.loupan {
  margin-top: 0;
}
.loupan-box {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.loupan-box-item {
  width: 165px;
  height: 165px;
}
.loupan-box-item span {
  font-size: 13px;
}
.loupan-box-item img {
  width: 100%;
  height: 95%;
  border-radius: 10px;
  object-fit: cover;
}
/* 热装楼盘 结束  */
/* 设计开始 */
.tiyan-box-item-text-phone{
  font-size: 12px;
  color: gray;
}
.tiyan-box-item-text-title{
  font-size: 15px;
}
.tiyan-box{
  width: 355px;
  margin-top: 15px;
}
.tiyan-box-item-text{
  width: 75%;
  height: 50px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  justify-content: space-around;
 border-bottom: 1px solid #edecec;

}
.tiyan-box-item{
  margin-top: 3px;
  display: flex;
}
.tiyan-box-item-img{
  height: 65px;
  width: 65px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
}
.tiyan-box-item-img img{
  width: auto;
  height: 100%;
  left: -11.6px;
  position: absolute;
}
/* 设计结束 */
/* 优势开始 */
.baoming{
  padding: 0 12px;
}
.inp-width{
  width: 375px;
}
.img-img{
  width: 345px;
  height: 100%;
  object-fit: cover;
  margin-top: 35px;
}
.img-img img{
  width: 100%;
}
.youoshi-box{
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
}
.youshi-box-item-text-span{
  width: 100px;
  padding-top: 3px;
  color: gray;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.youshi-box-item-text-title{
  font-size: 15px;
  color: #000;
}
.youshi-box-item-text{
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  font-size: 12px;
  text-align: center;
}
/* 优势结束 */
.youshi-box-item-img{
  width: 26px;
  height: 26px;
  background-color: white;
  position: absolute;
  top: -10px;
  text-align: center;
  line-height: 1.8;
  border-radius: 50%;
  box-shadow: 2px 3px 10px lightgray;
}
.youshi-box-item-one{
  position: relative;
  width: 100px;
  height: 80px;
  box-shadow: 2px 3px 10px lightgray;
  display: flex;
  justify-content: center;
  border-radius: 8px;
}
/* 优势结束 */
/* 流程开始 */
.item-two{
  margin-top: 25px;
  
}
.bg-liuceng-box{
  display:flex;
}
.shengluehao{
  margin-top: -20px;
  display: flex;
  align-items: center;
  opacity: 0.6;
}
.bg-liuceng-item img{
  font-size: 10px;
}
.bg-liuceng-item{
  width: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
    /* text-overflow: ellipsis;
  overflow: hidden; */
  white-space: nowrap;
}
.bg-liuceng-item-img{
  width: 42px;
  height: 42px;
  border: 1px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-liuceng-item-text{
  margin-top: 5px;
  font-size: 12px;
  color: #fff;
}
.bg-liuceng{
  width: 345px;
  height: 148px;
  padding: 25px 15px;
  background-image: url("../assets/img/bg.jpg");
}
/* 流程结束 */
/* 学堂开始 */
.lianxi-phone{
  width: 40px;
  height: 40px;
  border: 1px solid red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lianxi-text-title{
  font-size: 18px;
}
.lianxi-text-phone{
  font-size: 12px;
  color: gray;
}
.lianxi-text{
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.lianxi{
  padding: 0px 15px;
  width: 315px;
  height: 75px;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 20px #ddd;
  position: relative;
}
.happy-img{
  width: 345px;
  margin-top: 25px;

}
.happy-img img{
  width: 100%;
}
.xuetang-nav{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.gongdi{
  color: #e5ac13 !important;
  border-bottom: 1px solid #e5ac13 !important;
}
.xiaoqu{
  color: #679bfb !important;
  border-bottom: 1px solid #679bfb !important;
}
.news{
  color: #7ec04e !important;
  border-bottom: 1px solid #7ec04e !important;
}
.xuetang-nav-item{
  width: 60px;
  height: 58px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  color: #fc935f;
  border-bottom: 1px solid #fc935f;
  border-radius: 8px;
}

.xuetang{
  height: 255px;
  overflow: auto;
}
.xuetang-box-item-one{
  padding-top: 10px;
}
.xuetang-item-span{
  font-size: 12px;
  color: gray;
  height: 38px;
  overflow: hidden;
  margin-top: 23px;
  line-height: 1.35;
}
.xuetang-item-title{
     text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
}
.xuetang-item-text{
  width: 260px;
  height: 69px;
  margin-left: 15px;
  overflow: hidden;
  border-bottom: 1px solid gainsboro;
  padding: 3px 0;
}
.xuetang-item-data{
  width: 70px;
  height: 70px;
  background-color: #c0b8ac;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.xuetang-item-data-yue{
  font-size: 24px;
  color: #fff;
  
}
.xuetang-item-data-ri{
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 12px;
  color: #fff;
}
.xuetang-box-item{
  width: 345px;
  height: 75px;
  display: flex;
  margin-top: 5px;
}

/* 学堂结束 */
/* 脚部 开始i */
.foot-item-one{
  width: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.foot-item-one a{
  color: #e74c3c;
  font-size: 14px;

}
.foot-box{
  padding: 15px 0;
  height: 85px;
  color: gray;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.foot{
  margin-top: 40px;
  width: 375px;
  height: 125px;
  background-color: #2e2e2e;
}
/* 脚部结束 */
</style>
