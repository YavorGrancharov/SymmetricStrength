let commentService = (() => {
    function getCommentsById(post_id) {
        const endpoint = `Comments?query={"post_id":"${post_id}","visible":true}&sort={"_kmd.ect": 1}`;

        return remoteService.get('appdata', endpoint, 'kinvey');
    }

    function postComment(post_id, date, author, avatar, comment, visible) {
        const endpoint = 'Comments';

        let data = {
            post_id: post_id,
            date: date,
            author: author,
            avatar: avatar,
            comment: comment,
            visible: false
        };

        return remoteService.post('appdata', endpoint, 'kinvey', data);
    }

    function getRepliesById(id) {
        const endpoint = `Replies?query={"id":"${id}","visible":true}&sort={"_kmd.ect": -1}`;

        return remoteService.get('appdata', endpoint, 'kinvey');
    }

    function postReply(id, date, author, avatar, comment, visible) {
        const endpoint = 'Replies';

        let data = {
            id: id,
            date: date,
            author: author,
            avatar: avatar,
            comment: comment,
            visible: false
        };

        return remoteService.post('appdata', endpoint, 'kinvey', data);
    }

    function countVisitsGet() {
        const endpoint = `Visits`;

        return remoteService.get('appdata', endpoint, 'kinvey');
    }

    function countVisitsPost(post_id, visits) {
        const endpoint = `Visits`;

        let data = {
            post_id: post_id,
            visits: visits
        };

        return remoteService.post('appdata', endpoint, 'kinvey', data);
    }

    return {
        getCommentsById,
        postComment,
        getRepliesById,
        postReply,
        countVisitsGet,
        countVisitsPost
    }
})();