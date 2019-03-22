let lbmModel = (() => {
    function getUser() {
        let user = {
            sex: document.querySelector('input[name="sexes"]:checked'),
            height: document.getElementById("height"),
            wrist: document.getElementById("wrist"),
            ankle: document.getElementById("ankle")
        }
console.log(user)
        return user;
    }

    return {
        getUser
    }
})();