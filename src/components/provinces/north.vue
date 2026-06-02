<template>
  <div class="font-sans">

    <!-- Hero -->
    <section class="relative h-[500px] flex items-end overflow-hidden">
      <img src="../../assets/images/volcano.jpg" alt="Volcanoes" class="absolute inset-0 w-full h-full object-cover" />
      
      <div class="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
        <div class="flex items-center gap-2 text-green-200 text-sm mb-3">
          <a href="/" class="hover:text-yellow-300 transition-colors">{{ t('home') }}</a>
          <span>›</span>
          <a href="/destinations" class="hover:text-yellow-300 transition-colors">{{ t('destinations') }}</a>
          <span>›</span>
          <span class="text-yellow-400 font-semibold">{{ t('north_hero_title') }}</span>
        </div>
        <h1 class="text-6xl font-black text-white mb-3">{{ t('north_hero_title') }}</h1>
        <p class="text-green-200 text-xl max-w-2xl leading-relaxed">
          {{ t('north_hero_desc') }}
        </p>
        <div class="flex flex-wrap gap-3 mt-6">
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full">{{ t('north_tag_1') }}</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full">{{ t('north_tag_2') }}</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full">{{ t('north_tag_3') }}</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full">{{ t('north_tag_4') }}</span>
        </div>
      </div>
    </section>



    <!-- About -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">{{ t('province_about_label') }}</span>
          <h2 class="text-4xl font-black text-green-900 mt-2 mb-6">{{ t('north_about_title') }}</h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            {{ t('north_about_desc_1') }}
          </p>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            {{ t('north_about_desc_2') }}
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            {{ t('north_about_desc_3') }}
          </p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl h-96">
          <img src="../../assets/images/gorilla.jpg" alt="Mountain Gorilla" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </section>

    <!-- Gorilla Trekking Highlight -->
    <section class="py-24 bg-green-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-14">
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">{{ t('province_signature_label') }}</span>
          <h2 class="text-4xl font-black text-green-900 mt-2">{{ t('north_feature_title') }}</h2>
          <div class="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div class="rounded-3xl overflow-hidden shadow-xl h-80">
            <img src="../../assets/images/gorilla.jpg" alt="Gorilla" class="w-full h-full object-cover" />
          </div>
          <div class="space-y-5">
            <div v-for="step in trekSteps" :key="step.title"
              class="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
              <div class="text-3xl">{{ step.icon }}</div>
              <div>
                <h3 class="font-black text-green-900">{{ step.title }}</h3>
                <p class="text-gray-600 text-sm mt-1 leading-relaxed">{{ step.desc }}</p>
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
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">{{ t('province_top_attractions_label') }}</span>
          <h2 class="text-4xl font-black text-green-900 mt-2">{{ t('province_what_to_see_title') }}</h2>
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
        <h2 class="text-5xl font-black mb-6">{{ t('north_cta_title') }}</h2>
        <p class="text-green-600 text-xl mb-10">{{ t('north_cta_desc') }}</p>
        <a href="/contact"
          class="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105">
          {{ t('north_cta_button') }}
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
const quickFacts = [
  { value: 'Musanze', labelKey: 'province_label_capital_city' },
  { value: '3,504 km²', labelKey: 'province_label_total_area' },
  { value: '~2M', labelKey: 'province_label_population' },
  { value: '4,507m', labelKey: 'province_label_highest_peak' },
  { value: '~2 hrs', labelKey: 'province_label_from_kigali' },
]

const trekSteps = [
  { icon: '', title: 'Get Your Permit', desc: 'Gorilla permits cost $1,500 per person and must be booked in advance through the Rwanda Development Board.' },
  { icon: '', title: 'Start the Trek', desc: 'Treks begin early morning from the park headquarters. Hikes range from 1–6 hours depending on gorilla family location.' },
  { icon: '', title: 'Meet the Family', desc: 'Spend one magical hour with a gorilla family — watching them feed, play, and interact just metres away.' },
  { icon: '', title: 'Get Your Certificate', desc: 'Every trekker receives an official gorilla trekking certificate to commemorate the experience.' },
]

const attractions = [
  {
    icon: '', title: 'Volcanoes National Park',
    img: new URL('../../assets/images/volcano.jpg', import.meta.url).href,
    desc: 'Home to five of the eight Virunga volcanoes. Trek to mountain gorillas, golden monkeys, or summit Mount Bisoke for crater lake views.'
  },
  {
    icon: '', title: 'Mountain Gorilla Trek',
    img: new URL('../../assets/images/gorilla.jpg', import.meta.url).href,
    desc: 'One of the world\'s greatest wildlife encounters. Only ~1,000 mountain gorillas remain — half of them live here in the Virungas.'
  },
  {
    icon: '', title: 'Twin Lakes Burera & Ruhondo',
    img: new URL('../../assets/images/burera.jpg', import.meta.url).href,
    desc: 'Two stunning crater lakes surrounded by terraced hills. Kayak, boat, or simply enjoy the breathtaking scenery near Musanze.'
  },
]
</script>
