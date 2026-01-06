<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import Header from "./components/layout/Header.vue";
  import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <Header/>
  <main class="h-full w-100/100 md:w-80/100 lg:w-70/100 mx-auto">
    <RouterView/>
  </main>
  <Footer/>
</template>

<style scoped></style>
