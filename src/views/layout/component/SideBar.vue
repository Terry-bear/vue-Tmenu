<template>
  <div>
    <span v-html="data"></span>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Model, Provide, Inject } from 'vue-property-decorator'
@Component({})
export default class SideBar extends Vue {
  public data() {
    return {
      data: '我是侧边栏'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
