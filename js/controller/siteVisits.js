let siteVisists = (() => {
    function visitCounter() {
        let n = localStorage.getItem('visit_counter');
        if (n === null) {
            n = 0;
        }
        n++;
        localStorage.setItem("visit_counter", n);
        $('.post-views').innerHTML = n + ' Прегледа';
    }

    return {
        visitCounter
    }
})();