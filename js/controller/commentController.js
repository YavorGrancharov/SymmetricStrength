let commentController = (() => {
    function getComments() {
        $(document).ready(function () {
            let post_id = $('#id').val();
            commentService.getCommentsById(post_id).then((comments) => {
                comments.forEach(comment => {
                    $('.comment-list')
                        .prepend($(`<li class="comment" id="current"></li>`)
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
                                            .append($('<a class="comment-reply-link" href="#/">Reply</a>')
                                                .on('click', function (event) {
                                                    event.preventDefault();
                                                    let replyLink = $(this);
                                                    let commentReply = $(this.parentNode);
                                                    $(commentReply)
                                                        .append($('<form action="#/" method="post" class="contact" style="margin-top: 10px"></form>')
                                                            .append($('<div class="contact-item"></div>')
                                                                .append($('<input name="author" value="" id="author" type="text" placeholder="Your Name *" required>')))
                                                            .append($('<div class="contact-item"></div>')
                                                                .append($('<input name="email" value="" id="email" type="email" placeholder="Your Email *" required>')))
                                                            .append($('<div class="contact-item"></div>')
                                                                .append($('<input id="avatar" name="avatar" value="" type="text" placeholder="Avatar URL">')))
                                                            .append($('<div class="contact-item"></div>')
                                                                .append($('<textarea name="comment" id="comment" class="commentBox" placeholder="Your Comment *" required></textarea>')))
                                                            .append($('<div class="contact-item form-submit"></div>')
                                                                .append($('<input name="submit" type="submit" id="submit" class="submit" value="Submit">')
                                                                    .on('click', function (event) {
                                                                        event.preventDefault();
                                                                        let id = post_id;
                                                                        let date = new Date();
                                                                        let author = $('#author').val();
                                                                        let email = $('#email').val();
                                                                        let avatar = $('#avatar').val();
                                                                        let comment = $('#comment').val();

                                                                        commentService.postReply(post_id, date, author, email, avatar, comment).then(function () {
                                                                            alert("Thank you for commenting!");
                                                                            window.location.reload(true);
                                                                            window.location.hash = 'current';
                                                                            $((commentReply).context.children[1]).remove();
                                                                            $(replyLink).show();
                                                                        });
                                                                        $('#author').val('');
                                                                        $('#email').val('');
                                                                        $('#avatar').val('');
                                                                        $('#comment').val('');
                                                                    }))
                                                                .append($('<input name="hide" type="submit" style="margin: 5px" id="hide" class="submit" value="Close">')
                                                                    .on('click', function (event) {
                                                                        event.preventDefault();
                                                                        $(replyLink).show();
                                                                        $((commentReply)[0].lastChild).remove();
                                                                    }))));
                                                    $(replyLink).hide();
                                                })))))));
                });
                let postComments = $('.post-comments');
                // let postViews = $('.post-views');
                // $(postViews)[0].innerHTML = localStorage.getItem('visit_counter') + ' Views';
                $(postComments)[0].innerHTML = comments.length + ' Comments'
                if (comments.length === 1) {
                    $('.comment-list').prepend(`<h2 class="title"><span>${comments.length} Comment</span></h2>`);
                } else {
                    $('.comment-list').prepend(`<h2 class="title"><span>${comments.length} Comments</span></h2>`);
                }
            })
        });
    }

    function postComment() {
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
                    window.location.reload(true);
                    window.location.hash = `${post_id}`;
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
            let postDate = day + ' ' + monthNames[monthIndex] + ' ' + year;

            return postDate;
        }
    }

    return {
        getComments,
        postComment
    }
})();