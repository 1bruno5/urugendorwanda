<template>
	<div class="flex items-center justify-center bg-green-100 min-h-screen">
		<div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
			<h2 class="text-2xl font-bold text-green-800 mb-6 text-center">REGISTER</h2>

			<form @submit.prevent="register" class="flex flex-col gap-4">
				<input
					v-model="fullName"
					type="text"
					placeholder="Full name"
					required
					class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
				/>

				<input
					v-model="email"
					type="email"
					placeholder="Email address"
					required
					class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
				/>

				<input
					v-model="phone"
					type="tel"
					placeholder="Phone number"
					required
					class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
				/>

				<input
					v-model="age"
					type="number"
					min="0"
					placeholder="Age"
					required
					class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
				/>

				<select
					v-model="gender"
					required
					class="border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:border-green-600"
				>
					<option value="" disabled>Select gender</option>
					<option>Male</option>
					<option>Female</option>
					<option>Other</option>
				</select>

                
				<input
					v-model="Password"
					type="Password"
					placeholder="Password"
					required
					class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600"
				/>

				<button
					type="submit"
					class="bg-green-800 text-white py-2 rounded hover:bg-green-700 transition duration-300"
				>
					REGISTER
				</button>
			</form>

			<p class="text-center text-sm mt-4 text-gray-600">
				Already have an account? <RouterLink to="/Login" class="text-green-700 font-semibold hover:underline">LOGIN</RouterLink>
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const fullName = ref('')
const email = ref('')
const phone = ref('')
const age = ref('')
const gender = ref('')

const register = () => {
		const payload = {
		fullName: fullName.value,
		email: email.value,
		phone: phone.value,
		age: Number(age.value),
		gender: gender.value,
	}
	// TODO: wire to backend service. For now, log and navigate to Login.
	console.log('Register payload:', payload)
	router.push('/Login')
}
</script>

