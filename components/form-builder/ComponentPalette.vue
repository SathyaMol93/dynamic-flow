<template>
  <div class="flex flex-col w-full h-full space-y-10 p-5 rounded-lg shadow-xl">
    <div
      v-for="(category, index) in components"
      :key="index"
      class="w-full h-auto relative border-2 border-blue-700 rounded-lg"
    >
      <draggable
        :list="category.options"
        :group="{ name: 'g1', pull: 'clone', put: false }"
        class="flex flex-row w-full h-full space-x-3 justify-center items-center p-10"
        :sort="false"
      >
        <DragAndDropComponent
          v-for="component in category.options"
          :key="component.componentName"
          :component-name="component.componentName"
        />
      </draggable>
      <label
        for="floating_filled"
        class="absolute -top-5 left-3 text-xs bg-white font-semibold text-blue-700 p-2"
        >{{ category.name }}</label
      >
    </div>
  </div>
</template>

<script setup>
import DragAndDropComponent from "./DragAndDropComponent.vue";
const components = reactive([
  {
    type: "layout",
    name: "Layout Options",
    options: [
      {
        id: Math.floor(Math.random() * 10000) + 1,
        type: "Layout",
        componentName: "Column",
        children: [],
      },
      {
        id: Math.floor(Math.random() * 10000) + 1,
        type: "Layout",
        componentName: "Row",
        children: [],
      },
    ],
  },
  {
    type: "input",
    name: "Input Options",
    options: [
      {
        id: Math.floor(Math.random() * 10000) + 1,
        type: "Question",
        componentName: "Text Input",
        questionType: "text-input",
        question: "Testing text input",
        questionRef: "text-input",
        placeHolder: "Text input",
        tooltip: "Testing",
        supportText: "Testing",
        options: [],
        defaultValue: null,
        isSearchable: false,
      },
      {
        id: Math.floor(Math.random() * 10000) + 1,
        type: "Question",
        componentName: "Text Area",
        questionType: "text-area",
        question: "Testing text area",
        questionRef: "text-area",
        placeHolder: "Text Area",
        tooltip: "Testing",
        supportText: "Testing",
        options: [],
        defaultValue: null,
        isSearchable: false,
      },
      {
        id: Math.floor(Math.random() * 10000) + 1,
        type: "Question",
        componentName: "Single Choice",
        questionType: "single-choice",
        question: "Testing single choice",
        questionRef: "single-choice",
        placeHolder: "Single Choice",
        tooltip: "Testing",
        supportText: "Testing",
        options: [],
        defaultValue: null,
        isSearchable: false,
      },
      {
        id: Math.floor(Math.random() * 10000) + 1,
        type: "Question",
        componentName: "Multiple Choice",
        questionType: "multiple-choice",
        question: "Testing multiple choice",
        questionRef: "multiple-choice",
        placeHolder: "Multiple Choice",
        tooltip: "Testing",
        supportText: "Testing",
        options: [],
        defaultValue: null,
        isSearchable: false,
      },
    ],
  },
]);
</script>

<style lang="scss" scoped></style>
