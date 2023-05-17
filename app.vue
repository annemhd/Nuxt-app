<template>
<div class="m-4">
  <client-only>
    <el-header>
      <el-menu :default-active="index[0]" mode="horizontal" :ellipsis="false" :router="true"  class="h-12">
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
        <div class="flex items-center cursor-pointer">
          <AuthDialog />
          <!-- <NuxtLink to="/login">Loooog</NuxtLink> -->
        </div>
        <!-- <div class="flex flex-row">
          <div class="flex items-center mr-8 text-gray-300 cursor-not-allowed">
            <Icon name="material-symbols:mail" size="20" />
          </div>
          <div class="flex items-center mr-8 text-gray-300 cursor-not-allowed">
            <Icon name="material-symbols:favorite" size="20" />
          </div>
          <div class="flex items-center mr-4">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link text-gray-950 hover:text-sky-400">
                <Icon name="ep:user-filled" size="20"/>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item ><a :href="index[3]" handleClose>Mon compte</a></el-dropdown-item>
                  <el-dropdown-item @click="logout">Déconnexion</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div> -->
      </el-menu>
    </el-header>
    <el-main>
      <NuxtPage />
    </el-main>
    <el-footer>
      Bas de page
      <!-- <div>{{ token || 'no token present, are you logged in?' }}</div> -->
    </el-footer>
  </client-only>
</div>
</template>
<script setup>
import AuthDialog from '~/components/authentification/AuthDialog.vue';
import { useUserStore } from '~/stores/user.js'
const index = ['/', '/market', '/forum', '/dashboard']
const userStore = useUserStore()
const logout = () => {
  userStore.reset()
}
</script>
