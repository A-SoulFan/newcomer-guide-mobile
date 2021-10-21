<template>
  <div id="app">
    <top-contents></top-contents>
    <component :is="screen.componentName"></component>
    <about-us></about-us>
  </div>
</template>

<script>
import aboutUs from "./components/aboutUs/aboutUs";
import teamScreen from "./components/launchScreen/teamScreen";
import memberScreen from './components/launchScreen/memberScreen'
import topContents from "./components/topContents/topContents";

export default {

  beforeCreate() {
    document.getElementsByTagName("body")[0].setAttribute("style", "margin:0");
  },
  name: 'App',
  components: {
    aboutUs,
    teamScreen,
    memberScreen,
    topContents
  },
  data() {
    return {
      screen: {componentName: 'memberScreen', name: '团员介绍'}
    }
  },
  provide() {
    return {
      pageScreen: this.screen
    }
  },
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color:transparent;
}
</style>
