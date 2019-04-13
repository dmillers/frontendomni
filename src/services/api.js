import axios from 'axios'

const api = axios.create({
    baseURL: "https://omnistack-miller.herokuapp.com",
})

export default api