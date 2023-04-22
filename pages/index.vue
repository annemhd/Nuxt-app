<template>
Index
</template>
<script setup>
import Module from '../services/user.vue'

console.log(Module.getAllUsers())

useHead({
  title: 'Index',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})


</script>