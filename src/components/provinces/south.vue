<template>
  <div class="font-sans">

    <!-- Hero -->
    <section class="relative h-[500px] flex items-end overflow-hidden">
      <img src="../../assets/images/canopy.jpg" alt="Nyungwe Forest" class="absolute inset-0 w-full h-full object-cover" />
      
      <div class="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
        <div class="flex items-center gap-2 text-green-200 text-sm mb-3">
          <a href="/" class="hover:text-yellow-300 transition-colors">Home</a>
          <span>›</span>
          <a href="/destinations" class="hover:text-yellow-300 transition-colors">Destinations</a>
          <span>›</span>
          <span class="text-yellow-400 font-semibold">Southern Province</span>
        </div>
        <h1 class="text-6xl font-black text-white mb-3">Southern <span class="text-yellow-400">Province</span></h1>
        <p class="text-green-200 text-xl max-w-2xl leading-relaxed">
          Ancient rainforests, chimpanzees, tea-covered hills, and the iconic canopy walkway — Rwanda's green southern heart.
        </p>
        <div class="flex flex-wrap gap-3 mt-6">
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> Nyungwe Forest</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> Chimpanzee Tracking</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> Canopy Walkway</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> Tea Plantations</span>
        </div>
      </div>
    </section>



    <!-- About -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">About the Region</span>
          <h2 class="text-4xl font-black text-green-900 mt-2 mb-6">Africa's Ancient Rainforest</h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            The Southern Province is anchored by <strong class="text-green-800">Nyungwe Forest National Park</strong> — one of Africa's oldest and most biodiverse montane rainforests, covering over 1,000 km² of ancient trees, misty valleys, and cascading waterfalls.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            Track chimpanzees and 13 other primate species, walk the thrilling suspension canopy walkway 50 metres above the forest floor, or hike to the source of the Nile near Nyungwe's watershed.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            The province is also home to Rwanda's tea country — rolling hills blanketed with emerald tea estates around Huye, Nyamagabe, and Nyaruguru districts.
          </p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl h-96">
          <img src="../../assets/images/canopy.jpg" alt="Canopy Walkway" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </section>

    <!-- Canopy Walkway Feature -->
    <section class="py-24 bg-green-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-14">
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">Signature Experience</span>
          <h2 class="text-4xl font-black text-green-900 mt-2">The Canopy Walkway</h2>
          <div class="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
          <p class="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Walk 160 metres across a suspension bridge suspended 50 metres above the forest floor — one of the most thrilling experiences in all of Africa.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="feat in features" :key="feat.title"
            class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
            <div class="text-5xl mb-4">{{ feat.icon }}</div>
            <h3 class="font-black text-green-900 group-hover:text-green-600 transition-colors mb-2">{{ feat.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Attractions -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-14">
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">Top Attractions</span>
          <h2 class="text-4xl font-black text-green-900 mt-2">What to See & Do</h2>
          <div class="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="attr in attractions" :key="attr.title"
            class="group rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-green-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="h-48 overflow-hidden">
              <img :src="attr.img" :alt="attr.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-black text-green-900 mb-2 group-hover:text-green-600 transition-colors">{{ attr.icon }} {{ attr.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ attr.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-blue-100 text-white text-center">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-6xl mb-6"></div>
        <h2 class="text-5xl font-black mb-6">Explore the <span class="text-yellow-400">Ancient Forest</span></h2>
        <p class="text-green-600 text-xl mb-10">From chimpanzee tracking to the canopy walkway — Nyungwe offers experiences unlike anywhere else on earth.</p>
        <a href="/contact"
          class="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105">
          Plan My Visit
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
const quickFacts = [
  { value: 'Huye', label: 'Capital City' },
  { value: '5,876 km²', label: 'Total Area' },
  { value: '~2.6M', label: 'Population' },
  { value: '1,020 km²', label: 'Nyungwe Park' },
  { value: '~2.5 hrs', label: 'From Kigali' },
]

const features = [
  { icon: '', title: '160m Long Bridge',    desc: 'A 160-metre suspension walkway linking two ridges high above the ancient forest canopy.' },
  { icon: '', title: 'Incredible Birdlife', desc: 'Over 300 bird species visible from the walkway, including 29 Albertine Rift endemics.' },
  { icon: '', title: 'Colobus Monkeys',     desc: 'Troops of black-and-white colobus monkeys are frequently spotted leaping through the canopy below.' },
]

const attractions = [
  {
    icon: '', title: 'Nyungwe Forest',
    img: new URL('../../assets/images/canopy.jpg', import.meta.url).href,
    desc: 'One of Africa\'s oldest rainforests. Track chimpanzees, walk the canopy, and hike through misty ancient woodland trails.'
  },
  {
    icon: '', title: 'King Palace',
    img: new URL('../../assets/images/kingPalace.jpg', import.meta.url).href,
    desc: 'Follow expert trackers deep into the forest to observe habituated chimpanzee families in their natural habitat.'
  },
  {
    icon: '', title: 'Huye Museum',
    img: new URL('../../assets/images/museum.jpg', import.meta.url).href,
    desc: 'Visit the sprawling tea estates of Gisakura and Mata — tour the factory and pick your own tea on the terraced hillsides.'
  },
]
</script>
