<template>
  <div
    class="flex flex-row-reverse md:flex-row justify-between w-full h-16 bg-white shadow-md items-center px-5"
  >
    <button @click="$emit('menuClose')">
      <MenuIcon class="text-gray-800 h-8 w-8" />
    </button>
  </div>
</template>

<script setup>
import { MenuIcon } from "@heroicons/vue/solid";
</script>

<style scoped></style>
