<template>
    <UTabs :items="items" class="w-[400px]">
        <template #item="{ item }">
            <UCard
                @submit.prevent="
                    handleAuth(item.key, item.key === 'signIn' ? signInForm : signUpForm)
                "
            >
                <template #header>
                    <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        {{ item.label }}
                    </p>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {{ item.description }}
                    </p>
                </template>
                <UForm
                    v-if="item.key === 'signIn'"
                    :validate="validateSignIn"
                    :state="signInForm"
                    class="space-y-4"
                    @error="onError"
                >
                    <UFormGroup name="username">
                        <UInput
                            v-model="signInForm.username"
                            placeholder="Nom d'utilisateur"
                            icon="i-heroicons-envelope"
                        />
                    </UFormGroup>
                    <UFormGroup name="password">
                        <UInput
                            v-model="signInForm.password"
                            type="password"
                            placeholder="Mot de passe"
                            icon="i-heroicons-lock-closed"
                        />
                    </UFormGroup>
                    <div class="mt-4 text-sm">
                        <ULink
                            to="/forgot-password"
                            active-class="text-primary "
                            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                        >
                            Mot de passe oublié ?
                        </ULink>
                    </div>
                </UForm>
                <UForm
                    v-else-if="item.key === 'signUp'"
                    :validate="validateSignUp"
                    :state="signUpForm"
                    class="space-y-4"
                    @error="onError"
                >
                    <UFormGroup name="name">
                        <UInput
                            v-model="signUpForm.name"
                            type="text"
                            placeholder="Nom"
                            icon="i-heroicons-user"
                        />
                    </UFormGroup>
                    <UFormGroup name="username">
                        <UInput
                            v-model="signUpForm.username"
                            type="text"
                            placeholder="Nom d'utilisateur"
                            icon="i-heroicons-user"
                            @onkeypress="validationUsername"
                        />
                    </UFormGroup>
                    <UFormGroup name="email">
                        <UInput
                            v-model="signUpForm.email"
                            type="text"
                            placeholder="Email"
                            icon="i-heroicons-envelope"
                            @onkeypress="validationEmail"
                        />
                    </UFormGroup>
                    <UFormGroup name="password">
                        <UInput
                            v-model="signUpForm.password"
                            type="password"
                            placeholder="Mot de passe (min. 8 caractères)"
                            icon="i-heroicons-lock-closed"
                            show-password
                        />
                    </UFormGroup>
                    <UFormGroup name="passwordConfirmation">
                        <UInput
                            v-model="signUpForm.passwordConfirmation"
                            type="password"
                            placeholder="Confirmez votre mot de passe"
                            icon="i-heroicons-lock-closed"
                        />
                    </UFormGroup>
                </UForm>
                <template #footer>
                    <UButton color="primary" type="submit">
                        {{ item.key === 'signIn' ? 'Se connecter' : "S'inscrire" }}
                    </UButton>
                </template>
            </UCard>
        </template>
    </UTabs>
</template>
<script setup>
import { jwtDecode } from 'jwt-decode'

definePageMeta({
    middleware: 'dashboard',
})
import { createUser, checkEmail, checkUsername, authentification } from '~/services/users.services'

const toast = useToast()

const TOKEN = localStorage.getItem('jwt_token')

const items = [
    {
        key: 'signIn',
        label: 'Se connecter',
        description: 'Votre espace personnel vous attend. Connectez-vous dès maintenant.',
    },
    {
        key: 'signUp',
        label: "S'inscrire",
        description: "Rejoignez-nous et faites partie d'une communauté passionnante !",
    },
]

const signInForm = reactive({ username: '', password: '' })
const signUpForm = reactive({
    name: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
})

const validateSignIn = async (signInForm) => {
    const errors = []
    if (!signInForm.username)
        errors.push({ path: 'username', message: "Saissisez votre nom d'utilisateur" })
    // if (!validEmail(signInForm.email))
    //     errors.push({ path: 'email', message: "L'email est invalide" })
    if (!signInForm.password)
        errors.push({ path: 'password', message: 'Saissisez votre mot de passe' })
    return errors
}

const validateSignUp = async (signUpForm) => {
    const errors = []

    if (!signUpForm.name) errors.push({ path: 'name', message: 'Saissisez votre nom' })
    if (!signUpForm.username)
        errors.push({ path: 'username', message: "Saissisez votre nom d'utilisateur" })
    if (!signUpForm.email) errors.push({ path: 'email', message: 'Saissisez votre email' })
    if (!validEmail(signUpForm.email))
        errors.push({ path: 'email', message: "L'email est invalide" })
    if (!signUpForm.password)
        errors.push({ path: 'password', message: 'Saissisez votre mot de passe' })
    if (validPassword(signUpForm.password) === false)
        errors.push({
            path: 'password',
            message:
                'Le mot de passe doit être de 8 caractères minimum, contenir 1 majuscule minimum et 1 chiffre minimum',
        })
    if (signUpForm.passwordConfirmation !== signUpForm.password)
        errors.push({
            path: 'passwordConfirmation',
            message: 'Les mots de passe ne sont pas identiques',
        })
    return errors
}

const validationEmail = async () => {
    const res = await checkEmail(signUpForm.email)
    if (res) errors.push({ path: 'email', message: 'Le mail est deja utilisé' })
}

const validationUsername = async () => {
    const res = await checkEmail(signUpForm.email)
    if (res) errors.push({ path: 'email', message: "Le nom d'utilisateur est deja utilisé" })
}

const validEmail = (email) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regex.test(email)
}

const validPassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])[-+!*$@%_\w]{8,15}$/

    return regex.test(password.trim())
}

const onError = async (e) => {
    const element = document.getElementById(e.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const handleAuth = async (key, form) => {
    if (key === 'signIn') {
        try {
            const response = await authentification(form.username, form.password)
            localStorage.setItem('jwt_token', response.accessToken)
            const decode = jwtDecode(response.accessToken)
            console.log(decode.id)
            localStorage.setItem('user_id', JSON.stringify(decode.id))
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            createUser(form.username, form.name, form.email, form.password)
            toast.add({ title: 'Ton inscription a bien été prise en compte ! ' })
        } catch (error) {
            console.log(error)
        }
        console.log(form)
    }
}
</script>
