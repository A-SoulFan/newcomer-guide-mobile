<template>
  <div id="backgroundStory">
    <div class="storyContainer">
      <div class="project-icon"></div>
      <div class="icon-down-line"></div>
  <!--    背景故事-->
      <div class="project-title">
        <div class="title1">背景故事</div>
        <div class="title2">story</div>
      </div>
      <div class="top-line"></div>
      <div class="top-line-shape">
        <div class="top-line-left"></div>
        <div class="top-line-middle"></div>
        <div class="top-line-right"></div>
      </div>
      <div class="content">
        <div class="paragraph1">A-SOUL是乐华娱乐与字节跳动合作的虚拟偶像企划，中之人（即虚拟形象扮演者）小姐姐们在动捕房的行为被各种传感设备捕捉，再结合软件渲染而展现出实时、3D的二次元虚拟形象来与观众互动。与传统意义上的虚拟主播不同的是，企划的高技术力支持偶像们带给观众沉浸式地观看与互动体验，同时，有着和观众同样成长经历的偶像们也能带给粉丝们更多共鸣。</div>
        <div class="paragraph2">A-SOUL是乐华娱乐与字节跳动合作的虚拟偶像企划，中之人（即虚拟形象扮演者）小姐姐们在动捕房的行为被各种传感设备捕捉，再结合软件渲染而展现出实时、3D的二次元虚拟形象来与观众互动。与传统意义上的虚拟主播不同的是，企划的高技术力支持偶像们带给观众沉浸式地观看与互动体验，同时，有着和观众同样成长经历的偶像们也能带给粉丝们更多共鸣。</div>
      </div>
      <div class="bottom-line">
        <div class="bottom-line-side"></div>
        <div class="bottom-line-middle"></div>
        <div class="bottom-line-side"></div>
      </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'backgroundStory'
}
</script>

<style scoped lang="less">
  #backgroundStory {
    width: 100vw;
    background: #000;
    font-family: FZLTCHJW, serif;
  }
  .storyContainer {
    overflow: hidden;
    margin: 0px 34px 0px 34px;
    .project-icon {
      margin: 0 auto;
      margin-top: 100px;
      width: 167px;
      height: 52px;
      background-size: 100% 100%;
      background-image: url("../../../assets/images/team/project-icon.png");
    }
    .icon-down-line {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-top: 31px;
      width: 147px;
      height: 0.5px;
      background-color: #fff;
      &:before {
        content: '.';
        display: block;
        width: 5px;
        height: 5px;
        margin-top: -1px;
        margin-left: -1px;
        background-size: 100% 100%;
        background-image: url("../../../assets/images/team/dot.png");
      }
      &:after{
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        margin-top: -1px;
        background-size: 100% 100%;
        background-image: url("../../../assets/images/team/dot.png");
      }
    }
    .project-title {
      .title1 {
        text-align: center;
        margin-top: 29px;
        font-size: 36px;
        font-family: FZLTCHJW;
        font-weight: normal;
        color: #FFFFFF;
      }
      .title2 {
        text-align: center;
        margin-top: 5px;
        font-size: 14px;
        font-family: FZLTHJW;
        font-weight: normal;
        color: #FFFFFF;
        opacity: 0.6;
      }
    }
    .top-line {
      margin-top: 18px;
      width: 100%;
      height: 2px;
      background-color: #ffffff;

    }
    .top-line-shape {
      display: flex;
      justify-content: space-between;
      .top-line-left {
        width: 120px;
        height: 10px;
        background-size: 100% 100%;
        background-image: url("../../../assets/images/team/line-left.png");
      }
      .top-line-middle{
        width: 76px;
        height: 18px;
        background-size: 100% 100%;
        background-image: url("../../../assets/images/team/line-middle.png");
      }
      .top-line-right {
        width: 120px;
        height: 10px;
        background-size: 100% 100%;
        background-image: url("../../../assets/images/team/line-right.png");
      }
    }
    .content {
      margin-top: 58px;
      .paragraph1 {
        font-size: 12px;
        font-family: FZLTHJW;
        font-weight: normal;
        color: #FFFFFF;
        line-height: 32px;
      }
      .paragraph2 {
        margin-top: 39px;
        font-size: 12px;
        font-family: FZLTHJW;
        font-weight: normal;
        color: #FFFFFF;
        line-height: 32px;
      }
    }
    .bottom-line{
      display: flex;
      justify-content: space-between;
      margin-top: 41px;
      .bottom-line-side {
        width: 296px;
        height: 14px;
        background-size: 100% 100%;
        background-image: url("../../../assets/images/team/bottom-side.png");
      }
      .bottom-line-middle {
        width: 10px;
        height: 10px;
        background-size: 100% 100%;
        background-image: url("../../../assets/images/team/bottom-middle.png");
      }
    }
  }
</style>
