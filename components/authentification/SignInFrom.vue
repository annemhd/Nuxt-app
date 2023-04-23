<template>
    <el-form class="mb-4">
        <el-input v-model="email" type="text" name="email" placeholder="Email" class="mb-2" :validate-event="false"/>
        <el-input v-model="password" type="password" name="password" placeholder="Mot de passe" class="mb-4"/>
        <div class="flex justify-center">
            <el-button type="primary" :disabled="disabled">Se connecter</el-button>
        </div>
    </el-form>
</template>
<script setup>
const email = ref(null)
const password =  ref(null)
const disabled = computed(() => { return email.value && password.value ? false : true })
</script>
