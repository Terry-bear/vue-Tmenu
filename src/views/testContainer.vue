<template>
  <div>
    <span v-html="data"></span>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Model, Provide, Inject } from 'vue-property-decorator'
@Component({})
export default class Container extends Vue {
  public data() {
    return {
      data: 'this is a container layout!'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
