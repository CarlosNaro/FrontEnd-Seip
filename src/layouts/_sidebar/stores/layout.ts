import { reactive, ref } from "vue";

const isAsideMobileExpanded = ref();
const isAsideLgActive = ref();
export const useLayoutStore = () => {
  isAsideMobileExpanded.value = false;
  isAsideLgActive.value = false;
  const asideMobileToggle = () => {
    isAsideMobileExpanded.value = !isAsideMobileExpanded.value;
  };

  return { asideMobileToggle, isAsideMobileExpanded, isAsideLgActive };
};
