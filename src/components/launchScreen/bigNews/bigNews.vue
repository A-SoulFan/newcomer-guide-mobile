<!--实践历程-->
<template>
  <div id="newsEvent">
    <div class="news-container">
      <h1 class="title">事件历程</h1>
      <!--    轮播图-->
      <div class="swiper-container banner-news">
        <div class="swiper-wrapper">
          <div class="swiper-slide news-swiper-slide" v-for="item of 4" :key="item">
            <div class="slide-item news-slide-item">
              <div class="member-avatar">
                <div class="avatar"></div>
                <div class="avatar"></div>
                <div class="avatar"></div>
              </div>
              <div class="news-description">
                <div class="news-date">2021.09.28</div>
                <div class="news-text">A-SOUL抖音小店于9月26日中午12点正式开张，周边上新。 抖音珈乐视频更新，珈乐（Carol），乐华娱乐旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。珈乐（Carol），乐华娱乐旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。珈乐（Carol），乐华娱乐旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。</div>
              </div>
              <div class="news-description">
                <div class="news-date">2021.09.28</div>
                <div class="news-text">A-SOUL抖音小店于9月26日中午12点正式开张，周边上新。 抖音珈乐视频更新，珈乐（Carol），乐华娱乐旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。珈乐（Carol），乐华娱乐旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。珈乐（Carol），乐华娱乐旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。</div>
              </div>
            </div>
          </div>
        </div>
        <!--          分页器滑块-->
        <div class="slider news-slider">
          <h1 class="date">2021</h1>
          <div class="swiper-pagination news-swiper-pagination">
            <div class="news-pagination-item" v-for="item of 4" :key="item"></div>
          </div>
          <div class="news-slider-btn">
            <div class="swiper-button-prev news-icon"></div>
            <div class="swiper-button-next news-icon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: "newsEvent",
  data() {
    return {}
  },
  mounted() {
    this.newsSwiper = new Swiper('.banner-news', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.news-swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom(swiper, current) {
          const pagination = document.querySelectorAll('.news-pagination-item')
          // 判断是不是激活焦点，是的话添加active类
          pagination.forEach(item => {
            if (pagination[current - 1] === item) {
              item.classList.add('news-active')
            } else {
              item.classList.remove('news-active')
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
      const sliderLen = document.querySelectorAll('.news-swiper-slide').length
      const paginationItem = document.querySelectorAll('.news-pagination-item')
      paginationItem.forEach((item,index) => {
        if (index === 0) {
          item.classList.add('news-active')
        }
        item.style.width = (360 / (sliderLen - 2)) + 'px' //设置分页器的宽度
      })
    }
  }
}
</script>

<style lang="less" scoped>
#newsEvent {
  width: 100vw;
  height: 100%;
  background: rgba(0,0,0) url('../../../assets/images/team/图层 533.png');
  background-size: 100% 100%;
  overflow: hidden;
  font-family: FZLTCHJW, serif;

  .news-container {

  }

  .title {
    font-size: 36px;
    color: #FF8772;
    line-height: 36px;
    margin: 0 35px;
    margin-top: 90px;
    margin-bottom:  90px;
  }
  .banner-news {
    height: 100%;
    --swiper-navigation-color: #CCCCCC;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 20px;/* 设置按钮大小 */
    .news-swiper-slide {
      margin-bottom: 40px;
      .news-slide-item {

        margin: 0 35px;
        margin-top: 20px;
        .member-avatar {
          margin-bottom: 46px;
          display: flex;
          justify-content: space-between;
          .avatar {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background-color: aquamarine;
          }
        }
        .news-description {
          display: flex;
          justify-content: space-between;
          .news-date {
            margin-right: 40px;
            font-size: 24px;
            font-family: Helvetica;
            font-weight: 600;
            color: #FFFFFF;
          }
          .news-text {
            flex: 1;
            margin-bottom: 37px;
            font-size: 16px;
            font-family: FZLTHJW;
            font-weight: normal;
            color: #FFFFFF;
            line-height: 24px;
          }
        }
      }
    }

    .news-slider {
      width: 100vw;
      height: 100px;
      display: flex;
      align-items: center;
      .date{
        margin-left: 35px;
        font-size: 54px;
        font-family: Helvetica;
        font-weight: 600;
        color: #FFFFFF;
      }
      .news-swiper-pagination {
        width: 360px;
        height: 2px;
        display: flex;
        position: unset;
        margin: 0 28px 0 50px;
      }
      .news-slider-btn{
        width: 136px;
        height: 50px;
        position: relative;
      }
      .news-icon {
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

    .news-pagination-item {
      height: 2px;
      background-color: #FFFFFF;
    }

    /*自定义分页器激活时的样式表现*/
    .news-active {
      background-color: #FF8772;
    }
  }
}
</style>
