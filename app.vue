<template>
  <div class="common-layout">
  <el-container class="px-6 py-4 h-screen">
    <!-- Menu -->
    <client-only>
      <el-header>
        <nav>
          <el-menu 
            default-active="/"
            mode="horizontal"
            :ellipsis="false"
            :router="true"
            class="h-12"
          >
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
            <el-menu-item  @click="openDialog = true">
              <Icon name="ep:user-filled" size="20" />
            </el-menu-item>
            <div  v-if="renderComponent" @click="userStore.reset()">isLogged</div>
          </el-menu>
        </nav>
      </el-header>
    </client-only>
    <!-- Main -->
    <el-main>
      <NuxtPage />
    </el-main>
    <el-footer>
      Bas de page
    </el-footer>
  </el-container>
</div>
  <!-- Dialog -->
  <el-dialog v-model="openDialog" width="400" :destroy-on-close="true" :close="activeName = 'signIn'">
    <article class="text-center">
      <h2 class="text-2xl">Connecte-toi ou crée ton compte</h2>
      <p class="mb-4">{{ handleDescription }}</p>
    </article>
    <el-tabs v-model="activeName" :stretch="true">
      <el-tab-pane label="Connexion" name="signIn">
        <SignInForm @go-to-dashboard="openDialog = false"/>
      </el-tab-pane>
      <el-tab-pane label="Inscription" name="signUp">
        <SignUpForm @confirmation-message="activeName = 'signIn'" />
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
<script setup>
import SignInForm from '~/components/authentification/SignInFrom.vue';
import SignUpForm from '~/components/authentification/SignUpForm.vue';
// import { useUserStore } from '~/stores/user.js'
// import Module from '/services/user.js'
// const userStore = useUserStore()
// const logout = userStore.reset()
// const currentUser = await Module.getCurrentUser()
// const verification = await ref(currentUser.length)
// const isLogged = ref(true)
// console.log(isLogged.value)
const activeName = ref('signIn')
const openDialog = ref(false)
const handleDescription = computed(() => {
  return activeName.value === 'signIn' ? 'Saisie tes identifiant afin d\'accéder à ton espace' : 'Saisie tes informations afin de créer un compte'
})
</script>