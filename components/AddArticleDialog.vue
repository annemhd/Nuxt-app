<template>
    <el-button @click="openDialog = true">ajouter un article</el-button>
    <el-dialog v-model="openDialog" title="Ajouter un article" width="400" :destroy-on-close="true">
        <el-input v-model="title" type="text" placeholder="Titre" class="mb-2" />
        <el-input
            v-model="description"
            type="textarea"
            placeholder="Description"
            class="mb-2"
            :autosize="false"
            :resize="none"
        />
        <el-input v-model="price" type="text" placeholder="Prix" class="mb-2" />
        <el-switch v-model="switchRef" active-value="online" inactive-value="offline" />
        <el-button @click="addArticle()">ajouter</el-button>
    </el-dialog>
</template>
<script setup>
import Module from '/services/articles.service.js'
import { useUserStore } from '/stores/users.store.js'
const currentUser = useUserStore().currentUser
const openDialog = ref(false)
const errors = ref([])
const switchRef = ref('online')
const title = ref(null)
const description = ref(null)
const price = ref(null)
const addArticle = async (e) => {
    errors.value = []
    !title.value ? errors.value.push('Saisis un titre') : null
    !description.value ? errors.value.push('Saisis une description') : null
    !description.value ? errors.value.push('Saisis une description') : null

    !errors.value.length ? true : false
    e.preventDefault()
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
        } catch (e) {
            console.log('error !')
        }
    }
}
</script>
