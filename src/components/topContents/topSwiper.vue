<template>
  <div id="topSwiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!--单个界面-->
        <div class="swiper-slide" v-for="(picture,index) in pictureList" :key="index">
          <!--轮播图图片-->
          <div class="image-wrapper">
            <img :src="picture.pictureUrl" :alt="picture.pictureDescribe">
          </div>
          <!--头图标题-->
          <div class="topTitle">
            <p class="slogan">{{ picture.title }}</p>
            <p class="introduce">团队介绍</p>
          </div>
          <!--头图表述文字-->
          <div class="topText">{{ picture.content }}</div>
        </div>
      </div>
      <!-- 设置分页器 -->
      <div class="swiper-pagination">
        <div class="pagination-item" v-for="(item,index) of pictureList" :key="index"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: "topSwiper",
  data() {
    return {
      // 图片数据列表及文本
      pictureList: [
        {
          pictureUrl: require('../../assets/image/kira.png'), //图片地址
          pictureDescribe: '贝拉Kira', // 图片描述
          title: 'A-SOUL时代 沸腾期待', // 图片文案title
          content: 'A-SOUL是乐华娱乐与字节跳动合作的虚拟偶像企划，中之人（即虚拟形象扮演者）小姐姐们在动捕房的行为被各种传感设备捕捉，再结合软件渲染而展现出实时、3D的二次元虚拟形象来与观众互动。与传统意义上的虚拟主播不同的是，企划的高技术力支持偶像们带给观众沉浸式地观看与互动体验，同时，有着和观众同样成长经历的偶像们也能带给粉丝们更多共鸣。'
        },
        {
          pictureUrl: require('../../assets/image/kira.png'), //图片地址
          pictureDescribe: '贝拉Kira', // 图片描述
          title: 'A-SOUL时代 沸腾期待', // 图片文案title
          content: 'A-SOUL是乐华娱乐与字节跳动合作的虚拟偶像企划，中之人（即虚拟形象扮演者）小姐姐们在动捕房的行为被各种传感设备捕捉，再结合软件渲染而展现出实时、3D的二次元虚拟形象来与观众互动。与传统意义上的虚拟主播不同的是，企划的高技术力支持偶像们带给观众沉浸式地观看与互动体验，同时，有着和观众同样成长经历的偶像们也能带给粉丝们更多共鸣。'
        },
        {
          pictureUrl: require('../../assets/image/kira.png'), //图片地址
          pictureDescribe: '贝拉Kira', // 图片描述
          title: 'A-SOUL时代 沸腾期待', // 图片文案title
          content: 'A-SOUL是乐华娱乐与字节跳动合作的虚拟偶像企划，中之人（即虚拟形象扮演者）小姐姐们在动捕房的行为被各种传感设备捕捉，再结合软件渲染而展现出实时、3D的二次元虚拟形象来与观众互动。与传统意义上的虚拟主播不同的是，企划的高技术力支持偶像们带给观众沉浸式地观看与互动体验，同时，有着和观众同样成长经历的偶像们也能带给粉丝们更多共鸣。'
        },
        {
          pictureUrl: require('../../assets/image/kira.png'), //图片地址
          pictureDescribe: '贝拉Kira', // 图片描述
          title: 'A-SOUL时代 沸腾期待', // 图片文案title
          content: 'A-SOUL是乐华娱乐与字节跳动合作的虚拟偶像企划，中之人（即虚拟形象扮演者）小姐姐们在动捕房的行为被各种传感设备捕捉，再结合软件渲染而展现出实时、3D的二次元虚拟形象来与观众互动。与传统意义上的虚拟主播不同的是，企划的高技术力支持偶像们带给观众沉浸式地观看与互动体验，同时，有着和观众同样成长经历的偶像们也能带给粉丝们更多共鸣。'
        }
      ]
    }
  },
  created() {
    // 获取头图数据数据
    this.getPic()
  },
  mounted() {
    // 初始化 swiper 对象
    new Swiper('.swiper-container', {
      // 图片水平切换
      direction: 'horizontal',
      // 覆盖切换鼠标抓手
      grabCursor: true,
      // 循环播放
      loop: true,
      // 自动播放
      autoplay: true,
      // 初始化分页器
      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        clickable: true,
        renderCustom(swiper, current) {
          const pagination = document.querySelectorAll('.pagination-item')
          // 判断是不是激活焦点，是的话添加active类
          pagination.forEach(item => {
            if (pagination[current - 1] === item) {
              item.classList.add('active')
            } else {
              item.classList.remove('active')
            }
          })
        }
      }
    })
    this.initPagination()
  },
  methods: {
    getPic() {

    },
    initPagination() {
      const paginationItem = document.querySelectorAll('.pagination-item')
      paginationItem.forEach((item, index) => {
        if (index === 0) {
          item.classList.add('active')
        }
        item.style.width = (30 / 250 * 100) + 'vw' //设置分页器的宽度
        item.style.height = '2px' // 设置分页器的高度
      })
    }
  }
}
</script>

<style scoped lang="less">
.swiper-container {
  position: relative;
  width: 100%;
  height: 100%;

  .swiper-slide {
    text-align: center;
    position: relative;

    .image-wrapper {
      background-color: #000;
    }

    img {
      display: block;
      width: 100%;
      max-width: 100%;
      opacity:0.6;
      filter: alpha(opacity=60);
    }

    .topTitle {
      width: calc(212.33vw / 250 * 100);
      position: absolute;
      top: calc(164vw / 250 * 100);
      left: calc(11.67vw / 250 * 100);
      color: #fff;

      .introduce {
        font-weight: 900;
        text-align: left;
        font-size: calc(20vw / 250 * 100);
        font-family: 'fzlthjwgb10';
      }

      .slogan {
        font-weight: 100;
        text-align: left;
        font-size: calc(18vw / 250 * 100);
        font-family: 'fzlthjwgb10';
        text-stroke: 1px #f00;
      }

      p {
        margin: 0;
      }
    }

    .topText {
      width: calc(199.33vw / 250 * 100);
      position: absolute;
      color: #ffffff;
      left: calc(11.67vw / 250 * 100);
      top: calc(222.67vw / 250 * 100);
      font-size: calc(5.33vw / 250 * 100);
      text-align: left;
      font-family: 'fzlthjwgb10';
    }
  }

  .swiper-pagination {
    bottom: calc(26vw / 250 * 100);
    left: calc(65vw / 250 * 100);
    width: calc(120vw / 250 * 100);
    display: flex;

    /*自定义分页器的样式*/

    .pagination-item {
      height: 2px;
      background-color: #fff;
    }

    /*自定义分页器激活时的样式表现*/

    .active {
      background-color: #FF8772;
    }
  }

}

</style>
