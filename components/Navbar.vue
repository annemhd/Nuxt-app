<template>
    <el-menu
        :default-active="index[0]"
        mode="horizontal"
        :ellipsis="false"
        :router="true"
        class="h-12"
    >
        <el-menu-item :index="index[0]">
            <Icon name="ep:home-filled" size="20" />
        </el-menu-item>
        <el-menu-item :index="index[1]">
            <Icon name="material-symbols:potted-plant" size="20" />
        </el-menu-item>
        <el-menu-item :index="index[2]" disabled>
            <Icon name="material-symbols:groups-rounded" size="20" />
        </el-menu-item>
        <div class="flex-grow"></div>
        <div v-if="token === undefined" class="flex items-center cursor-pointer">
            <AuthDialog />
        </div>
        <div v-else class="flex items-center cursor-pointer">
            <Icon name="material-symbols:favorite" size="20" class="mr-4" />
            <Icon name="material-symbols:mail" size="20" class="mr-4" />
            <Icon name="material-symbols:space-dashboard" size="20" class="mr-4" />
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <Icon name="ep:user-filled" size="20" />
                </span>
                <template #dropdown>
                    <el-dropdown-menu class="flex flex-col min-w-44">
                        <span class="px-4 py-2 text-sm"
                            >{{ salutation() }} {{ user.firstname }} !</span
                        >
                        <el-dropdown-item>Mon compte</el-dropdown-item>
                        <el-dropdown-item @click="loggout">Déconnexion</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-menu>
</template>

<script setup>
import jwt_decode from 'jwt-decode'
import Cookie from 'js-cookie'
import AuthDialog from '~/components/authentification/AuthDialog.vue'
const index = ['/', '/market', '/forum', '/dashboard']
const cookie = useCookie('user')
var token = cookie.value
var user = undefined
if (token) {
    user = jwt_decode(token)
}
const loggout = () => {
    Cookie.remove('user')
    window.location.replace('/')
}
var heure = new Date().getHours()

const salutation = () => {
    if (heure >= 5 && heure < 12) {
        return 'Bonjour'
    } else {
        return 'Bonsoir'
    }
}
</script>
