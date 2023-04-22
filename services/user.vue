<script>
import axios from 'axios'

const userService = axios.create({ baseURL: 'http://localhost:8080'});

export default {
     getAllUsers: async ()=> {
        const response = await userService.get('API/user');
        return response.data
    },

    findUser: (id)=> {
        userService.get(`API/user/${id}`);
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
    );
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
        });
    },

    deleteUser: (id)=> {
        userService.delete(`API/user/${id}/delete`);
    }
}

</script>

