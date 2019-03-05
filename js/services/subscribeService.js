let subscribeService = (() => {
    function subscribe(date, email) {
        const endpoint = 'Subscribers';

        let data = {
            date: date,
            email: email
        };

        return remoteService.post('appdata', endpoint, 'kinvey', data)
    }

    return {
        subscribe
    }
})();