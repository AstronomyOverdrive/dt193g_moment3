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
  <tr class="row border-y-1 border-gray-400 hover:bg-gray-300">
    <td class="col py-[10px] px-[5px] text-center">{{ artist }}</td>
    <td class="col py-[10px] px-[5px] text-center">{{ title }}</td>
    <td class="col py-[10px] px-[5px] text-center">{{ playtime }}</td>
    <td class="col py-[10px] px-[5px] text-center">{{ singleToText(isSingle) }}</td>
    <td class="col py-[10px] px-[5px] text-center"><button @click="$emit('removeAlbum', id)" class="text-red-600 cursor-pointer underline">Ta bort</button></td>
  </tr>
</template>

<style scoped></style>
