import { reactive, ref } from "vue";

const isAsideMobileExpanded = ref()
const isAsideLgActive = ref()
export const useLayoutStore = () => {
  // const isAsideMobileExpanded = ref()
  // const isAsideLgActive = ref()

  isAsideLgActive.value = false
  isAsideLgActive.value = false
  const asideMobileToggle = () => {
    isAsideMobileExpanded.value = !isAsideMobileExpanded.value
  };

  return { asideMobileToggle, isAsideMobileExpanded, isAsideLgActive }
};
