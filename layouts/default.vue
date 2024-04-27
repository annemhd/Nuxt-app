<template>
    <navbar />
    <div class="p-6">
        <slot />
    </div>
</template>
<script setup>
import navbar from '~/components/navigation/navbar.vue'
</script>
