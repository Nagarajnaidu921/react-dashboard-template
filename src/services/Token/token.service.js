const tokenKey = 'access_token';

class TokenServ {
    set token(token) {
        localStorage.setItem(tokenKey, token)
    }

    get token() {
        return localStorage.getItem(tokenKey);
    }

    removerToken() {
        localStorage.removeItem(tokenKey);
    }
}

export default new TokenServ();