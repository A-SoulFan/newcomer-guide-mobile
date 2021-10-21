<template>
  <div id="recommend">
    <h1 class="title">推荐切片</h1>
    <!--轮播图-->
    <div class="swiper-container banner-recommend">
      <div class="swiper-wrapper recommend-swiper-wrapper">
        <div class="swiper-slide recommend-swiper-slide" v-for="item of 4" :key="item">
          <div class="slide-item recommend-slide-item">
            <img class="recommend-slide-content" src="../../../assets/images/team/图层 531.png">
          </div>
        </div>
      </div>
      <div class="recommend-slider-btn">
        <div class="swiper-button-prev recommend-icon"></div>
        <div class="swiper-button-next recommend-icon" style="transform: scaleX(-1)"></div>
      </div>
      <div class="recommend-info">
        <div class="tag">切片</div>
        <div class="video-name">【A-SOUL/贝&珈&嘉】太潮啦！师徒三人演绎
          《隔岸 (DJ)》</div>
        <div class="date">2021-09-08</div>
      </div>
      <div class="page-jump">
        <div class="main">
          <div class="text">点击前往</div>
        </div>
        <div class="top"></div>
        <div class="down"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
export default {
  name: 'recommendVideo',
  mounted() {
    this.recommendSwiper = new Swiper('.banner-recommend', {
      effect: 'coverflow',
      slidesPerView: 1.52,
      loopAdditionalSlides : 3,
      spaceBetween: '4%',
      centeredSlides: true,
      loop: true,
      coverflowEffect: {
        rotate: 8, //slide做3d旋转时Y轴的旋转角度。默认50。
        stretch: 0, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
        depth: -5, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
        modifier: 1, //depth和rotate和stretch的倍率，相当于            depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
        slideShadows: false //开启slide阴影。默认 true。
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
}
</script>

<style lang="less" scoped>
#recommend {
  width: 100vw;
  background: #000;
  font-family: FZLTCHJW, serif;

  .title {
    font-size: 36px;
    color: #FF8772;
    line-height: 36px;
    padding: 77px 0 0 35px;
    margin: 0;
    margin-bottom: 85px;
  }

  .banner-recommend {
    //--swiper-navigation-color: #CCCCCC; /* 单独设置按钮颜色 */
    //--swiper-navigation-size: 20px; /* 设置按钮大小 */
    .recommend-swiper-wrapper {
      .recommend-swiper-slide {
        .recommend-slide-item {
          width: 480px;
          height: 480px;

          .recommend-slide-content {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .recommend-slider-btn {
      margin: 0 auto;
      margin-bottom: 40px;
      width: 240px;
      height: 85px;
      position: relative;
      margin-top: 40px;
      .recommend-icon {
        width: 85px;
        height: 85px;
        background-image: url("../../../assets/images/team/circle-icon.png");
        background-size: 100% 100%;
      }
      & ::after {
        font-size: 0;
        width: 50px;
        height: 25px;
        background-image: url("../../../assets/images/team/arrow-left-icon.png");
        background-size: 100% 100%;
      }
    }

    .recommend-info {
      margin-left: 35px;
      .tag {
        margin-bottom: 40px;
        font-size: 16px;
        font-family: FZLTCHJW;
        font-weight: normal;
        color: #FFFFFF;
        line-height: 45px;
        opacity: 0.8;
      }
      .video-name {
        margin-bottom: 40px;
        font-size: 30px;
        font-family: FZLTHJW;
        font-weight: normal;
        color: #FFFFFF;
        line-height: 45px;
      }
      .date {
        margin-bottom: 40px;
        font-size: 16px;
        font-family: FZLTCHJW;
        font-weight: normal;
        color: #FFFFFF;
        line-height: 45px;
        opacity: 0.8;
      }
    }

    .page-jump {
      position: relative;
      margin: 0 auto;
      margin-bottom: 45px;
      width: 150px;
      height: 50px;
      .top {
        position: absolute;
        top: -2px;
        left: -2px;
        width: 150px;
        height: 50px;
        background-color: rgba(236,127,107,0.5);
        z-index: 2;
      }
      .down {
        position: absolute;
        bottom: -2px;
        right: -2px;
        width: 150px;
        height: 50px;
        background-color: rgba(236,127,107,0.5);
        z-index: 2;
      }
      .main {
        width: 150px;
        height: 50px;
        z-index: 10;
        .text {
          text-align: center;
          font-size: 16px;
          font-family: FZLTCHJW;
          font-weight: normal;
          color: #FFFFFF;
          line-height: 50px;
          z-index: 10;
        }
      }
    }
  }
}

</style>

