import { createApp } from "vue";
import App from "./App.vue";
import "./css/index.css";
import axios from "axios";
import ElementPlus from "element-plus";
import "element-plus/es/components/message/style/css";
import "element-plus/dist/index.css";
import router from "./router";

// import './style.css'

createApp(App).use(router, ElementPlus).mount("#app");

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
