<template>
  <footer class="bg-green-800 text-white px-8 py-10">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-wrap justify-between gap-8">
        <!-- About section -->
        <div>
          <h3 class="text-yellow-300 font-bold text-lg mb-3">TEMBERA URWANDA</h3>
          <p class="text-green-200">Discover the beauty of the land of thousand hills</p>
        </div>

        <!-- Quick links -->
        <div>
          <h3 class="text-yellow-300 font-bold text-lg mb-3">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">Home</RouterLink></li>
            <li><RouterLink to="/about" class="text-green-200 hover:text-yellow-300 transition-colors">About</RouterLink></li>
            <li><RouterLink to="/contact" class="text-green-200 hover:text-yellow-300 transition-colors">Contact</RouterLink></li>
            <li><RouterLink to="/services" class="text-green-200 hover:text-yellow-300 transition-colors">Services</RouterLink></li>
          </ul>
        </div>

        <!-- Destinations -->
        <div>
          <h3 class="text-yellow-300 font-bold text-lg mb-3">Destinations</h3>
          <ul class="space-y-2 text-sm">
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">Kigali city</RouterLink></li>
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">Northern Province</RouterLink></li>
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">Southern province</RouterLink></li>
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">Western Province</RouterLink></li>
            <li><RouterLink to="/" class="text-green-200 hover:text-yellow-300 transition-colors">Eastern Province</RouterLink></li>
          </ul>
        </div>

        <!-- Contact info -->
        <div>
          <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact</h3>
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