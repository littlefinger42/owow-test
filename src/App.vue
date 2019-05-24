<template>
  <b-container id="app">
    <Rounds msg="Welcome to Your Vue.js App"/>
  </b-container>
</template>

<script>
import Rounds from './pages/Rounds.vue'

export default {
  name: 'app',
  components: {
    Rounds
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  margin-top: 60px;
}
</style>
