<template>
  <div id="memberInformation">
    <h1 class="title">人设</h1>
    <!--轮播图-->
    <div class="swiper-container banner-information">
      <div class="swiper-wrapper">
        <div class="swiper-slide information-swiper-slide" v-for="item of 5" :key="item">
          <div class="slide-item information-slide-item">
            <div class="information-slide-content">
              <div class="top-content">
                <div class="name">DIANA</div>
              </div>
              <div>{{item}}</div>
            </div>

          </div>
        </div>
      </div>
      <div class="swiper-button-prev information-icon"></div>
      <div class="swiper-button-next information-icon" style="transform: scaleX(-1)"></div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
export default {
  name: 'memberInformation',
  mounted() {
    this.informationSwiper = new Swiper('.banner-information', {
      loop: true,
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
#memberInformation {
  width: 100vw;
  background-color: black;
  font-family: FZLTCHJW, serif;
  .title {
    font-size: 36px;
    color: #FF8772;
    line-height: 36px;
    padding: 77px 0 0 35px;
  }
  .banner-information {
    height: 1008px;
    background-color: #99CCFF;
    //--swiper-navigation-color: #CCCCCC; /* 单独设置按钮颜色 */
    //--swiper-navigation-size: 20px; /* 设置按钮大小 */
    .information-swiper-slide {
      width: 100%;
      height: 100%;
      .information-slide-item {
        height: 100%;
        .information-slide-content {
          .top-content {
            position: relative;
            margin-top: 90px;
            height: 240px;
            background-color: rgba(255, 153, 153, 0.5);
            .name {
              position: absolute;
              top: -47px;
              right: 33px;
              font-size: 144px;
              font-family: HelveticaInserat;
              font-weight: 900;
              writing-mode: tb-rl;
              color: #FFFFFF;
            }
          }
        }
      }
    }
    .information-icon {
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
}

</style>

