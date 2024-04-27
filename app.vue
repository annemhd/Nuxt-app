<template>
    <NuxtLayout :name="layout">
        <NuxtPage />
    </NuxtLayout>
    <UNotifications />
    <UModals />
</template>
<script setup>
import { findUser } from '~/services/users.services'
import { jwtDecode } from 'jwt-decode'

const route = useRoute()
const layout = computed(() => (route.name === 'authentification' ? 'authentification' : 'default'))

const userId = JSON.parse(localStorage.getItem('user_id') ?? null)
const currentUser = ref({})

const getUser = async () => {
    const data = await findUser(userId)
    currentUser.value = data
}

onMounted(async () => {
    await getUser()
    localStorage.setItem('user_info', JSON.stringify(currentUser.value))
})
</script>
