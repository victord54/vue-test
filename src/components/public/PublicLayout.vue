<template>
    <div class="flex h-screen">
        <nav
            class="bg-yellow-500 flex-initial w-1/6 flex flex-col gap-4 pt-5 items-center"
        >
            <RouterLink class="btn-primary" to="/">Home</RouterLink>
            <RouterLink class="btn-primary" to="/about">About</RouterLink>
            <div class="flex flex-row gap-2">
                <RouterLink class="btn-primary" to="/auth">Auth</RouterLink>
                <RouterLink class="btn-primary" to="/admin">Admin</RouterLink>
            </div>
        </nav>
        <div class="flex-initial w-screen">
            <header
                class="bg-cyan-400 h-20 flex justify-center items-center capitalize font-sans font-bol"
            >
                Un truc cool à mettre ici (version publique)
            </header>

            <main class="bg-lime-400">
                {{ $route.path }}
                <RouterView />
            </main>
        </div>
    </div>
</template>

<script setup>
import { watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

// Débug de la route
const route = useRoute();
watch(
    () => route.path,
    (newPath, oldPath) => {
        console.log(`Route changed from ${oldPath} to ${newPath}`);
    }
);
</script>

<style scoped></style>
