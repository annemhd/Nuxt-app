import axios from 'axios'

const articleService = axios.create({ baseURL: 'http://localhost:8080' })

export default {
    getArticles: async () => {
        const response = await articleService.get('API/articles')
        return response.data
    },

    findArticle: (id) => {
        const response = articleService.get(`API/article/${id}`)
        return response.data
    },

    createArticle: (id_user, title, description, price, status) => {
        articleService.post(
            'API/article',
            {
                id_user: id_user,
                title: title,
                description: description,
                price: price,
                status: status,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
    },

    updateArticle: async (title, description, price, status) => {
        await articleService.patch(
            `API/article/${id}/update`,
            {
                title: title,
                description: description,
                price: price,
                status: status,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
    },

    deleteArticle: async (id) => {
        await articleService.delete(`API/article/${id}/delete`)
    },
}
