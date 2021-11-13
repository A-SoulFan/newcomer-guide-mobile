<template>
  <div id="topContents">
    <nav-bar></nav-bar>
    <div class="swiper-container banner-top">
      <div class="swiper-wrapper top-wrapper">
        <div class="swiper-slide top-swiper-slide " v-for="(item, index) of bannerList" :key="index">
          <div class="slide-item top-slide-item">
            <div class="describe">
              <h1>{{item.title}}</h1>
              <h2>{{item.pictureDescribe}}</h2>
              <div>{{item.content}}</div>
            </div>
            <img  class="slide-img" :src="item.pictureUrl">
          </div>
        </div>
      </div>
      <!--分页器滑块-->
      <div class="slider">
        <div class="swiper-pagination slider-top">
          <div class="slider-top-item" v-for="item of bannerList.length" :key="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../navBar/navBar'
import Swiper from 'swiper'
import { getBannerPic } from '../../http/request'
export default {
  name: "topContents",
  components: {NavBar},
  data() {
    return {
      bannerList: ''
    }
  },
  methods: {
    initBannerData() {
      let date = this.$moment().format("YYYY-MM-DD")
      getBannerPic(date).then(res => {
        this.bannerList = res.data.pictureList
        console.log(this.bannerList)
        this.$nextTick(() => {
          this.initSwiper()
        })
      }).catch(err => {
        console.log(err)
      })
    },
    initSwiper() {
      this.topSwiper = new Swiper('.banner-top', {
        loop: true, // 循环模式选项
        observer:true,  //修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,  //修改swiper的父元素时，自动初始化swiper
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
    }
  },
  mounted() {
    this.initBannerData()
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
