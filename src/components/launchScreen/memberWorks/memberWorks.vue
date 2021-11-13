<!--实践历程-->
<template>
  <div id="memberWorks">
    <h1 class="title">个人作品</h1>

    <div class="choose-member" >
      <div class="member" v-for="item of memberList" :key="item.id" @click="chooseMember(item)">
        <div class="name">{{item.name}}</div>
        <div :class="{'choose-flag': flag == item.id}"></div>
      </div>
    </div>
    <!--轮播图-->
    <div class="swiper-container banner-member-works">
      <div class="swiper-wrapper">
        <div class="swiper-slide member-works-swiper-slide" v-for="item of 4" :key="item">
          <div class="slide-item member-works-slide-item">
            <video class="video-content" scr=""></video>
          </div>
        </div>
      </div>
      <!--          分页器滑块-->
      <div class="slider member-works-slider">
        <div class="swiper-pagination member-works-swiper-pagination">
          <div class="member-works-pagination-item" v-for="item of 4" :key="item"></div>
        </div>
        <div class="member-works-slider-btn">
          <div class="swiper-button-prev member-works-icon"></div>
          <div class="swiper-button-next member-works-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import { getMemberVideos } from '../../../http/request'

export default {
  name: "memberWorks",
  data() {
    return {
      flag: 1,
      memberName: 'Ava',
      memberList:[{id :1,name: '向晚',memberName: 'Ava' , flag: true},
                  {id :2,name: '珈乐',memberName: 'Carol',  flag: false},
                  {id :3,name: '贝拉',memberName: 'Bella',  flag: false},
                  {id :4,name: '乃琳',memberName: 'Eillen',  flag: false},
                  {id :5,name: '嘉然',memberName: 'Diana',  flag: false},
      ]
    }
  },
  mounted() {
    this.memberWorksSwiper = new Swiper('.banner-member-works', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.member-works-swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom(swiper, current) {
          const pagination = document.querySelectorAll('.member-works-pagination-item')
          // 判断是不是激活焦点，是的话添加active类
          pagination.forEach(item => {
            if (pagination[current - 1] === item) {
              item.classList.add('member-works-active')
            } else {
              item.classList.remove('member-works-active')
            }
          })
        }
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
    this.setPaginationItem()
    this.obtainVideos()
  },
  methods:{
    chooseMember(item) {
      console.log(item)
      if(this.flag === item.id) {
        return
      }
      this.flag = item.id
      this.memberName = item.memberName
      this.obtainVideos()
    },
    obtainVideos() {
      let data ={
        memberName: this.memberName,
        pageIndex: 0,
        pageNum: 10
      }
      getMemberVideos(data).then(res => {
        console.log(res)
      })

    },

    setPaginationItem(){
      const sliderLen = document.querySelectorAll('.member-works-swiper-slide').length
      const paginationItem = document.querySelectorAll('.member-works-pagination-item')
      paginationItem.forEach((item,index) => {
        if (index === 0) {
          item.classList.add('member-works-active')
        }
        item.style.width = (360 / (sliderLen - 2)) + 'px' //设置分页器的宽度
      })
    }
  }
}
</script>

<style lang="less" scoped>
#memberWorks {
  width: 100vw;
  height: 100%;
  background: rgba(0,0,0) url('../../../assets/images/team/图层 533.png');
  background-size: 100% 100%;
  font-family: FZLTCHJW, serif;

  .title {
    font-size: 36px;
    color: #FF8772;
    line-height: 36px;
    padding: 77px 0 0 35px;
    margin-bottom: 90px;
  }

  .choose-member {
    display: flex;
    width: auto;
    margin: 0 35px;
    border-bottom: 0.5px  solid rgba(255,255,255,0.5);
    .member {

      margin-right: 40px;
      .name {
        flex: 1;
        margin-bottom: 10px;
        font-size: 24px;
        font-family: FZLTHJW;
        font-weight: normal;
        color: #FFFFFF;
        line-height: 48px;
      }
      .choose-flag {
        width: 45px;
        height: 4px;
        background: #99CCFF;
      }
    }

  }

  .banner-member-works {

    margin-top: 40px;
    height: 100%;
    --swiper-navigation-color: #CCCCCC;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 20px;/* 设置按钮大小 */
    .member-works-swiper-slide {
      margin: 0 35px;
      margin-bottom: 40px;
      width: 100%;
      .member-works-slide-item {
        position: relative;
        .video-content {
          width: 683px;
          height: 427px;
          background-color: #CC99FF;
        }
      }
    }

    .member-works-slider {
      height: 100px;
      display: flex;
      align-items: center;
      margin: 0 35px;
      justify-content: space-between;
      //justify-content: space-evenly;
      .member-works-swiper-pagination {
        width: 360px;
        height: 2px;
        display: flex;
        position: unset;
      }
      .member-works-slider-btn{
        width: 136px;
        height: 50px;
        position: relative;
      }
      .member-works-icon {
        position: absolute;
        right: 0;
        top: 10px;
        width: 51px;
        height: 51px;
        background: url("../../../assets/images/team/椭圆 18.png");
        background-size: 100% 100%;
      }
    }

    /*自定义分页器的样式*/

    .member-works-pagination-item {
      height: 2px;
      background-color: #FFFFFF;
    }

    /*自定义分页器激活时的样式表现*/
    .member-works-active {
      background-color: #FF8772;
    }
  }
}
</style>

