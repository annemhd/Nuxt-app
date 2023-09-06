<template>
    <el-menu
        :default-active="defaultActive"
        mode="horizontal"
        :ellipsis="false"
        :router="true"
        menu-trigger="click"
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
            <AuthDialog v-if="token === undefined"/>
        <el-menu-item v-if="token !== undefined" :index="index[3]" disabled>
            <el-button link
                ><el-badge :value="undefined"
                    ><Icon name="material-symbols:mail" size="20" class="text-black" /></el-badge
            ></el-button>
        </el-menu-item>
        <el-sub-menu v-if="token !== undefined" index="1">
            <template #title><Icon name="material-symbols:person-rounded" size="20" /></template>
            <el-menu-item :index="index[4]"
                ><Icon name="material-symbols:space-dashboard" size="20" class="mr-2" />Tableau de
                bord</el-menu-item
            >
            <el-menu-item :index="index[5]"
                ><Icon name="material-symbols:account-box" size="20" class="mr-2" />Mes
                infos</el-menu-item
            >
            <el-menu-item @click="signOut"
                ><span class="text-rose-400"
                    ><Icon name="material-symbols:logout" size="20" class="mr-2" />Déconnexion</span
                ></el-menu-item
            >
        </el-sub-menu>
    </el-menu>
</template>

<script setup>
import Cookie from 'js-cookie'
import AuthDialog from '~/components/authentification/AuthDialog.vue'

const index = ref(['/', '/marketplace', '/forum', '/discussion', '/dashboard', '/account'])
const router = useRouter()
const cookie = useCookie('user')
const token = cookie.value

const defaultActive = computed(() => {
    switch (router.currentRoute.value.path) {
        case '/':
            return index.value[0]
        case '/marketplace':
            return index.value[1]
        case '/forum':
            return index.value[2]
        case '/discussion':
            return index.value[3]
        case '/dashboard':
            return index.value[4]
        case '/account':
            return index.value[5]
        default:
            return index.value[4]
    }
})

const signOut = () => {
    Cookie.remove('user')
    window.location.replace('/')
}
</script>
<style>
.el-sub-menu .el-sub-menu__icon-arrow {
    display: none;
}
.el-sub-menu__title {
    padding-right: 20px;
}
</style>
