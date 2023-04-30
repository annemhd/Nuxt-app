<template>   
  <client-only>
    <el-header>
      <el-menu :default-active="index[0]" mode="horizontal" :ellipsis="false" :router="true" class="h-12">
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
        <el-menu-item>
          <AuthDialog />
        </el-menu-item>
          <!-- <div @click="userStore.reset()">isLogged</div> -->
      </el-menu>
    </el-header>
    <el-main>
      <NuxtPage />
    </el-main>
    <el-footer>
      Bas de page
    </el-footer>
  </client-only>
</template>
<script setup>
import AuthDialog from '~/components/authentification/AuthDialog.vue';
const index = ['/', '/market', '/forum']
</script>