<script lang="ts" setup>
import LayoutAuthenticated from "../layouts/LayoutAuthenticated.vue";
import SectionMain from "../components/SectionMain.vue";
import { reactive } from "vue";
</script>
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <Client />
    </SectionMain>
  </LayoutAuthenticated>
</template>
