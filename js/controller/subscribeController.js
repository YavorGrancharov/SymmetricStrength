let subscribeController = (() => {
    function subscribe() {
        $(document).ready(function () {
            $('#subscribe_email').keydown(function (e) {
                let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
                let $captcha = $( '.recaptcha' ), response = grecaptcha.getResponse();
                let date = formatDate(new Date());
                let email = $('#subscribe_email').val();
                if (e.which === 13) {
                    if (!validEmail.test(String(email).toLowerCase())) {
                        alert('Въведете валидна е-поща!');
                        return;
                    } else if (response.length === 0) {
                        alert( "Удостоверете с тикче квадратчето 'Не съм робот'" );
                        return;
                    } else {
                        $('#subscribe_email').focus();
                        subscribeService.subscribe(date, email).then(() => {
                            alert('Благодаря, че се абонирахте за нас!');
                            //window.location.reload(true);
                        });
                    }

                    $('#subscribe_email').val('');
                    grecaptcha.reset();
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