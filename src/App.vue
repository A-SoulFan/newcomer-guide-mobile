<template>
  <div id="app">
    <top-contents></top-contents>
    <transition name="component-fade" mode="out-in" appear>
      <component :is="screen.componentName"></component>
    </transition>
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
      screen: {componentName: 'memberScreen', name: '成员介绍'}
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
  background: #010101;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
div:focus {
  outline: none;
}

</style>
