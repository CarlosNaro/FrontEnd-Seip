<script setup lang="ts">
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiLock,
} from "@mdi/js";
import { reactive, onMounted, computed, ref, watchEffect, watch } from "vue";
import LayoutAuthenticated from "../layouts/LayoutAuthenticated.vue";
import SectionMain from "../components/SectionMain.vue";

const menu = reactive({
  icon: mdiAccount,
  title: "Profile",
  main: Boolean,
});
</script>
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="menu.icon" :title="menu.title" main />
      <Profile />
    </SectionMain>
  </LayoutAuthenticated>
</template>
