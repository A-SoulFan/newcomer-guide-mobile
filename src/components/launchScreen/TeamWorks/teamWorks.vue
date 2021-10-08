<template>
  <div id="team-works">
    <div class="works-title">团队作品</div>
    <div class="swiper-container" id="works-swiper">
      <div class="swiper-wrapper">
        <!--单个界面-->
        <div class="swiper-slide" v-for="(work,index) in worksList" :key="index">
          <!--轮播图图片-->
          <a class="image-wrapper" :href="work.skipUrl">
            <img src="../../../assets/image/图层 528.png" :alt="work.pictureDescribe">
          </a>
        </div>
      </div>
      <div class="slider-btn">
        <div class="swiper-button-prev icon" id="works-prev"></div>
        <div class="swiper-button-next icon" id="works-next"></div>
      </div>
    </div>
    <div class="type">{{ worksInfo.tag }}</div>
    <div class="video-title">{{ worksInfo.videoTitle }}</div>
    <div class="date-time">{{ worksInfo.date }}</div>
    <div class="go-to-works">
      <img src="../../../assets/image/组 64.png" alt="goto button">
      <p>点击前往</p>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: "teamWorks",
  data() {
    return {
      worksList: [
        {
          pictureUrl: '../../../assets/image/图层 528.png',
          videoTitle: '【A-SOUL/贝&珈&嘉】太潮啦！师徒三人演绎 《隔岸 (DJ)》',
          skipUrl: 'https://www.bilibili.com',
          date: '2021-10-1',
          tag: '切片',
          tagType: 1  // tag标签类型
        },
        {
          pictureUrl: '../../../assets/image/图层 528.png',
          videoTitle: '【A-SOUL/贝&珈&嘉】太潮啦！师徒三人演绎 《隔岸 (DJ)》',
          skipUrl: 'https://www.bilibili.com',
          date: '2021-10-1',
          tag: '切片',
          tagType: 1  // tag标签类型
        },
        {
          pictureUrl: '../../../assets/image/图层 528.png',
          videoTitle: '【A-SOUL/贝&珈&嘉】太潮啦！师徒三人演绎 《隔岸 (DJ)》',
          skipUrl: 'https://www.bilibili.com',
          date: '2021-10-1',
          tag: '切片',
          tagType: 1  // tag标签类型
        }
      ],
      worksInfo: {
        videoTitle: '',
        skipUrl: '',
        date: '',
        tag: ''
      },
      currentIndex: -1
    }
  },
  mounted() {
    const that = this
    new Swiper('#works-swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '#works-next',
        prevEl: '#works-prev'
      },
      // 图片切换事件
      on: {
        slideNextTransitionStart () {
          that.currentIndex = that.currentIndex === (that.worksList.length - 1)  ? 0 : (that.currentIndex + 1)
          that.worksInfo = that.worksList[that.currentIndex]
        },
        slidePrevTransitionStart () {
          that.currentIndex = that.currentIndex === 0 ? (that.worksList.length - 1 ) : (that.currentIndex - 1)
          that.worksInfo = that.worksList[that.currentIndex]
        }
      }
    })
  }
}
</script>

<style scoped lang="less">
#team-works {
  width: 100vw;
  height: 1167px;
  background: #000 url("../../../assets/image/bgcPic.png") no-repeat;
  font-family: 'fzlthjwgb10';

  .works-title {
    font-size: calc(12vw / 250 * 100);
    margin-left: calc(12vw / 250 * 100);
    margin-bottom: calc(28.33vw / 250 * 100);
    color: #FF8772;
    font-weight: bolder;
  }

  .swiper-container {
    width: 100%;
    --swiper-navigation-color: #CCCCCC;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 20px;/* 设置按钮大小 */

    .slider-btn{
        width: 136px;
        height: 50px;
        position: relative;
        margin: calc(13.33vw / 250 * 100) auto;
        .icon {
          width: 51px;
          height: 51px;
          background: url("../../../assets/image/img.png") no-repeat;
          position: absolute;
          right: 0;
          top: 10px;
        }
      }

    .swiper-slide {
      width: 64%;

      img {
        width: 100%;
      }
    }
  }

  .type {
    font-size: calc(5.33vw / 250 * 100);
    color: #ffffff;
    margin-left: calc(11.33vw / 250 * 100);
  }

  .video-title {
    font-size: calc(10vw / 250 * 100);
    color: #ffffff;
    margin-top: calc(13vw / 250 * 100);
    margin-left: calc(11.33vw / 250 * 100);
    width: calc(212vw / 250 * 100);
  }

  .date-time {
    margin-left: calc(11.33vw / 250 * 100);
    margin-top: calc(13.33vw / 250 * 100);
    font-size: calc(5.33vw / 250 * 100);
    color: #ffffff;
  }

  .go-to-works {
    margin: calc(14vw / 250 * 100) auto;
    width: calc(50vw / 250 * 100);
    height: calc(16.67vw / 250 * 100);
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    p {
      position: absolute;
      font-size: calc(5.33vw / 250 * 100);
      color: #ffffff;
      top: calc(6.67vw / 250 * 100);
      left: calc(15.33vw / 250 * 100);
      margin: 0;
    }
  }
}
</style>
