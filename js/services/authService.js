let authService = (() => {
    function saveSession(userInfo) {
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
    }

    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    return {
        saveSession,
        isAuth
    }
})();