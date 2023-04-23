<template>
    <p>This page will be displayed at the /about route.</p>
</template>
<script setup lang="ts">
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
})
</script>