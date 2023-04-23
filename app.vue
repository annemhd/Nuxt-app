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
    <el-footer>footers</el-footer>
    </el-container>
    <!-- Dialog -->
    <el-dialog v-model="openDialog" width="400" :destroy-on-close="true">
      <article class="text-center">
        <h2 class="text-2xl">Connecte-toi ou crée ton compte</h2>
        <p class="mb-4">{{ handleDescription }}</p>
      </article>
        <el-tabs v-model="activeName" :stretch="true">
          <el-tab-pane label="Connexion" name="signIn">
            <SignInForm />
          </el-tab-pane>
          <el-tab-pane label="Inscription" name="signUp">
            <SignUpForm />
          </el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>
<script setup>
import SignInForm from '~/components/authentification/SignInFrom.vue';
import SignUpForm from '~/components/authentification/SignUpForm.vue';
const activeIndex = ref('1')
const activeName = ref('signIn')
const openDialog = ref(false)
const handleDescription = computed(() => {
  return activeName.value === 'signIn' ? 'Saisie tes identifiant afin d\'accéder à ton espace' : 'Saisie tes informations afin de créer un compte'
})
</script>