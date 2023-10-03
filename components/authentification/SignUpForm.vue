<template>
    <el-form class="grid grid-cols-2 gap-2">
        <el-input
            v-model="username"
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            class="col-span-2"
        />
        <el-row :gutter="8" class="col-span-2">
            <el-col :span="12">
                <el-input
                    v-model="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Prénom"
                    class=""
                />
            </el-col>
            <el-col :span="12">
                <el-input
                    v-model="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Nom"
                    class=""
                />
            </el-col>
        </el-row>
        <el-input v-model="email" type="text" name="email" placeholder="Email" class="col-span-2" />
        <el-input
            v-model="password"
            type="password"
            name="password"
            placeholder="Mot de passe"
            class="col-span-2"
            show-password
        />
        <el-input
            v-model="passwordConfirmation"
            type="password"
            name="passwordConfirmation"
            placeholder="Confirmation du mot de passe"
            class="col-span-2"
            show-password
        />
        <div class="flex justify-center col-span-2 mt-3">
            <el-button
                type="primary"
                size="large"
                @click="submitForm"
                :disabled="disabled"
                v-popover="popoverRef"
                class=""
                >S'inscrire</el-button
            >
        </div>
        <div v-if="errorsAlert" class="mt-4">
            <el-alert title="Les informations saisies sont invalides" type="error">
                <ul class="list-disc list-inside">
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </el-alert>
        </div>
    </el-form>
</template>
<script setup>
import Module from '/services/users.service.js'
import { ElMessageBox } from 'element-plus'
const popoverRef = ref()
const errors = ref([])
const errorsAlert = computed(() => {
    return errors.value.length !== 0
})
const username = ref(null)
const firstname = ref(null)
const lastname = ref(null)
const email = ref(null)
const password = ref(null)
const passwordConfirmation = ref(null)
const disabled = computed(() => {
    return firstname.value &&
        lastname.value &&
        email.value &&
        password.value &&
        passwordConfirmation.value
        ? false
        : true
})
const validEmail = (email) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
}
const validPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return regex.test(password)
}
const openMessageBox = () => {
    ElMessageBox.alert('Ton compte a bien été crée, ', 'Confirmation', {
        confirmButtonText: 'Se connecter',
        center: true,
    })
}
const submitForm = (e) => {
    errors.value = []
    !username.value ? errors.value.push("Saisis ton nom d'utilisateur") : null
    !firstname.value ? errors.value.push('Saisis ton prénom') : null
    !lastname.value ? errors.value.push('Saisis ton nom') : null
    !email.value ? errors.value.push('Saisis ton email') : null
    !validEmail(email.value) ? errors.value.push("L'email est invalide") : null
    !password.value ? errors.value.push('Saisis un mot de passe') : null
    !validPassword(password.value)
        ? errors.value.push(
              'Le mot de passe doit être de 8 caractères minimum, contenir 1 majuscule minimum et 1 chiffre minimum'
          )
        : null
    passwordConfirmation.value !== password.value
        ? errors.value.push('Les mots de passe sont différents')
        : null
    !errors.value.length ? true : false
    e.preventDefault()
    if (errors.value.length === 0) {
        Module.createUser(
            username.value,
            firstname.value,
            lastname.value,
            email.value,
            password.value
        )
        username.value = null
        firstname.value = null
        lastname.value = null
        email.value = null
        password.value = null
        passwordConfirmation.value = null
        emit('confirmationMessage')
        openMessageBox()
    }
}
</script>
