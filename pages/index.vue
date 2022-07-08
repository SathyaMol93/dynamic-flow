<template>
  <div class="flex felx-col w-full h-full space-y-5">
    <div
      class="flex flex-col-reverse md:flex-row justify-between items-center space-y-5 md:space-y-0 md:space-x-5 w-full h-auto md:h-72 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-5"
    >
      <div class="flex flex-col h-full w-full justify-center items-start">
        <span class="text-white text-xl font-semibold">Welcome to</span>
        <h1 class="text-white text-5xl font-bold">Dynamic Form Generator</h1>
        <NuxtLink
          :to="'/Forms/DesignForm'"
          class="border-white border-2 rounded-2xl text-white font-semibold px-2 mt-5 hover:bg-white hover:text-blue-700"
        >
          Create Form
        </NuxtLink>
      </div>
      <div class="flex h-full w-full">
        <img src="./../assets/images/1.svg" alt="banner image" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
