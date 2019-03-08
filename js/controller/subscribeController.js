let subscribeController = (() => {
    function subscribe() {
        $(document).ready(function () {
            let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;

            $('#subscribe_email').keydown(function (e) {
                let date = formatDate(new Date());
                let email = $('#subscribe_email').val();
                if (e.which === 13) {
                    if (!validEmail.test(String(email).toLowerCase())) {
                        alert('Въведете валидна е-поща!');
                        return;
                    }
                    grecaptcha.ready(function() {
                        grecaptcha.execute('6LcKZJYUAAAAAA1J1y6UDRb5SVsb8HS9uq4TJSGn', {action: 'validate_captcha'}).then(function(token) {
                            $('.box-subscribe').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                            $.post($('#subscribe_email'),{date: date, email: email, token: token}, function (result) {
                                if(result.success) {
                                    subscribeService.subscribe(date, email).then(() => {
                                        alert('Благодаря, че се абонирахте за нас!');
                                        //window.location.reload(true);
                                    });
                                    $('#subscribe_email').val('');
                                } else {
                                    alert('You are spammer!');
                                }
                            })
                        });
                    });
                }
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
        subscribe
    }
})();