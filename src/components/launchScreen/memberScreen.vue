<!-- 主页面 -->
<template>
  <div id="memberScreen">
    <big-news/>
    <member-information/>
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
import MemberInformation from './memberInformation/memberInformation'
export default {
  name: "memberScreen",
  components: {MemberInformation, MemberWorks, RelevantEntry, RecommendVideo, PersonalExperience, BigNews}
}
</script>

<style scoped>
#memberScreen{
  width: 100vw;
  padding-bottom: 120px;
}
</style>
