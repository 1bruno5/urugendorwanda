<template>
  <nav class="bg-green-900 text-white sticky top-0 z-50 shadow-lg">
    <div class="w-full px-0 flex items-center justify-between h-16">

      <!-- Logo — flush to left edge -->
      <RouterLink to="/" class="flex items-center pl-0">
        <img src="../assets/images/logo.ico" alt="Logo" class="h-10 w-auto" />
      </RouterLink>

      <!-- Right side: nav links + language — flush to right edge -->
      <div class="hidden md:flex items-center gap-6 pr-0">

        <RouterLink to="/"
          class="font-semibold hover:text-yellow-400 transition-colors duration-200"
          :class="$route.path === '/' ? 'text-yellow-400' : 'text-white'">
          {{ t('home') }}
        </RouterLink>

        <RouterLink to="/about"
          class="font-semibold hover:text-yellow-400 transition-colors duration-200"
          :class="$route.path === '/about' ? 'text-yellow-400' : 'text-white'">
          {{ t('about') }}
        </RouterLink>

        <RouterLink to="/services"
          class="font-semibold hover:text-yellow-400 transition-colors duration-200"
          :class="$route.path === '/services' ? 'text-yellow-400' : 'text-white'">
          {{ t('services') }}
        </RouterLink>

        <!-- Gallery Dropdown -->
        <div class="relative" @mouseenter="galleryOpen = true" @mouseleave="galleryOpen = false">
          <button class="flex items-center gap-1 font-semibold hover:text-yellow-400 transition-colors duration-200"
            :class="$route.path.startsWith('/gallery') ? 'text-yellow-400' : 'text-white'">
            {{ t('gallery') }}
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-show="galleryOpen"
            class="absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-xl py-1 border border-gray-100">
            <RouterLink to="/gallery/photos"
              class="block px-4 py-2.5 text-green-900 font-medium hover:bg-green-50 transition-colors"
              @click="galleryOpen = false">{{ t('photos') }}</RouterLink>
            <RouterLink to="/gallery/videos"
              class="block px-4 py-2.5 text-green-900 font-medium hover:bg-green-50 transition-colors"
              @click="galleryOpen = false">{{ t('videos') }}</RouterLink>
          </div>
        </div>

        <!-- Destinations Dropdown -->
        <div class="relative" @mouseenter="destOpen = true" @mouseleave="destOpen = false">
          <button class="flex items-center gap-1 font-semibold hover:text-yellow-400 transition-colors duration-200"
            :class="$route.path.startsWith('/destinations') ? 'text-yellow-400' : 'text-white'">
            {{ t('destinations') }}
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-show="destOpen"
            class="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-xl py-1 border border-gray-100">
            <RouterLink v-for="dest in destinations" :key="dest.key" :to="dest.route"
              class="block px-4 py-2.5 text-green-900 font-medium hover:bg-green-50 transition-colors"
              @click="destOpen = false">
              {{ t(dest.key) }}
            </RouterLink>
          </div>
        </div>

        <RouterLink to="/contact"
          class="font-semibold hover:text-yellow-400 transition-colors duration-200"
          :class="$route.path === '/contact' ? 'text-yellow-400' : 'text-white'">
          {{ t('contact') }}
        </RouterLink>
        
          <RouterLink to="/login"
          class="font-semibold hover:text-yellow-400 transition-colors duration-200"
          :class="$route.path === '/login' ? 'text-yellow-400' : 'text-white'">
          {{ t('login') }}
        </RouterLink>

        <!-- Language Switcher -->
        <div class="relative" @mouseenter="langOpen = true" @mouseleave="langOpen = false">
          <button class="flex items-center gap-1.5 bg-green-700 hover:bg-green-600 border border-green-500 text-white font-bold text-sm px-4 py-1.5 rounded-full transition-colors duration-200">
            {{ currentLang.code }}
            <svg class="w-3 h-3 opacity-80" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-show="langOpen"
            class="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 border border-gray-100">
            <button v-for="lang in languages" :key="lang.code"
              @click="setLangLocal(lang.code)"
              class="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-green-50 transition-colors text-left"
              :class="activeLang === lang.code ? 'text-green-700 font-bold' : 'text-green-900 font-medium'">
              <span class="text-lg">{{ lang.flag }}</span>
              <div>
                <div class="text-sm">{{ lang.label }}</div>
                <div class="text-xs text-gray-400">{{ lang.native }}</div>
              </div>
              <span v-if="activeLang === lang.code" class="ml-auto text-green-600">✓</span>
            </button>
          </div>
        </div>

      </div>

      <!-- Mobile Hamburger -->
      <button class="md:hidden text-white pr-4" @click="mobileOpen = !mobileOpen">
        <svg v-if="!mobileOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileOpen" class="md:hidden bg-green-800 border-t border-green-700 pb-3">
      <RouterLink to="/"         class="block px-6 py-3 hover:bg-green-700 font-medium" @click="mobileOpen=false">{{ t('home') }}</RouterLink>
      <RouterLink to="/about"    class="block px-6 py-3 hover:bg-green-700 font-medium" @click="mobileOpen=false">{{ t('about') }}</RouterLink>
      <RouterLink to="/services" class="block px-6 py-3 hover:bg-green-700 font-medium" @click="mobileOpen=false">{{ t('services') }}</RouterLink>
      <div class="px-6 py-1 text-green-400 text-xs font-bold tracking-widest uppercase mt-1">{{ t('gallery') }}</div>
      <RouterLink to="/gallery/photos" class="block px-8 py-2.5 hover:bg-green-700" @click="mobileOpen=false">{{ t('photos') }}</RouterLink>
      <RouterLink to="/gallery/videos" class="block px-8 py-2.5 hover:bg-green-700" @click="mobileOpen=false">{{ t('videos') }}</RouterLink>
      <div class="px-6 py-1 text-green-400 text-xs font-bold tracking-widest uppercase mt-1">{{ t('destinations') }}</div>
      <RouterLink v-for="dest in destinations" :key="dest.key" :to="dest.route"
        class="block px-8 py-2.5 hover:bg-green-700" @click="mobileOpen=false">
        {{ t(dest.key) }}
      </RouterLink>
      <RouterLink to="/contact" class="block px-6 py-3 hover:bg-green-700 font-medium" @click="mobileOpen=false">{{ t('contact') }}</RouterLink>
      <div class="px-6 pt-3 border-t border-green-700 mt-2">
        <div class="text-green-400 text-xs font-bold tracking-widest uppercase mb-2">Language</div>
        <div class="flex gap-2">
          <button v-for="lang in languages" :key="lang.code"
            @click="setLangLocal(lang.code)"
            class="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-bold transition-colors"
            :class="activeLang === lang.code ? 'bg-yellow-400 text-green-900' : 'bg-green-700 text-white hover:bg-green-600'">
            {{ lang.flag }} {{ lang.code }}
          </button>
        </div>
      </div>
    </div>

  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { activeLang, languages, currentLang, setLang, t } from '../i18n'

const galleryOpen = ref(false)
const destOpen    = ref(false)
const mobileOpen  = ref(false)
const langOpen    = ref(false)

function setLangLocal(code) {
  setLang(code)
  langOpen.value = false
  mobileOpen.value = false
}

const destinations = [
  { key: 'northern', route: '/destinations/northern' },
  { key: 'southern', route: '/destinations/southern' },
  { key: 'kigali',   route: '/destinations/kigali'   },
  { key: 'eastern',  route: '/destinations/eastern'  },
  { key: 'western',  route: '/destinations/western'  },
]
</script>