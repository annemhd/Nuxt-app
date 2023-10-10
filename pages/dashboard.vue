<template>
    <div class="flex items-center gap-4 justify-between mb-12">
        <span class="text-4xl"> {{ salutation }} {{ currentUser.firstname }} ! </span>
    </div>

    <div class="flex items-center gap-4 justify-between mb-6">
        <AddArticleDialog @refresh="refreshArticles()" />
        <div class="flex flex-row gap-3">
            <span class="w-64">
                <el-input v-model="search" placeholder="Recherche" />
            </span>

            <el-button type="primary" @click="drawer = true" link>
                Filtrer<Icon name="material-symbols:filter-list-rounded" size="16" class="ml-2"
            /></el-button>

            <el-drawer v-model="drawer" title="Filter les articles">
                <div class="flex flex-col p-4">
                    <p class="mb-3">Trier par</p>
                    <el-radio-group v-model="radio">
                        <el-radio label="1">Plus récents</el-radio>
                        <el-radio label="2" class="w-full">Plus anciens</el-radio>
                        <el-radio label="3">Alphabetique A - B</el-radio>
                        <el-radio label="4">Alphabetique B - A</el-radio>
                        <el-radio label="5">Prix croissant</el-radio>
                        <el-radio label="6" class="w-full">Prix décroissant</el-radio>
                    </el-radio-group>
                </div>
            </el-drawer>
        </div>
    </div>

    <el-row :gutter="16">
        <el-col v-for="article in articlesList" :key="article" :span="6" class="mb-4">
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
const drawer = ref(false)
const search = ref('')

onMounted(async () => {
    getArticles()
})

watch(search, (newSearch) => {
  search.value = newSearch
})

const articlesList = computed(() => {
    if (search.value !== '') {
        return dataTest.value.filter((item) =>
        item.title.includes(search.value) ||
        item.title.toLowerCase().includes(search.value) ||
        item.title.toUpperCase().includes(search.value))
    } else {
        return dataTest.value
    }
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
const salutation = computed(() => (heure >= 5 && heure < 12 ? 'Bonsoir' : 'Bonjour'))

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
}
</style>
