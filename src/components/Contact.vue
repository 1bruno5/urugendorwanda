<template>
  <div class="font-sans">
    <!-- Hero -->
    <section class="bg-green-900 text-white py-32 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10"
        style="background-image: radial-gradient(circle at 60% 30%, #fbbf24 0%, transparent 50%);">
      </div>
      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span class="text-yellow-400 font-bold tracking-widest uppercase text-sm">Get In Touch</span>
        <h1 class="text-6xl font-black mt-3 mb-6"><span class="text-yellow-400">Contact</span> Us</h1>
        <p class="text-green-200 text-xl max-w-2xl mx-auto leading-relaxed">
          Ready to start your Rwanda adventure? Our team of local experts is here to help you plan the perfect trip.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <!-- Contact Info -->
        <div>
          <h2 class="text-3xl font-black text-green-900 mb-8">Let's Plan Your <span class="text-yellow-500">Dream Trip</span></h2>
          <div class="space-y-6">
            <div v-for="info in contactInfo" :key="info.label"
              class="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors">
              <div class="w-12 h-12flex items-center justify-center text-xl flex-shrink-0">
                {{ info.icon }}
              </div>
              <div>
                <div class="font-bold text-green-900">{{ info.label }}</div>
                <div class="text-gray-600">{{ info.value }}</div>
              </div>
            </div>
          </div>


        </div>

        <!-- Contact Form -->
        <div>
          <form @submit.prevent="submitForm" class="space-y-5">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-bold text-green-900 mb-2">First Name</label>
                <input v-model="form.firstName" type="text" placeholder="Jean"
                  class="w-full border-2 border-gray-200 focus:border-green-600 rounded-xl px-4 py-3 outline-none transition-colors" required />
              </div>
              <div>
                <label class="block text-sm font-bold text-green-900 mb-2">Last Name</label>
                <input v-model="form.lastName" type="text" placeholder="Kagabo"
                  class="w-full border-2 border-gray-200 focus:border-green-600 rounded-xl px-4 py-3 outline-none transition-colors" required />
              </div>
            </div>
            <div>
              <label class="block text-sm font-bold text-green-900 mb-2">Email Address</label>
              <input v-model="form.email" type="email" placeholder="you@example.com"
                class="w-full border-2 border-gray-200 focus:border-green-600 rounded-xl px-4 py-3 outline-none transition-colors" required />
            </div>
            <div>
              <label class="block text-sm font-bold text-green-900 mb-2">I'm Interested In</label>
              <select v-model="form.service"
                class="w-full border-2 border-gray-200 focus:border-green-600 rounded-xl px-4 py-3 outline-none transition-colors bg-white">
                <option value="">Select a service...</option>
                <option>Gorilla Trekking</option>
                <option>Akagera Safari</option>
                <option>Nyungwe Forest Trek</option>
                <option>Kigali City Tour</option>
                <option>Lake Kivu Experience</option>
                <option>Cultural Tour</option>
                <option>Custom Itinerary</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-bold text-green-900 mb-2">Your Message</label>
              <textarea v-model="form.message" rows="4" placeholder="Tell us about your dream Rwanda trip..."
                class="w-full border-2 border-gray-200 focus:border-green-600 rounded-xl px-4 py-3 outline-none transition-colors resize-none" required></textarea>
            </div>
            <button type="submit"
              class="w-full bg-green-900 hover:bg-yellow-400 hover:text-green-900 text-white font-black text-lg py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
              {{ submitted ? '✅ Message Sent!' : 'Send Message ' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const submitted = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  service: '',
  message: ''
})

const contactInfo = [
  { icon: '', label: 'Address', value: 'KG 7 Ave, Kigali, Rwanda' },
  { icon: '', label: 'Email', value: 'info@temberaurwanda.rw' },
  { icon: '', label: 'Phone', value: '+250 788 000 000' },
  { icon: '', label: 'Website', value: 'www.temberaurwanda.rw' },
]

function submitForm() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    Object.keys(form).forEach(k => form[k] = '')
  }, 3000)
}
</script>