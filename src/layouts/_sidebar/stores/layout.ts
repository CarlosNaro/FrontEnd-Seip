import { reactive, ref } from "vue";

const isAsideMobileExpanded = ref()
const isAsideLgActive = ref()
export const useLayoutStore = () => {

  isAsideMobileExpanded.value = false
  isAsideLgActive.value = false
  const asideMobileToggle = () => {
    isAsideMobileExpanded.value = !isAsideMobileExpanded.value
  };

  const administrador = (token:any)=>{

    if(token.is_admin){
      return true
    }else{
      return false
    }
  }





  return { asideMobileToggle, isAsideMobileExpanded, isAsideLgActive, administrador }
};
