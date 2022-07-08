<template>
  <ToolTip :text="componentName" :position="'top'">
    <div
      class="w-8 h-8 border-blue-700 text-blue-600 bg-white hover:border-white hover:bg-blue-700 hover:text-white border-2 p-2 rounded-md text-xs flex justify-center items-center"
    >
      <IconSelector class="w-5 h-5" :icon="componentName" />
    </div>
  </ToolTip>
</template>

<script setup>
import ToolTip from "../util-components/tool-tip.vue";
import IconSelector from "../dynamic-components/Icon-Selector.vue";
defineProps(["componentName"]);
</script>

<style lang="scss" scoped></style>
