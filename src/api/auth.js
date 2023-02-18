import axios from 'axios';

export const authApi = axios.create({
    baseURL: 'liveflow-backend-production.up.railway.app'
})