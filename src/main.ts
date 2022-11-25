import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

// import './style.css'
import './css/index.css'
import router from './router'




createApp(App)
.use(router)
.mount('#app')


// treat all tags starting with 'ion-' as custom elements
// const app:string = config.compilerOptions.isCustomElement = (tag:string) => {
//   return tag.startsWith('sa') // (return true)
// }


const defaultDocumentTitle = "SEIP";

/* Set document title from route meta */
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle;
});


