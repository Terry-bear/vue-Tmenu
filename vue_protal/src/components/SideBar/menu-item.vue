<template>
  <div class="sidebar-items-wrapper">
    <div class="sidebar-leader-wrapper">
      <div class="sidebar-heading" @mouseenter="setSubMenu(true)" @mouseleave="setSubMenu(false)">
        <svg-icon
          iconClass="0"
          style="width:18px; height:18px;"
        ></svg-icon>
        <span style="color:#fff;">产品与服务</span>
        <svg-icon
          iconClass="more"
          style="width:18px; height:18px;"
        ></svg-icon>
      </div>
    </div>
    <draggable v-model="dataList">
      <transition-group>
        <ul
          class="sidebar-group"
          v-for="({name, title, url, id, icon, status}, index) in dataList"
          :key="id"
        >
          <li class="sidebar-group-items" v-if="status">
            <div
              class="sidebar-mask"
              @mouseenter="selectbtn(id)"
              @mouseleave="canclebtn"
            >
              <svg-icon
                :iconClass="icon"
                style="width:18px; height:18px;"
              ></svg-icon>
              <span>
                <a
                  class="sidebar-item-link"
                  :title="title"
                  :href="url"
                >
                  <span v-html="name"></span>
                </a>
              </span>
              <label @click="delBtn(index)">
              <svg-icon
                :class="{'close-status':true, 'close-status--active': closeIconActiveId === id}"
                iconClass="close"
                style="width:15px; height:15px;margin-right:5px;"
              ></svg-icon>
              </label>
              <svg-icon
                :class="{'order-status':true, 'order-status--active': closeIconActiveId === id}"
                iconClass="order"
                style="width:15px; height:15px;"
              ></svg-icon>
            </div>
          </li>
        </ul>
      </transition-group>
    </draggable>
  </div>
</template>
<script lang="ts">
import draggable from 'vuedraggable'
import {Vue, Component, Watch, Prop, Model, Provide, Inject} from 'vue-property-decorator'
import { State, Getter, Action, Mutation} from 'vuex-class'
@Component({
  components: {
    draggable
  }
})
export default class MenuItem extends Vue {
  @State('dataList') public stateDataList: any
  @State('subMenuStatus') public subMenuStatus!: boolean
  @Mutation('setDataListStatus') public setDataListStatus: any
  @Mutation('setSubMenu') public setSubMenu: any
  private closeIconActiveId!: string
  public data() {
    return {
      closeIconActiveId: ''
    }
  }
  public get dataList() {
    return this.stateDataList
  }

  public set dataList(v: string) {
    (this as any).$store.commit('setDataListOrder', v)
  }

  public created() {
   console.log(this.stateDataList)
  }
  /**
   * selectbtn
   */
  public selectbtn(id: any) {
    this.closeIconActiveId = id
  }
  /**
   * canclebtn
   */
  public canclebtn() {
    this.closeIconActiveId = ''
  }
  public delBtn(index: number) {
    this.setDataListStatus(index)
  }
}
</script>

<style lang="scss">
@import "~@/styles/mixin.scss";
.sidebar-leader-wrapper {
  // sidebar heading
  .sidebar-heading {
    width: 230px;
    height: 40px;
    padding: 3px 0;
    border: {
      bottom: 1px solid rgba(255, 255, 255, 0.3);
      top: 1px solid rgba(255, 255, 255, 0.3);
    }
    cursor: pointer;
    &:hover{
      background-color: #00c0dee7;
    }
    span {
      display: inline-block;
      vertical-align: middle;
      width: 160px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 40px;
      color: #fff;
      font-size: 13px;
      padding-right: 8px;
      user-select: none;
      &:hover {
        color: #00c1de;
      }
    }
    .svg-icon{
      @include svgIconStyle;
    }
  }
}
// ul-li标签处理
.sidebar-group {
  list-style: none;
  font-size: 12px;
  color: #fff;
  padding-left: 0px;
  margin: 0;
  width: 210px;
  .svg-icon {
    @include svgIconStyle;
  }
  // a标签处理
  .sidebar-item-link {
    text-decoration: none;
    &:visited {
      color: #fff;
    }
    &:link {
      color: #fff;
    }
    span {
      display: inline-block;
      vertical-align: middle;
      width: 140px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 40px;
      color: #fff;
      font-size: 12px;
      padding-right: 8px;
      user-select: none;
      &:hover {
        color: #00c1de;
      }
    }
  }
  // li样式
  .sidebar-group-items {
    &:hover {
      background-color: #001528;
    }
  }
  .sidebar-mask {
    width: 230px;
    height: 40px;
    &:hover {
      background-color: #001528;
    }
  }

  // 关闭按钮样式
  .close-status {
    opacity: 0;
  }
  // 隐藏icon样式
  .close-status--active {
    @include iconStyle(pointer);
  }
  // 拖动按钮样式
  .order-status {
    opacity: 0;
    margin-left: 5px;
  }
  .order-status--active {
    @include iconStyle(move);
  }
}
</style>
