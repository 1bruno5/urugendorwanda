<script>
import flagImage from '../assets/images/flag.jpg'
</script>

<template>
  <div class="font-sans">
    <!-- Hero -->
    <section class="text-white py-32 relative overflow-hidden min-h-[500px]">
      <!-- Background Image -->
      <img :src="flagImage" alt="Rwanda Flag" class="absolute inset-0 w-full h-full object-cover" />
      

      
      <!-- Dark overlay for text readability -->
      <div class="absolute inset-0 bg-black/30"></div>
      
      <!-- Gradient overlay -->
      <div class="absolute inset-0 opacity-10"
        style="background-image: radial-gradient(circle at 20% 50%, #fbbf24 0%, transparent 50%), radial-gradient(circle at 80% 20%, #16a34a 0%, transparent 50%);">
      </div>
      
      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span class="text-yellow-400 font-bold tracking-widest uppercase text-sm">Our Story</span>
        <h1 class="text-6xl font-black mt-3 mb-6">About <span class="text-yellow-400">Rwanda</span></h1>
        <p class="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
          The Land of a Thousand Hills — a nation of extraordinary resilience, stunning beauty, and warm hospitality nestled in the heart of Africa.
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">Who We Are</span>
          <h2 class="text-4xl font-black text-green-900 mt-2 mb-6">Tembera Urwanda</h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            "Tembera Urwanda" means <strong class="text-green-800">"Visit Rwanda"</strong> in Kinyarwanda. We are a tourism platform dedicated to showcasing the very best of Rwanda — its wildlife, culture, landscapes, and people.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            From the misty mountain jungles of Volcanoes National Park to the sun-drenched shores of Lake Kivu, we guide travelers through authentic Rwandan experiences that leave lasting memories.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            We believe in responsible, sustainable tourism that benefits local communities and preserves Rwanda's precious natural heritage for generations to come.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="card in aboutCards" :key="card.title"
            class="bg-green-50 rounded-2xl p-6 text-center hover:bg-green-900 group transition-all duration-300">
            <div class="text-4xl mb-3">{{ card.icon }}</div>
            <h3 class="font-bold text-green-900 group-hover:text-yellow-400 transition-colors">{{ card.title }}</h3>
            <p class="text-sm text-gray-500 group-hover:text-green-200 mt-1 transition-colors">{{ card.sub }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="py-24 bg-green-900 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div class="text-5xl mb-6"></div>
        <h2 class="text-4xl font-black mb-6">Our <span class="text-yellow-400">Mission</span></h2>
        <p class="text-green-200 text-xl leading-relaxed mb-8">
          To promote responsible tourism across Rwanda, connecting travelers with authentic experiences while supporting local communities and protecting the environment that makes Rwanda so extraordinary.
        </p>
        <div class="grid md:grid-cols-3 gap-6 mt-12">
          <div v-for="value in values" :key="value.title" class="bg-green-800 rounded-2xl p-6">
            <div class="text-3xl mb-3">{{ value.icon }}</div>
            <h3 class="font-bold text-yellow-400 mb-2">{{ value.title }}</h3>
            <p class="text-green-300 text-sm">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const aboutCards = [
  { icon: '', title: 'Wildlife', sub: 'Gorillas & Big Five' },
  { icon: '', title: 'Eco-Tourism', sub: 'Sustainable Travel' },
  { icon: '', title: 'Culture', sub: 'Rich Traditions' },
  { icon: '', title: 'Adventure', sub: 'Hiking & Trekking' },
]

const values = [
  { icon: '', title: 'Sustainability', desc: 'We promote eco-friendly travel that protects Rwanda\'s natural resources.' },
  { icon: '', title: 'Community', desc: 'Supporting local guides, artisans, and businesses in every province.' },
  { icon: '', title: 'Authenticity', desc: 'Genuine experiences that connect you with Rwanda\'s true spirit.' },
]
</script>