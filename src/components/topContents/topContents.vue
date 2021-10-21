<template>
  <div id="topContents">
    <nav-bar></nav-bar>
    <div class="swiper-container banner-top">
      <div class="swiper-wrapper top-wrapper">
        <div class="swiper-slide top-swiper-slide " v-for="item of 4" :key="item">
          <div class="slide-item top-slide-item">
            <div class="describe">
              <h1>A-SOUL时代 沸腾期待</h1>
              <h2>团队介绍</h2>
              <div>A-SOUL是乐华娱乐与字节跳动合作的虚拟偶像企划，中之人（即虚拟形象扮演者）小姐姐们在动捕房的行为被各种传感设备捕捉，再结合软件渲染而展现出实时、3D的二次元虚拟形象来与观众互动。与传统意义上的虚拟主播不同的是，企划的高技术力支持偶像们带给观众沉浸式地观看与互动体验，同时，有着和观众同样成长经历的偶像们也能带给粉丝们更多共鸣。</div>
            </div>
            <img  class="slide-img" src="../../assets/images/top/图层 516.png">
          </div>
        </div>
      </div>
      <!--分页器滑块-->
      <div class="slider">
        <div class="swiper-pagination slider-top">
          <div class="slider-top-item" v-for="item of 4" :key="item"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from '../navBar/navBar'
import Swiper from 'swiper'
export default {
  name: "topContents",
  components: {NavBar},
  mounted() {
    this.topSwiper = new Swiper('.banner-top', {
      loop: true, // 循环模式选项
      // // 如果需要分页器
      pagination: {
        el: '.slider-top',
        clickable: true,
        type: 'custom',
        renderCustom(swiper, current) {
          const pagination = document.querySelectorAll('.slider-top-item')
          // 判断是不是激活焦点，是的话添加active类
          pagination.forEach(item => {
            if (pagination[current - 1] === item) {
              item.classList.add('active')
            } else {
              item.classList.remove('active')
            }
          })
        }
      },
    })
  },
}
</script>

<style lang="less" scoped>
#topContents{
  position: relative;
  width: 100vw;
  font-family: FZLTCHJW, serif;
}
.banner-top {
  position: relative;
  width: 100vw;
  height:950px;
  .top-swiper-slide {
    .top-slide-item {
      width: 100vw;
      height: 100%;
      display: flex;
      justify-content: space-between;

      .slide-img {
        filter: brightness(0.6);
      }
      .describe {
        position: absolute;
        top:492px;
        left: 32px;
        z-index: 10;
        & h1 {
          font-size: 60px;
          font-family: FZLTXHK;
          font-weight: 200;
          color: #FFFFFF;
          line-height: 72px;
        }
        & h2 {
          font-size: 60px;
          font-family: FZLTXHK;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 72px;
        }
        & div {
          margin-top: 48px;
          margin-right: 117px;
          font-size: 16px;
          font-family: FZLTHJW;
          font-weight: normal;
          color: #FFFFFF;
          line-height: 24px;
        }
      }
    }
  }
}
.slider {
  display: flex;
  width: 100vw;
}
.slider-top {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 38px;
  margin: auto;
  display: flex;
  width: 50vw;
}
.slider-top-item {
  flex: 1;
  height: 2px;
  background-color: #fff;
}
.active {
  background-color: #FF8772;
}


</style>
