<template>
  <div
    v-if="route.name !== 'index'"
    class="flex flex-col w-full h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
  >
    <BreadCrumbs :route="route" />
  </div>
</template>

<script setup>
import BreadCrumbs from "../dynamic-components/BreadCrumbs.vue";
const route = useRoute();
</script>

<style scoped></style>
