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
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton.vue";
import UserCard from "../components/UserCard.vue";
import BaseIcon from "../components/BaseIcon.vue";
// import useUserStore from "../stores/UserStore";
// import { IAuthStore,IUser } from '../models/IModels';

const menu = reactive({
  icon: mdiAccount,
  title: "Profile",
  main: Boolean,
});

// const is_validate = ref(false)

// const isValidEmail = (email: string) => {
//  const domain = email.split('@')[1]
//  return domain === 'postgradounap.edu.pe'
// }

// const getUser = computed(() => useUserStore().getUser());
// const setUser = useUserStore().setUser();

onMounted(() => {
  // console.log("data:::", getUser.value);
});

const message = ref();

// const rules = reactive({
//   Message: "Required field",
//   target: "text-red-600 text-xs absolute ",
//   required: false,
// });

// const is_validate = () => {
//   const objData = getUser.value;
//   if (objData.username == "") {
//     rules.required = true;
//   } else {
//     return (rules.required = false);
//   }
// };
const updateUser = (valor: any) => {
  // cambiarValor()
  // const objData = valor
  // console.log("mandamos :", objData)
  // useUserStore().putUser(objData)
};
</script>
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <!-- <SectionTitleLineWithButton
        :icon="menu.icon"
        :title="menu.title"
        :main="menu.main"
      /> -->

      <Profile />

      <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <form class="formulario">
            <div class="relative pb-5" id="cuerpo">
              <label class="text-gray-700 font-bold">First Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autocomplete="Name"
                class="input-forms-icons"
                placeholder="First Name"
              />
              <BaseIcon
                class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiAccount"
              />
            </div>

            <div class="flex flex-col md:flex-row justify-between">
              <div class="relative pb-5 md:w-3/5" id="cuerpo">
                <label class="text-gray-700 font-bold">Last Name</label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  autocomplete="last_name"
                  class="input-forms-icons"
                  placeholder="Last Name"
                />
                <BaseIcon
                  class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                  :path="mdiAccount"
                />
              </div>
              
              <div class="relative pb-5" id="cuerpo">
                <label class="text-gray-700 font-bold">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  class="input-forms-icons"
                  placeholder="Username"
                />
                <BaseIcon
                  class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                  :path="mdiAccount"
                />
                <span v-if="rules.required" :class="rules.target">{{
                  rules.Message
                }}</span>
              </div>
            </div>

            <div class="relative pb-5">
              <label for="" class="text-gray-700 font-bold">E-mail</label>
              <input
                name="email"
                type="email"
                autocomplete="email"
                class="input-forms-icons"
                placeholder="default@example.com"
              />
              <BaseIcon
                class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiMail"
              />
            </div>

            <div>
              <button
                type="submit"
                class="positive-button font-bold relative w-full"
              >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BaseIcon :path="mdiLock" />
                </span>
                Save
              </button>
            </div>
          </form>
        </div>

        <div>
          <form>
            <div class="relative pb-5">
              <label class="text-gray-700 font-bold">Current password</label>
              <input
                type="text"
                required
                onselect="alert(123)"
                class="input-forms-icons"
                placeholder="Name"
              />

              <BaseIcon
                class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiAsterisk"
              />
            </div>

            <div class="relative pb-5">
              <label for="" class="text-gray-700 font-bold">New password</label>
              <input
                type="text"
                required
                class="input-forms-icons"
                placeholder=""
              />
              <BaseIcon
                class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiFormTextboxPassword"
              />
            </div>

            <div class="relative pb-5">
              <label for="" class="text-gray-700 font-bold"
                >Confirm password</label
              >
              <input
                type="text"
                required
                class="input-forms-icons"
                placeholder=""
              />
              <BaseIcon
                class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiFormTextboxPassword"
              />
            </div>

            <div>
              <button
                type="submit"
                class="positive-button font-bold relative w-full"
              >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BaseIcon :path="mdiLock" />
                </span>
                Save
              </button>
            </div>
          </form>
        </div>
      </div> -->
    </SectionMain>
  </LayoutAuthenticated>
</template>
