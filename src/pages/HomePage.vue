<script setup lang="ts">
import LayoutAuthenticated from "../layouts/LayoutAuthenticated.vue";
import SectionMain from "../components/SectionMain.vue";
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton.vue";
import { reactive, ref } from "vue";

import {
  mdiChartTimelineVariant,
  mdiAccountMultiple,
  mdiCartOutline,
} from "@mdi/js";

const menu = reactive({
  icon: mdiChartTimelineVariant,
  title: "Overview",
  main: Boolean,
});

// const transactionBarItems = reactive();
</script>
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="menu.icon" :title="menu.title" main />
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
        <CardBoxWidget
          :icon="mdiAccountMultiple"
          title="Clients"
          :value="512"
          color="text-[#10B981]"
        />
        <CardBoxWidget
          :icon="mdiCartOutline"
          title="Sales"
          color="text-blue-500"
          prefix="S/"
          :value="7770"
        />
        <CardBoxWidget
          :icon="mdiChartTimelineVariant"
          title="Performance"
          color="text-red-500"
          :value="256"
          suffix="%"
        />
      </div> 

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="flex flex-col justify-between">
          <CardBoxTransaction />
          <CardBoxTransaction />
        </div>

        <div class="flex flex-col justify-between">
          <!-- <CardBoxClient
            v-for="client in clientBarItems"
            :key="client.id"
            :name="client.name"
            :login="client.login"
            :date="client.created"
            :progress="client.progress"
          /> -->

          <CardBoxClient />
          <CardBoxClient />
        </div>
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>
