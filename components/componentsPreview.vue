<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex flex-row">
      <div class="content">
        <h3 class="heading-text text-xl block">Buttons</h3>
        <div class="container px-4 my-2 justify-around">
          <MazBtn>primary</MazBtn>
          <MazBtn color="secondary">secondary</MazBtn>
          <MazBtn color="info">info</MazBtn>
          <MazBtn color="success">success</MazBtn>
          <MazBtn color="warning">warning</MazBtn>
          <MazBtn color="danger">danger</MazBtn>
          <MazBtn color="white">white</MazBtn>
          <MazBtn color="black">black</MazBtn>
          <MazBtn color="transparent">transparent</MazBtn>
        </div>
        <div class="container px-4 my-2 justify-around">
          <MazBtn outline>primary</MazBtn>
          <MazBtn color="secondary" outline>secondary</MazBtn>
          <MazBtn color="info" outline>info</MazBtn>
          <MazBtn color="success" outline>success</MazBtn>
          <MazBtn color="warning" outline>warning</MazBtn>
          <MazBtn color="danger" outline>danger</MazBtn>
          <MazBtn color="white" outline>white</MazBtn>
          <MazBtn color="black" outline>black</MazBtn>
          <MazBtn color="transparent" outline>transparent</MazBtn>
        </div>
      </div>
    </div>
    <div class="flex flex-row"></div>
    <div class="flex flex-row"></div>
    <div class="flex flex-row"></div>
    <div class="flex flex-row"></div>
  </div>
</template>

<style scoped lang="less">
.justify-around > * {
  margin-inline: 1rem;
}
</style>