<template>
    <el-form class="mb-4">
        <el-input v-model="firstname" type="text" name="firstname" placeholder="Prénom" class="mb-2"/>
        <el-input v-model="lastname" type="text" name="lastname" placeholder="Nom" class="mb-2"/>
        <el-input v-model="email" type="text" name="email" placeholder="Email" class="mb-2"/>
        <el-input v-model="password" type="password" name="password" placeholder="Mot de passe" class="mb-2" show-password/>
        <el-input v-model="passwordConfirmation" type="password" name="passwordConfirmation"  placeholder="Confirmation du mot de passe" show-password/>
        <div class="flex justify-center">
            <el-button type="primary" @click="submitForm" :disabled="disabled"  v-popover="popoverRef" class="mt-4">S'inscrire</el-button>
        </div>
    </el-form>
    <div class="mt-4">
        <el-popover
            ref="popoverRef"
            trigger="click"
            title="Le formulaire est invalide"
            virtual-triggering
            persistent
            width="308"
            show-arrow="false"
            class="alert"
        >
            <ul class="list-disc list-inside">
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
        </el-popover>
    </div>
</template>
<script setup>
import Module from '/services/user.vue'
const popoverRef = ref()
const errors = ref([])
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

<style lang="scss">
.el-popover {
	--el-popover-bg-color: var(--el-color-error-light-9);
	--el-popover-font-size: var(--el-font-size-small);
	--el-popover-border-color: var(--el-color-error-light-8);
	--el-popover-padding: 16px;
	--el-popover-padding-large: 18px 20px;
	--el-popover-title-font-size: 16px;
	--el-popover-title-text-color: var(--el-color-error);
	--el-popover-border-radius: 16px;

    &.el-popper.is-light {
        background: var(--el-popover-bg-color);
        border: 1px solid var(--el-popover-border-color);
        .el-popper__arrow {
            &::before {
                border: 1px solid var(--el-popover-border-color);
                background:var(--el-popover-bg-color);
                right: 0;
            }
        }
    }
    ul {
        font-size: var(--el-popover-font-size);
        color: var(--el-popover-title-text-color);
    }
}
.el-popover.el-popper {
	background: var(--el-popover-bg-color);
	min-width: 150px;
	border-radius: var(--el-popover-border-radius);
	border: 1px solid var(--el-popover-border-color);
	padding: var(--el-popover-padding);
	z-index: var(--el-index-popper);
	line-height: 1.4;
	text-align: left;
	font-size: var(--el-popover-font-size);
	box-shadow: var(--el-box-shadow-light);
	word-break: break-all;
	box-sizing: border-box;
	&:focus {
		outline-width: 0;
		&:active {
			outline-width: 0;
		}
	}
}

.el-popover.el-popper--plain {
	padding: var(--el-popover-padding-large);
}
.el-popover__title {
	font-size: var(--el-popover-title-font-size);
	line-height: 1;
	margin-bottom: 12px;
}
.el-popover__reference {
	&:focus {
		&:hover {
			outline-width: 0;
		}
		&:not(.focusing) {
			outline-width: 0;
		}
	}
}
</style>