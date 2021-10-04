<template>
  <div id="app">
    <nav-bar></nav-bar>
    <top-contents></top-contents>
    <component is="teamScreen"></component>
    <about-us></about-us>
  </div>
</template>

<script>
import navBar from "./components/navBar/navBar";
import aboutUs from "./components/aboutUs/aboutUs";
import teamScreen from "./components/launchScreen/teamScreen";
import memberScreen from './components/launchScreen/memberScreen'
import topContents from "./components/topContents/topContents";

export default {
  beforeCreate() {
    document.getElementsByTagName("body")[0].setAttribute("style","margin:0");
  },
  name: 'App',
  components: {
    navBar,
    aboutUs,
    teamScreen,
    memberScreen,
    topContents
  }
}
</script>

<style>
#app {
  text-align: center;
  margin:0;
}
</style>
