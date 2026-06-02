<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const activeMenu = ref('overview')
function logout() {
  router.push('/login')
}
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <aside class="w-68 bg-green-800 text-white flex flex-col">
      <div class="p-6 text-2xl font-bold border-b border-green-700">{{ t('dashboard_title') }}</div>
      <nav class="flex-1 p-4">
        <button @click="activeMenu='overview'" :class="activeMenu==='overview' ? 'bg-green-700' : 'hover:bg-green-700'"
          class="w-full text-left px-4 py-3 rounded mb-2">{{ t('dashboard_overview') }}</button>
        <button @click="activeMenu='booking'" :class="activeMenu==='booking' ? 'bg-green-700' : 'hover:bg-green-700'"
          class="w-full text-left px-4 py-3 rounded mb-2">{{ t('dashboard_booking') }}</button>
        <button @click="activeMenu='users'" :class="activeMenu==='users' ? 'bg-green-700' : 'hover:bg-green-700'"
          class="w-full text-left px-4 py-3 rounded mb-2">{{ t('dashboard_user') }}</button>
      </nav>
      <div class="p-4 border-t border-green-700">
        <button @click="logout"
          class="w-full bg-red-600 hover:bg-red-800 px-4 py-2 rounded">{{ t('dashboard_logout') }}</button>
      </div>
    </aside>
    <main class="flex-1 overflow-y-auto p-8">
      <h1 class="text-3xl font-bold text-gray-900">{{ t('dashboard_title') }}</h1>
      <p class="text-gray-600 mt-3">{{ t('dashboard_overview') }}</p>
    </main>
  </div>
</template> 