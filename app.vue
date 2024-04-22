<template>
    <NuxtLayout :name="layout">
        <NuxtPage />
    </NuxtLayout>
    <UNotifications />
</template>
<script setup>
const route = useRoute()
console.log(route)
const layout = route.name === 'authentification' ? 'authentification' : 'default'
</script>
