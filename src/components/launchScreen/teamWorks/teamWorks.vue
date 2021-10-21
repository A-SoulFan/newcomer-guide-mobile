<template>
  <div id="teamWorks">
    <h1 class="title">团队作品</h1>
    <!--轮播图-->
    <div class="swiper-container banner-works">
      <div class="swiper-wrapper works-swiper-wrapper">
        <div class="swiper-slide works-swiper-slide" v-for="item of 4" :key="item">
          <div class="slide-item works-slide-item">
            <img class="works-slide-content" src="../../../assets/images/team/图层 531.png">
          </div>
        </div>
      </div>
      <div class="teamworks-slider-btn">
          <div class="swiper-button-prev teamworks-icon"></div>
          <div class="swiper-button-next teamworks-icon" style="transform: scaleX(-1)"></div>
      </div>
      <div class="teamworks-info">
        <div class="tag">切片</div>
        <div class="video-name">【A-SOUL/贝&珈&嘉】太潮啦！师徒三人演绎
          《隔岸 (DJ)》</div>
        <div class="date">2021-09-08</div>
      </div>
      <div class="page-jump">
        <div class="top"></div>
        <div class="down"></div>
        <div class="main">
          <div class="text">点击前往</div>
          <div class="learn-icon"></div>
          <div class="jump-arrow">
            <div class="arrow"></div>
            <div class="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
export default {
  name: 'teamWorks',
  mounted() {
    this.teamWorksSwiper = new Swiper('.banner-works', {
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
#teamWorks {
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

  .banner-works {
    //--swiper-navigation-color: #CCCCCC; /* 单独设置按钮颜色 */
    //--swiper-navigation-size: 20px; /* 设置按钮大小 */
    .works-swiper-wrapper {
      .works-swiper-slide {
        .works-slide-item {
          width: 480px;
          height: 480px;

          .works-slide-content {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .teamworks-slider-btn {
      margin: 0 auto;
      margin-bottom: 40px;
      width: 240px;
      height: 85px;
      position: relative;
      margin-top: 40px;
      .teamworks-icon {
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

    .teamworks-info {
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
      background-color: #ffffff;
      .top {
        position: absolute;
        top: -2px;
        right: -2px;
        width: 150px;
        height: 50px;
        background-color: #02FFFF;
        z-index: 2;
      }
      .down {
        position: absolute;
        bottom: -2px;
        left: -2px;
        width: 150px;
        height: 50px;
        background-color: #FF04FF;
        z-index: 2;
      }
      .main {
        position: absolute;
        display: flex;
        align-items: center;
        width: 150px;
        height: 50px;
        background-color: #FFFFFF;
        z-index: 10;
        .text {
          margin-left: 20px;
          font-size: 16px;
          font-family: FZLTCHJW;
          font-weight: 800;
          color: #010101;
          line-height: 48px;
          opacity: 0.87;
          z-index: 20;
        }
        .learn-icon {
          position: absolute;
          top:50%;
          right: 0;
          transform: translateY(-50%);
          width: 131px;
          height: 26px;
          background-image: url("../../../assets/images/team/LEARN.png");
          background-size: 100% 100%;
        }
        .jump-arrow {
          position: absolute;
          top:50%;
          right: 17px;
          transform: translateY(-50%);
          display: flex;
          .arrow {
            width: 8px;
            height: 12.8px;
            background-image: url("../../../assets/images/team/矩形 16 拷贝@2x.png");
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
</style>
