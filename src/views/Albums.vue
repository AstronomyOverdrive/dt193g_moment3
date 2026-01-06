<script setup lang="ts">
  import { ref } from "vue";
  import DisplayTable from "../components/albums/DisplayTable.vue";
  import AddForm from "../components/albums/AddForm.vue";

  // Setup ref for child <-> child communication
  const tableRef = ref();
  // Make request via DisplayTable from AddForm
  async function updateTable() {
    await tableRef.value.makeRequest("http://127.0.0.1:8000/albums", {method: "GET"});
  }
</script>

<template>
  <h2>Album</h2>
  <DisplayTable ref="tableRef"/>
  <AddForm @updateTable="updateTable"/>
</template>

<style scoped></style>
