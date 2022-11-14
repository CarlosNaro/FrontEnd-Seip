import { reactive } from 'vue'




  

  export const useLayoutStore = (()=>{

    const state = reactive({
      isAsideMobileExpanded: false,
      isAsideLgActive: false,
    })
    
    function asideMobileToggle(){
      state.isAsideMobileExpanded = !state.isAsideMobileExpanded
    }
    
    return{ asideMobileToggle,state}
    
  })

  // export default function useLayoutStore(){
  //   function asideMobileToggle(){
  //     state.isAsideMobileExpanded = !state.isAsideMobileExpanded
  //   }
  
  //   return{ asideMobileToggle}
  // }
