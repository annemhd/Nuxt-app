<template>
    <div>
        <SignInForm />
        <SignUpForm />
    </div>
</template>
<script setup>
import SignInForm from '~/components/authentification/SignInFrom.vue';
import SignUpForm from '~/components/authentification/SignUpForm.vue';

useHead({
title: 'Index',
meta: [
    { name: 'description', content: 'My amazing site.' }
]
})
</script>