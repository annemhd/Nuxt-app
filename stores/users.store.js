import Module from '/services/users.service.js'
import { defineStore } from 'pinia'
import jwt_decode from 'jwt-decode'

export const useUserStore = defineStore('user', () => {
    const users = ref([])
    const cookie = useCookie('user')
    const token = cookie.value
    const currentUser = jwt_decode(token)

    const getAllUsers = async () => {
        const allUsers = await Module.getUsers()
        users.value = allUsers
    }

    return {
        users,
        currentUser,
        getAllUsers,
    }
})
