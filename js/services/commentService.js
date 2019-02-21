let commentService = (() => {
    function getCommentsById(post_id) {
        const endpoint = `Comments?query={"post_id":"${post_id}"}&sort={"_kmd.ect": 1}`;

        return remoteService.get('appdata', endpoint, 'kinvey');
    }

    function postComment(post_id, date, author, email, avatar, comment) {
        const endpoint = 'Comments';

        let data = {
            post_id: post_id,
            date: date,
            author: author,
            email: email,
            avatar: avatar,
            comment: comment
        };

        return remoteService.post('appdata', endpoint, 'kinvey', data);
    }

    return {
        getCommentsById,
        postComment
    }
})();