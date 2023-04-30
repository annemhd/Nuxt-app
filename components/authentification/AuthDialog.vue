<template>
<span> props : {{ greetingMessage }}</span>
<div @click="emitEvent">emit function</div>
</template>

<script setup>
const props = defineProps(['greetingMessage'])
const emit = defineEmits(['custom-event', 'Hello, world!'])



const emitEvent = () => {
      emit('custom-event')
    }
</script>
