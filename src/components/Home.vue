<template>
  <div class="font-sans">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image Container -->
      <div class="absolute inset-0">
        <img src="../assets/images/homeImage.jpg" alt="Rwanda Landscape" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700 opacity-60"></div>
      </div>

      <!-- Animated particles -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">

      </div>

      <div class="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">

        <h1 class="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tight">
          {{ t('discover') }}<br>
          <span class="text-yellow-400">{{ t('rwanda') }}</span>
        </h1>
        <p class="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          {{ t('hero_sub') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/Services"
            class="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            {{ t('explore_services') }}
          </RouterLink>
          <RouterLink to="/about"
            class="border-2 border-white hover:border-yellow-400 hover:text-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300">
            {{ t('about_rwanda') }}
          </RouterLink>
        </div>
      </div>


    </section>



    <!-- Why Rwanda -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">{{ t('why_visit_label') }}</span>
          <h2 class="text-5xl font-black text-green-900 mt-2">{{ t('rwanda_awaits') }}</h2>
          
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.titleKey"
            class="group p-8 rounded-2xl border-2 border-gray-100 hover:border-green-600 hover:bg-green-900 transition-all duration-500 cursor-default">
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-xl font-bold text-green-900 group-hover:text-yellow-400 mb-3 transition-colors">{{ t(feature.titleKey) }}</h3>
            <p class="text-gray-600 group-hover:text-green-200 leading-relaxed transition-colors">{{ t(feature.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section class="py-24 bg-green-900 text-white text-center opacity-80">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-5xl mb-6"></div>
        <h2 class="text-5xl font-black mb-6">{{ t('cta_title') }}<br><span class="text-yellow-400">{{ t('cta_highlight') }}</span></h2>
        <p class="text-green-200 text-xl mb-10">{{ t('cta_sub') }}</p>
        <RouterLink to="/contact"
          class="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105">
          {{ t('plan_trip') }}
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { t } from '../i18n'

const features = [
  { icon: '', titleKey: 'feature_1_title', descKey: 'feature_1_desc' },
  { icon: '', titleKey: 'feature_2_title', descKey: 'feature_2_desc' },
  { icon: '', titleKey: 'feature_3_title', descKey: 'feature_3_desc' },
  { icon: '', titleKey: 'feature_4_title', descKey: 'feature_4_desc' },
  { icon: '', titleKey: 'feature_5_title', descKey: 'feature_5_desc' },
  { icon: '', titleKey: 'feature_6_title', descKey: 'feature_6_desc' },
]

const destinations = [
  { name: 'Northern Province', tagline: 'Home of the Gorillas', icon: '', gradient: 'from-green-700 to-green-900' },
  { name: 'Kigali City', tagline: 'Vibrant Capital', icon: '', gradient: 'from-yellow-600 to-green-800' },
  { name: 'Eastern Province', tagline: 'Akagera Safari', icon: '', gradient: 'from-orange-600 to-green-900' },
  { name: 'Western Province', tagline: 'Lake Kivu Shores', icon: '', gradient: 'from-blue-600 to-green-900' },
  { name: 'Southern Province', tagline: 'Nyungwe Forest', icon: '', gradient: 'from-green-500 to-teal-900' },
]
</script>