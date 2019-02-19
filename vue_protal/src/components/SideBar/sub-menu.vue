<template>
  <div>
    <div class="slideInLeft-enter">
      <div class="search-box">
        <svg-icon
          iconClass="search"
          style="width:20px; height:20px; margin: -3px 5px;"
        ></svg-icon>
        <el-input
          placeholder="请输入内容"
          v-model="searchInput"
          clearable
          size="small"
          style="width: calc( 100% - 50px);"
        >
        </el-input>
      </div>
      <div class="arr-info-wrapper">
        <div
          class="arr-groups"
          v-for="({name, id, title, url, status}, index) in dataList"
          :key="id"
        >
          <div class="arr-items">
            <span>
              <a
                class="arr-item-link"
                :title="title"
                :href="url"
              >
                <span v-html="name"></span>
              </a>
            </span>
            <label class="star-wrapper" @click="starStatusChange(index)">
              <svg-icon
                :iconClass="status ? 'star-active' : 'star-none'"
                style="width:18px; height:18px;"
              ></svg-icon>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Model, Provide, Inject} from 'vue-property-decorator'
import { State, Getter, Action, Mutation} from 'vuex-class'
@Component({})
export default class SubMenu extends Vue {
  @State('dataList') public stateDataList: any
  @Mutation('setDataListStatus') public setDataListStatus: any
  private searchInput?: string
  public data() {
    return {
      searchInput: ''
    }
  }

  public get dataList(): any[] {
    return this.stateDataList
  }

  /**
   * starStatusChange
   */
  public starStatusChange(index: number) {
    this.setDataListStatus(index)
  }
}
</script>

<style lang="scss" scoped>
// search box
.search-box {
  display: inline-block;
  height: 40px;
  width: 100%;
  line-height: 40px;
}

.star-wrapper{
  cursor: pointer;
}
// 遍历的arr样式
.arr-info-wrapper {
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: space-around;
  align-items: baseline;
  flex-wrap: wrap;
  padding: 30px;
  .arr-items {
    margin: 2px 10px;
    padding: 3px 10px;
    height: 30px;
    line-height: 30px;
    &:hover {
      background-color: #f0f0f0;
      cursor: pointer;
    }
    .arr-item-link {
      text-decoration: none;
      &:visited {
        color: rgba(0, 0, 0, 0.65);
      }
      &:link {
        color: rgba(0, 0, 0, 0.65);
      }
      span {
        display: inline-block;
        vertical-align: middle;
        width: 140px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 30px;
        color: rgba(0, 0, 0, 0.65);
        font-size: 13px;
        padding-right: 8px;
        user-select: none;
      }
    }
    .svg-icon {
      line-height: 30px;
      text-align: center;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
