<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
// fetch products from fakestoreapi
const { data: products } = await useFetch("https://fakestoreapi.com/products")

 useHead({
      title: "Nuxt practice | merch",
      meta: [
        {name: 'description', content: 'Everything about Nuxt 3|merch'},
      ],
    })
</script>   

<style  scoped>

</style>