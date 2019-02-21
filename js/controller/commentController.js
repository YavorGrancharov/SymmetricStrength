let commentController = (() => {
    function getComments() {
        $(document).ready(function () {
            let post_id = $('#id').val();
            commentService.getCommentsById(post_id).then((comments) => {
                comments.forEach(comment => {
                    $('.comment-list')
                        .prepend($('<li class="comment"></li>')
                            .append($('<div class="comment-body"></div>')
                                .append($('<div class="comment-head"></div>')
                                    .append($('<div class="comment-avatar"></div>')
                                        .append($(`<img alt="avatar" src="${comment.avatar}">`)))
                                    .append($('<div class="comment-info"></div>')
                                        .append($(`<h5 class="title">${comment.author}</h5>`))
                                        .append($(`<span class="comment-date">${comment.date}</span>`))))
                                .append($('<div class="comment-context"></div>')
                                    .append($(`<p>${comment.comment}</p>`))
                                    .append($('<div class="reply"></div>')
                                        .append($('<span class="comment-reply"></span>')
                                            .append($('<a class="comment-reply-link" href="#">Reply</a>')
                                                .click(function (e) {
                                                    e.preventDefault();
                                                })))))));
                })
                if(comments.length === 1) {
                    $('.comment-list').prepend(`<h2 class="title"><span>${comments.length} Comment</span></h2>`);
                } else {
                    $('.comment-list').prepend(`<h2 class="title"><span>${comments.length} Comments</span></h2>`);
                }
            })
        });
    }

    function postComment(ctx) {
        $(document).ready(function () {
            $('#submit').click(function (e) {
                e.preventDefault();
                let post_id = $('#id').val();
                let date = formatDate(new Date());
                let author = $('#author').val();
                let email = $('#email').val();
                let avatar = $('#avatar').val();
                let comment = $('#comment').val();

                commentService.postComment(post_id, date, author, email, avatar, comment).then(function () {
                    alert("Thank you for commenting!");
                    location.reload();
                });

                $('#author').val('');
                $('#email').val('');
                $('#avatar').val('');
                $('#comment').val('');
            });
        });

        function formatDate(date) {
            let monthNames = [
                "Jan", "Feb", "Mar",
                "Apr", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct",
                "Nov", "Dec"
            ];

            let day = date.getDate();
            let monthIndex = date.getMonth();
            let year = date.getFullYear();

            return day + ' ' + monthNames[monthIndex] + ' ' + year;
        }
    }

    return {
        getComments,
        postComment
    }
})();