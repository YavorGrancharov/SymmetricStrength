let lbmModel = (() => {
    function getUser() {
        let user = {
            sex: document.querySelector('input[name="sexes"]:checked'),
            height: document.getElementById("height"),
            wrist: document.getElementById("wrist"),
            ankle: document.getElementById("ankle"),
            fat: document.getElementById("desired-fat"),
            lbm: document.getElementById("lbm-kg"),
            lbmLowerBound: document.getElementById("lbm-kg-lowerbound"),
            lbmHigherBound: document.getElementById("lbm-kg-higherbound"),
            weightLowerBound: document.getElementById("overall-lowerbound"),
            weightHigherBound: document.getElementById("overall-higherbound"),
        }
        return user;
    }

    //height relative LBM in kilograms
    function heightRelativeLBM(height, arg1, arg2) {
        return (height * arg1) - arg2;
    }

    //height relative wrist circumference in centimeters
    function heightRelativeWrist(height, arg1, arg2) {
        return (height * arg1) + arg2;
    }

    //height relative ankle circumference in centimeters
    function heightRelativeAnkle(height, arg1, arg2) {
        return (height * arg1) + arg2;
    }

    //user wrist relative LBM algorithm
    function wristLbm(wrist, heightRelativeWrist, heightRelativeLBM) {
        return Math.cbrt((((Math.pow(wrist, 2)) -
            (Math.pow(heightRelativeWrist, 2))) /
            (Math.pow(wrist, 2))) *
            (Math.pow(heightRelativeLBM, 3)) +
            (Math.pow(heightRelativeLBM, 3)));
    }

    //user ankle relative LBM algorithm
    function ankleLbm(ankle, heightRelativeAnkle, heightRelativeLBM) {
        return Math.cbrt((((Math.pow(ankle, 2)) -
            (Math.pow(heightRelativeAnkle, 2))) /
            (Math.pow(ankle, 2))) *
            (Math.pow(heightRelativeLBM, 3)) +
            (Math.pow(heightRelativeLBM, 3)));
    }

    //determine overall body weight from lean body mass and desired body fat percentage
    function fatPercentBodyWeight(fatPercent, lbm) {
        return lbm / (1 - (fatPercent / 100));
    }

    return {
        getUser,
        heightRelativeLBM,
        heightRelativeWrist,
        heightRelativeAnkle,
        wristLbm,
        ankleLbm,
        fatPercentBodyWeight
    }
})();