let viewController = (() => {
    function show(el) {
        el.style.display = "block";
    }

    function hide(el) {
        el.style.display = "none";
    }

    function toggle(el) {
        el = document.getElementById("accordion").children;
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

    return {
        toggle
    }
})();