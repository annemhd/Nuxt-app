import axios from 'axios'
import MD5 from 'crypto-js/MD5';

const userService = axios.create({ baseURL: 'http://localhost:8080'});

export default {
     getUsers: async ()=> {
        const response = await userService.get('API/users')
        return response.data
    },

    findUser: (id)=> {
        const response = userService.get(`API/user/${id}`)
        return response.data
    },

    createUser: (firstname,  lastname, email, password) => {
        userService.post('API/user', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        },
        {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        }
        )
    },

    updateUser: async (id, firstname, lastname, email, password)=> {
        await userService.put(`API/user/${id}/update`, {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
        },
        {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        }
        )
    },

    deleteUser: (id)=> {
        userService.delete(`API/user/${id}/delete`)
    },

    authentification: async (email, password) => {
        const response = await userService.get('API/users')
        const filteredRes = response.data.filter(user => user.email === email && user.password === password)
        return filteredRes[0]
    },

    setCurrentUser: async (body) => {
        await userService.post('API/current-user/create', {
            id: body.id,
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: body.password,
        },
        {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        })
    },

    getCurrentUser: async () => {
        const response = await userService.get('API/current-user')
        return response
    }
}
