<script lang="ts" setup>
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiLock,
} from "@mdi/js";
import { reactive, onMounted } from "vue";
import LayoutAuthenticated from "../layouts/LayoutAuthenticated.vue";
import SectionMain from "../components/SectionMain.vue";
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton.vue";
import UserCard from "../components/UserCard.vue";
import BaseIcon from "../components/BaseIcon.vue";

const menu = reactive({
  icon: mdiAccount,
  title: "Profile",
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
      <UserCard class="mb-6" />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
       
        <!-- datos basicos   -->
        <div>
          <form  class="formulario">
            <div class="relative pb-5" id="cuerpo" >
              <label class="text-gray-700 font-bold">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autocomplete="Name"
                class="input-forms-icons"
                placeholder="Name"
              />
              <BaseIcon
                class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiAccount"
              />
            </div>

            <div class="relative pb-5" id="cuerpo" >
              <label class="text-gray-700 font-bold">Last Name</label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                required
                autocomplete="lastname"
                class="input-forms-icons"
                placeholder="Last Name"
              />
              <BaseIcon
                class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiAccount"
              />
            </div>

            <div class=" relative pb-5">
                <label for="" class="text-gray-700 font-bold ">E-mail</label>
                <input
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="input-forms-icons  "
                  placeholder="default@example.com"
                />
                <BaseIcon 
                class=" absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiMail"/>
              </div>

            <div >
              <button type="submit" class="positive-button font-bold relative w-full">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BaseIcon :path="mdiLock" />
                </span>
                Save
              </button>
            </div>
          </form>
        </div>

        <!-- datos de password -->
        <div>
          <form >
              <div class=" relative pb-5">
                <label  class="text-gray-700 font-bold ">Current password</label>
                <input
                  type="text"
                  required
                  onselect="alert(123)"
                  class="input-forms-icons  "
                  placeholder="Name"
                />
                
                <BaseIcon 
                class=" absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiAsterisk"/>
              </div>

              <div class=" relative pb-5">
                <label for="" class="text-gray-700 font-bold ">New password</label>
                <input
                  type="text"
                  required
                  class="input-forms-icons  "
                  placeholder=""
                />
                <BaseIcon 
                class=" absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiFormTextboxPassword"/>
              </div>

              <div class=" relative pb-5">
                <label for="" class="text-gray-700 font-bold ">Confirm password</label>
                <input
                  type="text"
                  required
                  class="input-forms-icons  "
                  placeholder=""
                />
                <BaseIcon 
                class=" absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiFormTextboxPassword"/>
              </div>

            
            <div >
              <button type="submit" class="positive-button font-bold relative w-full">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BaseIcon :path="mdiLock" />
                </span>
                Save
              </button>
            </div>


          </form>
        </div>
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>
