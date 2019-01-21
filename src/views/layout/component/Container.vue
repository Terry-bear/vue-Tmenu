<template>
  <div>
    <div class="container-wrapper">

    </div>
    <span v-html="data"></span>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Model, Provide, Inject } from 'vue-property-decorator'
@Component({})
export default class Container extends Vue {
  public data() {
    return {
      data: '我是内容布局'
    }
  }
}
</script>

<style lang="scss" scoped>
.contarin-wrapper{
  
}
</style>
