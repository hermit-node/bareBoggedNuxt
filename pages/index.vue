<script setup lang="ts">
const text = ref('Congratulations!')
const elementRef = ref(null)
const data = reactive({secretNumber: 22})

</script>

<template lang="pug">
.page-wrap(style='position: relative; left: 12%; max-width: 85vw;')
  .title(class="flex justify-center border-rounded-lg border-3")
    .main-title
    .sub-heading
      h2 {{text}}
  .content-body
    .mallable#elementRef
    .components
    .icons
</template>

<style scoped>

</style>