import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bth-back-end.herokuapp.com'
})

export default api;