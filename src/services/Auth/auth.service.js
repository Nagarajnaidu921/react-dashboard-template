import axios from 'axios';

import  SettingsServ from '../Settings/settings.service';
import TokenServ from '../Token/token.service';

class AuthServ {
    HOST = SettingsServ.HOST;

    get isLoggedIn() {
        return TokenServ.token;
    }

    logout() {
        TokenServ.removerToken();
    }

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