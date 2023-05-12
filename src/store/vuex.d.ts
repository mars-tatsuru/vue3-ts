import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { State } from "@/store";

declare module "@vue/runtime-core" {
  // this.$storeの型を宣言
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
