<template>
    <form @submit="submitForm" >
        <fieldset >
            <legend>Inscription</legend>

            <label for="firstname">Prénom</label><br>
            <input v-model="firstname" type="text" name="firstname" /><br>

            <label for="lastname">Nom</label><br>
            <input v-model="lastname" type="text" name="lastname"><br>

            <label for="email">email</label><br>
            <input v-model="email" type="text" name="email"><br>

            <label for="password">password</label><br>
            <input v-model="password" type="password" name="password"><br>

            <label for="passwordConfirmation">password</label><br>
            <input v-model="passwordConfirmation" type="passwordConfirmation" name="passwordConfirmation"><br>
            <br>

            <button>S'inscrire</button>

              <p v-if="errors.length">
                <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </p>
        </fieldset>
    </form>

    <ul v-for="item in items" :key="item">
        <li>{{ item.password }}</li>
    </ul>
</template>

<script setup>

import Module from '/services/user.vue'

const errors = ref([])

const firstname = ref(null)
const lastname = ref(null)
const email = ref(null)
const password =  ref(null)
const passwordConfirmation = ref(null)
const noErrors = ref(null)

const submitForm = (e) => {
    console.log(noErrors.value)
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


const validEmail = (email) => {
     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    return regex.test(email);
}

const validPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
}

</script>
