<template>
    <el-form class="mb-4">
        <el-input v-model="email" type="text" name="email" placeholder="Email" class="mb-2" :validate-event="false"/>
        <el-input v-model="password" type="password" name="password" placeholder="Mot de passe" class="mb-4"/>
        <div class="flex justify-center">
            <el-button type="primary" size="large" @click="submitForm" :disabled="disabled">Se connecter</el-button>
        </div>
    </el-form>
</template>
<script setup>
import Module from '/services/user.vue'
import bcrypt from 'bcryptjs'
const email = ref(null)
const password = ref(null)
const hashPassword = ref(null)
const errors = ref([])
const disabled = computed(() => { return email.value && password.value ? false : true })
const validEmail = (email) => {
     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}
const submitForm = (e) => {
    errors.value = []
    !email.value ? errors.value.push('Saisis ton email') : null
    !validEmail(email.value) ? errors.value.push('L\'email est invalide') : null
    !password.value ? errors.value.push('Saisis un mot de passe') : null
    !errors.value.length ? true : false
    e.preventDefault()
    if (errors.value.length === 0) {
        Module.authUser(email.value, hashPassword.value)
        email.value = null
        password.value =  null
    }
}
watch(password, (newX) => {
    hashPassword.value = bcrypt.hashSync(newX);
})
</script>
