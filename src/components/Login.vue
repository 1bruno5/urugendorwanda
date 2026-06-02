<template>
 <div class="flex items-center justify-center bg-green-100 min-h-screen">
   <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
     <h2 class="text-2xl font-bold text-green-800 mb-6 text-center">LOGIN </h2>
     <form class="flex flex-col gap-4">
       <input
         v-model="email"
         type="email"
       placeholder="Please enter your email"
       required
       class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
     />
     <input
       v-model="password"
       type="password"
       placeholder="Please enter your password"
       required
       class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
     />
     <button
       type="submit"
       class="bg-green-800 text-white py-2 rounded hover:bg-green-700 transition duration-300"
     >
       <RouterLink to="/dashboard" class="text-white font-semibold hover:underline">LOGIN</RouterLink>
     </button>
   </form>
   <p class="text-center text-sm mt-4 text-gray-600">
     Don't have an account?  please create it <RouterLink to="/Register" class="text-green-700 font-semibold hover:underline">REGISTER</RouterLink>
   </p>
    </div>

  </div>

</template>










