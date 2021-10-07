<!-- 头部组件顶栏 -->
<template>
  <div id="navBar">
    <div class="top_menu" v-show="showTop">
      <div class="menu" @click="changePage">
        <img src="../../assets/image/leftPic.png" alt="left menu pic">
      </div>
      <div class="logo">
        <img src="../../assets/image/Logo.png" alt="asf logo">
      </div>
    </div>
    <div class="discount_wrapper" v-show="isShowModel">
      <div class="close" @click="closeWrapper">&times;</div>
      <div class="toggle">
        <div class="selection selected" @click="toggleSelected(0)">成员介绍<p></p></div>
        <div class="selection" @click="toggleSelected(1)">团队介绍<p></p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      isShowModel: false,
      isSelected: true,
      showTop: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHide);
  },
  beforeDestroy() {
    //离开这个界面之后，删除，不然会有问题
    window.removeEventListener('scroll', this.btn_pos)
  },
  methods: {
    changePage() {
      this.isShowModel = true
    },
    closeWrapper() {
      this.isShowModel = false
    },
    toggleSelected(index) {
      const choices = document.querySelectorAll('.selection')
      choices.forEach((item, i) => {
        item.classList.remove('selected')
        if (i === index) {
          item.classList.add('selected')
        }
      })
    },
    scrollHide() {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      //滚动条的高度>可视区的高度
      this.showTop = scrollTop <= 375;
    }
  }
}
</script>

<style scoped lang="less">
#navBar {
  .top_menu {
    z-index: 1000;
    position: fixed;
    width: 100%;
    top: calc(5 / 250 * 100vw);
    height: calc(24 / 250 * 100vw);
    border-top: #ffffff solid calc(0.23vw / 250 * 100);
    border-bottom: #ffffff solid calc(0.23vw / 250 * 100);

    .menu {
      position: absolute;
      left: calc(19.67 / 250 * 100vw);
      top: 50%;
      transform: translateY(-50%);
      padding: 10px;
    }

    .logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .discount_wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vh;
    height: 100vh;
    z-index: 1001;
    background-color: rgba(255, 255, 255, 0.8);

    .close {
      position: relative;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 30px;
      left: 27px;
      top: 7px;
    }

    .toggle {
      width: 180px;
      position: absolute;
      top: 80px;
      left: 100px;

      .selection {
        height: 45px;
        text-align: center;
        line-height: 45px;
        position: relative;
      }

      .selected {
        p {
          position: absolute;
          width: 180px;
          height: 7px;
          background-color: rgba(255, 135, 114, .6);
          bottom: 0;
        }
      }
    }
  }
}
</style>
