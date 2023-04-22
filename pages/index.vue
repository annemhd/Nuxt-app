<template>

<!-- <component :is="selectedComponent ? SignInForm : SignUpForm " /> -->
<component :is="selectedComponent" />
<button @click="signUpBtn(selectedComponent)">S'inscrire</button> <button @click="signInBtn(selectedComponent)">Se connecter</button>

</template>
<script setup>
useHead({
title: 'Index',
meta: [
    { name: 'description', content: 'My amazing site.' }
]
})

import SignInForm from '~/components/authentification/SignInFrom.vue';
import SignUpForm from '~/components/authentification/SignUpForm.vue';

const selectedComponent = ref(SignInForm)

const signUpBtn = (selected) => {
    selected ? selectedComponent.value = SignUpForm : selectedComponent.value = SignInForm
    console.log(selected)
}
const signInBtn = (selected) => {
    selected ? selectedComponent.value = SignInForm : selectedComponent.value = SignUpForm
    console.log(selected)
}
</script>