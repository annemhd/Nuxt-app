<template>
    <p>Homepage</p>
</template>

<script setup>
import { useUserStore } from '~/stores/user.js'
const userStore = useUserStore()
const { getAllUsers } = userStore

useHead({
    title: 'The Ficus - Vente de plantes, boutures & accessoires de jardinerie',
    meta: [{ name: 'description', content: 'My amazing site.' }],
})

onMounted(async () => {
    await getAllUsers()
})
</script>
