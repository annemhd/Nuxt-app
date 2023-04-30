<template>   
  <ClientOnly>
    <el-header>
      <el-menu default-active="/" mode="horizontal" :ellipsis="false" :router="true" class="h-12">
        <el-menu-item index="/">
          <Icon name="ep:home-filled" size="20" />
        </el-menu-item>
        <el-menu-item index="/market">
          <Icon name="material-symbols:potted-plant" size="20" />
        </el-menu-item>
        <el-menu-item index="/forum" disabled>
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
  </ClientOnly>
</template>
<script setup lang="ts">
import AuthDialog from '~/components/authentification/AuthDialog.vue';
</script>