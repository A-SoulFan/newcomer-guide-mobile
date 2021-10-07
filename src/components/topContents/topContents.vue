<template>
  <div id="topContents">
    <top-swiper></top-swiper>
  </div>
</template>

<script>
import topSwiper from "@/components/topContents/topSwiper";

export default {
  name: "topContents",
  components: {topSwiper}
}
</script>

<style scoped>
#topContents {
  width: 100vw;
}
</style>
