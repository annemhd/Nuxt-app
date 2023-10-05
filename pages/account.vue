<template>
    <h1 class="text-3xl">Tableau de bord</h1>
    <el-tabs tab-position="top" class="tabs">
        <el-tab-pane label="Mes informations" class="flex justify-center">
            <div class="sm:w-full lg:w-1/3">
                <el-form class="grid grid-cols-2 gap-2 mt-6">
                    <p class="col-span-2">Modifier mes informations</p>
                    <el-input v-model="username" placeholder="pseudonyme" class="col-span-2" />
                    <el-input v-model="firstname" placeholder="prenom" />
                    <el-input v-model="lastname" placeholder="Nom" />
                    <el-input v-model="email" placeholder="email" class="col-span-2" />
                    <p class="col-span-2 mt-3">Modifier le mot de passe</p>
                    <el-input
                        v-model="password"
                        type="password"
                        placeholder="Mot de passe"
                        show-password
                        disabled
                    />
                    <el-input
                        v-model="passwordConfirmation"
                        type="password"
                        placeholder="Confirmation du mot de passe"
                        show-password
                        disabled
                    />
                    <el-button
                        type="primary"
                        class="col-span-2 mt-4"
                        @click.prevent="submitForm()"
                        :disabled="disabled"
                        >Modifier mes informations</el-button
                    >
                </el-form>
            </div>
        </el-tab-pane>
        <el-tab-pane label="Mes ventes">Mes ventes</el-tab-pane>
    </el-tabs>
</template>
<script setup>
import Module from '/services/users.service.js'
import Cookies from 'js-cookie'
import jwt from 'jwt-encode'
import jwt_decode from 'jwt-decode'
//import crypto from 'crypto-js'

useHead({
    title: 'The Ficus - Mon compte',
    meta: [{ name: 'description', content: 'My amazing site.' }],
})

const cookie = useCookie('user')
const token = cookie.value
const currentUser = jwt_decode(token)

const errors = ref([])

const username = ref(currentUser.username)
const firstname = ref(currentUser.firstname)
const lastname = ref(currentUser.lastname)
const email = ref(currentUser.email)
const password = ref(null)
const passwordConfirmation = ref(null)

const disabled = computed(() =>
    username.value !== currentUser.username ||
    firstname.value !== currentUser.firstname ||
    lastname.value !== currentUser.lastname ||
    email.value !== currentUser.email
        ? false
        : true
)

watch(username.value, (newX) => {
    console.log(`x is ${newX}`)
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

const submitForm = async () => {
    errors.value = []
    !username.value ? errors.value.push("Saisis ton nom d'utilisateur") : null
    !firstname.value ? errors.value.push('Saisis ton prénom') : null
    !lastname.value ? errors.value.push('Saisis ton nom') : null
    !email.value ? errors.value.push('Saisis ton email') : null
    !validEmail(email.value) ? errors.value.push("L'email est invalide") : null
    if (password.value !== null) {
        !validPassword(password.value) && password.value !== null
            ? errors.value.push(
                  'Le mot de passe doit être de 8 caractères minimum, contenir 1 majuscule minimum et 1 chiffre minimum'
              )
            : null
        passwordConfirmation.value !== password.value
            ? errors.value.push('Les mots de passe sont différents')
            : null
    }
    !errors.value.length ? true : false
    //e.preventDefault()
    try {
        if (errors.value.length === 0) {
            Module.updateUser(
                currentUser.id_user,
                username.value,
                firstname.value,
                lastname.value,
                email.value,
                password.value
            )
            Cookies.remove('user')
            setTimeout(async () => {
                const secret = 'xxx'
                /*if (password.value !== null) {
                    const hashPwd = crypto.MD5(password.value).toString()
                    const user = await Module.authentification(email.value, hashPwd)
                    const payload = user
                    const token = jwt(payload, secret)
                    Cookies.set('user', token)
                } else {
                    const user = await Module.authentification(email.value, currentUser.password)
                    const payload = user
                    const token = jwt(payload, secret)
                    Cookies.set('user', token)
                }*/
                const user = await Module.authentification(email.value, currentUser.password)
                const payload = user
                const token = jwt(payload, secret)
                Cookies.set('user', token)
            }, 1000)
        }
    } catch (e) {
        console.log(e)
    }
}
</script>

<style lang="scss">
.el-tabs__nav-wrap {
    overflow: hidden;
    margin-bottom: -1px;
    position: relative;
    display: flex;
    justify-content: center;
}
</style>
