let userService = (() => {
    function getUser() {
        remoteService.get('user', '', 'kinvey').then((user) => {
            return user[0].username;
        })
    }

    return {
        getUser
    }
})();