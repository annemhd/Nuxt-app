import axios from 'axios'

const fileService = axios.create({ baseURL: 'http://localhost:8080' })

export const getImages = async () => {
    const response = await fileService.get('ASSETS/files')
    return response.data
}

export const findImage = (name) => {
    const response = fileService.get(`ASSETS/file/${name}`)
    return response.data
}

export const uploadImage = (file) => {
    console.log(file)
    const formData = new FormData()
    formData.append('file', file, 'myImage.jpg')
    console.log(formData)
    // fileService
    //     .post(
    //         'ASSETS/upload',
    //         {
    //             formData,
    //         },
    //         {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         }
    //     )
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch((error) => {
    //         console.error('Error sending Blob:', error)
    //     })
}

const updateUser = async (id, username, firstname, lastname, email, password) => {
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
}

export const deleteUser = (name) => {
    fileService.delete(`ASSETS/file/${name}`)
}
