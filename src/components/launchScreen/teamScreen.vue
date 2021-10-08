<!-- 主页面 -->
<template>
  <div id="teamScreen">
    <team-works></team-works>
  </div>
</template>

<script>
import teamWorks from "@/components/launchScreen/TeamWorks/teamWorks";
export default {
  name: "teamScreen",
  components: {
    teamWorks
  }
}
</script>

<style scoped>
#teamScreen{
  width: 100vw;
}
</style>
