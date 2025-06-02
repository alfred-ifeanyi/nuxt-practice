<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat iusto rerum ratione magnam impedit delectus mollitia ex expedita exercitationem. Vero.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat iusto rerum ratione magnam impedit delectus mollitia ex expedita exercitationem. Vero.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/NGN')

</script>

<style  scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>