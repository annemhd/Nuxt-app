<template>   
    <!-- Menu -->
      <el-header>
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
            <el-menu-item @click="propsValue = true">
              <Icon name="ep:user-filled" size="20" />
            </el-menu-item>
            <div @click="userStore.reset()">isLogged</div>
          </el-menu>
      </el-header>
    
    <!-- Main -->
    <el-main>
      <NuxtPage />
    </el-main>
    <el-footer>
      Bas de page
    </el-footer>

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

  <AuthDialog :greeting-message="propsValue" @custom-event="handleEvent('test')"/>
</template>
<script setup>
import SignInForm from '~/components/authentification/SignInFrom.vue';
import SignUpForm from '~/components/authentification/SignUpForm.vue';
import AuthDialog from '~/components/authentification/AuthDialog.vue';
const activeName = ref('signIn')
const openDialog = ref(false)
const handleDescription = computed(() => {
  return activeName.value === 'signIn' ? 'Saisie tes identifiant afin d\'accéder à ton espace' : 'Saisie tes informations afin de créer un compte'
})

//
const propsValue = ref(false)
const handleEvent = (payload) => {
  propsValue.value = false
  console.log(payload)
}

const buttonClick = () => {
  console.log('emit')
}
</script>