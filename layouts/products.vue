 <template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <!-- NuxtLink is used for client-side navigation -->
               <NuxtLink to="/products" class="font-bold">My Nuxt Merge</NuxtLink>  
            </nav>
        </header>

        <!-- output the page content -->
         <div class="container mx-auto p-4">
            <slot />
         </div>
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2 bg-white">
        <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
    </footer>
</template>

<style scoped>
.router-link-active {
    color: #12b488;
}
</style>