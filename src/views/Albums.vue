<script setup lang="ts">
  import { ref } from "vue";
  import DisplayTable from "../components/albums/DisplayTable.vue";
  import AddForm from "../components/albums/AddForm.vue";

  // Setup ref for child <-> child communication
  const tableRef = ref();
  // Make request via DisplayTable from AddForm
  async function newAlbum(album: string): void {
	await tableRef.value.makeRequest("http://127.0.0.1:8000/albums", {method: "POST", headers: {"Content-Type": "application/json"}, body: album});
  }
</script>

<template>
  <h2>Album</h2>
  <AddForm @newAlbum="newAlbum"/>
  <DisplayTable ref="tableRef"/>
</template>

<style scoped></style>
