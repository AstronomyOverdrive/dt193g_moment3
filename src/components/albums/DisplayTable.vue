<script setup lang="ts">
  import TableData from "./TableData.vue";
  import { ref, onMounted } from "vue";

  // Declare empty ref
  let tableData = ref();

  // Make API request
  async function makeRequest(url: string, extra: {method: string, headers?: {contentType: string}, body?: string}): void {
    try {
      const response = await fetch(url, extra);
      if (response.status === 200) {
        const responseData = await response.json();
        // Update ref
        if (extra.method === "GET") {
          tableData.value = responseData.albums;
        } else {
          await makeRequest("http://127.0.0.1:8000/albums", {method: "GET"});
        }
      } else {
        alert("Fel vid databas operation");
      }
    } catch (error) {
      alert("Fel vid databas anslutning");
    }
  }

  // Remove item from db
  async function removeAlbum(id: string) {
    await makeRequest(`http://127.0.0.1:8000/albums/${id}`, {method: "DELETE"});
  }

  // Expose makeRequest function to parent element
  defineExpose({ makeRequest })

  // Make API request on component mount
  onMounted(async () => {
    await makeRequest("http://127.0.0.1:8000/albums", {method: "GET"});
  });
</script>

<template>
  <table class="table-fixed w-full bg-neutral-200 text-left">
    <thead class="bg-sky-200">
      <tr>
        <th class="py-[10px] px-[5px] text-center">Artist</th>
        <th class="py-[10px] px-[5px] text-center">Album</th>
        <th class="py-[10px] px-[5px] text-center">Minuter</th>
        <th class="py-[10px] px-[5px] text-center">Typ</th>
        <th class="py-[10px] px-[5px] text-center">Ta bort</th>
      </tr>
    </thead>
    <tbody>
      <TableData
        v-for="(album, index) in tableData"
        :artist="album.artist"
        :title="album.name"
        :playtime="album.playtime"
        :isSingle="album.single"
        :id="album._id"
        v-on:removeAlbum="removeAlbum"
      />
    </tbody>
  </table>
</template>

<style scoped></style>
