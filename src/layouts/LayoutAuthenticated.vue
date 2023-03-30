<script setup lang="ts">
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import NavBar from "./_navbar/components/NavBar.vue";
import SideBar from "./_sidebar/components/SideBar.vue";
import FooterBar from "./_footer/components/FooterBar.vue";
import BaseIcon from "../components/BaseIcon.vue";
import { useLayoutStore } from "./_sidebar/stores/layout";
import { useRouter } from "vue-router";
import MsjRefreshLogin from "../components/MsjRefreshLogin.vue";

const layoutStore = useLayoutStore();
const layoutAsidePadding = "xl:pl-60";

const router = useRouter();
router.beforeEach(() => {
  layoutStore.isAsideMobileExpanded.value = false;
  layoutStore.isAsideLgActive.value = false;
});
</script>
<template>
  <!-- <MsjRefreshLogin /> -->
  <div
    :class="{
      'overflow-hidden lg:overflow-visible':
        layoutStore.isAsideMobileExpanded.value,
    }"
  >
    <div
      :class="[
        layoutAsidePadding,
        { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded.value },
      ]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50"
    >
      <!-- trabajo en el coerpo -->
      <Nav-Bar
        :class="[
          layoutAsidePadding,
          { 'ml-60 lg:ml-0': layoutStore.isAsideMobileExpanded.value },
        ]"
      >
        <div class="flex items-center p-3">
          <span
            class="flex lg:hidden hover:bg-indigo-400 rounded-md"
            @click.prevent="layoutStore.asideMobileToggle"
          >
            <BaseIcon
              :path="
                layoutStore.isAsideMobileExpanded.value
                  ? mdiBackburger
                  : mdiForwardburger
              "
              size="24"
            />
          </span>

          <span
            class="hidden lg:flex xl:hidden hover:bg-indigo-400 rounded-md"
            @click.prevent="layoutStore.isAsideLgActive.value = true"
          >
            <BaseIcon :path="mdiMenu" size="24" />
          </span>
        </div>
      </Nav-Bar>

      <Side-Bar />
      <slot />
      <FooterBar>
        Verificación
        <a
          href="https://compuempresa.com/info/servicios-e-inversiones-putumayo-eirl-20601836174"
          target="_blank"
          class="text-blue-600"
          >Datos generales de la Empresa S.E.I.P
        </a>
      </FooterBar>
    </div>
  </div>
</template>
