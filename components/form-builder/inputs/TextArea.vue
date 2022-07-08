<template>
  <div class="flex flex-col space-y-3 w-full h-full">
    <label :for="question.questionRef">{{ question.question }}</label>
    <textarea
      class="shadow-md border-2 border-blue-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      :id="question.questionRef"
      :name="question.questionRef"
    ></textarea>
  </div>
</template>

<script setup>
const props = defineProps(["question"]);
</script>

<style scoped></style>
