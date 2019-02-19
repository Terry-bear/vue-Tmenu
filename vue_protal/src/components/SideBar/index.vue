<template>
  <div>
    <div class="side-bar-wrapper">
      <div class="sidebar-container" :style="subMenuStatus ? 'width: 230px !important;' : ''">
        <div class="sidebar-list">
          <menu-item/>
        </div>
      </div>
      <div class="submenu-wrapper slideInLeft-enter" v-if="subMenuStatus" @mouseenter="setSubMenu(true)" @mouseleave="setSubMenu(false)">
        <sub-menu/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Model, Provide, Inject } from 'vue-property-decorator'
import { State, Getter, Action, Mutation} from 'vuex-class'
import MenuItem from './menu-item.vue'
import SubMenu from './sub-menu.vue'
@Component({
  components: {
    MenuItem,
    SubMenu
  }
})
export default class Index extends Vue {
  @State('subMenuStatus') public stateSubMenuStatus!: boolean
  @Mutation('setSubMenu') public setSubMenu: any
  public get subMenuStatus(): boolean {
    return this.stateSubMenuStatus
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/side-bar-varibles.scss';
</style>
