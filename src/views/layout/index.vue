<template>
  <div class="main-home">
    这是一个MainHome的界面
    <nav-bar />
    <div class="main-container">
      <side-bar class="sidebar-container" />
      <container />
    </div>
  </div>
</template>
<script lang="ts">
import SideBar from '@/views/layout/component/SideBar.vue'
import NavBar from '@/views/layout/component/NavBar.vue'
import Container from '@/views/layout/component/Container.vue'
import { Vue, Component, Watch, Prop, Model, Provide, Inject} from 'vue-property-decorator'
@Component({
  components: {
    SideBar,
    NavBar,
    Container
  }
})
export default class Layout extends Vue {
  public data() {
    return {
      data: 'hehehehe'
    }
  }
  public mounted() {
    console.log('初始化操作~~~')
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/index.scss";
.main-home {
  @include wh(100%, 100%);
  background-color: rgb(219, 235, 164);
}
</style>
