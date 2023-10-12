<template>
    <el-button type="primary" @click="openDialog = true">Ajouter un article</el-button>
    <el-dialog v-model="openDialog" title="Ajouter un article" width="400" :destroy-on-close="true">
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
            emit('refresh')
            openDialog.value = false
        } catch (e) {
            console.log('error !')
        }
    }
}
</script>
