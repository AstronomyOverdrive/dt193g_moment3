<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="bg-zinc-600">
    <ul class="text-2xl p-2 pl-5 flex flex-row justify-evenly lg:justify-start lg:gap-10">
      <li><router-link :to="{ name: 'home' }" class="text-gray-100">Startsida</router-link></li>
      <li><router-link :to="{ name: 'albums' }" class="text-gray-100">Album</router-link></li>
      <li><router-link :to="{ name: 'info' }" class="text-gray-100">Om</router-link></li>
    </ul>
  </nav>
</template>

<style scoped></style>
