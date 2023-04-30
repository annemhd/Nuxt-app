<template>
  <div>
    <Icon name="ep:user-filled" size="20" @click="openDialog = true" />
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
    </div>
</template>

<script setup>
import SignInForm from '~/components/authentification/SignInFrom.vue';
import SignUpForm from '~/components/authentification/SignUpForm.vue';
const activeName = ref('signIn')
const openDialog = ref(false)
const handleDescription = computed(() => {
  return activeName.value === 'signIn' ? 'Saisie tes identifiant afin d\'accéder à ton espace' : 'Saisie tes informations afin de créer un compte'
})
</script>
