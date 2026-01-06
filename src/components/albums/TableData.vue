<script setup lang="ts">
  defineProps({
    artist: String,
    title: String,
    playtime: Number,
    isSingle: Boolean
  });

  // Convert boolean to text
  function singleToText(isSingle: boolean): string {
    if (isSingle) {
      return "Singel";
    } else {
      return "Album";
    }
  }
</script>

<template>
  <tr>
    <td>{{ artist }}</td>
    <td>{{ title }}</td>
    <td>{{ playtime }}</td>
    <td>{{ singleToText(isSingle) }}</td>
  </tr>
</template>

<style scoped></style>
