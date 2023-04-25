<script>
import axios from 'axios'
import MD5 from 'crypto-js/MD5';

const userService = axios.create({ baseURL: 'http://localhost:8080'});

export default {
     getUsers: async ()=> {
        const response = await userService.get('API/user')
        return response.data
    },

    findUser: (id)=> {
        userService.get(`API/user/${id}`)
        return response.data
    },

    createUser: (firstname, lastname, email, password) => {
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

    authUser: async (email, password) => {
        password = MD5(password)
        const response = await userService.get(`API/auth?email=${email}&password=${password}`,
        {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        })
        return response.data
    }
}

</script>

