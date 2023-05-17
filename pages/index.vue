<template>
  <p>Homepage</p>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '~/stores/user.js'
const userStore = useUserStore()
const { getAllUsers } = userStore
const { currentUser } = storeToRefs(userStore)

useHead({
title: 'Titre',
meta: [
    { name: 'description', content: 'My amazing site.' }
]
})

onMounted(async () => {
 await getAllUsers()
})
</script>
