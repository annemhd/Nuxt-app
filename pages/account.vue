<template>
    <h1 class="text-3xl">Tableau de bord</h1>
    <el-tabs tab-position="top" class="tabs">
        <el-tab-pane label="Mes informations" class="flex justify-center">
            <div class="sm:w-full lg:w-1/3">
                <el-form class="grid grid-cols-2 gap-2 mt-6">
                    <el-input placeholder="pseudonyme" class="col-span-2" />
                    <el-input placeholder="prenom" />
                    <el-input placeholder="Nom" />
                    <el-input placeholder="email" class="col-span-2" />
                    <el-input placeholder="mot de passe" />
                    <el-input placeholder="confirmation du mot de passe" />
                    <el-button type="primary" class="col-span-2 mt-4"
                        >Modifier mes informations</el-button
                    >
                </el-form>
            </div>
        </el-tab-pane>
        <el-tab-pane label="Mes ventes">Mes ventes</el-tab-pane>
    </el-tabs>
</template>
<script setup>
import jwt_decode from 'jwt-decode'

useHead({
    title: 'The Ficus - Mon compte',
    meta: [{ name: 'description', content: 'My amazing site.' }],
})

const cookie = useCookie('user')
const token = cookie.value
const currentUser = jwt_decode(token)
</script>

<style lang="scss">
.el-tabs__nav-wrap {
    overflow: hidden;
    margin-bottom: -1px;
    position: relative;
    display: flex;
    justify-content: center;
}
</style>
