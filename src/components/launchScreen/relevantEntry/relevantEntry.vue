<!--实践历程-->
<template>
  <div id="relevantEntry">
    <h1 class="title">相关词条</h1>
    <!--    轮播图-->
    <div class="swiper-container banner-relevant">
      <div class="swiper-wrapper">
        <div class="swiper-slide relevant-swiper-slide" v-for="item of 4" :key="item">
          <div class="slide-item relevant-slide-item">
            <h1 class="order">
              珈乐Carol
            </h1>
            <div class="des">
              <div class="txt">
                二手玫瑰，枝江，接客
              </div>
            </div>
            <div class="jump-arrow"></div>
          </div>
          <div class="relevant-slide-item">
            <h1 class="order">
              珈乐Carol
            </h1>
            <div class="des">
              <div class="txt">
                珈乐可爱捏，我大哥绝绝子
              </div>
            </div>
            <div class="jump-arrow"></div>

          </div>
          <div class="slide-item relevant-slide-item">
            <h1 class="order">
              珈乐Carol
            </h1>
            <div class="des">
              <div class="txt">
                二手玫瑰，枝江，接客
              </div>
            </div>
            <div class="jump-arrow"></div>
          </div>
          <div class="relevant-slide-item">
            <h1 class="order">
              珈乐Carol
            </h1>
            <div class="des">
              <div class="txt">
                珈乐可爱捏，我大哥绝绝子
              </div>
            </div>
            <div class="jump-arrow"></div>
          </div>
          <div class="slide-item relevant-slide-item">
            <h1 class="order">
              珈乐Carol
            </h1>
            <div class="des">
              <div class="txt">
                二手玫瑰，枝江，接客
              </div>
            </div>
            <div class="jump-arrow"></div>
          </div>
          <div class="relevant-slide-item">
            <h1 class="order">
              珈乐Carol
            </h1>
            <div class="des">
              <div class="txt">
                珈乐可爱捏，我大哥绝绝子
              </div>
            </div>
            <div class="jump-arrow"></div>
          </div>
        </div>
      </div>
      <!--          分页器滑块-->
      <div class="slider relevant-slider">
        <div class="swiper-pagination relevant-swiper-pagination">
          <div class="relevant-pagination-item" v-for="item of 4" :key="item"></div>
        </div>
        <div class="relevant-slider-btn">
          <div class="swiper-button-prev relevant-icon"></div>
          <div class="swiper-button-next relevant-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: "relevantEntry",
  data() {
    return {}
  },
  mounted() {
    this.relevantSwiper = new Swiper('.banner-relevant', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.relevant-swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom(swiper, current) {
          const pagination = document.querySelectorAll('.relevant-pagination-item')
          // 判断是不是激活焦点，是的话添加active类
          pagination.forEach(item => {
            if (pagination[current - 1] === item) {
              item.classList.add('relevant-active')
            } else {
              item.classList.remove('relevant-active')
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
      const sliderLen = document.querySelectorAll('.relevant-swiper-slide').length
      const paginationItem = document.querySelectorAll('.relevant-pagination-item')
      paginationItem.forEach((item,index) => {
        if (index === 0) {
          item.classList.add('relevant-active')
        }
        item.style.width = (360 / (sliderLen - 2)) + 'px' //设置分页器的宽度
      })
    }
  }
}
</script>

<style lang="less" scoped>
#relevantEntry {
  width: 100vw;
  height: 100%;
  background: rgba(0,0,0) url('../../../assets/images/team/图层 533.png');
  background-size: 100% 100%;

  font-family: FZLTCHJW, serif;

  .title {
    font-size: 36px;
    color: #FF8772;
    line-height: 36px;
    padding: 77px 0 0 35px;
    margin-bottom: 90px;
  }
  .banner-relevant {
    width: 100vw;
    height: 100%;
    --swiper-navigation-color: #CCCCCC;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 20px;/* 设置按钮大小 */
    .relevant-swiper-slide {
      margin-bottom: 40px;
      .relevant-slide-item {
        position: relative;
        display: flex;
        margin-left: 35px;
        margin-right: 35px;
        margin-top: 20px;
        height: 100px;
        background-color: #FFFFFF;
        &::after {
          content: '';
          position: absolute;
          border-top: 50px solid #CC99FF;
          border-right: 50px solid transparent;
          left: 0;
          top: 0;
        }
        .order {
          margin-left: 60px;
          font-size: 24px;
          font-family: FZLTCHJW;
          font-weight: 700;
          color: #333333;
          line-height: 100px;
        }
        .des {
          margin-left: 20px;
          .txt {
            font-size: 18px;
            font-family: FZLTHJW;
            font-weight: normal;
            color: #333333;
            line-height: 100px;
          }
        }
        .jump-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 20px;
          width: 9px;
          height: 15px;
          background-image: url("../../../assets/images/team/jump-arrow.png");
          background-size: 100% 100%;
        }
      }
    }

    .relevant-slider {
      height: 100px;
      display: flex;
      align-items: center;
      margin: 0 35px;
      justify-content: space-between;
      //justify-content: space-evenly;
      .relevant-swiper-pagination {
        width: 360px;
        height: 2px;
        display: flex;
        position: unset;
      }
      .relevant-slider-btn{
        width: 136px;
        height: 50px;
        position: relative;
      }
      .relevant-icon {
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

    .relevant-pagination-item {
      height: 2px;
      background-color: #FFFFFF;
    }

    /*自定义分页器激活时的样式表现*/
    .relevant-active {
      background-color: #FF8772;
    }
  }
}
</style>

