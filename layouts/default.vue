 <template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto flex items-center justify-between p-4">
                <!-- NuxtLink is used for client-side navigation -->
               <NuxtLink to="/" class="font-bold">My Nuxt App</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="bg-[#12b488] text-white px-3 py-2 rounded-md text-sm">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- output the page content -->
         <div class="container mx-auto p-4">
            <slot />
         </div>
    </div>
</template>

<style scoped>
.router-link-active {
    color: #12b488;
}
</style>