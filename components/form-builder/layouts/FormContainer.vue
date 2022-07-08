<template>
  <div class="flex flex-col w-full h-full space-y-5">
    <div
      class="h-auto w-full border-2 border-dashed rounded-lg p-5 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5"
    >
      <div class="flex w-full md:w-1/6 h-full">
        <ComponentPalette />
      </div>
      <draggable
        class="flex flex-col w-full md:w-5/6 h-full border-blue-700 border-2 border-dashed rounded-lg p-5 space-y-5"
        :list="children"
        @change="onDrop"
        :group="{ name: 'g1' }"
      >
        <FormDesignBuilder
          v-for="(child, index) in children"
          :key="index + '_' + new Date() + Math.random()"
          :component="child"
        />
      </draggable>
    </div>
    <div class="flex justify-end items-center h-auto w-full">
      <button
        class="border-2 rounded-md border-blue-700 text-blue-700 hover:border-0 hover:bg-blue-700 hover:text-white h-12 w-32"
        @click="update"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script setup>
import ComponentPalette from "~~/components/form-builder/ComponentPalette.vue";
import { itemUUID } from "@/composables/uuid-utils.js";
import FormDesignBuilder from "~~/components/dynamic-components/FormDesignBuilder.vue";
const emit = defineEmits(["update"]);
const form = reactive({
  id: "abcd-1234",
  name: "User Registration",
  description: "",
  formLayout: "",
  formKeys: [],
});
let children = ref([]);
function update() {
  form.formLayout = JSON.stringify(children.value);
  emit("update", form);
}
function onDrop(event) {
  children.value = itemUUID(children.value, event);
}
</script>
<style scoped></style>
