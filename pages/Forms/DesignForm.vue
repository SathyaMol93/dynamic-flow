<template>
  <div class="flex flex-col w-full h-full py-5">
    <FormContainer @update="update" />
  </div>
</template>

<script setup>
function update(event) {
  console.log("flow -> update :", form.children);
}
</script>
<style scoped></style>
