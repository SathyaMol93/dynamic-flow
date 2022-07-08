<template>
  <div
    class="flex flex-col md:flex-row w-full h-full text-white font-semibold justify-start items-start md:justify-between md:items-center"
  >
    <h2 class="text-3xl w-full text-white font-bold pl-5">
      {{ pageName }}
    </h2>
    <div
      class="flex w-full h-full space-x-2 pl-5 justify-start md:pl-0 md:justify-end"
    >
      <div
        class="flex space-x-2 h-full items-center justify-start"
        v-for="(crumb, index) in crumbs"
        :key="index"
      >
        <span v-if="index === 0"><HomeIcon class="h-4 w-4" /></span>
        <span v-if="crumb !== ''">{{ getCamelCaseArray(crumb) }} </span>
        <span>{{
          index < crumbs.length - 1 && crumbs[index + 1] !== "" ? "/" : ""
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/solid";
import { getCamelCaseArray } from "@/composables/string-util";
const props = defineProps(["route"]);
const crumbs = computed(() => {
  const fullPath = props.route.fullPath;
  return fullPath.split("/");
});

const pageName = computed(() => {
  const path = props.route.path;
  const pathArray = path.split("/");
  const name = pathArray[pathArray.length - 1];

  return getCamelCaseArray(name);
});
</script>

<style lang="scss" scoped></style>
