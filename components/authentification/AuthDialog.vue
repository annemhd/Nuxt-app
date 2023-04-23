<template>
  <div class="auth">
    <el-dialog v-model="props.visible" width="400" :destroy-on-close="true">
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
          <el-button @click="props.visible">Cancel</el-button>
          <el-button type="primary" @click="buttonClick()"> {{ buttonClick() }}</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import SignInForm from '~/components/authentification/SignInFrom.vue';
import SignUpForm from '~/components/authentification/SignUpForm.vue';
const activeName = ref('signIn')
const buttonClick = () => {
  activeName.value === 'signIn ' ? 'connexion' : 'inscription'
}
const props = defineProps({
    visible: Boolean
})
</script>
<style>
.auth .el-dialog__header {
    margin-right: 0;
  }
</style>