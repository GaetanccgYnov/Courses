<template>
  <div @click="toggleFavorite" :class="{ 'border-rose-600': album.favorite }" class="p-5 bg-white flex items-center mx-auto border-b shadow-md mb-10 border-gray-400 rounded-lg sm:flex-row flex-col cursor-pointer">
    <div class="sm:w-44 sm:h-44 lg:w-40 lg:h-40 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
      <img :src="album.coverUrl || defaultCover" alt="album cover">
    </div>
    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
      <h1 class="text-black text-2xl title-font font-bold mb-2">{{ album.title }}</h1>
      <h3 class="text-black text-xl title-font mb-2">{{ album.artist }} <span class="font-light mr-2">{{ album.year }}</span></h3>
      <p class="leading-relaxed text-base">{{ album.comment }}</p>
      <div class="py-4">
        <div v-if="album.stock > 0" class="inline-block mr-2">
          <div class="flex pr-2 h-full items-center">
            <svg class="text-green-500 w-6 h-6 mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12l2 2l4 -4" />
            </svg>
            <p class="title-font font-medium">{{ album.stock }} in stock</p>
          </div>
        </div>
        <div v-else class="inline-block mr-2">
          <div class="flex pr-2 h-full items-center">
            <svg class="text-gray-500 w-6 h-6 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <p class="title-font font-medium">out of stock</p>
          </div>
        </div>
      </div>
      <div class="md:flex font-bold text-gray-800">
        <div class="w-full md:w-1/2 flex space-x-3">
          <div class="w-1/2">
            <p>pitchfork pos : #{{ album.pitchforkPos }}</p>
          </div>
        </div>
        <div class="w-full">
          <div class="float-right">
            <button @click.stop="increaseStock" type="button" class="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 ease select-none hover:bg-teal-400"> + </button>
            <button @click.stop="decreaseStock" type="button" class="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 ease select-none hover:bg-purple-800"> - </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import defaultCover from '@/assets/img/default.jpg';

const props = defineProps({
  album: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update-stock', 'toggle-favorite']);

const increaseStock = () => {
  emit('update-stock', {id: props.album.id, increment: 1});
};

const decreaseStock = () => {
  emit('update-stock', {id: props.album.id, increment: -1});
};

const toggleFavorite = () => {
  emit('toggle-favorite', props.album.id);
};
</script>

<style scoped>
.cursor-pointer:hover {
  border-color: #fb7185;
}
</style>
