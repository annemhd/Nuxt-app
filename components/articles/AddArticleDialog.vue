<template>
    <el-button type="primary" @click="openDialog = true">Ajouter un article</el-button>
    <el-dialog v-model="openDialog" title="Ajouter un article" :destroy-on-close="true">
        <p class="my-2">Titre</p>
        <el-input v-model="title" type="text" placeholder="Titre" class="mb-2" />
        <p class="my-2">Description</p>
        <el-input
            v-model="description"
            type="textarea"
            placeholder="Description"
            class="mb-2"
            :rows="6"
            :autosize="false"
            resize="none"
        />
        <p class="my-2">prix</p>
        <el-input v-model="price" type="text" placeholder="Prix" class="mb-2" />
        <p class="my-2">Ajouter des images</p>
        <div class="flex flex-row gap-4 justify-around overflow-scroll w-full">
            <ArticlesAddImages v-model="imgUrls" @update:model-value="handleImgUrls" />
        </div>
        <div class="flex gap-2 items-center justify-center mr-4">
            <p class="my-2">Mettre l'article en ligne</p>
            <el-switch v-model="switchRef" active-value="online" inactive-value="offline" />
        </div>
        <div class="flex justify-center mt-4">
            <el-button @click="addArticle()">Ajouter</el-button>
        </div>
    </el-dialog>
</template>
<script setup>
import Module from '/services/articles.service.js'
import {
    getImages,
    uploadImage,
} from '/Users/amichaud/Documents/GitHub/Nuxt-UI/services/files.services.js'

import jwt_decode from 'jwt-decode'

const cookie = useCookie('user')
const token = cookie.value
const currentUser = jwt_decode(token)

const openDialog = ref(false)
const errors = ref([])
const switchRef = ref('online')
const title = ref(null)
const description = ref(null)
const price = ref(null)
const imgUrls = ref([])
const urlsList = ref([])
const emit = defineEmits(['refresh'])

const addArticle = async () => {
    errors.value = []
    !title.value ? errors.value.push('Saisis un titre') : null
    !description.value ? errors.value.push('Saisis une description') : null
    !description.value ? errors.value.push('Saisis une description') : null

    !errors.value.length ? true : false
    if (errors.value.length === 0) {
        try {
            const status = switchRef.value
            Module.createArticle(
                currentUser.id_user,
                title.value,
                description.value,
                price.value,
                status
            )
            console.log(imgUrls.value[0].url)
            uploadImage(imgUrls.value[0].url)
            emit('refresh')
            openDialog.value = false
        } catch (e) {
            console.log('error !')
        }
    }
}

const handleImgUrls = (e) => {
    urlsList.value.push({ url: e })
    imgUrls.value = [...urlsList.value]
}
</script>
