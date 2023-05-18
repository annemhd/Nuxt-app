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
        <div v-if="user === undefined" class="flex items-center cursor-pointer">
          <AuthDialog />
        </div>
        <div v-else class="flex items-center cursor-pointer">
          <Icon name="material-symbols:favorite" size="20" class="mr-4" />
          <Icon name="material-symbols:mail" size="20"  class="mr-4" />
          <el-dropdown trigger="click">
        <span class="el-dropdown-link">
         <Icon name="ep:user-filled" size="20" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Mon compte</el-dropdown-item>
            <el-dropdown-item @click="loggout">Déconnexion</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
        </div>
      </el-menu>
    </el-header>
    <el-main>
      <NuxtPage />
    </el-main>
    <el-footer>
      Bas de page
    </el-footer>
  </client-only>
</div>
</template>
<script setup>
import { deleteCookie } from "cookies-utils";
import AuthDialog from '~/components/authentification/AuthDialog.vue';
const index = ['/', '/market', '/forum', '/dashboard']
const u = useCookie("user")
const user = u.value
const loggout = () => {
  deleteCookie("user")
  window.location.replace("/")
}
</script>
