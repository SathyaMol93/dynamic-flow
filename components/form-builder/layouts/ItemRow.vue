<template>
  <draggable
    class="flex flex-col md:flex-row justify-center items-center w-full h-full border-2 border-dashed rounded-lg p-5 space-y-5 md:space-y-0 md:space-x-5"
    :list="children"
    :group="{ name: 'g1', put: putFunction }"
    @change="onDrop"
  >
    <FormDesignBuilder
      v-for="(child, index) in children"
      :key="index + '_' + new Date() + Math.random()"
      :component="child"
    />
  </draggable>
</template>

<script setup>
import { itemUUID } from "@/composables/uuid-utils.js";
import FormDesignBuilder from "~~/components/dynamic-components/FormDesignBuilder.vue";
const props = defineProps(["children"]);
const emit = defineEmits({
  update: (data) => {
    return true;
  },
});
let component = reactive({});
function putFunction() {
  return props.children.length < 4 ? true : false;
}
function onDrop(event) {
  props.children = itemUUID(props.children, event);
}
</script>

<style lang="scss" scoped></style>
