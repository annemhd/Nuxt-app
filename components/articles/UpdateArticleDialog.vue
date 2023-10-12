<template>
    <Icon
        name="ep:edit"
        size="20"
        class="text-blue-500 cursor-pointer"
        @click="openDialog = true"
    />
    <el-dialog
        v-model="openDialog"
        title="Modifier un article"
        width="400"
        :destroy-on-close="true"
    >
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
            <el-switch v-model="status" active-value="online" inactive-value="offline" />
        </div>
        <div class="flex justify-center mt-4">
            <el-button type="primary" @click.prevent="updateArticle()">Modifier</el-button>
        </div>
    </el-dialog>
</template>
<script setup>
import Module from '/services/articles.service.js'

let openDialog = ref(false)
const errors = ref([])

const title = ref(null)
const description = ref(null)
const price = ref(null)
const status = ref(null)

const emit = defineEmits(['refresh'])
const props = defineProps(['articleInfos'])

onMounted(() => {
    setTimeout(() => {
        title.value = props.articleInfos.title
        description.value = props.articleInfos.description
        price.value = props.articleInfos.price
        status.value = props.articleInfos.status
    }, 1000)
})

const updateArticle = async () => {
    errors.value = []
    !title.value ? errors.value.push('Saisis un titre') : null
    !description.value ? errors.value.push('Saisis une description') : null
    !description.value ? errors.value.push('Saisis une description') : null

    !errors.value.length ? true : false
    if (errors.value.length === 0) {
        try {
            Module.updateArticle(
                props.articleInfos.id_article,
                title.value,
                description.value,
                price.value,
                status.value
            )
            emit('refresh')
            openDialog.value = false
        } catch (e) {
            console.log('error !')
        }
    }
}
</script>
