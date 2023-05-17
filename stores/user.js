import Module from '/services/user.js'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const users = ref([])
  const currentUser = ref(undefined)

  const getAllUsers = async () => {
    const allUsers = await Module.getUsers()
    users.value = allUsers
  }

  const setCurrentUser = async (data) => {
    currentUser.value = data
    console.log(data)
  }

  const getCurrentUser = async () => {
    const currentUser = await Module.getCurrentUser()
    currentUser.value = currentUser
  }

  const reset = () => {
    currentUser.value = undefined
  }

  return  {
    users,
    currentUser,
    getAllUsers,
    getCurrentUser,
    setCurrentUser,
    reset,
  }
})
