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
                <div class="member-bg">
                </div>
              </div>
              <div>{{item}}</div>
              <div class="member-picture">
                <img class="m-pic-img" src="../../../assets/images/member/diana-pic.png">
              </div>
              <div class="member-info">
                <div class="basic-info">

                </div>
                <div class="member-files">
                  <div class="title">个人档案</div>
                  <div class="content">抖音珈乐视频更新，珈乐（Carol），乐华娱乐旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。珈乐（Carol），乐华娱乐旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。珈乐（Carol）乐华娱乐旗下虚拟偶像女团A-SOUL成员，组合Vocal担当。</div>
                </div>
              </div>
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
    //--swiper-navigation-color: #CCCCCC; /* 单独设置按钮颜色 */
    //--swiper-navigation-size: 20px; /* 设置按钮大小 */
    .information-swiper-slide {
      width: 100%;
      height: 100%;
      .information-slide-item {
        height: 100%;
        width: 100%;
        .information-slide-content {
          position: relative;
          .top-content {
            position: relative;
            margin-top: 90px;
            height: 240px;
            background-color: rgba(255, 153, 153, 1);
            .name {
              position: absolute;
              top: -47px;
              right: 33px;
              font-size: 144px;
              font-family: HelveticaInserat-Roman-SemiB;
              font-weight: 900;
              writing-mode: tb-rl;
              letter-spacing: -1px;
              color: #FFFFFF;
            }
          }
          .member-picture {
            position: absolute;
            top: 90px;
            width: 667px;
            .m-pic-img {
              width: 667px;
            }
          }
          .member-info {
            margin: 0 35px;
            margin-top: 500px;
            .member-files {
              .title {
                padding-left: 0;
                padding-bottom: 10px;
                font-size: 24px;
                font-family: FZLTCHJW;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 24px;
                border-bottom: 1px solid rgba(255, 153, 153, 1);
              }
              .content{
                padding-top: 20px;
                font-size: 16px;
                font-family: FZLTHJW;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 24px;
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
    .information-icon {
      margin-top: 80px;
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

