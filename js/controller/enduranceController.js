let enduranceController = (() => {
    function doEndurance() {
        let exer = document.getElementById("myTab").children;

        let maxPull = enduranceModel.getPull();
        let maxDip = enduranceModel.getDip();

        let set1Pull = document.getElementById("setOnePull");
        let set2Pull = document.getElementById("setTwoPull");
        let set3Pull = document.getElementById("setThreePull");
        let set4Pull = document.getElementById("setFourPull");
        let set5Pull = document.getElementById("setFivePull");
        let set6Pull = document.getElementById("setSixPull");

        let set1Dip = document.getElementById("setOneDip");
        let set2Dip = document.getElementById("setTwoDip");
        let set3Dip = document.getElementById("setThreeDip");
        let set4Dip = document.getElementById("setFourDip");
        let set5Dip = document.getElementById("setFiveDip");
        let set6Dip = document.getElementById("setSixDip");

        for(let i in exer) {
            let current = 0;
            if (exer.hasOwnProperty(i)) {
                if(exer[i].children[0].id === "pull-tab") {
                    set1Pull.value = Math.round(maxPull * 9 / 17);
                    set2Pull.value = Math.round(maxPull * 8 / 17);
                    set3Pull.value = Math.round(maxPull * 7 / 17);
                    set4Pull.value = Math.round(maxPull * 6 / 17);
                    set5Pull.value = Math.round(maxPull * 5 / 17);
                    set6Pull.value = Math.round(maxPull * 5 / 17);
                    current = Math.round(
                        set1Pull.value * 1 +
                        set2Pull.value * 1 +
                        set3Pull.value * 1 +
                        set4Pull.value * 1 +
                        set5Pull.value * 1 +
                        set6Pull.value * 1);
                    document.getElementById("totalPull").value = current;
                } else if (exer[i].children[0].id === "push-tab") {
                    set1Dip.value = Math.round(maxDip * 17 / 31);
                    set2Dip.value = Math.round(maxDip * 15 / 31);
                    set3Dip.value = Math.round(maxDip * 12 / 31);
                    set4Dip.value = Math.round(maxDip * 12 / 31);
                    set5Dip.value = Math.round(maxDip * 11 / 31);
                    set6Dip.value = Math.round(maxDip * 10 / 31);
                    current = Math.round(
                        set1Dip.value * 1 +
                        set2Dip.value * 1 +
                        set3Dip.value * 1 +
                        set4Dip.value * 1 +
                        set5Dip.value * 1 +
                        set6Dip.value * 1);
                    document.getElementById("totalDip").value = current;
                }
            }
        }
    }

    return {
        doEndurance
    }
})();