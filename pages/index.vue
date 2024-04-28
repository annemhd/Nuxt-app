<template>
    <div class="grid grid-cols-5 gap-8 py-6 px-12">
        <div class="col-span-5 h-fit">
            <div class="flex gap-12 mb-4">
                <div class="flex flex-col gap-8 w-1/2">
                    <h1 class="text-8xl">Lorem ipsum dolor sit amet</h1>
                    Consectetur adipiscing elit. Donec pharetra, mi sollicitudin viverra facilisis,
                    arcu arcu tempor urna, at aliquet odio libero pretium ex. Sed sit amet nisl
                    vitae dolor blandit commodo vel sed orci.
                    <UButton
                        :ui="{
                            rounded: 'rounded-full',
                        }"
                        size="xl"
                        class="w-48"
                        block
                        >Publier un articles</UButton
                    >
                </div>
                <div class="bg-gray-300 overflow-hidden w-1/2 h-96 rounded-3xl">
                    <!-- <img :src="img" class="object-cover object-center h-full w-full" /> -->
                </div>
            </div>
        </div>
        <ULink to="/market" active-class="text-primary"
            ><div
                class="font-semibold bg-indigo-300 h-44 rounded-3xl p-6 hover:scale-105 transition"
            >
                Plantes d'intérieur
            </div></ULink
        ><ULink to="/market" active-class="text-primary">
            <div
                class="font-semibold bg-yellow-300 h-44 rounded-3xl p-6 hover:scale-105 transition"
            >
                Plantes d'extérieur
            </div></ULink
        >

        <ULink to="/market" active-class="text-primary">
            <div class="font-semibold bg-green-300 h-44 rounded-3xl p-6 hover:scale-105 transition">
                Boutures
            </div>
        </ULink>
        <ULink to="/market" active-class="text-primary">
            <div class="font-semibold bg-pink-300 h-44 rounded-3xl p-6 hover:scale-105 transition">
                Vases et pots
            </div></ULink
        >
        <ULink to="/market" active-class="text-primary">
            <div class="font-semibold bg-sky-300 h-44 rounded-3xl p-6 hover:scale-105 transition">
                Accessoires et outils
            </div></ULink
        >
    </div>
</template>
<script setup>
import { createClient } from 'pexels'

const client = createClient('3yIkiKpocBW7Jmvug75bIgzADvRsqnfOi5cMGt5P6sQJ7Bd3GMIwjQz7')

const img = ref()

// All requests made with the client will be authenticated
const images = async () => {
    return await client.photos.show({ id: 3153522 }).then((photos) => {
        return photos.src.original
    })
}
onMounted(async () => {
    img.value = await images()
    console.log(img.value)
})
</script>
