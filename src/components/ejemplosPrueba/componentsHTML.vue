<script setup lang="ts">
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiLock,
} from "@mdi/js";
</script>
<template>
  <div>
    <!-- <form>
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
    <div class="flex flex-col md:flex-row">
      <div class="relative pb-5" id="cuerpo">
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
      <button type="submit" class="positive-button font-bold relative w-full">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <BaseIcon :path="mdiLock" />
        </span>
        Save
      </button>
    </div>
  </form> -->
  </div>

  <div>
    <div class="relative">
      <label for="" class="text-gray-700 font-bold">New password</label>
      <el-form-item>
        <input type="text" required class="input-forms-icons" placeholder="" />
      </el-form-item>
      <BaseIcon
        class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
        :path="mdiFormTextboxPassword"
      />
    </div>

    <div class="relative">
      <label for="" class="text-gray-700 font-bold">New password</label>
      <el-form-item>
        <input type="text" required class="input-forms-icons" placeholder="" />
      </el-form-item>
      <BaseIcon
        class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
        :path="mdiFormTextboxPassword"
      />
    </div>

    <div class="relative pb-5">
      <label for="" class="text-gray-700 font-bold">Confirm password</label>
      <el-form-item>
        <input type="text" required class="input-forms-icons" placeholder="" />
      </el-form-item>

      <BaseIcon
        class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
        :path="mdiFormTextboxPassword"
      />
    </div>

    <div>
      <button type="submit" class="positive-button font-bold w-full">
        Save
      </button>
    </div>
  </div>

  <div>
    <el-form ref="form" label-position="top">
      <el-form-item label="Current password">
        <input type="text" class="input-forms-icons" placeholder="Name" />
        <BaseIcon
          class="absolute z-10 pointer-events-none text-gray-500"
          :path="mdiAsterisk"
        />
      </el-form-item>

      <el-form-item label="New password" prop="new_password">
        <input type="text" class="input-forms-icons" placeholder="Name" />
        <BaseIcon
          class="absolute z-10 pointer-events-none text-gray-500"
          :path="mdiFormTextboxPassword"
        />
      </el-form-item>

      <el-form-item label="Confirm password" prop="confirm_password">
        <input type="text" class="input-forms-icons" placeholder="Name" />
        <BaseIcon
          class="absolute z-10 pointer-events-none text-gray-500"
          :path="mdiFormTextboxPassword"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary">Actualizar</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
