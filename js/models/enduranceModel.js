let enduranceModel = (() => {
    function getPull() {
        return document.getElementById("maxPull").value;
    }

    function getDip() {
        return document.getElementById("maxDip").value;
    }

    function getPlaceholdersPull() {
        let pullArr = [
            document.getElementById("setOnePull"),
            document.getElementById("setTwoPull"),
            document.getElementById("setThreePull"),
            document.getElementById("setFourPull"),
            document.getElementById("setFivePull"),
            document.getElementById("setSixPull")
        ];

        return pullArr;
    }

    function getPlaceholdersDips() {
        let dipArr = [
            document.getElementById("setOneDip"),
            document.getElementById("setTwoDip"),
            document.getElementById("setThreeDip"),
            document.getElementById("setFourDip"),
            document.getElementById("setFiveDip"),
            document.getElementById("setSixDip")
        ];

        return dipArr;
    }

    return {
        getPull,
        getDip,
        getPlaceholdersPull,
        getPlaceholdersDips
    }
})();