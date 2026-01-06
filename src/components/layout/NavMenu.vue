<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <ul>
      <li><router-link :to="{ name: 'home' }">Startsida</router-link></li>
      <li><router-link :to="{ name: 'albums' }">Album</router-link></li>
      <li><router-link :to="{ name: 'info' }">Om</router-link></li>
    </ul>
  </nav>
</template>

<style scoped></style>
