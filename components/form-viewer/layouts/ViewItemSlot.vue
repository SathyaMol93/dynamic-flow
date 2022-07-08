<template>
  <draggable
    class="flex justify-center items-center w-full h-full border-2 border-dashed rounded-lg p-5"
    :list="children"
    :group="{ name: 'g1' }"
    @change="onDrop"
  >
    <FormViewBuilder
      v-for="(child, index) in children"
      :key="index + '_' + new Date() + Math.random()"
      :component="child"
    />
  </draggable>
</template>

<script setup>
import FormViewBuilder from "~~/components/dynamic-components/FormViewBuilder.vue";
const props = defineProps(["children"]);
</script>

<style lang="scss" scoped></style>
