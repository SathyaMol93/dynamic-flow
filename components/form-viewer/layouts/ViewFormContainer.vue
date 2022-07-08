<template>
  <div class="h-full w-full border-2 border-dashed rounded-lg p-5 flex">
    <div class="flex w-1/6 h-full">
      <ComponentPalette />
    </div>
    <div
      class="flex flex-col w-5/6 h-full border-blue-700 border-2 border-dashed rounded-lg p-5 space-y-5"
    >
      <FormViewBuilder
        v-for="(child, index) in form.children"
        :key="index + '_' + new Date() + Math.random()"
        :component="child"
      />
    </div>
  </div>
</template>

<script setup>
import ComponentPalette from "~~/components/form-builder/ComponentPalette.vue";
import FormViewBuilder from "~~/components/dynamic-components/FormViewBuilder.vue";
const props = defineProps(["form"]);
</script>
<style scoped></style>
