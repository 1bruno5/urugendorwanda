<template>
  <div class="font-sans">
    <!-- Hero -->
    <section class="bg-green-900 text-white py-32 relative overflow-hidden">
      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span class="text-yellow-400 font-bold tracking-widest uppercase text-sm">Gallery</span>
        <h1 class="text-6xl font-black mt-3 mb-6">Photo <span class="text-yellow-400">Gallery</span></h1>
        <p class="text-green-200 text-xl max-w-2xl mx-auto">
          A visual journey through Rwanda's breathtaking landscapes, wildlife, and culture.
        </p>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="bg-white border-b border-gray-100 sticky top-0 z-20 shadow-sm">
      <div class="max-w-6xl mx-auto px-6 flex gap-2 py-4 overflow-x-auto">
        <button v-for="cat in categories" :key="cat"
          @click="activeCategory = cat"
          :class="activeCategory === cat
            ? 'bg-green-900 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-800'"
          class="px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200">
          {{ cat }}
        </button>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <div v-for="photo in filteredPhotos" :key="photo.id"
            class="break-inside-avoid rounded-xl overflow-hidden bg-gradient-to-br cursor-pointer group relative h-64"
            @click="openPhoto(photo)">
            <img :src="photo.imageUrl" :alt="photo.caption" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p class="text-white font-bold text-sm translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {{ photo.caption }}
              </p>
              <p class="text-yellow-300 text-xs translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                {{ photo.location }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div v-if="selectedPhoto"
      class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
      @click.self="selectedPhoto = null">
      <div class="max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
        <img :src="selectedPhoto.imageUrl" :alt="selectedPhoto.caption" class="w-full h-96 object-cover" />
        <div class="p-6 bg-white">
          <h3 class="text-2xl font-black text-green-900">{{ selectedPhoto.caption }}</h3>
          <p class="text-gray-600 mt-1">{{ selectedPhoto.location }}</p>
          <p class="text-green-700 text-sm mt-2">{{ selectedPhoto.category }}</p>
        </div>
      </div>
      <button @click="selectedPhoto = null" class="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400 transition-colors bg-black/50 rounded-full w-10 h-10 flex items-center justify-center">✕</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Import all images
import akagera from '../assets/images/akagera.jpg'
import burera from '../assets/images/burera.jpg'
import canopy from '../assets/images/canopy.jpg'
import convention from '../assets/images/convention.jpg'
import elephants from '../assets/images/elephants.jpg'
import flag from '../assets/images/volcano.jpg'
import giraffe from '../assets/images/giraffe.jpg'
import gorilla from '../assets/images/gorilla.jpg'
import hand from '../assets/images/hand.jpg'
import hippo from '../assets/images/hippo.jpg'
import homeImage from '../assets/images/homeImage.jpg'
import intore from '../assets/images/intore.jpg'
import kgm from '../assets/images/kgm.jpg'
import kingPalace from '../assets/images/kingPalace.jpg'
import lake from '../assets/images/lake.jpg'
import leopard from '../assets/images/leopard.jpg'
import lions from '../assets/images/lions.jpg'
import loop from '../assets/images/loop.jpg'
import marara from '../assets/images/marara.png'
import museum from '../assets/images/museum.jpg'
import rhino from '../assets/images/rhino.jpg'

const activeCategory = ref('All')
const selectedPhoto = ref(null)

const categories = ['All', 'Wildlife', 'Landscapes', 'Culture', 'Cities', 'Lakes']

const photos = [
  { id: 1, imageUrl: gorilla, caption: 'Mountain Gorilla', location: 'Volcanoes National Park', category: 'Wildlife' },
  { id: 2, imageUrl: lake, caption: 'Lake Kivu', location: 'Western Province', category: 'Lakes' },
  { id: 3, imageUrl: lions, caption: 'Lion at Sunset', location: 'Akagera National Park', category: 'Wildlife' },
  { id: 4, imageUrl: kgm, caption: 'Kigali Genocide Memorial', location: 'Kigali', category: 'Cities' },
  { id: 5, imageUrl: burera, caption: 'Lake Burera', location: 'Northern Province', category: 'Lakes' },
  { id: 6, imageUrl: elephants, caption: 'Elephant Family', location: 'Akagera National Park', category: 'Wildlife' },
  { id: 7, imageUrl: canopy, caption: 'Nyungwe Canopy Walk', location: 'Southern Province', category: 'Landscapes' },
  { id: 8, imageUrl: intore, caption: 'Intore Dancers', location: 'Kigali', category: 'Culture' },
  { id: 9, imageUrl: giraffe, caption: 'Giraffe Silhouette', location: 'Akagera National Park', category: 'Wildlife' },
  { id: 10, imageUrl: loop, caption: 'Rolling Hills', location: 'Southern Province', category: 'Landscapes' },
  { id: 11, imageUrl: convention, caption: 'Convention Center', location: 'Kigali', category: 'Cities' },
  { id: 12, imageUrl: hippo, caption: 'Hippopotamus', location: 'Akagera National Park', category: 'Wildlife' },
  { id: 13, imageUrl: leopard, caption: 'Leopard', location: 'Akagera National Park', category: 'Wildlife' },
  { id: 14, imageUrl: rhino, caption: 'White Rhino', location: 'Akagera National Park', category: 'Wildlife' },
  { id: 15, imageUrl: kingPalace, caption: 'King\'s Palace', location: 'Nyanza', category: 'Culture' },
  { id: 16, imageUrl: museum, caption: 'Ethnographic Museum', location: 'Huye', category: 'Culture' },
  { id: 17, imageUrl: hand, caption: 'Traditional Crafts', location: 'Kigali', category: 'Culture' },
  { id: 18, imageUrl: marara, caption: 'Marara', location: 'Kigali', category: 'Cities' },
  { id: 19, imageUrl: akagera, caption: 'Akagera National Park', location: 'Eastern Province', category: 'Landscapes' },
  { id: 20, imageUrl: flag, caption: 'Flag of Rwanda', location: 'Kigali', category: 'Cities' },
]

const filteredPhotos = computed(() =>
  activeCategory.value === 'All'
    ? photos
    : photos.filter(p => p.category === activeCategory.value)
)

function openPhoto(photo) {
  selectedPhoto.value = photo
}
</script>