<script lang="ts" setup> 
</script>

<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-50">
      <body class="h-full">
      ```
    -->
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          
        </div>  
        <form class="mt-8 space-y-6"  >
        
          <div class=" flex flex-col gap-4  shadow-sm  ">
            <div>
              
              <input  type="text" required autocomplete="user" class=" block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="User" />
            </div>
            
            <div>
              <input  type="text" required autocomplete="user" class=" block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div class="text-sm text-right">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
            </div>
  
          <div>
            <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  