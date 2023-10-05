import axios from 'axios'

const userService = axios.create({ baseURL: 'http://localhost:8080' })

export default {
    getUsers: async () => {
        const response = await userService.get('API/users')
        return response.data
    },

    findUser: (id) => {
        const response = userService.get(`API/user/${id}`)
        return response.data
    },

    createUser: (username, firstname, lastname, email, password) => {
        userService.post(
            'API/user',
            {
                username: username,
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
    },

    updateUser: async (id, username, firstname, lastname, email, password) => {
        let body = {}
        if (password === null) {
            body = { username: username, firstname: firstname, lastname: lastname, email: email }
        } else {
            body = {
                username: username,
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            }
        }

        await userService.patch(`API/user/${id}/update`, body, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json',
            },
        })
    },

    deleteUser: (id) => {
        userService.delete(`API/user/${id}/delete`)
    },

    authentification: async (email, password) => {
        const response = await userService.get('API/users')
        const filteredRes = response.data.filter(
            (user) => user.email === email && user.password === password
        )
        return filteredRes[0]
    },
}
