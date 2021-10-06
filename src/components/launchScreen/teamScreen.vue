<!-- 主页面 -->
<template>
  <div id="teamScreen">
    <historicEvent/>
  </div>
</template>

<script>
import historicEvent from "./historicEvent/historicEvent";
export default {
  name: "teamScreen",
  components:{
    historicEvent
  }
}
</script>

<style scoped>
#teamScreen{
  width: 100vw;
}
</style>
