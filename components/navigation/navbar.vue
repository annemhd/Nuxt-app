<template>
    <UHorizontalNavigation :links="links">
        <template #default="{ link }">
            <span class="group-hover:text-primary relative">{{ link.label }}</span>
        </template>
    </UHorizontalNavigation>
</template>
<script setup>
const navItems = [
    {
        label: 'Accueil',
        icon: 'i-heroicons-home',
        to: '/',
        availabled: true,
    },
    {
        label: 'Plantes',
        icon: 'i-heroicons-home',
        to: '/plants',
        availabled: true,
    },
    {
        label: 'Actualité',
        icon: 'i-heroicons-home',
        to: '/news',
        availabled: false,
    },
]

const accountItems = [
    {
        label: '',
        icon: 'i-heroicons-home',
        to: '/authentification',
        visible: true,
    },
    {
        label: '',
        icon: 'i-heroicons-home',
        to: '/dashboard',
        visible: false,
    },
    {
        label: '',
        icon: 'i-heroicons-home',
        to: '/add-item',
        visible: false,
    },
]

const handleMenu = (links) => {
    const enabledItems = links.filter((item) => item.availabled || item.visible)
    return enabledItems.map((item) => item)
}

const links = [handleMenu(navItems), handleMenu(accountItems)]
</script>
