<template>
  <CustomModal :open="open"> hello World </CustomModal>
</template>

<script setup>
const props = defineProps(["question", "open"]);
</script>

<style lang="scss" scoped></style>
