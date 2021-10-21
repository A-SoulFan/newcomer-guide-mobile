<!-- 主页面 -->
<template>
  <div id="teamScreen">
    <background-story/>
    <company-info/>
    <team-works/>
    <historicEvent/>
  </div>
</template>

<script>
import historicEvent from "./historicEvent/historicEvent";
import TeamWorks from './teamWorks/teamWorks'
import BackgroundStory from './backgroundStory/backgroundStory'
import CompanyInfo from './companyInfo/companyInfo'
export default {
  name: "teamScreen",
  components:{
    CompanyInfo,
    BackgroundStory,
    TeamWorks,
    historicEvent
  }
}
</script>

<style scoped>
#teamScreen{
  width: 100vw;
}
</style>
