import axios from 'axios';

import  SettingsServ from '../Settings/settings.service';

class AuthServ {
    HOST = SettingsServ.HOST;

    API_URL = {
        signup: `${this.HOST}/api/auth/signup`,
        login: `${this.HOST}/api/auth/login`
    }

    async signUp(data) {
        return axios.post(this.API_URL.signup, data);
    }

    async login(data) {
        return axios.post(this.API_URL.login, data)
    }
}

export default new AuthServ();