import axios from 'axios';
import  SettingsServ from '../Settings/settings.service';

class UserServ {
    HOST = SettingsServ.HOST;

    API_URL = {
        getAll: `${this.HOST}/api/user`,
    }
    
    getAllUsers() {
        return axios.get(this.API_URL.getAll);
    }
}

export default new UserServ();