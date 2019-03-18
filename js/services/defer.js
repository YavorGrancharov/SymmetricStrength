let defer = (() => {
    function defer() {
        function deferJS() {
            let links = ["defer1.js", "defer2.js", "defer3.js"],
                headElement = document.getElementsByTagName("head")[0],
                linkElement, i;
            for (i = 0; i < links.length; i++) {
                linkElement = document.createElement("script");
                linkElement.src = links[i];
                headElement.appendChild(linkElement);
            }
        }

        if (window.addEventListener) {
            window.addEventListener("load", deferJS, false);
        } else if (window.attachEvent) {
            window.attachEvent("onload", deferJS);
        } else {
            window.onload = deferJS;
        }
    }

    return {
        defer
    }
})();

