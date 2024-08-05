<script setup lang="ts">
import headerItem from "~/components/headerItem.vue";
import sideNav from "~/components/sideNav.vue";
</script>

<template>
<div id="app-body">
  <header-item></header-item>
  <side-nav></side-nav>
  <div id="content-main">
    <nuxt-page />
  </div>
    </div>
</template>

<style scoped>
#content-main {
  padding: 1rem;
  margin-top: 5px;
}
</style>