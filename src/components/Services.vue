<template>
  <div class="font-sans">
    <!-- Hero -->
    <section class="bg-green-900 text-white py-32 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10"
        style="background-image: radial-gradient(circle at 70% 50%, #fbbf24 0%, transparent 50%);">
      </div>
      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span class="text-yellow-400 font-bold tracking-widest uppercase text-sm">What We Offer</span>
        <h1 class="text-6xl font-black mt-3 mb-6">Our <span class="text-yellow-400">Services</span></h1>
        <p class="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
          Expertly crafted tours and experiences for every kind of traveler. From gorilla trekking to city tours, we've got Rwanda covered.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title"
            class="group rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-green-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div class="p-8">
              <!-- Removed the green icon box -->
              <h3 class="text-xl font-black text-green-900 mb-3">{{ service.title }}</h3>
              <p class="text-gray-600 leading-relaxed mb-4">{{ service.desc }}</p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-sm text-gray-400">{{ service.duration }}</span>
                <span class="text-green-700 font-bold">{{ service.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-24 bg-green-50">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-yellow-500 font-bold tracking-widest uppercase text-sm">How It Works</span>
          <h2 class="text-4xl font-black text-green-900 mt-2">Plan Your Trip in 3 Steps</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(step, i) in steps" :key="step.title" class="text-center">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl font-black text-green-900 mx-auto mb-4">
              {{ i + 1 }}
            </div>
            <h3 class="text-xl font-bold text-green-900 mb-2">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const services = [
  {
    title: 'Gorilla Trekking',
    desc: 'Trek through Volcanoes National Park to meet the endangered mountain gorillas in their natural habitat. A once-in-a-lifetime experience.',
    duration: '1 Full Day',
    price: 'From $1,500'
  },
  {
    title: 'Akagera Safari',
    desc: 'Explore Akagera National Park — Rwanda\'s savannah gem — and spot lions, elephants, zebras, giraffes, and hippos.',
    duration: '2–3 Days',
    price: 'From $450'
  },
  {
    title: 'Nyungwe Forest Trek',
    desc: 'Walk the canopy walkway and track chimpanzees and colobus monkeys deep in one of Africa\'s oldest rainforests.',
    duration: '1–2 Days',
    price: 'From $280'
  },
  {
    title: 'Kigali City Tour',
    desc: 'Discover Africa\'s cleanest capital: the Kigali Genocide Memorial, local markets, craft shops, and vibrant restaurants.',
    duration: 'Half or Full Day',
    price: 'From $80'
  },
  {
    title: 'Lake Kivu Experience',
    desc: 'Cruise, kayak, or relax on the shores of the stunning Lake Kivu in Rwanda\'s beautiful Western Province.',
    duration: '1–3 Days',
    price: 'From $200'
  },
  {
    title: 'Cultural Tours',
    desc: 'Visit local villages, watch Intore traditional dance, and explore Rwanda\'s artisan cooperatives and historical sites.',
    duration: 'Half Day',
    price: 'From $60'
  },
]

const steps = [
  { title: 'Choose Your Experience', desc: 'Browse our services and pick the experiences that excite you most.' },
  { title: 'Contact Our Team', desc: 'We\'ll design a custom itinerary tailored to your dates and interests.' },
  { title: 'Explore Rwanda', desc: 'Arrive and let our expert local guides take you on an unforgettable journey.' },
]
</script>