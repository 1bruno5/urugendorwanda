<template>
  <div class="font-sans">

    <!-- Hero -->
    <section class="relative h-[500px] flex items-end overflow-hidden">
      <img src="../../assets/images/convention.jpg" alt="Kigali" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-green-900/70"></div>
      <div class="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
        <div class="flex items-center gap-2 text-green-200 text-sm mb-3">
          <a href="/" class="hover:text-yellow-300 transition-colors">Home</a>
          <span>›</span>
          <a href="/destinations" class="hover:text-yellow-300 transition-colors">Destinations</a>
          <span>›</span>
          <span class="text-yellow-400 font-semibold">Kigali City</span>
        </div>
        <h1 class="text-6xl font-black text-white mb-3">Kigali <span class="text-yellow-400">City</span></h1>
        <p class="text-green-200 text-xl max-w-2xl leading-relaxed">
          Africa's cleanest, safest, and most dynamic capital — where modernity meets rich culture on the beautiful hills of Rwanda.
        </p>
        <div class="flex flex-wrap gap-3 mt-6">
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> Genocide Memorial</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> Art & Culture</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> World-Class Dining</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full"> Intore Dance</span>
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
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">About the City</span>
          <h2 class="text-4xl font-black text-green-900 mt-2 mb-6">Africa's Gem Capital</h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            Kigali is consistently ranked Africa's <strong class="text-green-800">cleanest and safest capital city</strong> — a remarkable achievement that reflects Rwanda's extraordinary transformation since 1994.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            Spread across a series of scenic hills, the city blends sleek modern architecture with vibrant markets, world-class restaurants, and a thriving arts scene. The Kigali Convention Centre has made Rwanda a leading destination for international conferences and events.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            A visit to the Kigali Genocide Memorial is both powerful and essential — a profound tribute to Rwanda's history and an inspiring testament to the nation's spirit of reconciliation.
          </p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl h-96">
          <img src="../../assets/images/convention.jpg" alt="Kigali Convention Centre" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </section>

    <!-- Cultural Section -->
    <section class="py-24 bg-green-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-14">
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">Culture & Heritage</span>
          <h2 class="text-4xl font-black text-green-900 mt-2">Kigali's Living Culture</h2>
          <div class="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div class="rounded-3xl overflow-hidden shadow-xl h-80">
            <img src="../../assets/images/intore.jpg" alt="Intore Dance" class="w-full h-full object-cover" />
          </div>
          <div class="space-y-5">
            <div v-for="item in culture" :key="item.title"
              class="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
              <div class="text-3xl">{{ item.icon }}</div>
              <div>
                <h3 class="font-black text-green-900">{{ item.title }}</h3>
                <p class="text-gray-600 text-sm mt-1 leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
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
    <section class="py-24 bg-green-900 text-white text-center">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-6xl mb-6">🏙️</div>
        <h2 class="text-5xl font-black mb-6">Discover <span class="text-yellow-400">Kigali</span></h2>
        <p class="text-green-200 text-xl mb-10">From the memorial to the markets — Kigali is a city that will move, inspire, and energise you.</p>
        <a href="/contact"
          class="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105">
          Plan My Kigali Trip
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>


const culture = [
  { icon: '', title: 'Intore Dance', desc: 'Rwanda\'s iconic traditional warrior dance — performed at cultural centres and national events across Kigali.' },
  { icon: '', title: 'Inema Arts Centre', desc: 'A vibrant hub for Rwandan contemporary art, hosting exhibitions, workshops, and live performances in Kacyiru.' },
  { icon: '', title: 'Kimironko Market', desc: 'Kigali\'s most colorful market — filled with fresh produce, handmade crafts, fabrics, and local street food.' },
  { icon: '', title: 'Food Scene', desc: 'World-class restaurants serving everything from traditional Rwandan cuisine to international fine dining on the hilltops.' },
]

const attractions = [
  {
    icon: '', title: 'Genocide Memorial',
    img: new URL('../../assets/images/kgm.jpg', import.meta.url).href,
    desc: 'The Kigali Genocide Memorial is a powerful and deeply moving tribute to the victims of 1994 — essential for every visitor to Rwanda.'
  },
  {
    icon: '', title: 'Intore Cultural Dance',
    img: new URL('../../assets/images/intore.jpg', import.meta.url).href,
    desc: 'Watch Rwanda\'s magnificent traditional Intore dance — a display of strength, grace, and cultural pride performed in full warrior regalia.'
  },
  {
    icon: '', title: 'Convention Centre',
    img: new URL('../../assets/images/convention.jpg', import.meta.url).href,
    desc: 'The iconic Kigali Convention Centre dome is a symbol of modern Rwanda — hosting major international summits and conferences.'
  },
]
</script>
