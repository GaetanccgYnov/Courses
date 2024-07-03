<template>
  <div class="min-h-screen flex flex-col">
    <header class="h-32 text-2xl w-full flex-none -ml-full shadow-lg bg-gradient-to-br from-teal-600 to-cyan-400">
      <div class="p-4 h-32 text-2xl w-full flex-none -ml-full rounded-2xl transform shadow-lg bg-gradient-to-br from-cyan-400 to-teal-600 -rotate-1 sm:-rotate-1">
        Disco Sciences-U (v3) | Stock Total: {{ totalStock }}
      </div>
    </header>

    <div class="flex flex-row">
      <div class="px-8 bg-cyan-100">
        <div class="mt-2 basis-1/4">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white p-6 w-64 h-96">
              <fieldset>
                <legend class="sr-only">Filtres</legend>
                <div class="text-base font-medium text-gray-900" aria-hidden="true">Filtres</div>
                <div class="mt-4 space-y-4">
                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input id="inStockOnly" name="inStockOnly" type="checkbox" v-model="filters.inStockOnly" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="inStockOnly" class="font-medium text-cyan-700">In stock only</label>
                    </div>
                  </div>
                </div>
                <label for="sortBy" class="block text-sm mt-2 font-medium text-cyan-700">Sort by</label>
                <select id="sortBy" name="sortBy" v-model="filters.sortBy" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option value="year">Year</option>
                  <option value="pitchforkPos">Pitchfork</option>
                </select>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <main class="bg-white py-5 ml-6 basis-auto">
        <section class="text-gray-600 body-font">
          <div class="container px-5 mx-auto">
            <CardAlbum v-for="album in sortedAlbums" :key="album.id" :album="album" @update-stock="updateStock" @toggle-favorite="toggleFavorite"/>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {allRecords} from "@/assets/js/allRecords.js";
import CardAlbum from './components/CardAlbum.vue';

const records = ref([]);

onMounted(() => {
  records.value = allRecords;
});

const filters = ref({
  inStockOnly: false,
  sortBy: 'year'
});

const sortedAlbums = computed(() => {
  let filteredAlbums = records.value;
  if (filters.value.inStockOnly) {
    filteredAlbums = filteredAlbums.filter(album => album.stock > 0);
  }
  if (filters.value.sortBy === 'year') {
    filteredAlbums = filteredAlbums.sort((a, b) => b.year - a.year);
  } else if (filters.value.sortBy === 'pitchforkPos') {
    filteredAlbums = filteredAlbums.sort((a, b) => a.pitchforkPos - b.pitchforkPos);
  }
  return filteredAlbums;
});

const totalStock = computed(() => {
  return records.value.reduce((sum, album) => sum + album.stock, 0);
});

const updateStock = (payload) => {
  const album = records.value.find(album => album.id === payload.id);
  if (album) {
    album.stock += payload.increment;
  }
};

const toggleFavorite = (id) => {
  const album = records.value.find(album => album.id === id);
  if (album) {
    album.favorite = !album.favorite;
  }
};
</script>
