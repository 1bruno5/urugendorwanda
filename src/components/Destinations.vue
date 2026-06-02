<template>
  <div class="font-sans bg-white min-h-screen">
    <section class="bg-green-900 text-white py-28">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <span class="text-yellow-400 uppercase tracking-[0.3em] text-sm font-bold">{{ t('destinations_label') }}</span>
        <h1 class="text-5xl font-black mt-4">{{ t('destinations_label') }}</h1>
        <p class="text-green-200 mt-6 max-w-2xl mx-auto text-lg">{{ t('destinations_intro') }}</p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-6 py-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <a href="/destinations/northern" class="block p-8 rounded-3xl bg-green-50 border border-green-200 text-center hover:bg-green-100 transition">
        <h2 class="text-2xl font-black text-green-900">{{ t('north_hero_title') }}</h2>
      </a>
      <a href="/destinations/southern" class="block p-8 rounded-3xl bg-green-50 border border-green-200 text-center hover:bg-green-100 transition">
        <h2 class="text-2xl font-black text-green-900">{{ t('south_hero_title') }}</h2>
      </a>
      <a href="/destinations/kigali" class="block p-8 rounded-3xl bg-green-50 border border-green-200 text-center hover:bg-green-100 transition">
        <h2 class="text-2xl font-black text-green-900">{{ t('kigali_hero_title') }}</h2>
      </a>
      <a href="/destinations/eastern" class="block p-8 rounded-3xl bg-green-50 border border-green-200 text-center hover:bg-green-100 transition">
        <h2 class="text-2xl font-black text-green-900">{{ t('east_hero_title') }}</h2>
      </a>
      <a href="/destinations/western" class="block p-8 rounded-3xl bg-green-50 border border-green-200 text-center hover:bg-green-100 transition">
        <h2 class="text-2xl font-black text-green-900">{{ t('west_hero_title') }}</h2>
      </a>
    </section>
  </div>
</template> 