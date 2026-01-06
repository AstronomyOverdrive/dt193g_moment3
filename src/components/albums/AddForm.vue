<script setup lang="ts">
  import { ref } from "vue";
  const emit = defineEmits(["newAlbum"]);

  let errorMsg = ref("");
  let artist: string = "";
  let name: string = "";
  let playtime: number = 0;
  // <select> returns strings
  let single: string = "";

  function createAlbum(): void {
    // Prepare object
    let album = {
      artist: artist,
      name: name,
      playtime: playtime,
      single: false
    }
    let errors: string = "";
    // Validate fields
    if (artist.replaceAll(" ", "").length < 1 || artist.length > 51) {
      errors += "\nArtist kan max vara 1-50 tecken.";
    }
    if (name.replaceAll(" ", "").length < 1 || name.length > 51) {
      errors += "\nAlbum kan max vara 1-50 tecken.";
    }
    if (playtime < 1) {
      errors += "\nSpeltid måste vara minst 1 minut.";
    }
    // Try to convert single into bool
    if (single === "false") {
      album.single = false;
    } else if (single === "true") {
      album.single = true;
    } else {
      errors += "\nOgiltig albums-typ."
    }
    // Make request
    if (errors === "") {
      const json = JSON.stringify(album);
      emit("newAlbum", json);
      // Reset input fields
      artist = "";
      name = "";
      playtime = 0;
      single = "false";
    }
    errorMsg.value = errors;
  }
</script>

<template>
  <form class="w-90/100 md:w-75/100 lg:w-50/100 p-3 mb-8 mt-2 mx-auto border rounded-lg bg-gray-50">
    <fieldset>
      <legend class="text-2xl mb-3">Nytt album</legend>
      <label for="artist">Artist: </label>
      <input type="text" id="artist" name="artist" v-model="artist" class="w-100/100 mb-3 border rounded-md p-1 border-gray-500 bg-gray-0">
      <br>
      <label for="album">Album: </label>
      <input type="text" id="album" name="album" v-model="name" class="w-100/100 mb-3 border rounded-md p-1 border-gray-500 bg-gray-0">
      <br>
      <label for="playtime">Speltid(minuter): </label>
      <input type="number" id="playtime" name="playtime" v-model="playtime" class="w-100/100 mb-3 border rounded-md p-1 border-gray-500 bg-gray-0">
      <br>
      <label for="type">Typ: </label>
      <select name="type" id="type" v-model="single" class="w-100/100 mb-3 border rounded-md p-1 border-gray-500 bg-gray-0">
        <option value="false">Album</option>
        <option value="true">Singel</option>
      </select>
      <br>
      <button type="button" @click="createAlbum" class="bg-blue-500 text-gray-100 py-2 px-3 rounded-md">Lägg till</button>
      <div class="text-red-700">{{ errorMsg }}</div>
    </fieldset>
  </form>
</template>

<style scoped></style>
