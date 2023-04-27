import Module from '/services/user.js'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      users: Module.getUsers(),
      currentUser:  undefined,
    }
  },
  getters: {
    setCurrentUser: (state) => (firstname, lastname, email, password) => state.currentUser = {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
      }
  },
  actions: {
    save() {
      Module.setCurrentUser(this.currentUser.firstname, this.currentUser.lastname, this.currentUser.email, this.currentUser.password)
    },
    reset() {
      this.currentUser = undefined
      Module.destroyCurrentUser()
      console.log(this.currentUser)
    },
  },
})











