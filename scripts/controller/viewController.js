let viewController = (() => {
    function show(el) {
        el.style.display = "block";
    }

    function hide(el) {
        el.style.display = "none";
    }

    function toggle() {
        let el = document.getElementsByClassName("card-header")[1].children;
        console.log(el)
        for (let index in el) {
            if(el.hasOwnProperty(index)) {
                if (el[index].children[1].style.display === "none") {
                    show(el[index].children[1]);
                    return
                } else {
                    hide(el[index].children[1]);
                    return
                }
            }
        }
    }

    function popover() {
        $(document).ready(function(){
            $('[data-toggle="popover"]').popover();
        });
    }

    return {
        toggle,
        popover
    }
})();