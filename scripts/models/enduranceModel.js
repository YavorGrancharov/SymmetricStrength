let enduranceModel = (() => {
    function getPull() {
        return document.getElementById("maxPull").value;
    }

    function getDip() {
        return document.getElementById("maxDip").value;
    }

    return {
        getPull,
        getDip
    }
})();