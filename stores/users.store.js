import Module from '/services/users.service.js'
import { defineStore } from 'pinia'
import jwt_decode from 'jwt-decode'

export const useUserStore = defineStore('user', () => {
    const users = ref([])
    const token = ref(useCookie('user'))
    const currentUser = ref(jwt_decode(token.value))

    const getAllUsers = async () => {
        const allUsers = await Module.getUsers()
        users.value = allUsers
    }

    return {
        users,
        currentUser,
        getAllUsers,
        token
    }
})
