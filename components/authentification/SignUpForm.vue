<template>
    <el-input v-model="firstname" type="text" name="firstname" placeholder="Prénom" class="mb-2"/>
    <el-input v-model="lastname" type="text" name="lastname" placeholder="Nom" class="mb-2"/>
    <el-input v-model="email" type="text" name="email" placeholder="Email" class="mb-2"/>
    <el-input v-model="password" type="password" name="password" placeholder="Mot de passe" class="mb-2"/>
    <el-input v-model="passwordConfirmation" type="passwordConfirmation" name="passwordConfirmation"  placeholder="Confirmation du mot de passe" class="mb-2"/>
    <el-button type="primary" @click="submitForm">S'inscrire</el-button>
    <el-alert type="error">
        <template #title>Le formulaire est invalide</template>
        <ul class="list-disc">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
    </el-alert>
         
</template>
<script setup>
import Module from '/services/user.vue'

// const router = useRouter();
const errors = ref([])
const firstname = ref(null)
const lastname = ref(null)
const email = ref(null)
const password =  ref(null)
const passwordConfirmation = ref(null)

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
    !validPassword(password.value) ? errors.value.push('Le mot de passe doit être de 8 characteres minimum, contenir 1 majuscule minimum et 1 chiffre minimum') : null
    !passwordConfirmation.value ? errors.value.push('Les mot de passe sont différents') : null

    !errors.value.length ? true : false
    
    e.preventDefault()

    if (errors.value.length === 0) {
        Module.createUser(firstname.value, lastname.value, email.value, password.value) 
    }
}
</script>
