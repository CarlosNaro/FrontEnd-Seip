<script lang="ts" setup></script>

<template>
  <Login />

  <!-- <div
    class="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div
      class="w-full lg:w-1/4 max-w-md space-y-8 shadow-lg p-4 shadow-slate-400 relative"
    >
      <div
        class="mx-auto h-32 w-32 rounded-full p-3 shadow-2xl shadow-slate-400 absolute z-10 inset-x-0 -top-20"
      >
        <img
          class="mx-auto h-32 w-auto  "
          src="../assets/logoIT.png"
          alt="Iquitos Technology"
        />
      </div>
      <form class="pt-10 space-y-6">
        <div class="flex flex-col gap-4">
          <div class="relative">
            <label for="" class="text-gray-700">User</label>
            <input
              type="text"
              required
              v-model="loginForm.username"
              autocomplete="user"
              class="input-forms"
              placeholder="User"
            />
          </div>
          <div>
            <label for="" class="text-gray-700">Password</label>
            <input
              v-model="loginForm.password"
              required
              type="password"
              class="input-forms"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="text-sm text-right">
          <a @click="emailReset" href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>

        <div>
          <button
            type="submit"
            @click.prevent="submitLogin"
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
  </div> -->
</template>
