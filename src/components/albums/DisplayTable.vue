<script setup lang="ts">
  import TableData from "./TableData.vue";
  import { ref, onMounted } from "vue";

  // Declare empty ref
  let tableData = ref();

  // Make API request
  async function makeRequest(url: string) {
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const responseData = await response.json();
        // Update ref
        tableData.value = responseData.albums;
      } else {
        alert("Fel vid databas inläsning");
      }
    } catch (error) {
      alert("Fel vid databas inläsning");
    }
  }

  // Make API request on component mount
  onMounted(async () => {
    await makeRequest("http://127.0.0.1:8000/albums");
  });
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Artist</th>
        <th>Album</th>
        <th>Minuter</th>
        <th>Typ</th>
      </tr>
    </thead>
    <tbody>
      <TableData
        v-for="(album, index) in tableData"
        :artist="album.artist"
        :title="album.name"
        :playtime="album.playtime"
        :isSingle="album.single"
      />
    </tbody>
  </table>
</template>

<style scoped></style>
