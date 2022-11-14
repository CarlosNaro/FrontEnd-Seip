<script lang="ts" setup>
import { mdiLock } from "@mdi/js";
import BaseIcon from "../components/BaseIcon.vue";

import { reactive } from "vue";
import { useRouter } from "vue-router";

const checkUser = (rule: any, value: any, callback: any) => {
  if (!value) callback(new Error("Please input the age"));
};

const loginForm = reactive({
  user: "carlos",
  pass: "123",
});

const router = useRouter();
const submit = () => {
  if (loginForm.user == "carlos" && loginForm.pass == "123") {
    console.log("entramos");
    router.push("/dashboard");
  } else {
    console.log(" no  entramos ");
  }
};
</script>

<template>
  <div
    class="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div
      class="w-full lg:w-1/4 max-w-md space-y-8 shadow-sm p-4 shadow-slate-200"
    >
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>
      <form class="mt-8 space-y-6">
        <div class="flex flex-col gap-4">
          <div class="relative">
            <label for="" class="text-gray-700">User</label>
            <input
              type="text"
              required
              v-model="loginForm.user"
              autocomplete="user"
              class="input-forms"
              placeholder="User"
            />
          </div>
          <div>
            <label for="" class="text-gray-700">Password</label>
            <input
              v-model="loginForm.pass"
              required
              type="password"
              class="input-forms"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="text-sm text-right">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
            >Forgot your password?</a
          >
        </div>

        <div>
          <button
            type="submit"
            @click.prevent="submit"
            class="positive-button relative w-full"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <BaseIcon :path="mdiLock" />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
