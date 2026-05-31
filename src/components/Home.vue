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
          Discover<br>
          <span class="text-yellow-400">Rwanda</span>
        </h1>
        <p class="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Where pristine gorilla habitats meet vibrant culture, rolling green hills, and breathtaking landscapes. Your African adventure starts here.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/Services"
            class="bg-yellow-400 hover:bg-yellow-300 text-green-900 font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Explore Services
          </RouterLink>
          <RouterLink to="/about"
            class="border-2 border-white hover:border-yellow-400 hover:text-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300">
            About Rwanda
          </RouterLink>
        </div>
      </div>


    </section>



    <!-- Why Rwanda -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">Why Visit</span>
          <h2 class="text-5xl font-black text-green-900 mt-2">Rwanda Awaits You</h2>
          
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title"
            class="group p-8 rounded-2xl border-2 border-gray-100 hover:border-green-600 hover:bg-green-900 transition-all duration-500 cursor-default">
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-xl font-bold text-green-900 group-hover:text-yellow-400 mb-3 transition-colors">{{ feature.title }}</h3>
            <p class="text-gray-600 group-hover:text-green-200 leading-relaxed transition-colors">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section class="py-24 bg-green-900 text-white text-center opacity-80">
      <div class="max-w-3xl mx-auto px-6">
        <div class="text-5xl mb-6"></div>
        <h2 class="text-5xl font-black mb-6">Ready for Your<br><span class="text-yellow-400">Rwanda Adventure?</span></h2>
        <p class="text-green-200 text-xl mb-10">From mountain gorillas to vibrant city life — Rwanda offers unforgettable experiences for every traveler.</p>
        <RouterLink to="/contact"
          class="inline-block bg-yellow-400 hover:bg-yellow-300 text-green-900 font-black text-xl px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105">
          Plan My Trip
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>


const features = [
  {
    icon: '',
    title: 'Gorilla Trekking',
    desc: 'One of the world\'s most extraordinary wildlife encounters — meet mountain gorillas in their natural volcanic forest habitat.'
  },
  {
    icon: '',
    title: 'Eco-Tourism',
    desc: 'Rwanda is Africa\'s leading eco-tourism destination, committed to sustainable travel and preserving its natural wonders.'
  },
  {
    icon: '',
    title: 'Rich Culture',
    desc: 'Explore vibrant traditions, Intore dance, art, and a resilient people whose warmth and hospitality are world-renowned.'
  },
  {
    icon: '',
    title: 'Stunning Scenery',
    desc: 'Rolling emerald hills, shimmering lakes, and volcanic peaks — Rwanda\'s landscapes are endlessly photogenic.'
  },
  {
    icon: '',
    title: 'Wildlife Safaris',
    desc: 'From Akagera\'s Big Five to Nyungwe\'s chimpanzees, Rwanda offers thrilling safari experiences across diverse ecosystems.'
  },
  {
    icon: '',
    title: 'Kigali City',
    desc: 'Africa\'s cleanest and safest capital city, with world-class restaurants, museums, and a buzzing nightlife scene.'
  },
]

const destinations = [
  { name: 'Northern Province', tagline: 'Home of the Gorillas', icon: '', gradient: 'from-green-700 to-green-900' },
  { name: 'Kigali City', tagline: 'Vibrant Capital', icon: '', gradient: 'from-yellow-600 to-green-800' },
  { name: 'Eastern Province', tagline: 'Akagera Safari', icon: '', gradient: 'from-orange-600 to-green-900' },
  { name: 'Western Province', tagline: 'Lake Kivu Shores', icon: '', gradient: 'from-blue-600 to-green-900' },
  { name: 'Southern Province', tagline: 'Nyungwe Forest', icon: '', gradient: 'from-green-500 to-teal-900' },
]
</script>