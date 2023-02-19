import axios from 'axios';

export const authApi = axios.create({
    baseURL: 'http://localhost:4000/api/user'

    // https://liveflow-backend-production.up.railway.app/api/user/
})
