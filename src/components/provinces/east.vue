<template>
  <div class="font-sans">

    <!-- Hero -->
    <section class="relative h-[500px] flex items-end overflow-hidden">
      <img src="../../assets/images/akagera.jpg" alt="Akagera National Park" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-green-900/70"></div>
      <div class="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
        <div class="flex items-center gap-2 text-green-200 text-sm mb-3">
          <a href="/" class="hover:text-yellow-300 transition-colors">Home</a>
          <span>›</span>
          <a href="/destinations" class="hover:text-yellow-300 transition-colors">Destinations</a>
          <span>›</span>
          <span class="text-yellow-400 font-semibold">Eastern Province</span>
        </div>
        <h1 class="text-6xl font-black text-white mb-3">Eastern <span class="text-yellow-400">Province</span></h1>
        <p class="text-green-200 text-xl max-w-2xl leading-relaxed">
          Rwanda's safari heartland — home to Akagera National Park, the Big Five, shimmering lakes, and wide open savannahs stretching to the Tanzanian border.
        </p>
        <div class="flex flex-wrap gap-3 mt-6">
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> Big Five Safari</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> Boat Safaris</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> 525+ Bird Species</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> Scenic Lakes</span>
        </div>
      </div>
    </section>

    <!-- Quick Facts -->
    <section class="bg-yellow-400 py-5">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
        <div v-for="fact in quickFacts" :key="fact.label" class="text-green-900">
          <div class="text-xl font-black">{{ fact.value }}</div>
          <div class="text-xs font-semibold tracking-wide uppercase mt-1">{{ fact.label }}</div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">About the Region</span>
          <h2 class="text-4xl font-black text-green-900 mt-2 mb-6">Rwanda's Wild East</h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            The Eastern Province is the largest province in Rwanda, stretching across vast savannahs, papyrus-lined wetlands, and a chain of beautiful lakes along the Tanzanian border.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            It is home to <strong class="text-green-800">Akagera National Park</strong> — Rwanda's only savannah park and the only place in the country where you can encounter all of the Big Five: lion, leopard, elephant, buffalo, and the critically endangered black rhino.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            Beyond wildlife, the province offers serene lakes for kayaking and fishing, vibrant local communities, and a relaxed pace of life.
          </p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl h-96">
          <img src="../../assets/images/lions.jpg" alt="Akagera" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </section>

<!-- Akagera National Park -->
<section class="py-24 bg-green-50">
  <div class="max-w-6xl mx-auto px-6">

    <div class="text-center mb-14">
      <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">
        Must Visit
      </span>

      <h2 class="text-4xl font-black text-green-900 mt-2">
        Akagera National Park
      </h2>

      <div class="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>

      <p class="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
        Covering 1,122 km² of lakes, swamps, savannah, and woodland —
        Akagera is Rwanda's wildlife crown jewel and one of Africa's
        great conservation success stories.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div
        v-for="animal in wildlife"
        :key="animal.name"
        class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
      >

        <!-- Animal Image -->
        <div class="relative h-60 overflow-hidden">

          <img
            :src="animal.img"
            :alt="animal.name"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <!-- Dark Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          ></div>

          <!-- Animal Name on Image -->
          <div class="absolute bottom-4 left-4">
            <h3 class="text-2xl font-black text-white">
              {{ animal.name }}
            </h3>
          </div>

        </div>

        <!-- Card Content -->
        <div class="p-6">

          <div class="flex justify-end mb-3">
            <span
              class="text-xs font-bold px-3 py-1 rounded-full"
              :class="animal.badge"
            >
              {{ animal.status }}
            </span>
          </div>

          <p class="text-gray-600 leading-relaxed">
            {{ animal.desc }}
          </p>

        </div>

      </div>

    </div>

  </div>
</section>

    <!-- Attractions with real images -->
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

    <!-- Activities -->
    <section class="py-24 bg-green-900 text-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-14">
          <span class="text-yellow-400 font-bold tracking-widest uppercase text-sm">Things To Do</span>
          <h2 class="text-4xl font-black mt-2">Activities & Experiences</h2>
          <div class="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="act in activities" :key="act.title"
            class="bg-green-800 hover:bg-green-700 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-default group">
            <div class="text-4xl mb-4">{{ act.icon }}</div>
            <h3 class="font-black text-yellow-400 mb-2 group-hover:text-white transition-colors">{{ act.title }}</h3>
            <p class="text-green-300 text-sm leading-relaxed">{{ act.desc }}</p>
          </div>
        </div>
      </div>
    </section>



    <!-- CTA -->
    <section class="py-24 bg-blue-100 text-white text-center">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-6xl mb-6"></div>
        <h2 class="text-5xl font-black mb-6">Ready to Explore the <span class="text-yellow-400">Eastern Province?</span></h2>
        <p class="text-green-900 text-xl mb-10">Let our local experts plan your perfect safari and lake adventure in Rwanda's wild east.</p>
        <a href="/contact"
          class="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105">
          Plan My Trip
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
const quickFacts = [
  { value: 'Rwamagana', label: 'Capital City' },
  { value: '21,286 km²', label: 'Total Area' },
  { value: '~2.6M', label: 'Population' },
  { value: '1,122 km²', label: 'Akagera Park' },
  { value: '~1.5 hrs', label: 'From Kigali' },
]

const wildlife = [
  {
    name: 'African Lions',
    img: new URL('../../assets/images/lions.jpg', import.meta.url).href,
    desc: 'Reintroduced in 2015. Best spotted at dawn near lake shores on guided game drives.',
    status: 'Resident',
    badge: 'bg-orange-100 text-orange-700'
  },
  {
    name: 'Elephants',
    img: new URL('../../assets/images/elephants.jpg', import.meta.url).href,
    desc: 'Large herds roam near Lake Ihema — a magnificent sight from the game drive tracks at dusk.',
    status: 'Abundant',
    badge: 'bg-green-100 text-green-700'
  },
  {
    name: ' Rhino',
    img: new URL('../../assets/images/rhino.jpg', import.meta.url).href,
    desc: 'Reintroduced in 2017. Rwanda\'s rhino population is steadily growing. A rare and special sighting.',
    status: 'Protected',
    badge: 'bg-red-100 text-red-700'
  },
  {
    name: 'Giraffe',
    img: new URL('../../assets/images/giraffe.jpg', import.meta.url).href,
    desc: 'Towering over acacia woodland — giraffes are among the most photographed animals in the park.',
    status: 'Common',
    badge: 'bg-yellow-100 text-yellow-700'
  },
  {
    name: 'Hippopotamus',
    img: new URL('../../assets/images/hippo.jpg', import.meta.url).href,
    desc: 'Hundreds of hippos pack Lake Ihema shores. The boat safari brings you strikingly close.',
    status: 'Abundant',
    badge: 'bg-teal-100 text-teal-700'
  },
  {
    name: 'Leopard',
    img: new URL('../../assets/images/leopard.jpg', import.meta.url).href,
    desc: 'Elusive and beautiful — leopards hunt in Akagera\'s woodland fringes. A rare and thrilling sight.',
    status: 'Rare',
    badge: 'bg-amber-100 text-amber-700'
  }
]

const attractions = [
  {
    icon: '', title: 'Akagera National Park',
    img: new URL('../../assets/images/image.png', import.meta.url).href,
    desc: 'Rwanda\'s only savannah park. Game drives, boat safaris, and bush camping in 1,122 km² of pristine African wilderness.'
  },

]

const activities = [
  { icon: '', title: 'Game Drives',    desc: 'Morning and evening 4x4 drives through Akagera\'s savannah with expert local guides.' },
  { icon: '', title: 'Boat Safaris',   desc: 'Cruise Lake Ihema surrounded by hippos, crocs, and over 100 waterbird species.' },
  { icon: '', title: 'Bird Watching',  desc: 'Over 525 species including the rare shoebill stork — a bucket-list bird.' },
  { icon: '', title: 'Sport Fishing',  desc: 'Cast for Nile tilapia and freshwater fish at the scenic Lake Muhazi.' },
  { icon: '', title: 'Bush Camping',  desc: 'Sleep under the African stars at Akagera\'s wilderness campsites.' },
  { icon: '', title: 'Bush Walks',     desc: 'Guided walking safaris with armed rangers through woodland and grassland.' },
  { icon: '', title: 'Photography',    desc: 'Golden hour over the savannah creates world-class wildlife photo opportunities.' },
  { icon: '', title: 'Village Visits', desc: 'Explore local Rwandan communities and the Agahozo-Shalom Youth Village.' },
]

const seasons = [
  { icon: '', months: 'Jun – Sep', label: 'Best Season',    note: 'Dry — animals near water, low grass, perfect game drives.', bg: 'bg-green-900', textColor: 'text-yellow-400', subColor: 'text-green-200' },
  { icon: '', months: 'Dec – Feb', label: 'Good Season',    note: 'Short dry period, fewer crowds, lower rates.',              bg: 'bg-white',     textColor: 'text-green-900',  subColor: 'text-gray-600' },
  { icon: '', months: 'Oct – Nov', label: 'Short Rains',    note: 'Landscape turns lush — great for birdwatching.',            bg: 'bg-white',     textColor: 'text-green-900',  subColor: 'text-gray-600' },
  { icon: '', months: 'Mar – May', label: 'Long Rains',     note: 'Rainy season — some tracks muddy but wildlife still visible.', bg: 'bg-white',   textColor: 'text-green-900',  subColor: 'text-gray-600' },
]
</script>
