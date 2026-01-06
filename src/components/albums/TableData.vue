<script setup lang="ts">
  defineProps({
    artist: String,
    title: String,
    playtime: Number,
    isSingle: Boolean,
    id: String
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
    <td><button @click="$emit('removeAlbum', id)">Ta bort</button></td>
  </tr>
</template>

<style scoped></style>
