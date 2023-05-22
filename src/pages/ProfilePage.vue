<script lang="ts" setup>
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiLock,
} from "@mdi/js";
import { reactive, onMounted, computed, ref } from "vue";
import LayoutAuthenticated from "../layouts/LayoutAuthenticated.vue";
import SectionMain from "../components/SectionMain.vue";
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton.vue";
import UserCard from "../components/UserCard.vue";
import BaseIcon from "../components/BaseIcon.vue";
import useUserStore from "../stores/UserStore";
import { getItem } from "../stores/actions/localStorage";
import jwt_decode from "jwt-decode";

// export interface IJwtDecode {
//   token_type: string;
//   exp: number;
//   jti: string;
//   user_id: number;
// }

const menu = reactive({
  icon: mdiAccount,
  title: "Profile",
  main: Boolean,
});

interface IUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
}

const token = getItem("token");

const getuser = computed(() => useUserStore().getUser());
const setuser = useUserStore().setUser();

onMounted(() => {
  console.log("data:::", getuser.value);
});

const ifRequired = ref(true)

const updataUser = (valor:any)=>{
  
  // const objData = valor
  // console.log("mandamos :", objData)
  // useUserStore().putUser(objData)
}

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
      <pre>{{ getuser }}</pre>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- datos basicos   -->
        <div>
          <form class="formulario">
            <!-- <div v-for="(item, index) in dataUser" :key="item">
              <ul>
                e
                <input
                id="name"
                name="name"
                type="text"
                required
                v-model="item.last_name"
                autocomplete="Name"
                class="input-forms-icons"
                placeholder="Name"
              />
              </ul>
            </div> -->

            <div class="relative pb-5" id="cuerpo">
              <label class="text-gray-700 font-bold">First Name</label>
              <input
                id="name"
                name="name"
                v-model="getuser.first_name"
                type="text"
                autocomplete="Name"
                class="input-forms-icons"
                placeholder="username"
              />
              <BaseIcon
                class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                :path="mdiAccount"
              />
            </div>

            <div class=" flex flex-col md:flex-row  justify-between ">
              
              <div class="relative pb-5 md:w-3/5 " id="cuerpo">
                <label class="text-gray-700 font-bold">Last Name</label>
                <input
                  id="lastname"
                  name="lastname"
                  v-model="getuser.last_name"
                  type="text"
                  autocomplete="lastname"
                  class="input-forms-icons"
                  placeholder="Last Name"
                />
                <BaseIcon
                  class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                  :path="mdiAccount"
                />
              </div>
                <!-- :::::::::::::: --> 
              <div class="relative pb-5" id="cuerpo">
                <label class="text-gray-700 font-bold">Username</label>
                <input
                  id="username"
                  name="username"
                  v-model="getuser.username"
                  type="text"
                  autocomplete="username"
                  class="input-forms-icons"
                  placeholder="Username"
                />
                <BaseIcon
                  class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
                  :path="mdiAccount"
                />
              </div>
            </div>

            <div class="relative pb-5">
              <label for="" class="text-gray-700 font-bold">E-mail</label>
              <input
                name="email"
                v-model="getuser.email"
                type="email"
                autocomplete="email"
                class="input-forms-icons"
                placeholder="default@example.com"
                required
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
                @click.prevent="updataUser(getuser)"
              >
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
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>
