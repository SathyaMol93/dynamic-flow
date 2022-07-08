<template>
  <div
    class="flex flex-col justify-center items-center w-full h-full border-2 border-dashed rounded-lg p-5 space-y-5"
  >
    <FormViewBuilder
      v-for="(child, index) in children"
      :key="index + '_' + new Date() + Math.random()"
      :component="child"
    />
  </div>
</template>

<script setup>
import FormViewBuilder from "~~/components/dynamic-components/FormViewBuilder.vue";
const props = defineProps(["children"]);
</script>

<style lang="scss" scoped></style>
