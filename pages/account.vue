<template>acc {{ currentUser }}</template>
<script setup>
import { findUser } from '~/services/users.services'
import { jwtDecode } from 'jwt-decode'

const userInfos = JSON.parse(localStorage.getItem('user_id') ?? null)
const tokenInfos = localStorage.getItem('jwt_token') ?? null
const currentUser = ref({})

const getUser = async () => {
    const data = await findUser(userInfos)
    currentUser.value = data
}

onMounted(async () => {
    await getUser()
})
</script>
