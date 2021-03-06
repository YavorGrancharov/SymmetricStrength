let commentController = (() => {
    function getComments() {
        $(document).ready(function () {
            let post_id = $('#id').val();
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
                                                                .append($('<input name="author-reply" value="" id="author-reply" type="text" placeholder="Име *">')))
                                                            .append($('<div class="contact-item"></div>')
                                                                .append($('<input name="email-reply" value="" id="email-reply" type="email" placeholder="По избор с е-поща в Gravatar">')))
                                                            // .append($('<div class="contact-item"></div>')
                                                            //     .append($('<input id="avatar" name="avatar" value="" type="text" placeholder="Avatar URL">')))
                                                            .append($('<div class="contact-item"></div>')
                                                                .append($('<textarea name="reply" id="reply" class="commentBox" placeholder="Коментар *"></textarea>')))
                                                            .append($('<div class="contact-item form-submit"></div>')
                                                                .append($('<input name="submit-reply" type="submit" id="submit-reply" class="submit" value="ИЗПРАТИ">')
                                                                    .on('click', function (event) {
                                                                        event.preventDefault();
                                                                        let id = _id;
                                                                        let date = formatDate(new Date());
                                                                        let author = $('#author-reply').val();
                                                                        let email = $('#email-reply').val();
                                                                        let avatar = '';
                                                                        let comment = $('#reply').val();
                                                                        let visible = false;
                                                                        let response = grecaptcha.getResponse();

                                                                        let validName = /^[a-zA-Z|а-яА-ЯЁё]{3,}((\s[a-zA-Z|а-яА-ЯЁё ])?[a-zA-Z|а-яА-ЯЁё]*)*$/gm;
                                                                        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
                                                                        //let validURL = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

                                                                        if (author === '') {
                                                                            alert('Въведете името си в предвиденото за това поле!');
                                                                            return;
                                                                        } else if (author.length < 3) {
                                                                            alert('Името трябва да бъде с дължина не по-малка от три букви!');
                                                                            return;
                                                                        } else if (!validName.test(author)) {
                                                                            alert('Името може да съдържа само букви!');
                                                                            return;
                                                                        }

                                                                        if (email !== '') {
                                                                            if (!validEmail.test(String(email).toLowerCase())) {
                                                                                alert('Въведете валидна е-поща!');
                                                                                return;
                                                                            } else {
                                                                                avatar = 'https://www.gravatar.com/avatar/' + md5(String(email).toLowerCase().trim());
                                                                            }
                                                                        } else {
                                                                            avatar = 'https://www.gravatar.com/avatar/' + md5(String(email).toLowerCase().trim()) + '?f=y';
                                                                        }

                                                                        // if (avatar !== '') {
                                                                        //     if (!validURL.test(avatar)) {
                                                                        //         alert('Въведете валидна връзка към изображение!');
                                                                        //         return;
                                                                        //     }
                                                                        // }

                                                                        if (comment === '') {
                                                                            alert('Въведете коментар в предвиденото за това поле!');
                                                                            return;
                                                                        } else if (comment.length < 5 || comment.length > 250) {
                                                                            alert('Коментарът трябва да бъде с дължина между 5 и 250 символа!');
                                                                            return;
                                                                        }

                                                                        if (response.length === 0) {
                                                                            alert( "Удостоверете с тикче квадратчето 'Не съм робот'" );
                                                                            return;
                                                                        } else {
                                                                            commentService.postReply(id, date, author, avatar, comment, visible).then(function () {
                                                                                alert("Благодарим Ви за коментара!");
                                                                                //window.location.reload(true);
                                                                                window.location.hash = 'current';
                                                                                $((commentReply).context.children[1]).remove();
                                                                                $(replyLink).show();
                                                                            });
                                                                        }

                                                                        $('#author-reply').val('');
                                                                        $('#email-reply').val('');
                                                                        //$('#avatar').val('');
                                                                        $('#reply').val('');
                                                                        grecaptcha.reset();
                                                                    }))
                                                                .append($('<input name="hide" type="submit" style="margin: 5px" id="hide" class="submit" value="ЗАТВОРИ">')
                                                                    .on('click', function (event) {
                                                                        event.preventDefault();
                                                                        $(replyLink).show();
                                                                        $((commentReply)[0].lastChild).remove();
                                                                    }))));
                                                    $(replyLink).hide();
                                                })))))));
                    commentService.getRepliesById(comment._id).then((replies) => {
                        let nodes = $('.comment');
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
                $(postComments)[0].innerHTML = comments.length + ' Коментари'
                if (comments.length === 1) {
                    $('.comment-list').prepend(`<h2 class="title"><span>${comments.length} Коментар</span></h2>`);
                } else {
                    $('.comment-list').prepend(`<h2 class="title"><span>${comments.length} Коментари</span></h2>`);
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
                let avatar = '';
                let comment = $('#comment').val();
                let response = grecaptcha.getResponse();

                let validName = /^[a-zA-Z|а-яА-ЯЁё]{3,}((\s[a-zA-Z|а-яА-ЯЁё ])?[a-zA-Z|а-яА-ЯЁё]*)*$/gm;
                let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
                //let validURL = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

                if (author === '') {
                    alert('Въведете името си в предвиденото за това поле!');
                    return;
                } else if (author.length < 3) {
                    alert('Името трябва да бъде с дължина не по-малка от три букви!');
                    return;
                } else if (!validName.test(author)) {
                    alert('Името може да съдържа само букви!');
                    return;
                }

                if (email !== '') {
                    if (!validEmail.test(String(email).toLowerCase())) {
                        alert('Въведете валидна е-поща!');
                        return;
                    } else {
                        avatar = 'https://www.gravatar.com/avatar/' + md5(String(email).toLowerCase().trim());
                    }
                } else {
                    avatar = 'https://www.gravatar.com/avatar/' + md5(String(email).toLowerCase().trim()) + '?f=y';
                }

                // if (avatar !== '') {
                //     if (!validURL.test(avatar)) {
                //         alert('Въведете валидна връзка към изображение!');
                //         return;
                //     }
                // }

                if (comment === '') {
                    alert('Въведете коментар в предвиденото за това поле!');
                    return;
                } else if (comment.length < 5 || comment.length > 250) {
                    alert('Коментарът трябва да бъде с дължина между 5 и 250 символа!');
                    return;
                }

                if (response.length === 0) {
                    alert( "Удостоверете с тикче квадратчето 'Не съм робот'" );
                    return;
                } else {
                    commentService.postComment(post_id, date, author, avatar, comment).then(function () {
                        alert("Благодарим Ви за коментара!");
                        window.location.hash = `${post_id}`;
                    });
                }

                $('#author').val('');
                $('#email').val('');
                $('#avatar').val('');
                $('#comment').val('');
                grecaptcha.reset();
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
        postComment
    }
})();