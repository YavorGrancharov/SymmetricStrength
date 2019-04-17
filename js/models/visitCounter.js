let visitCounter = (() => {
    function visitCounter() {
        $(document).ready(function () {
            let count = 0;
            let post_id = $('#id').val();
            console.log(post_id)
            commentService.countVisitsPost(post_id, count).then((res) => {
                commentService.countVisitsGet().then((visits) => {
                    visits.forEach(function (visit, index) {
                        if (visit.post_id === post_id) {
                            count++;
                        }
                    })
                    $('.post-views')[0].innerHTML = count + ' Прегледа'
                })
            })
        })
    }

    return {
        visitCounter
    }
})();