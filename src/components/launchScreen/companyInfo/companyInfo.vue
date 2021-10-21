<template>
  <div id="companyInfo">
    <div class="infoContainer">
      <div class="title">所属公司</div>
      <div class="introduce">
          <div class="company-icon"></div>
          <div class="company-name">字节跳动</div>
          <div class="arrow-icon" @click.prevent="contentSwitch"></div>
       </div>
      <div v-if="openFlag" class="company-content">
        <div class="content-text">
          A-SOUL是乐华娱乐与字节跳动合作的虚拟偶像企划，中之人（即虚拟形象扮演者）小姐姐们在动捕房的行为被各种传感设备捕捉，再结合软件渲染而展现出实时、3D的二次元虚拟形象来与观众互动。与传统意义上的虚拟主播不同的是，企划的高技术力支持偶像们带给观众沉浸式地观看与互动体验，同时，有着和观众同样成长经历的偶像们也能带给粉丝们更多共鸣。
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'companyInfo',
  data() {
    return {
      openFlag: true
    }
  },
  methods: {
    contentSwitch() {
      console.log('?')
      let content = document.getElementsByClassName('arrow-icon')[0]
      this.openFlag = !this.openFlag
      if(this.openFlag) {
        content.style.transform = 'rotate(180deg)'
      } else {
        content.style.transform = 'rotate(0deg)'
      }
    }
  }
}
</script>

<style scoped lang="less">
#companyInfo {
  width: 100vw;
  background: #000;
  font-family: FZLTCHJW, serif;
}
.infoContainer {
  overflow: hidden;
  margin: 0px 34px 0px 34px;
  .title {
    margin-top: 118px;
    margin-bottom: 42px;
    font-size: 36px;
    font-family: FZLTCHJW;
    font-weight: normal;
    color: #FF8772;
    line-height: 36px;
  }
  .introduce {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: auto;
    height: 100px;
    background: #FFFFFF;
    .company-icon {
      margin-left: 40px;
      width: 177px;
      height: 45px;
      background-size: 100% 100%;
      background-image: url("../../../assets/images/team/company-icon.png");
    }
    .company-name {
      flex: auto;
      margin-left: 39px;
      padding-top: 10px;
      font-size: 24px;
      font-family: FZLTHJW;
      font-weight: normal;
      color: #333333;
      line-height: 36px;
    }
    .arrow-icon {
      margin-right: 28px;
      width: 24px;
      height: 11px;
      transform: rotate(180deg);
      background-size: 100% 100%;
      background-image: url("../../../assets/images/team/arrow-icon.png");
    }
  }
  .company-content {
    background: #FFFFFF;
    border-top: 0.5px  solid #CCCCCC;
    padding: 38px 40px;
    .content-text {
      font-size: 16px;
      font-family: FZLTHJW;
      font-weight: normal;
      color: #333333;
      line-height: 24px;
    }
  }
}
</style>
