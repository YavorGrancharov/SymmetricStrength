let messageService = (() => {
    function sendMessage(author, date, email, message) {
        const endpoint = 'Messages';

        let data = {
            author: author,
            date: date,
            email: email,
            // phone: phone || 'xxxx-xx-xx-xx',
            message: message
        }

        return remoteService.post('appdata', endpoint, 'kinvey', data);
    }

    return {
        sendMessage
    }
})();