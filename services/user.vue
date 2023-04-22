<script>
import axios from 'axios'

const userService = axios.create({ baseURL: 'http://localhost:8080'});

export default {
     getAllUsers: async ()=> {
        try {
            const response = await userService.get('API/user');
            console.log(response.data);
        } catch (e) {
            console.log(e)
        }
    },

    findUser: async ()=> {
        try {
            const response = await userService.get('API/user');
            console.log(response.data);
        } catch (e) {
            console.log(e)
        }
    },

    createUser: async (firstname, lastname, email, password) => {
        try {
            const response = await userService.post('API/user', {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            });
            console.log(response.data);
        } catch (e) {
            console.log(e)
        }
    },

    updateUser: async (id)=> {
        try {
            const response = await userService.put(`API/user/${id}/update`, {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            });
            console.log(response.data);
        } catch (e) {
            console.log(e)
        }
    },

    deleteUser: async ()=> {
        try {
            const response = await userService.delete(`API/user/${id}/delete`);
            console.log(response.data);
        } catch (e) {
            console.log(e)
        }
    }
}

</script>

