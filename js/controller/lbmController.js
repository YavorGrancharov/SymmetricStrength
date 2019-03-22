let lbmController = (() => {
    function evalLBM() {
        let user = lbmModel.getUser();
        console.log(user.sex.value)
    }

    return {
        evalLBM
    }
})();