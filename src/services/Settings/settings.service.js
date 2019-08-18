
class SettingsService {
    HOST = '//localhost:3001';

    constructor() {
        if(process.env.NODE_ENV === 'production') {
            this.HOST = '//api.hostname.com'
        }
    }
}

export default new SettingsService();