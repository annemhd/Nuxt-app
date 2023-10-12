import axios from 'axios'

const fileService = axios.create({ baseURL: 'http://localhost:8080' })

export default {
    getImages: async () => {
        const response = await fileService.get('ASSETS/files')
        return response.data
    },

    findImage: (name) => {
        const response = fileService.get(`ASSETS/file/${name}`)
        return response.data
    },

    uploadImage: (file) => {
        fileService.post(
            'ASSETS/upload',
            {
                file: file,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
    },

    // updateUser: async (id, username, firstname, lastname, email, password) => {
    //     let body = {}
    //     if (password === null) {
    //         body = { username: username, firstname: firstname, lastname: lastname, email: email }
    //     } else {
    //         body = {
    //             username: username,
    //             firstname: firstname,
    //             lastname: lastname,
    //             email: email,
    //             password: password,
    //         }
    //     }

    //     await userService.patch(`API/user/${id}/update`, body, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //             Accept: 'application/json',
    //         },
    //     })
    // },

    deleteUser: (name) => {
        fileService.delete(`ASSETS/file/${name}`)
    },
}
