<!--实践历程-->
<template>
  <div id="historicEvent">
    <h1 class="title">事件历程</h1>
    <!--    轮播图-->
    <div class="swiper-container banner-historic">
      <div class="swiper-wrapper">
        <div class="swiper-slide historic-swiper-slide">
          <div class="slide-item historic-slide-item" v-for="(item,index) of teamEventList.length % 3" :key="index">
            <h1 class="order">
              {{'0' + (index + 1) % 3}}
            </h1>
            <div class="des">
              <div class="txt">
                珈乐个人图片预告公开
              </div>
              <p class="des-date">2020.11.26</p>
            </div>
          </div>
        </div>
      </div>
      <!--          分页器滑块-->
      <div class="slider historic-slider">
        <h1 class="date">2021</h1>
        <div class="swiper-pagination historic-swiper-pagination">
          <div class="historic-pagination-item" v-for="item of paginationNum" :key="item"></div>
        </div>
        <div class="historic-slider-btn">
          <div class="swiper-button-prev historic-icon"></div>
          <div class="swiper-button-next historic-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import {getTeamEvents } from '../../../http/request'
export default {
  name: "historicEvent",
  data() {
    return {
      list:null,
      year: '2021',
      pageIndex: 0,
      pageNum: 12,
      teamEventList: [],
      paginationNum: 1
    }
  },
  mounted() {
    new Swiper('.banner-historic', {
      // 如果需要分页器
      pagination: {
        el: '.historic-swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom(swiper, current) {
          const pagination = document.querySelectorAll('.historic-pagination-item')
          // 判断是不是激活焦点，是的话添加active类
          pagination.forEach(item => {
            if (pagination[current - 1] === item) {
              item.classList.add('historic-active')
            } else {
              item.classList.remove('historic-active')
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

    this.initTeamEventsList()

  },
  methods:{
    initTeamEventsList() {
      getTeamEvents(this.pageIndex, this.pageNum, this.year).then(res => {
        console.log('res' ,res)
        this.teamEventList = res.data.eventList
        this.countPaginationNum()
        console.log(this.teamEventList)
      })
    },
    // 根据返回的列表长度计算分页器页数
    countPaginationNum() {
      let len = this.teamEventList.length
      let num = 0
      if(len <= 3) {
        num = 1
      } else {
        num = Math.floor(len / 3) +  (len % 3 > 0 ? 1 : 0)
      }
      this.paginationNum = num
      console.log('paginationNum' , this.paginationNum)
    },


    setPaginationItem(){
      const sliderLen = document.querySelectorAll('.historic-swiper-slide').length
      console.log('sliderLen',sliderLen)
      const paginationItem = document.querySelectorAll('.historic-pagination-item')
      paginationItem.forEach((item,index) => {
        if (index === 0) {
          item.classList.add('historic-active')
        }
        item.style.width = (360 / ((sliderLen - 2) <= 0 ? 1 : (sliderLen - 2) ) + 'px') //设置分页器的宽度
      })
    }
  }

}
</script>

<style lang="less" scoped>
#historicEvent {
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
    margin: 0;
  }
  .banner-historic {
    width: 100vw;
    height: 100%;
    --swiper-navigation-color: #CCCCCC;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 20px;/* 设置按钮大小 */
    .historic-swiper-slide {
      margin-bottom: 40px;
      .historic-slide-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 80px;
        .order {
          position: relative;
          display: inline-block;
          left: 36px;
          font-size: 54px;
          font-family: Helvetica;
          font-weight: 600;
          margin: 70px 0 0 0;
          color: #FFFFFF;

          &::after {
            content: '';
            width: 35px;
            height: 5px;
            background: #FFFFFF;
            position: absolute;
            bottom: 59px;
            left: 11px;
          }
        }
        .des {
          width: 620px;
          height: 200px;
          background: url("../../../assets/images/team/矩形39.png");
          background-size: 100% 100%;
          position: relative;

          &::after {
            content: '';
            background: url("../../../assets/images/team/矩形43.png");
            background-size: 100% 100%;
            width: 100px;
            height: 100px;
            position: absolute;
            left: 0;
            top: 0;
          }

          .txt {
            font-size: 24px;
            color: #FFFFFF;
            margin: 80px 0 0 59px;
          }

          .des-date {
            font-size: 18px;
            color: #FFFFFF;
            margin: 46px 0 0 59px;
          }
        }
      }
    }

    .historic-slider {
      width: 100vw;
      height: 100px;
      padding: 0 33px 0 37px;
      display: flex;
      align-items: center;
      //justify-content: space-evenly;
      .date{
        font-size: 54px;
        font-family: Helvetica;
        font-weight: 600;
        color: #FFFFFF;
      }
      .historic-swiper-pagination {
        width: 360px;
        height: 2px;
        display: flex;
        position: unset;
        margin: 0 28px 0 50px;
      }
      .historic-slider-btn{
        width: 136px;
        height: 50px;
        position: relative;
      }
      .historic-icon {
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

    .historic-pagination-item {
      height: 2px;
      background-color: #FFFFFF;
    }

    /*自定义分页器激活时的样式表现*/
    .historic-active {
      background-color: #FF8772;
    }
  }
}
</style>
