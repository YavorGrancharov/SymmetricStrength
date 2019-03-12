let messageController = (() => {
    function sendMessage() {
        $(document).ready(function () {
            $('#submit').click(function (e) {
                e.preventDefault();
                let author = $('#author_contact').val();
                let date = formatDate(new Date());
                let email = $('#email_contact').val();
                let phone = $('#phone_contact').val();
                let message = $('#message_contact').val();
                let response = grecaptcha.getResponse();

                let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
                let validPhone = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/i;

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

                if (phone !== '') {
                    if (!validPhone.test(phone)) {
                        alert('Въведете валиден телефонен номер!');
                        return;
                    }
                }

                if (message === '') {
                    alert('Въведете съобщението си в предвиденото за това поле!');
                    return;
                } else if (message.length < 5 || message.length > 250) {
                    alert('Съобщението трябва да бъде с дължина между 5 и 250 символа!');
                    return;
                }

                if (response.length === 0) {
                    alert( "Удостоверете с тикче квадратчето 'Не съм робот'" );
                    return;
                } else {
                    messageService.sendMessage(author, date, email, phone, message).then(() => {
                        alert("Благодарим за изпратеното съобщение! Ще се свържем с Вас при първа възможност!");
                    });
                }

                $('#author_contact').val('');
                $('#email_contact').val('');
                $('#phone_contact').val('');
                $('#message_contact').val('');
                grecaptcha.reset();
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
        sendMessage
    }
})();