<template>
  <div id="personalExperience">
    <h1 class="title">个人经历</h1>
    <!--轮播图-->
    <div class="swiper-container banner-experience">
      <div class="swiper-wrapper">
        <div class="swiper-slide experience-swiper-slide" v-for="item of 4" :key="item">
          <div class="slide-item experience-slide-item">
            <h1 class="order">
              01
            </h1>
            <div class="des">
              <div class="txt">
                珈乐个人图片预告公开
              </div>
              <p class="des-date">2020.11.26</p>
            </div>
          </div>
          <div class="experience-slide-item">
            <h1 class="order">
              01
            </h1>
            <div class="des">
              <div class="txt">
                贝拉个人图片预告公开
              </div>
              <p class="des-date">2020.11.26</p>
            </div>
          </div>
          <div class="experience-slide-item">
            <h1 class="order">
              01
            </h1>
            <div class="des">
              <div class="txt">
                乃琳个人图片预告公开
              </div>
              <p class="des-date">2020.11.26</p>
            </div>
          </div>
        </div>
      </div>
      <!--          分页器滑块-->
      <div class="slider experience-slider">
        <h1 class="date">2021</h1>
        <div class="swiper-pagination experience-swiper-pagination">
          <div class="experience-pagination-item" v-for="item of 4" :key="item"></div>
        </div>
        <div class="experience-slider-btn">
          <div class="swiper-button-prev experience-icon"></div>
          <div class="swiper-button-next experience-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: "personalExperience",
  data() {
    return {}
  },
  mounted() {
    this.experienceSwiper = new Swiper('.banner-experience', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.experience-swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom(swiper, current) {
          const pagination = document.querySelectorAll('.experience-pagination-item')
          // 判断是不是激活焦点，是的话添加active类
          pagination.forEach(item => {
            if (pagination[current - 1] === item) {
              item.classList.add('experience-active')
            } else {
              item.classList.remove('experience-active')
            }
          })
        }
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    this.setPaginationItem()
  },
  methods:{
    setPaginationItem(){
      const sliderLen = document.querySelectorAll('.experience-swiper-slide').length
      const paginationItem = document.querySelectorAll('.experience-pagination-item')
      paginationItem.forEach((item,index) => {
        if (index === 0) {
          item.classList.add('experience-active')
        }
        item.style.width = (360 / (sliderLen - 2)) + 'px' //设置分页器的宽度
      })
    }
  }
}
</script>

<style lang="less" scoped>
#personalExperience {
  width: 100vw;
  height: 100%;
  background: rgb(0,0,0);
  background-size: 100% 100%;

  font-family: FZLTCHJW, serif;

  .title {
    font-size: 36px;
    color: #FF8772;
    line-height: 36px;
    padding: 77px 0 0 35px;
    margin: 0;
  }
  .banner-experience {
    width: 100vw;
    height: 100%;
    --swiper-navigation-color: #CCCCCC;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 20px;/* 设置按钮大小 */
    .experience-swiper-slide {
      margin-bottom: 40px;
      .experience-slide-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 80px;
        .order {
          position: relative;
          display: inline-block;
          left: 36px;
          font-size: 54px;
          font-family: Helvetica;
          font-weight: 600;
          margin: 70px 0 0 0;
          color: #FFFFFF;

          &::after {
            content: '';
            width: 35px;
            height: 5px;
            background: #FFFFFF;
            position: absolute;
            bottom: 59px;
            left: 11px;
          }
        }
        .des {
          width: 620px;
          height: 200px;
          background: url("../../../assets/images/team/矩形39.png");
          background-size: 100% 100%;
          position: relative;

          &::after {
            content: '';
            background: url("../../../assets/images/team/矩形43.png");
            background-size: 100% 100%;
            width: 100px;
            height: 100px;
            position: absolute;
            left: 0;
            top: 0;
          }

          .txt {
            font-size: 24px;
            color: #FFFFFF;
            margin: 80px 0 0 59px;
          }

          .des-date {
            font-size: 18px;
            color: #FFFFFF;
            margin: 46px 0 0 59px;
          }
        }
      }
    }

    .experience-slider {
      width: 100vw;
      height: 100px;
      padding: 0 33px 0 37px;
      display: flex;
      align-items: center;
      //justify-content: space-evenly;
      .date{
        font-size: 54px;
        font-family: Helvetica;
        font-weight: 600;
        color: #FFFFFF;
      }
      .experience-swiper-pagination {
        width: 360px;
        height: 2px;
        display: flex;
        position: unset;
        margin: 0 28px 0 50px;
      }
      .experience-slider-btn{
        width: 136px;
        height: 50px;
        position: relative;
      }
      .experience-icon {
        position: absolute;
        right: 0;
        top: 10px;
        width: 51px;
        height: 51px;
        background: url("../../../assets/images/team/椭圆 18.png");
        background-size: 100% 100%;
      }
    }

    /*自定义分页器的样式*/

    .experience-pagination-item {
      height: 2px;
      background-color: #FFFFFF;
    }

    /*自定义分页器激活时的样式表现*/
    .experience-active {
      background-color: #FF8772;
    }
  }
}
</style>
