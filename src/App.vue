<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop, Emit } from 'vue-property-decorator'
export default class App extends Vue {
  private name: string =  'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
  background-color: rgb(231, 231, 231);
}

</style>
