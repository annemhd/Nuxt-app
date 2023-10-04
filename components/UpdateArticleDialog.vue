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
        <el-button @click.prevent="updateArticle()">Modifier</el-button>
    </el-dialog>
</template>
<script setup>
import Module from '/services/articles.service.js'
import jwt_decode from 'jwt-decode'

const cookie = useCookie('user')
const token = cookie.value
const currentUser = jwt_decode(token)

let openDialog = ref(false)
const errors = ref([])

const switchRef = ref('offline')
const title = ref(null)
const description = ref(null)
const price = ref(null)

const emit = defineEmits(['refresh'])
const props = defineProps(['articleInfos'])

// watch(props, () => {
//     title.value = props.articleInfos.title
//     description.value = props.articleInfos.description
//     price.value = props.articleInfos.price
// })

onMounted(() => {
    setTimeout(() => {
        title.value = props.articleInfos.title
        description.value = props.articleInfos.description
        price.value = props.articleInfos.price
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
            const status = switchRef.value
            Module.updateArticle(
                props.articleInfos.id_article,
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
