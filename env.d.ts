/// <reference types="vite/client" />


// 引入vue组件爆红 需要引入下面两段之一即可

// declare module '*.vue' {
//   import { defineComponent } from 'vue'
//   const Component: ReturnType<typeof defineComponent>
//   export default Component
// }

declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}