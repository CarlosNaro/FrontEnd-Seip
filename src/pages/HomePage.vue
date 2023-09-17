<script setup lang="ts">
import LayoutAuthenticated from "../layouts/LayoutAuthenticated.vue";
import SectionMain from "../components/SectionMain.vue";
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton.vue";
import { reactive } from "vue";

import { mdiFamilyTree, mdiMicrosoftXboxControllerBatteryAlert } from "@mdi/js";

const menu = reactive({
  icon: mdiFamilyTree,
  title: "Dashboard",
  main: Boolean,
});
</script>
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="menu.icon"
        :title="menu.title"
        :main="menu.main"
      />
    </SectionMain>
  </LayoutAuthenticated>
</template>
