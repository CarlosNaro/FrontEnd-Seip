import { computed, reactive } from "vue";
import type { IMenu, IMenuStore } from "./../models/IMenu";

const state = reactive<IMenuStore>({
  sidebar: null,
});

const menuStore = {
  sidebar: {
    get: () => state.sidebar,
    set: (value: IMenu[]) => (state.sidebar = value),
  },
};

console.log("menu", menuStore.sidebar.get());

export default computed(() => menuStore).value;
