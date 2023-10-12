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
            <ArticlesFilters
                v-model="filters"
                @refresh="confirmFilters"
                @update:model-value="handleFilters"
            />
        </div>
    </div>

    <el-row :gutter="16">
        <el-col v-for="article in articlesList" :key="article" :span="6" class="mb-4">
            <el-card>
                <div class="flex flex-col gap-1">
                    <div class="font-semibold">{{ article.title }}</div>
                    <!-- <p class="paragraph">
                        {{ article.description }}
                    </p> -->
                    <div class="text-sm">Le {{ handleDateFormat(article.created_at) }}</div>
                </div>
                <div class="flex flex-row gap-2">
                    <UpdateArticleDialog :article-infos="article" @refresh="refreshArticles()" />
                    <DeleteArticleDialog :article-infos="article" @refresh="refreshArticles()" />
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script setup>
import jwt_decode from 'jwt-decode'
import Module from '/services/articles.service.js'
import AddArticleDialog from '/components/articles/AddArticleDialog.vue'
import UpdateArticleDialog from '/components/articles/UpdateArticleDialog.vue'
import DeleteArticleDialog from '/components/articles/DeleteArticleDialog.vue'

useHead({
    title: 'The Ficus - Tableau de bord',
    meta: [{ name: 'description', content: 'My amazing site.' }],
})

const cookie = useCookie('user')
const token = cookie.value
const currentUser = jwt_decode(token)
const dataTest = ref([])

const filters = ref('newest')
const search = ref('')

const heure = new Date().getHours()

onMounted(async () => {
    getArticles()
})

watch([search], ([newSearch]) => {
    search.value = newSearch
})

const salutation = computed(() => (heure >= 5 && heure < 12 ? 'Bonsoir' : 'Bonjour'))

const articlesList = computed(() => {
    if (search.value !== '') {
        return dataTest.value.filter(
            (item) =>
                item.title.includes(search.value) ||
                item.title.toLowerCase().includes(search.value) ||
                item.title.toUpperCase().includes(search.value)
        )
    } else {
        return dataTest.value
    }
})

const getArticles = async () => {
    const data = await Module.getArticles(filters.value)
    dataTest.value = data.filter((item) => item.id_user === currentUser.id_user)
}

const refreshArticles = async () => {
    const data = await Module.getArticles(filters.value)
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

const handleFilters = async (value) => {
    filters.value = value
}

const confirmFilters = () => {
    refreshArticles()
}
</script>
<style lang="scss">
.el-card {
    height: 100%;
    &__body {
        height: 100%;
        display: flex;
        gap: 24px;
        flex-direction: column;
        justify-content: space-between;

        .paragraph {
            overflow: hidden;
            max-height: 8rem;
            -webkit-box-orient: vertical;
            display: block;
            display: -webkit-box;
            overflow: hidden !important;
            text-overflow: ellipsis;
            -webkit-line-clamp: 4;
        }
    }
}
</style>
