import axios from 'axios';
import { getSession } from 'next-auth/react';

const instance = axios.create({
    baseURL: "http://localhost:4507"
});

instance.interceptors.request.use( async (config) => {
    const session = await getSession()

    if(session?.accessToken){
        config.headers.Authorization = session.accessToken
    }

    return config
})

export default instance;