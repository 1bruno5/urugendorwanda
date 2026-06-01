<template>
  <section class="min-h-screen bg-stone-950 text-white">

    <!-- Hero Header -->
    <div class="relative overflow-hidden py-24 px-6 text-center">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1623945614527-88bad78da5ef?w=1600')] bg-cover bg-center opacity-20"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-transparent to-stone-950"></div>
      <div class="relative z-10">
        <p class="text-green-400 uppercase tracking-[0.3em] text-sm font-medium mb-3">Discover Rwanda</p>
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-4"
            style="font-family: 'Georgia', serif; letter-spacing: -0.02em;">
          Watch &amp; Explore
        </h1>
        <p class="text-stone-400 text-lg max-w-xl mx-auto">
          Immerse yourself in the Land of a Thousand Hills through breathtaking visuals and stories.
        </p>
      </div>
    </div>

    <!-- Filter Tabs -->
    <div class="flex justify-center gap-2 px-6 pb-10 flex-wrap">
      <button
        v-for="tab in categories"
        :key="tab"
        @click="activeCategory = tab"
        :class="[
          'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border',
          activeCategory === tab
            ? 'bg-green-500 border-green-500 text-white shadow-lg shadow-green-900/40'
            : 'border-stone-700 text-stone-400 hover:border-stone-500 hover:text-white bg-transparent'
        ]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Featured Video -->
    <div v-if="featuredVideo" class="max-w-5xl mx-auto px-6 mb-16">
      <div class="relative group rounded-2xl overflow-hidden border border-stone-800">
        <div class="aspect-video w-full">
          <iframe
            :src="getEmbedUrl(featuredVideo.url)"
            :title="featuredVideo.title"
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="p-5 bg-stone-900/90 backdrop-blur-sm">
          <span class="text-green-400 text-xs uppercase tracking-widest font-medium">Featured</span>
          <h2 class="text-xl font-semibold mt-1 mb-1">{{ featuredVideo.title }}</h2>
          <p class="text-stone-400 text-sm">{{ featuredVideo.description }}</p>
          <div class="flex items-center gap-4 mt-3">
            <span class="text-xs text-stone-500 flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
              {{ featuredVideo.views }}
            </span>
            <span class="text-xs px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300 border border-stone-700">
              {{ featuredVideo.category }}
            </span>
            <span class="text-xs text-stone-500">{{ featuredVideo.duration }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Grid -->
    <div class="max-w-7xl mx-auto px-6 pb-24">
      <div class="flex items-center justify-between mb-8">
        <h3 class="text-lg font-semibold text-stone-200">
          {{ activeCategory === 'All' ? 'All Videos' : activeCategory }}
          <span class="text-stone-500 text-sm font-normal ml-2">({{ filteredVideos.length }})</span>
        </h3>
        <div class="flex items-center gap-2">
          <button
            v-for="view in ['grid', 'list']"
            :key="view"
            @click="viewMode = view"
            :class="['p-1.5 rounded transition-colors', viewMode === view ? 'text-green-400' : 'text-stone-500 hover:text-stone-300']"
          >
            <svg v-if="view === 'grid'" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Grid View -->
      <div v-if="viewMode === 'grid'"
           class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="video in filteredVideos"
          :key="video.id"
          class="group bg-stone-900 rounded-xl overflow-hidden border border-stone-800 hover:border-green-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-950/40"
        >
          <!-- Embed or thumbnail -->
          <div class="aspect-video relative overflow-hidden bg-stone-800">
            <div v-if="video.expanded" class="w-full h-full">
              <iframe
                :src="getEmbedUrl(video.url)"
                :title="video.title"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div v-else
                 @click="expandVideo(video)"
                 class="w-full h-full cursor-pointer relative">
              <img
                :src="video.thumbnail"
                :alt="video.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <!-- Duration badge -->
              <span class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                {{ video.duration }}
              </span>
            </div>
          </div>

          <div class="p-4">
            <div class="flex items-start justify-between gap-2 mb-2">
              <h4 class="text-sm font-semibold text-stone-100 leading-snug line-clamp-2">{{ video.title }}</h4>
              <span class="text-xs px-2 py-0.5 rounded-full bg-green-900/50 text-green-400 border border-green-800/50 whitespace-nowrap shrink-0">
                {{ video.category }}
              </span>
            </div>
            <p class="text-stone-500 text-xs line-clamp-2 mb-3">{{ video.description }}</p>
            <div class="flex items-center justify-between">
              <span class="text-stone-600 text-xs">{{ video.views }} views</span>
              <a :href="video.url" target="_blank" rel="noopener noreferrer"
                 class="text-xs text-green-500 hover:text-green-400 flex items-center gap-1 transition-colors">
                Watch on YouTube
                <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- List View -->
      <div v-else class="flex flex-col gap-4">
        <div
          v-for="video in filteredVideos"
          :key="video.id"
          class="flex gap-4 bg-stone-900 rounded-xl overflow-hidden border border-stone-800 hover:border-green-800 transition-all p-3"
        >
          <div class="w-40 shrink-0 aspect-video relative rounded-lg overflow-hidden bg-stone-800 cursor-pointer"
               @click="expandVideo(video)">
            <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover"/>
            <div class="absolute inset-0 flex items-center justify-center bg-black/30">
              <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
          <div class="flex-1 py-1">
            <div class="flex items-start justify-between gap-2 mb-1">
              <h4 class="text-sm font-semibold text-stone-100">{{ video.title }}</h4>
              <span class="text-xs px-2 py-0.5 rounded-full bg-green-900/50 text-green-400 border border-green-800/50 shrink-0">
                {{ video.category }}
              </span>
            </div>
            <p class="text-stone-500 text-xs mb-3 line-clamp-2">{{ video.description }}</p>
            <div class="flex items-center gap-4">
              <span class="text-stone-600 text-xs">{{ video.duration }}</span>
              <span class="text-stone-600 text-xs">{{ video.views }} views</span>
              <a :href="video.url" target="_blank" rel="noopener noreferrer"
                 class="text-xs text-green-500 hover:text-green-400 flex items-center gap-1">
                Open
                <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="filteredVideos.length === 0" class="text-center py-24 text-stone-500">
        <svg class="w-12 h-12 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24">
          <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
        </svg>
        <p>No videos found for this category.</p>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('All')
const viewMode = ref('grid')

const categories = ['All', 'Wildlife', 'Culture', 'Adventure', 'City Life', 'Nature']

// YouTube embed helper — converts watch URL to embed URL
function getEmbedUrl(url) {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`
  return url
}

function expandVideo(video) {
  video.expanded = !video.expanded
}

const videos = ref([
  {
    id: 1,
    title: 'Rwanda: The Land of a Thousand Hills',
    description: 'A cinematic journey through Rwanda\'s stunning landscapes, from volcanic mountains to lush green valleys and crystal-clear lakes.',
    url: 'https://www.youtube.com/watch?v=hVimVzgtD6w',
    thumbnail: 'https://img.youtube.com/vi/hVimVzgtD6w/maxresdefault.jpg',
    category: 'Nature',
    duration: '8:24',
    views: '1.2M',
    featured: true,
    expanded: false
  },
  {
    id: 2,
    title: 'Mountain Gorilla Trekking in Volcanoes National Park',
    description: 'Get up close with endangered mountain gorillas in their natural habitat — one of the world\'s most extraordinary wildlife encounters.',
    url: 'https://www.youtube.com/watch?v=9S2NRB_TTFU',
    thumbnail: 'https://img.youtube.com/vi/9S2NRB_TTFU/maxresdefault.jpg',
    category: 'Wildlife',
    duration: '12:05',
    views: '890K',
    featured: false,
    expanded: false
  },
  {
    id: 3,
    title: 'Kigali: Africa\'s Cleanest City',
    description: 'Explore the vibrant streets of Kigali, modern cafes, art scenes, and the story of a city reborn from resilience.',
    url: 'https://www.youtube.com/watch?v=WJQpCFW1kHw',
    thumbnail: 'https://img.youtube.com/vi/WJQpCFW1kHw/maxresdefault.jpg',
    category: 'City Life',
    duration: '6:48',
    views: '560K',
    featured: false,
    expanded: false
  },
  {
    id: 4,
    title: 'Rwanda Culture: Intore Dance & Traditions',
    description: 'Witness Rwanda\'s vibrant cultural heritage through its traditional Intore warrior dances and rich storytelling traditions.',
    url: 'https://www.youtube.com/watch?v=FMNAcB5JZQQ',
    thumbnail: 'https://img.youtube.com/vi/FMNAcB5JZQQ/maxresdefault.jpg',
    category: 'Culture',
    duration: '7:12',
    views: '320K',
    featured: false,
    expanded: false
  },
  {
    id: 5,
    title: 'Nyungwe Forest: Chimpanzee Tracking',
    description: 'Trek deep into Nyungwe National Park, home to chimpanzees, colobus monkeys, and over 300 bird species.',
    url: 'https://www.youtube.com/watch?v=bIDnX4juVXY',
    thumbnail: 'https://img.youtube.com/vi/bIDnX4juVXY/maxresdefault.jpg',
    category: 'Wildlife',
    duration: '10:30',
    views: '440K',
    featured: false,
    expanded: false
  },
  {
    id: 6,
    title: 'Canopy Walk in Nyungwe Forest',
    description: 'Walk 70 meters above the forest floor on the longest canopy walkway in Africa — a breathtaking adventure above the treetops.',
    url: 'https://www.youtube.com/watch?v=FH2hkL-IOrI',
    thumbnail: 'https://img.youtube.com/vi/FH2hkL-IOrI/maxresdefault.jpg',
    category: 'Adventure',
    duration: '5:15',
    views: '210K',
    featured: false,
    expanded: false
  },
  {
    id: 7,
    title: 'Lake Kivu: The Hidden Gem of Rwanda',
    description: 'Discover the tranquil shores and islands of Lake Kivu, perfect for kayaking, sailing, and soaking in serene sunsets.',
    url: 'https://www.youtube.com/watch?v=0GEFqb5Ciy0',
    thumbnail: 'https://img.youtube.com/vi/0GEFqb5Ciy0/maxresdefault.jpg',
    category: 'Nature',
    duration: '9:02',
    views: '380K',
    featured: false,
    expanded: false
  },
  {
    id: 8,
    title: 'Akagera National Park Safari',
    description: 'Experience Big Five game drives in Rwanda\'s only savanna park — home to lions, elephants, rhinos, and hippos.',
    url: 'https://www.youtube.com/watch?v=p3Gb4GKIMHM',
    thumbnail: 'https://img.youtube.com/vi/p3Gb4GKIMHM/maxresdefault.jpg',
    category: 'Wildlife',
    duration: '14:20',
    views: '720K',
    featured: false,
    expanded: false
  },
  {
    id: 9,
    title: 'Rwanda Cycling: Tour of Rwanda',
    description: 'Follow elite cyclists conquering Rwanda\'s spectacular mountain roads in one of Africa\'s greatest cycling events.',
    url: 'https://www.youtube.com/watch?v=KNsrSLDk_XQ',
    thumbnail: 'https://img.youtube.com/vi/KNsrSLDk_XQ/maxresdefault.jpg',
    category: 'Adventure',
    duration: '11:45',
    views: '165K',
    featured: false,
    expanded: false
  }
])

const featuredVideo = computed(() => videos.value.find(v => v.featured))

const filteredVideos = computed(() => {
  const nonFeatured = videos.value.filter(v => !v.featured)
  if (activeCategory.value === 'All') return nonFeatured
  return nonFeatured.filter(v => v.category === activeCategory.value)
})
</script>