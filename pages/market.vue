<template>
    <div class="flex flex-col justify-center w-full">
        <div class="flex flex-row justify-between items-center gap-2 mb-12">
            <div class="flex gap-2">
                <UPopover>
                    <UButton :ui="{ rounded: 'rounded-full' }" color="gray" variant="soft"
                        >Trier par</UButton
                    >
                    <template #panel>
                        <div class="flex flex-col gap-2 p-4">
                            <URadio
                                v-for="method of options"
                                :key="method.value"
                                v-model="selected"
                                v-bind="method"
                            />
                        </div>
                    </template>
                </UPopover>

                <UButton :ui="{ rounded: 'rounded-full' }" color="primary" variant="solid"
                    >Plantes d'intérieur</UButton
                >
                <UButton :ui="{ rounded: 'rounded-full' }" color="gray" variant="soft"
                    >Plantes d'extérieur</UButton
                >
                <UButton :ui="{ rounded: 'rounded-full' }" color="gray" variant="soft"
                    >Boutures</UButton
                >
                <UButton :ui="{ rounded: 'rounded-full' }" color="gray" variant="soft"
                    >Vases et pots</UButton
                >
                <UButton :ui="{ rounded: 'rounded-full' }" color="gray" variant="soft"
                    >Accessoires et outils</UButton
                >
                <UPopover>
                    <UButton :ui="{ rounded: 'rounded-full' }" color="gray" variant="soft"
                        >Lieu</UButton
                    >
                    <template #panel>
                        <div class="flex flex-col gap-2 p-4 w-36">?</div>
                    </template>
                </UPopover>
                <UPopover>
                    <UButton :ui="{ rounded: 'rounded-full' }" color="gray" variant="soft"
                        >Prix</UButton
                    >
                    <template #panel>
                        <div class="flex flex-col gap-2 p-4 w-36">
                            <UInput color="white" variant="outline" placeholder="Min">
                                <template #trailing>
                                    <span class="text-gray-500 dark:text-gray-400 text-xs"
                                        >EUR</span
                                    >
                                </template>
                            </UInput>
                            <UInput color="white" variant="outline" placeholder="Max">
                                <template #trailing>
                                    <span class="text-gray-500 dark:text-gray-400 text-xs"
                                        >EUR</span
                                    >
                                </template>
                            </UInput>
                        </div>
                    </template>
                </UPopover>

                <UButton
                    :ui="{ rounded: 'rounded-full' }"
                    color="red"
                    variant="soft"
                    icon="i-heroicons-outline-trash"
                    square
                />
            </div>
            <span class="text-zinc-500 text-sm">{{ object.length }} articles</span>
        </div>
    </div>
    <div class="grid grid-cols-6 gap-x-8 gap-y-6">
        <UCard v-for="obj in object" :ui="uiConfig">
            <template #header>
                <UAvatar size="2xs" src="" alt="Avatar" class="mr-2" />
                <span class="text-sm">Username</span></template
            >
            <UCarousel
                v-slot="{ item }"
                :items="obj.images"
                :ui="{ item: 'basis-full' }"
                class="rounded-lg overflow-hidden flex-1 h-48"
            >
                <img :src="item" class="" draggable="false" />
            </UCarousel>

            <template #footer>
                <span class="text-zinc-600 text-sm">{{ obj.price }} €</span>
                <UIcon name="i-heroicons-outline-heart" />
            </template>
        </UCard>
    </div>
</template>
<script setup>
const object = [
    {
        title: 'hbdsufbhezg',
        idUser: 1,
        description: 'bvzjbeuezbgv',
        price: 32.33,
        status: 'ok',
        createdAt: '2024-04-25T18:27:30.285291',
        images: [
            'https://picsum.photos/1000/1000?random=3',
            'https://picsum.photos/1000/1000?random=9',
            'https://picsum.photos/1000/1000?random=3',
            'https://picsum.photos/1000/1000?random=4',
            'https://picsum.photos/1000/1000?random=5',
            'https://picsum.photos/1000/1000?random=6',
        ],
    },
    {
        title: 'hbdsufbhezg',
        idUser: 1,
        description: 'bvzjbeuezbgv',
        price: 1.33,
        status: 'ok',
        createdAt: '2024-04-25T18:27:30.285291',
        images: [
            'https://picsum.photos/1000/1000?random=1',
            'https://picsum.photos/1000/1000?random=2',
            'https://picsum.photos/1000/1000?random=3',
            'https://picsum.photos/1000/1000?random=4',
            'https://picsum.photos/1000/1000?random=5',
            'https://picsum.photos/1000/1000?random=6',
        ],
    },
    {
        title: 'hbdsufbhezg',
        idUser: 1,
        description: 'bvzjbeuezbgv',
        price: 2.29,
        status: 'ok',
        createdAt: '2024-04-25T18:27:30.285291',
        images: [
            'https://picsum.photos/1000/1000?random=6',
            'https://picsum.photos/1000/1000?random=2',
            'https://picsum.photos/1000/1000?random=3',
            'https://picsum.photos/1000/1000?random=4',
            'https://picsum.photos/1000/1000?random=5',
            'https://picsum.photos/1000/1000?random=6',
        ],
    },
    {
        title: 'hbdsufbhezg',
        idUser: 1,
        description: 'bvzjbeuezbgv',
        price: 3.61,
        status: 'ok',
        createdAt: '2024-04-25T18:27:30.285291',
        images: [
            'https://picsum.photos/1000/1000?random=6',
            'https://picsum.photos/1000/1000?random=2',
            'https://picsum.photos/1000/1000?random=3',
            'https://picsum.photos/1000/1000?random=4',
            'https://picsum.photos/1000/1000?random=5',
            'https://picsum.photos/1000/1000?random=6',
        ],
    },
    {
        title: 'hbdsufbhezg',
        idUser: 1,
        description: 'bvzjbeuezbgv',
        price: 10.32,
        status: 'ok',
        createdAt: '2024-04-25T18:27:30.285291',
        images: [
            'https://picsum.photos/1000/1000?random=6',
            'https://picsum.photos/1000/1000?random=2',
            'https://picsum.photos/1000/1000?random=3',
            'https://picsum.photos/1000/1000?random=4',
            'https://picsum.photos/1000/1000?random=5',
            'https://picsum.photos/1000/1000?random=6',
        ],
    },
    {
        title: 'hbdsufbhezg',
        idUser: 1,
        description: 'bvzjbeuezbgv',
        price: 22.03,
        status: 'ok',
        createdAt: '2024-04-25T18:27:30.285291',
        images: [
            'https://picsum.photos/1000/1000?random=6',
            'https://picsum.photos/1000/1000?random=2',
            'https://picsum.photos/1000/1000?random=3',
            'https://picsum.photos/1000/1000?random=4',
            'https://picsum.photos/1000/1000?random=5',
            'https://picsum.photos/1000/1000?random=6',
        ],
    },
    {
        title: 'hbdsufbhezg',
        idUser: 1,
        description: 'bvzjbeuezbgv',
        price: 3.13,
        status: 'ok',
        createdAt: '2024-04-26T17:46:35.593729',
        images: [
            'https://picsum.photos/1000/1000?green=6',
            'https://picsum.photos/1000/1000?random=2',
            'https://picsum.photos/1000/1000?random=3',
            'https://picsum.photos/1000/1000?random=4',
            'https://picsum.photos/1000/1000?random=5',
            'https://picsum.photos/1000/1000?random=6',
        ],
    },
]

const uiConfig = {
    base: 'divide-none',
    body: {
        base: '',
        background: '',
        padding: 'p-0 sm:p-0',
    },
    divide: 'divide-none',
    ring: 'ring-0 dark:ring-0',
    shadow: 'shadow-none',
    header: {
        base: 'px-2 px-2 py-2 pb-2 pt-0 sm:px-1',
        background: '',
        padding: '',
    },
    footer: {
        base: 'flex justify-between px-2 pt-2',
        background: '',
        padding: '',
    },
}

const options = [
    {
        value: 'newest',
        label: 'Plus récent',
    },
    {
        value: 'oldest',
        label: 'Plus anciens',
    },
    {
        value: 'ascending',
        label: 'Prix croissants',
    },
    {
        value: 'decreasing',
        label: 'Prix décroissants',
    },
]

const selected = ref('newest')

const isToday = (dateString) => {
    const date = new Date(dateString)
    const today = new Date()

    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    )
}

function isYesterday(dateString) {
    const date = new Date(dateString)
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1) // Get yesterday's date

    return (
        date.getDate() === yesterday.getDate() &&
        date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear()
    )
}

const isTwoDaysBefore = (dateString) => {
    const date = new Date(dateString)
    const twoDaysBefore = new Date()
    twoDaysBefore.setDate(twoDaysBefore.getDate() - 2) // Get the date two days before the current date

    return (
        date.getDate() === twoDaysBefore.getDate() &&
        date.getMonth() === twoDaysBefore.getMonth() &&
        date.getFullYear() === twoDaysBefore.getFullYear()
    )
}

const handleDate = (dateString) => {}

const formatDateString = (dateString) => {
    const date = new Date(dateString)

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`

    if (isToday(dateString)) return `Aujourdhui à ${hours}:${minutes}`
    if (isYesterday(dateString)) return `Hier à ${hours}:${minutes}`
    if (isTwoDaysBefore(dateString)) return `Avant-hier à ${hours}:${minutes}`
    else return formattedDate
}
</script>
