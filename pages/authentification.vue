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

                <div v-if="item.key === 'signIn'" class="space-y-3">
                    <UForm
                        :validate="validateSignIn"
                        :state="signInForm"
                        class="space-y-4"
                        @submit="handleSignIn"
                        @error="onError"
                    >
                        <UFormGroup name="email">
                            <UInput
                                v-model="signInForm.email"
                                placeholder="Email"
                                icon="i-heroicons-envelope"
                            />
                        </UFormGroup>
                        <UFormGroup name="password">
                            <UInput
                                v-model="signInForm.password"
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
                </div>
                <div v-else-if="item.key === 'signUp'" class="space-y-3">
                    <UForm
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
                            />
                        </UFormGroup>
                        <UFormGroup name="email">
                            <UInput
                                v-model="signUpForm.email"
                                type="text"
                                placeholder="Email"
                                icon="i-heroicons-envelope"
                            />
                        </UFormGroup>
                        <UFormGroup name="password">
                            <UInput
                                v-model="signUpForm.password"
                                type="password"
                                placeholder="Mot de passe (min. 8 caractères)"
                                icon="i-heroicons-lock-closed"
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
                </div>

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

const signInForm = reactive({ email: '', password: '' })
const signUpForm = reactive({
    name: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
})

const validateSignIn = async (signInForm) => {
    const errors = []
    if (!signInForm.email) errors.push({ path: 'email', message: 'Saissisez votre email' })
    if (!validEmail(signInForm.email))
        errors.push({ path: 'email', message: "L'email est invalide" })
    if (!signInForm.password)
        errors.push({ path: 'password', message: 'Saissisez votre mot de passe' })
    return errors
}

const validateSignUp = async (signInForm) => {
    const errors = []
    if (!signUpForm.name) errors.push({ path: 'name', message: 'Saissisez votre nom' })
    if (!signUpForm.username)
        errors.push({ path: 'username', message: "Saissisez votre nom d'utilisateur" })
    if (!signUpForm.email) errors.push({ path: 'email', message: 'Saissisez votre email' })
    if (!validEmail(signInForm.email))
        errors.push({ path: 'email', message: "L'email est invalide" })
    if (!signUpForm.password)
        errors.push({ path: 'password', message: 'Saissisez votre mot de passe' })
    if (!validPassword(signUpForm.password.value))
        errors.push({
            path: 'password',
            message:
                'Le mot de passe doit être de 8 caractères minimum, contenir 1 majuscule minimum et 1 chiffre minimum',
        })
    if (signUpForm.passwordConfirmation !== signUpForm.password)
        errors.push({
            path: 'passwordConfirmation',
            message: 'Les mots de passe ne sont identiques',
        })
    return errors
}

const validEmail = (email) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
}

const validPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return regex.test(password)
}

const onError = async (e) => {
    const element = document.getElementById(e.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const handleAuth = (key, form) => {
    if (key === 'signIn') {
        console.log(form)
    } else {
        console.log(form)
    }
}
</script>
