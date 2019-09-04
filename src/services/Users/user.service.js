import axios from 'axios';
import  SettingsServ from '../Settings/settings.service';

class UserServ {
    HOST = SettingsServ.HOST;

    API_URL = {
        getAll: `${this.HOST}/api/user`,
        profileDetails: `${this.HOST}/api/user/profile`,
        profilepic: `${this.HOST}/api/user/profilepic/upload`,
    }
    
    getAllUsers() {
        return axios.get(this.API_URL.getAll);
    }

    uploadProfilePic(image) {
        const formdata = new FormData();
        formdata.append('avatar', image);
        return axios.post(this.API_URL.profilepic, formdata);
    }

    getProfileDetails() {
        return axios.get(this.API_URL.profileDetails);
    }
}

export default new UserServ();