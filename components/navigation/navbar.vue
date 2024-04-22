<template>
    <UHorizontalNavigation :links="links" class="p-2">
        <template #default="{ link }" class="bg-red-400">
            <span v-if="link.label !== null" class="group-hover:text-primary relative">
                {{ link.label }}
            </span>
            <UPopover v-if="link.test === true">
                <UAvatar size="2xs" src="" alt="Avatar" />
                <template #panel>
                    <UVerticalNavigation class="p-2" :links="linksAccount" />
                </template>
            </UPopover>
        </template>
    </UHorizontalNavigation>
</template>
<script setup>
const TOKEN = localStorage.getItem('TOKEN')

const navItems = [
    {
        label: 'Accueil',
        icon: 'i-heroicons-home',
        to: '/',
        availabled: true,
    },
    {
        label: 'Marché',
        icon: 'i-heroicons-shopping-cart',
        to: '/market',
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
        label: null,
        icon: 'i-heroicons-user',
        to: '/authentification',
        visible: !TOKEN ? true : false,
    },
    {
        label: null,
        icon: 'i-heroicons-plus-circle',
        to: '/add-item',
        visible: TOKEN ? true : false,
    },
    {
        label: null,
        icon: 'i-heroicons-envelope',
        to: '/messages',
        visible: TOKEN ? true : false,
    },
    {
        label: null,
        icon: '',
        to: '',
        visible: TOKEN ? true : false,
        test: true,
    },
]

const handleMenu = (links) => {
    const enabledItems = links.filter((item) => item.availabled || item.visible)
    return enabledItems.map((item) => item)
}

const links = [handleMenu(navItems), handleMenu(accountItems)]

const linksAccount = [
    [
        {
            label: 'Tableau de bord',
            icon: 'i-heroicons-envelope',
            to: '/dashboard',
            badge: 0,
        },
        {
            label: 'Paramètres du compte',
            icon: 'i-heroicons-cog-8-tooth',
            to: '/account',
        },
    ],
    [
        {
            label: 'Déconnexion',
            icon: 'i-heroicons-arrow-right-on-rectangle-solid',
        },
    ],
]
</script>
