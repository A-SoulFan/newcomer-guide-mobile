<!-- 头部组件顶栏 -->
<template>
  <div id="navBar">
    <div class="cube-content">
      <div class="cube-btn" @click="openLayer"></div>
    </div>
    <div class="logo-icon"></div>
    <div v-if="layerFlag" class="mask-layer" @touchmove.prevent>
      <div class="mask-close" @click="closeLayer"></div>
      <div class="mask-content">
        <div  v-for="(item,index) in meumList" :key="index">
          <div class="choose-title" @click="chooseComponent(item)">{{item.title}}
            <div v-if="pageScreen.componentName === item.componentName" class="active"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  inject: ['pageScreen'],
  data() {
    return {
      layerFlag: false,
      meumList: [
        {title: '成员介绍',componentName: 'memberScreen'},
        {title: '团队介绍',componentName: 'teamScreen'}
      ]
    }
  },
  methods: {
    openLayer() {
      //  弹出遮罩层
      this.layerFlag = true
      console.log(this.pageScreen)
    },
    closeLayer() {
      this.layerFlag = false
    },
    chooseComponent(item) {
      if(item.componentName === this.pageScreen) {
        return
      } else {
        this.pageScreen.componentName = item.componentName
      }
    }
  }
}
</script>

<style lang="less" scoped>
#navBar{
  position: absolute;
  top: 15px;
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100vw;
  height: 70px;
  border-top: 0.5px solid rgba(255, 255, 255, .7);
  border-bottom: 0.5px solid rgba(255, 255, 255, .7);
  z-index: 100;

  .cube-content {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items:center;
    left: 0;
    width: 117px;
    height: 100%;
    border-right: 0.5px solid rgba(255, 255, 255, .7);

    .cube-btn {
      margin: auto;
      margin-right: 16px;
      width: 45px;
      height: 41px;
      background-size: 100% 100%;
      background-image: url("../../assets/images/navbar/cube-btn.png");
      background-repeat: no-repeat;
    }
  }
  .logo-icon{
    margin: auto;
    width: 101px;
    height: 39px;
    background-size: 100% 100%;
    background-image: url("../../assets/images/navbar/ASF-logo.png");
    background-repeat: no-repeat;
  }
  .mask-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255, 0.6);
    transition: opacity 0.5s cubic-bezier(0, 1, 0.5, 1);  ;
    .mask-close{
      position: absolute;
      top: 30px;
      right: 40px;
      width: 50px;
      height: 50px;
      background-image: url("../../assets/images/navbar/close.png");
      background-size: 100% 100%;

    }
    .mask-content {
      margin: 0 auto;
      margin-top: 180px;
      .choose-title {
        position: relative;
        margin-top: 60px;
        text-align: center;
        font-size: 35px;
        z-index: 5;
        .active{
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          width: 300px;
          height: 15px;
          background-color: rgba(255,135,114, 0.6);
          z-index: 0;
        }
      }
    }
  }

}

</style>
