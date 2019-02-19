declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
      $apolloProvider: any,
      axios: {
        get: any
      }
    }
  }

declare module 'vuedraggable'
