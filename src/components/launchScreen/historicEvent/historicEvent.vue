<!--实践历程-->
<template>
  <div id="historicEvent">
    <h1 class="title">事件历程</h1>
    <!--    轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item of 4" :key="item">
          <div class="slide-item">
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
          <div class="slide-item">
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
          <div class="slide-item">
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
      <div class="slider">
        <h1 class="date">2021</h1>
        <div class="swiper-pagination">
          <div class="pagination-item" v-for="item of 4" :key="item"></div>
        </div>
        <div class="slider-btn">
          <div class="swiper-button-prev icon"></div>
          <div class="swiper-button-next icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: "historicEvent",
  data() {
    return {}
  },
  mounted() {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom(swiper, current) {
          const pagination = document.querySelectorAll('.pagination-item')
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
      const sliderLen = document.querySelectorAll('.swiper-slide').length
      const paginationItem = document.querySelectorAll('.pagination-item')
      paginationItem.forEach((item,index) => {
        if (index === 0) {
          item.classList.add('active')
        }
        item.style.width = (360 / (sliderLen - 2)) + 'px' //设置分页器的宽度
      })
    }
  }
}
</script>

<style lang="less" scoped>
#historicEvent {
  width: 100vw;
  height: 1500px;
  background: #000 url('../../../assets/images/team/图层 533.png') no-repeat;
  font-family: FZLTCHJW, serif;

  .title {
    font-size: 36px;
    color: #FF8772;
    line-height: 36px;
    padding: 77px 0 0 35px;
    margin: 0;
  }

  .swiper-container {
    width: 100vw;
    --swiper-navigation-color: #CCCCCC;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 20px;/* 设置按钮大小 */
    .swiper-slide {
      margin-bottom: 40px;

      .slide-item {
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
          background: url("../../../assets/images/team/矩形39.png") no-repeat;
          position: relative;

          &::after {
            content: '';
            background: url("../../../assets/images/team/矩形43.png") no-repeat;
            width: 100px;
            height: 100px;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 99;
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

    .slider {
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
      .swiper-pagination {
        width: 360px;
        height: 2px;
        display: flex;
        position: unset;
        margin: 0 28px 0 50px;
      }
      .slider-btn{
        width: 136px;
        height: 50px;
        position: relative;
        .icon {
          width: 51px;
          height: 51px;
          background: url("../../../assets/images/team/椭圆 18.png") no-repeat;
          position: absolute;
          right: 0;
          top: 10px;
        }
      }
    }

    /*自定义分页器的样式*/

    .pagination-item {
      height: 2px;
      background-color: #fff;
    }

    /*自定义分页器激活时的样式表现*/

    .active {
      background-color: #FF8772;
    }
  }
}
</style>
