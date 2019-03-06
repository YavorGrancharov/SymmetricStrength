let commentController = (() => {
    function getComments() {
        $(document).ready(function () {
            let post_id = $('#id').val();
            let len = 0;
            commentService.getCommentsById(post_id).then((comments) => {
                comments.forEach(comment => {
                    $('.comment-list')
                        .prepend($(`<li class="comment" id="${comment._id}"></li>`)
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
                                                    let _id = comment._id;
                                                    $(commentReply)
                                                        .append($('<form action="#/" method="post" class="contact" style="margin-top: 10px"></form>')
                                                            .append($('<div class="contact-item"></div>')
                                                                .append($('<input name="author" value="" id="author" type="text" placeholder="Your Name *" required>')))
                                                            .append($('<div class="contact-item"></div>')
                                                                .append($('<input name="email" value="" id="email" type="email" placeholder="Your Email *" required>')))
                                                            .append($('<div class="contact-item"></div>')
                                                                .append($('<input id="avatar" name="avatar" value="" type="text" placeholder="Avatar URL">')))
                                                            .append($('<div class="contact-item"></div>')
                                                                .append($('<textarea name="comment" id="comment" class="commentBox" placeholder="Коментар *" required></textarea>')))
                                                            .append($('<div class="contact-item form-submit"></div>')
                                                                .append($('<input name="submit" type="submit" id="submit" class="submit" value="Submit">')
                                                                    .on('click', function (event) {
                                                                        event.preventDefault();
                                                                        let id = _id;
                                                                        let date = formatDate(new Date());
                                                                        let author = $('#author').val();
                                                                        let email = $('#email').val();
                                                                        let avatar = $('#avatar').val();
                                                                        let comment = $('#comment').val();
                                                                        let visible = false;

                                                                        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
                                                                        let validURL = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

                                                                        if (author === '') {
                                                                            alert('Въведете името си в предвиденото за това поле!');
                                                                            return;
                                                                        } else if (author.length < 3) {
                                                                            alert('Името трябва да бъде с дължина не по-малка от три символа!');
                                                                            return;
                                                                        }

                                                                        if (!validEmail.test(String(email).toLowerCase())) {
                                                                            alert('Въведете валидна е-поща!');
                                                                            return;
                                                                        }

                                                                        if (avatar !== '') {
                                                                            if (!validURL.test(avatar)) {
                                                                                alert('Въведете валидна връзка към изображение!');
                                                                                return;
                                                                            }
                                                                        } else {
                                                                            avatar = '../static/images/helmet.png';
                                                                        }

                                                                        if (comment === '') {
                                                                            alert('Въведете коментар в предвиденото за това поле!');
                                                                            return;
                                                                        } else if (comment.length < 5 || comment.length > 250) {
                                                                            alert('Коментарът трябва да бъде с дължина между 5 и 250 символа!');
                                                                            return;
                                                                        }

                                                                        commentService.postReply(id, date, author, email, avatar, comment, visible).then(function () {
                                                                            alert("Благодарим Ви за коментара!");
                                                                            //window.location.reload(true);
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
                    commentService.getRepliesById(comment._id).then((replies) => {
                        let nodes = $('.comment');
                        len += replies.length;
                        replies.forEach(reply => {
                            for(let i = 0; i < nodes.length; i++) {
                                if (nodes[i].id === reply.id) {
                                    $(nodes[i])
                                        .append($('<ul class="children"></ul>')
                                            .prepend($(`<li class="comment" id="current"></li>`)
                                                .append($('<div class="comment-body"></div>')
                                                    .append($('<div class="comment-head"></div>')
                                                        .append($('<div class="comment-avatar"></div>')
                                                            .append($(`<img alt="avatar" src="${reply.avatar}">`)))
                                                        .append($('<div class="comment-info"></div>')
                                                            .append($(`<h5 class="title">${reply.author}</h5>`))
                                                            .append($(`<span class="comment-date">${reply.date}</span>`))))
                                                    .append($('<div class="comment-context"></div>')
                                                        .append($(`<p>${reply.comment}</p>`))))));
                                }
                            }
                        })
                    })
                });
                let postComments = $('.post-comments');
                $(postComments)[0].innerHTML = comments.length + ' Comments'
                if (comments.length === 1) {
                    $('.comment-list').prepend(`<h2 class="title"><span>${comments.length} Comment</span></h2>`);
                } else {
                    $('.comment-list').prepend(`<h2 class="title"><span>${comments.length + len} Comments</span></h2>`);
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

                let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
                let validURL = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

                if (author === '') {
                    alert('Въведете името си в предвиденото за това поле!');
                    return;
                } else if (author.length < 3) {
                    alert('Името трябва да бъде с дължина не по-малка от три символа!');
                    return;
                }

                if (!validEmail.test(String(email).toLowerCase())) {
                    alert('Въведете валидна е-поща!');
                    return;
                }

                if (avatar !== '') {
                    if (!validURL.test(avatar)) {
                        alert('Въведете валидна връзка към изображение!');
                        return;
                    }
                } else {
                    avatar = '../static/images/helmet.png';
                }

                if (comment === '') {
                    alert('Въведете коментар в предвиденото за това поле!');
                    return;
                } else if (comment.length < 5 || comment.length > 250) {
                    alert('Коментарът трябва да бъде с дължина между 5 и 250 символа!');
                    return;
                }

                commentService.postComment(post_id, date, author, email, avatar, comment).then(function () {
                    alert("Благодаря, че коментирахте!");
                    window.location.hash = `${post_id}`;
                });

                $('#author').val('');
                $('#email').val('');
                $('#avatar').val('');
                $('#comment').val('');
            });
        });
    }

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

    return {
        getComments,
        postComment,
        formatDate
    }
})();