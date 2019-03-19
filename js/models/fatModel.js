let fatModel = (() => {
    function getSex() {
        return document.querySelector('input[name="radios"]:checked').value;
    }

    function getAge() {
        return document.getElementById("age").value;
    }

    function getWeight() {
        return document.getElementById("weight").value;
    }

    function getMethod() {
        let folds = document.getElementById("folds");
        folds = folds[folds.options.selectedIndex].value;
        return folds;
    }

    function getFormula() {
        return document.querySelector('input[name="formula"]:checked').value;
    }

    function getTriceps() {
        return document.getElementById("triceps").value;
    }

    function getSubscapula() {
        return document.getElementById("subscapula").value;
    }

    function getMidaxilla() {
        return document.getElementById("midaxilla").value;
    }

    function getChest() {
        return document.getElementById("chest").value;
    }

    function getAbdominal() {
        return document.getElementById("abdominal").value;
    }

    function getSuprailiac() {
        return document.getElementById("suprailiac").value;
    }

    function getThigh() {
        return document.getElementById("thigh");
    }

    function getSum() {
        return document.getElementById("sum").value;
    }

    function getTotal() {
        return document.getElementById("total").value;
    }

    return {
        getSex,
        getAge,
        getWeight,
        getMethod,
        getFormula,
        getTriceps,
        getSubscapula,
        getMidaxilla,
        getChest,
        getAbdominal,
        getSuprailiac,
        getThigh,
        getSum,
        getTotal
    }
})();