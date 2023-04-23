<template>
  <el-container>
    <!-- Menu -->
    <el-header>
      <el-menu :default-active="activeIndex" mode="horizontal">
        <el-menu-item index="1">
          <NuxtLink to="/">Accueil</NuxtLink>
        </el-menu-item>
        <el-menu-item @click="openDialog = true">Mon compte</el-menu-item>
      </el-menu>
    </el-header>
    <!-- Main -->
    <el-main>
      <NuxtPage />
    </el-main>
    <!-- Dialog -->
    <el-dialog v-model="openDialog" width="400" :destroy-on-close="true">
      <template #header>
        <el-tabs v-model="activeName" class="mb-4">
          <el-tab-pane label="Connexion" name="signIn">
            <SignInForm />
          </el-tab-pane>
          <el-tab-pane label="Inscription" name="signUp">
            <SignUpForm />
          </el-tab-pane>
        </el-tabs>
      </template>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="openDialog = false">hbvjhbhb</el-button>
        </span>
      </template>
    </el-dialog>
  </el-container>
</template>
<script setup>
  import SignInForm from '~/components/authentification/SignInFrom.vue';
  import SignUpForm from '~/components/authentification/SignUpForm.vue';
  const activeIndex = ref('1')
  const activeName = ref('signIn')
  const openDialog = ref(false)
</script>