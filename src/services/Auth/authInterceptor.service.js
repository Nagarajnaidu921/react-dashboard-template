
import { createBrowserHistory } from 'history';
import axios from 'axios';
import TokenServ from '../Token/token.service';

const history = createBrowserHistory();


export function init () {
    axios.interceptors.request.use((config) => {
        const token = TokenServ.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
        (error) => Promise.reject(error)
    );

    axios.interceptors.response.use((res) => res, (error) => {
        const res = error.response;
        if (res.status === 401) {
            TokenServ.token = '';
            history.push('/login');
        }
        return Promise.reject(error);
    })
}

