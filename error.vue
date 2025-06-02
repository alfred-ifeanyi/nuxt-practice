<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops</p>
    <p class="mt-7 ">{{ error.message }}</p>
    <button class="btn my-7 bg-[#12b488] text-white px-3 py-2 rounded-md text-sm" @click="handleClearError">Go Home...</button>

  </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError ({ redirect: "/" })
</script>

<style scoped>

</style>
