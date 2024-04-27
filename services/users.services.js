import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const token = localStorage.getItem('jwt_token')

const userService = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
})

const api = 'http://localhost:8080'

const getUsers = async () => {
    const response = await userService.get('/users')
    return response.data
}

const findUser = async (id) => {
    try {
        const { data } = await useFetch(`${api}/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        return data.value
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (username, name, email, password) => {
    await userService.post(
        '/users',
        {
            username: username,
            name: name,
            email: email,
            password: password,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}

// updateUser: async (id, username, name, email, password) => {
//     let body = {}
//     if (password === null) {
//         body = { username: username, name: name, email: email }
//     } else {
//         body = {
//             username: username,
//             name: name,
//             email: email,
//             password: password,
//         }
//     }

//     await userService.patch(`/user/${id}/update`, body, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//             Accept: 'application/json',
//         },
//     })
// },

// deleteUser: (id) => {
//     userService.delete(`/user/${id}/delete`)
// },

const authentification = async (username, password) => {
    const response = await userService.post('/signin', {
        username: username,
        password: password,
    })
    return response.data
}

const checkEmail = async (email) => {
    try {
        const response = await userService.post(
            '/check-email',
            {
                email: email,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )

        return response
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

const checkUsername = async (username) => {
    try {
        const response = await userService.post(
            '/check-username',
            {
                username: username,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )

        return response
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

export { getUsers, createUser, checkEmail, checkUsername, authentification, findUser }
