<template>
    <div class="card text-center p-3 rounded-md bg-white shadow-md h-full">
        <img :src="product.image" alt="product thumb" class="thumb" />
        <p class="font-bold text-grey-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4 bg-[#12b488] rounded-md text-white text-sm">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}

</style>