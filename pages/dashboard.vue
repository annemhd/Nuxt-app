<template>
    <div class="flex items-center gap-4 justify-between mb-6">
        <span class="text-4xl"> {{ salutation }} {{ currentUser.firstname }} ! </span>
        <AddArticleDialog @refresh="refreshArticles()" />
    </div>
    <el-row :gutter="16">
        <el-col v-for="article in dataTest" :key="article" :span="6" class="mb-4">
            <el-card>
                <div class="">
                    <div class="font-semibold">{{ article.title }}</div>
                    <div class="">{{ article.description }}</div>
                    <div class="text-sm">Le {{ handleDateFormat(article.created_at) }}</div>
                </div>
                <div class="flex flex-row gap-2">
                    <DeleteArticleDialog :article-infos="article" @refresh="refreshArticles()" />
                    <UpdateArticleDialog :article-infos="article" @refresh="refreshArticles()" />
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script setup>
import jwt_decode from 'jwt-decode'
import Module from '/services/articles.service.js'

const cookie = useCookie('user')
const token = cookie.value
const currentUser = jwt_decode(token)
const dataTest = ref([])

onMounted(async () => {
    getArticles()
})

const getArticles = async () => {
    const data = await Module.getArticles()
    dataTest.value = data.filter((item) => item.id_user === currentUser.id_user)
}

const refreshArticles = async () => {
    const data = await Module.getArticles()
    dataTest.value = data.filter((item) => item.id_user === currentUser.id_user)
    setTimeout(() => {
        getArticles()
    }, 1000)
}

const handleDateFormat = (date) => {
    const dateTime = new Date(date)
    return (
        dateTime.getDate() +
        ' ' +
        convertirMoisEnString(dateTime.getMonth()) +
        ' ' +
        dateTime.getFullYear()
    )
}

const heure = new Date().getHours()
const salutation = computed(() => (heure >= 5 && heure < 12 ? 'Bonjour' : 'Bonsoir'))

useHead({
    title: 'The Ficus - Tableau de bord',
    meta: [{ name: 'description', content: 'My amazing site.' }],
})

const convertirMoisEnString = (mois) => {
    const moisEnString = [
        'janvier',
        'février',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'août',
        'septembre',
        'octobre',
        'novembre',
        'décembre',
    ]

    return moisEnString[mois]
}
</script>
<style lang="scss">
.el-card {
    &__body {
        min-height: 150px !important;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &__content {
    }
}
</style>
