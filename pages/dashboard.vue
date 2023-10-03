<template>
    <span class="text-4xl"> {{ salutation }} {{ currentUser.firstname }} ! </span>
    <AddArticleDialog />
    <el-row class="gap-8 mt-4">
        <el-col v-for="article in articles" :key="article" :span="5">
            <el-card class="box-card flex">
                <div class="font-semibold">{{ article.title }}</div>
                <div class="">{{ article.description }}</div>
                <div class="text-sm">Le {{ handleDateFormat(article.created_at) }}</div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script setup>
    
import AddArticleDialog from '~/components/AddArticleDialog.vue'
import jwt_decode from 'jwt-decode'
import Module from '/services/articles.service.js'


const cookie = useCookie('user')
const token = cookie.value
const currentUser = jwt_decode(token)
// const currentUser = useUserStore()
const articles = await Module.getArticles()

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
<style>
.el-card .el-card__body {
    min-height: 150px !important;
}
</style>
