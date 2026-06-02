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
        <span class="text-yellow-400 font-bold tracking-widest uppercase text-sm">{{ t('about_hero_label') }}</span>
        <h1 class="text-6xl font-black mt-3 mb-6">{{ t('about_hero_title') }}</h1>
        <p class="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
          {{ t('about_hero_desc') }}
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">{{ t('about_who_we_are_label') }}</span>
          <h2 class="text-4xl font-black text-green-900 mt-2 mb-6">{{ t('about_brand_title') }}</h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">{{ t('about_para_1') }}</p>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">{{ t('about_para_2') }}</p>
          <p class="text-gray-600 text-lg leading-relaxed">{{ t('about_para_3') }}</p>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="card in aboutCards" :key="card.titleKey"
            class="bg-green-50 rounded-2xl p-6 text-center hover:bg-green-900 group transition-all duration-300">
            <div class="text-4xl mb-3">{{ card.icon }}</div>
            <h3 class="font-bold text-green-900 group-hover:text-yellow-400 transition-colors">{{ t(card.titleKey) }}</h3>
            <p class="text-sm text-gray-500 group-hover:text-green-200 mt-1 transition-colors">{{ t(card.subKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission -->
    <section class="py-24 bg-green-900 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-black mb-6">{{ t('mission_title') }}</h2>
        <p class="text-green-200 text-xl leading-relaxed mb-8">{{ t('mission_desc') }}</p>
        <div class="grid md:grid-cols-3 gap-6 mt-12">
          <div v-for="value in values" :key="value.titleKey" class="bg-green-800 rounded-2xl p-6">
            <div class="text-3xl mb-3">{{ value.icon }}</div>
            <h3 class="font-bold text-yellow-400 mb-2">{{ t(value.titleKey) }}</h3>
            <p class="text-green-300 text-sm">{{ t(value.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const aboutCards = [
  { icon: '', titleKey: 'about_card_wildlife', subKey: 'about_card_wildlife_sub' },
  { icon: '', titleKey: 'about_card_eco', subKey: 'about_card_eco_sub' },
  { icon: '', titleKey: 'about_card_culture', subKey: 'about_card_culture_sub' },
  { icon: '', titleKey: 'about_card_adventure', subKey: 'about_card_adventure_sub' },
]

const values = [
  { icon: '', titleKey: 'about_value_sustainability', descKey: 'about_value_sustainability_desc' },
  { icon: '', titleKey: 'about_value_community', descKey: 'about_value_community_desc' },
  { icon: '', titleKey: 'about_value_authenticity', descKey: 'about_value_authenticity_desc' },
]
</script>