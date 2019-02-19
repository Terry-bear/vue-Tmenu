<template>
  <div>
    <side-bar/>
  </div>
</template>
<script lang="ts">
import SideBar from '@/components/SideBar/index.vue'
import { Vue, Component, Watch, Prop, Model, Provide, Inject } from 'vue-property-decorator'
@Component({
  components: {
    SideBar
  }
})
export default class About extends Vue {

}
</script>

<style lang="scss" scoped>
</style>
