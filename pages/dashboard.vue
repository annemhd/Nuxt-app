<template>
    <span class="text-4xl"> {{ salutation() }} {{ user.firstname }} ! </span>
</template>
<script setup>
import jwt_decode from 'jwt-decode'
const cookie = useCookie('user')
var token = cookie.value
var user = undefined
if (token) {
    user = jwt_decode(token)
}
var heure = new Date().getHours()

const salutation = () => {
    if (heure >= 5 && heure < 12) {
        return 'Bonjour'
    } else {
        return 'Bonsoir'
    }
}

useHead({
    title: 'The Ficus - Tableau de bord',
    meta: [{ name: 'description', content: 'My amazing site.' }],
})
</script>
