<template>
  <footer class="bg-green-800 text-white px-8 py-10">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-wrap justify-between gap-8">
        <!-- About section -->
        <div>
          <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA URWANDA</h3>
          <p class="text-green-200">{{ t('footer_tagline') }}</p>
        </div>

        <!-- Quick links -->
        <div>
          <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer_quick_links') }}</h3>
          <ul class="space-y-2 text-sm">
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">{{ t('home') }}</RouterLink></li>
            <li><RouterLink to="/about" class="text-green-200 hover:text-yellow-300 transition-colors">{{ t('about') }}</RouterLink></li>
            <li><RouterLink to="/contact" class="text-green-200 hover:text-yellow-300 transition-colors">{{ t('contact') }}</RouterLink></li>
            <li><RouterLink to="/services" class="text-green-200 hover:text-yellow-300 transition-colors">{{ t('services') }}</RouterLink></li>
          </ul>
        </div>

        <!-- Destinations -->
        <div>
          <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer_destinations') }}</h3>
          <ul class="space-y-2 text-sm">
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">{{ t('kigali') }}</RouterLink></li>
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">{{ t('northern') }}</RouterLink></li>
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">{{ t('southern') }}</RouterLink></li>
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">{{ t('western') }}</RouterLink></li>
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">{{ t('eastern') }}</RouterLink></li>
          </ul>
        </div>

        <!-- Contact info -->
        <div>
          <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('contact') }}</h3>
          <ul class="space-y-2 text-sm">
            <li class="text-green-200">KG 7 Ave, Kigali, Rwanda</li>
            <li class="text-green-200">Kagugu-Kigali</li>
            <li class="text-green-200">+250 788 888 888</li>
            <li class="text-green-200">ahantunyaburanga@gmail.com</li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-200">
        <p class="text-center">2026 visit Rwanda. All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { t } from '../i18n'
</script>