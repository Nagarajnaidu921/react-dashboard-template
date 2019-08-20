import axios from 'axios';

import  SettingsServ from '../Settings/settings.service';
import TokenServ from '../Token/token.service';
import { CallToActionSharp } from '@material-ui/icons';

class AuthServ {
    HOST = SettingsServ.HOST;

    API_URL = {
        signup: `${this.HOST}/api/auth/signup`,
        login: `${this.HOST}/api/auth/login`
    }

    get isLoggedIn() {
        return TokenServ.token;
    }

    logout() {
        TokenServ.removerToken();
    }

    getUserInfo() {
        const token = TokenServ.token || '';
        const [, tokenData, ] = token.split('.');
        try {
            const { id, firstName, lastName, email } =  JSON.parse(window.atob(tokenData));
            return { id, firstName, lastName, email }; 
        } catch(error) {
            console.log(error)
        }
    }

    async signUp(data) {
        return axios.post(this.API_URL.signup, data);
    }

    async login(data) {
        return axios.post(this.API_URL.login, data)
    }
}

export default new AuthServ();