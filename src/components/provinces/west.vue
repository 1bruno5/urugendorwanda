<template>
  <div class="font-sans">

  
    <section class="relative h-[500px] flex items-end overflow-hidden">
      <img src="../../assets/images/lake.jpg" alt="Lake Kivu" class="absolute inset-0 w-full h-full object-cover" />

      <div class="relative z-10 max-w-6xl mx-auto px-6 pb-14 w-full">
        <div class="flex items-center gap-2 text-green-200 text-sm mb-3">
          <a href="/" class="hover:text-yellow-300 transition-colors">{{ t('home') }}</a>
          <span>›</span>
          <a href="/destinations" class="hover:text-yellow-300 transition-colors">{{ t('destinations') }}</a>
          <span>›</span>
          <span class="text-yellow-400 font-semibold">{{ t('west_hero_title') }}</span>
        </div>
        <h1 class="text-6xl font-black text-white mb-3">{{ t('west_hero_title') }}</h1>
        <p class="text-green-200 text-xl max-w-2xl leading-relaxed">
          {{ t('west_hero_desc') }}
        </p>
        <div class="flex flex-wrap gap-3 mt-6">
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full">{{ t('west_tag_1') }}</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full">{{ t('west_tag_2') }}</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full">{{ t('west_tag_3') }}</span>
          <span class="bg-green-800/80 text-green-200 text-sm font-semibold px-4 py-2 rounded-full">{{ t('west_tag_4') }}</span>
        </div>
      </div>
    </section>



    <!-- About -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">{{ t('province_about_label') }}</span>
          <h2 class="text-4xl font-black text-green-900 mt-2 mb-6">{{ t('west_about_title') }}</h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            {{ t('west_about_desc_1') }}
          </p>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            {{ t('west_about_desc_2') }}
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            {{ t('west_about_desc_3') }}
          </p>
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl h-96">
          <img src="../../assets/images/lake.jpg" alt="Lake Kivu" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </section>

    <!-- Lake Kivu Feature -->
    <section class="py-24 bg-blue-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-14">
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">Signature Experience</span>
          <h2 class="text-4xl font-black text-green-900 mt-2">Life on Lake Kivu</h2>
          <div class="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="act in lakeActivities" :key="act.title"
            class="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
            <div class="text-5xl mb-4">{{ act.icon }}</div>
            <h3 class="font-black text-green-900 group-hover:text-blue-600 transition-colors mb-2">{{ act.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ act.desc }}</p>
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
            class="group rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="h-48 overflow-hidden">
              <img :src="attr.img" :alt="attr.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-black text-green-900 mb-2 group-hover:text-blue-600 transition-colors">{{ attr.icon }} {{ attr.title }}</h3>
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
        <h2 class="text-5xl font-black mb-6">{{ t('west_cta_title') }}</h2>
        <p class="text-green-600 text-xl mb-10">{{ t('west_cta_desc') }}</p>
        <a href="/contact"
          class="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105">
          {{ t('west_cta_button') }}
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
const quickFacts = [
  { value: 'Rubavu', label: 'Capital City' },
  { value: '5,337 km²', label: 'Total Area' },
  { value: '~3M', label: 'Population' },
  { value: '90 km', label: 'Lake Kivu Length' },
  { value: '~2.5 hrs', label: 'From Kigali' },
]

const lakeActivities = [
  { icon: '', title: 'Boat Cruises',    desc: 'Cruise the calm waters of Lake Kivu to lush islands, fishing villages, and hidden beaches.' },
  { icon: '', title: 'Beach Relaxation', desc: 'Rubavu\'s shores offer clean sandy beaches perfect for swimming, sunbathing, and lakeside dining.' },
  { icon: '', title: 'Kayaking',         desc: 'Paddle around the lake\'s peaceful bays and rocky outcrops at your own pace.' },
  { icon: '', title: 'Fresh Fish',       desc: 'Taste freshly caught sambaza (lake sardines) — a Rwandan delicacy best enjoyed at a lakeside restaurant.' },
  { icon: '', title: 'Island Visits',   desc: 'Explore Napoleon Island, home to thousands of fruit bats, and the serene Nkombo Island.' },
  { icon: '', title: 'Sunset Views',     desc: 'Watch the sun drop behind the Congolese mountains — some of the most spectacular sunsets in Africa.' },
]

const attractions = [
  {
    icon: '', title: 'Lake Kivu Shores',
    img: new URL('../../assets/images/lake.jpg', import.meta.url).href,
    desc: 'Rwanda\'s most beloved holiday destination. The lake\'s calm waters, islands, and resort towns make it a perfect leisure escape.'
  },
  {
    icon: '', title: 'Nyungwe National Park',
    img: new URL('../../assets/images/loop.jpg', import.meta.url).href,
    desc: 'Rwanda\'s newest national park — a recovering montane forest on the Albertine Rift, home to chimpanzees and golden monkeys.'
  },
  {
    icon: '', title: 'CHATEAU LE MARARA Hotel',
    img: new URL('../../assets/images/marara.png', import.meta.url).href,
    desc: 'Visit the Royal Palace Museum at Nyanza — a beautifully reconstructed traditional royal court with the famous long-horned Inyambo cattle.'
  },
]
</script>
