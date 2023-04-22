<template>
<LoginForm />
<SignUpForm />
</template>
<script setup>
import Module from '../services/user.vue'

useHead({
  title: 'Index',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})


</script>