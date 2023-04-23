<template>
    <el-form class="mb-4">
        <el-input v-model="firstname" type="text" name="firstname" placeholder="Prénom" class="mb-2"/>
        <el-input v-model="lastname" type="text" name="lastname" placeholder="Nom" class="mb-2"/>
        <el-input v-model="email" type="text" name="email" placeholder="Email" class="mb-2"/>
        <el-input v-model="password" type="password" name="password" placeholder="Mot de passe" class="mb-2" show-password/>
        <el-input v-model="passwordConfirmation" type="password" name="passwordConfirmation"  placeholder="Confirmation du mot de passe" show-password/>
        <div class="flex justify-center">
            <el-button type="primary" size="large" @click="submitForm" :disabled="disabled" v-popover="popoverRef" class="mt-4">S'inscrire</el-button>
        </div>
    </el-form>
    <div v-if="errorsAlert" class="mt-4">
        <el-alert title="Les informations saisies sont invalides" type="error">
            <ul class="list-disc list-inside">
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </el-alert>
    </div>
</template>
<script setup>
import Module from '/services/user.vue'
const popoverRef = ref()
const errors = ref([])
const errorsAlert = computed(() => { return errors.value.length !== 0 })
const firstname = ref(null)
const lastname = ref(null)
const email = ref(null)
const password =  ref(null)
const passwordConfirmation = ref(null)
const disabled = computed(() => { return firstname.value && lastname.value && email.value && password.value && passwordConfirmation.value ? false : true })
const validEmail = (email) => {
     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}
const validPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
}
const submitForm = (e) => {
    errors.value = []
    !firstname.value ? errors.value.push('Saissisez votre prénom') : null
    !lastname.value ? errors.value.push('Saissisez votre nom') : null
    !email.value ? errors.value.push('Saissisez votre email') : null
    !validEmail(email.value) ? errors.value.push('L\'email est invalide') : null
    !password.value ? errors.value.push('Saissisez un mot de passe') : null
    !validPassword(password.value) ? errors.value.push('Le mot de passe doit être de 8 caractères minimum, contenir 1 majuscule minimum et 1 chiffre minimum') : null
    !passwordConfirmation.value ? errors.value.push('Les mot de passe sont différents') : null
    !errors.value.length ? true : false
    e.preventDefault()
    if (errors.value.length === 0) {
        Module.createUser(firstname.value, lastname.value, email.value, password.value) 
    }
}
</script>