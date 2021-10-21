<!-- 主页面 -->
<template>
  <div id="memberScreen">
    <big-news/>
    <personal-experience/>
    <relevant-entry/>
    <member-works/>
    <recommend-video/>
  </div>
</template>

<script>
import BigNews from './bigNews/bigNews'
import PersonalExperience from './personalExperience/personalExperience'
import RecommendVideo from './recommendVideo/recommendVideo'
import RelevantEntry from './relevantEntry/relevantEntry'
import MemberWorks from './memberWorks/memberWorks'
export default {
  name: "memberScreen",
  components: {MemberWorks, RelevantEntry, RecommendVideo, PersonalExperience, BigNews}
}
</script>

<style scoped>
#memberScreen{
  width: 100vw;
}
</style>
