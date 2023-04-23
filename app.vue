<template>
<el-container>
    <!-- Menu -->
    <el-header>
      <client-only>
      <nav>
        <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false">
            <el-menu-item index="1">
              <NuxtLink to="/">
                <Icon name="ep:home-filled" size="20"/>
                
              </NuxtLink>
            </el-menu-item>
            <el-menu-item index="2">
                <NuxtLink to="/articles">
                  <Icon name="material-symbols:potted-plant" size="20"/>
                  <span class="ml-2">la jardinerie</span>
                </NuxtLink>
            </el-menu-item>
            <div class="flex-grow"></div>
            <el-menu-item v-if="!userConnected" @click="openDialog = true">
              <span>
                <Icon name="ep:user-filled" size="20"/>
              </span>
            </el-menu-item>
            <el-menu-item v-else index="3">
              <span>
                <Icon name="ep:user-filled" size="20"/>
              </span>
            </el-menu-item>
        </el-menu>
      </nav>
      </client-only>

    </el-header>
    <!-- Main -->
    <el-main>
      <NuxtPage />
    </el-main>
    <el-footer></el-footer>
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
const userConnected = ref(false)
const handleDescription = computed(() => {
  return activeName.value === 'signIn' ? 'Saisie tes identifiant afin d\'accéder à ton espace' : 'Saisie tes informations afin de créer un compte'
})
</script>