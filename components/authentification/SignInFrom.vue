<template>
    <el-form class="flex flex-col mb-4">
        <el-input v-model="email" type="text" name="email" placeholder="Email" class="mb-2" :validate-event="false"/>
        <el-input v-model="password" type="password" name="password" placeholder="Mot de passe" class="mb-4" show-password/>
        <div class="flex justify-center">
            <el-button type="primary" size="large" @click="submitForm" :disabled="disabled">Se connecter</el-button>
        </div>
    </el-form>
</template>
<script setup>
import Module from '/services/user.js'
import { useUserStore } from '~/stores/user.js'
import crypto from 'crypto-js'

// definePageMeta({
//     auth: {
//         unauthenticatedOnly: true,
//         navigateAuthenticatedTo: '/',
//     }
// })

const router = useRouter()
const userStore = useUserStore()
const email = ref(null)
const password = ref(null)
const errors = ref([])
const disabled = computed(() => { return email.value && password.value ? false : true })
// const { status, data, signIn, signOut } = useAuth()
// await signIn() // Sign in the user
// await signOut() // Sign out the user
console.log('status :', status.value)
console.log('data :', data.value)
const emit = defineEmits(['goToDashboard'])
const validEmail = (email) => {
     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}
const submitForm = async (e) => {
    errors.value = []
    !email.value ? errors.value.push('Saisis ton email') : null
    !validEmail(email.value) ? errors.value.push('L\'email est invalide') : null
    !password.value ? errors.value.push('Saisis un mot de passe') : null
    !errors.value.length ? true : false
    e.preventDefault()
    if (errors.value.length === 0) {
        try {
            const hashPwd = crypto.MD5(password.value).toString()
            const user = await Module.authentification(email.value, hashPwd)
            console.log(user)
            // userStore.setCurrentUser(await Module.authentification(email.value, hashPwd))
            // await signIn('credentials', { email: user.email, password: user.password })
            // router.push({ path: "/dashboard" });
        } catch(e) {
            console.log('nope')
        }
    }
}
</script>
