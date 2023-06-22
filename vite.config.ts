import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      resolvers: [ElementPlusResolver()],
      dts: "src/auto-imports.d.ts",
      vueTemplate: true,
    }),

    Components({
      resolvers: [ElementPlusResolver()],
      dts: "src/components.d.ts",
    }),

    ElementPlus({
      defaultLocale: "es",
    }),
  ],
});
