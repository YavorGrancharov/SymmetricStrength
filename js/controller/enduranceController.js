let enduranceController = (() => {
    function doEndurance() {
        let exer = document.getElementById("myTab").children;

        let maxPull = enduranceModel.getPull();
        let maxDip = enduranceModel.getDip();

        let pullArr = enduranceModel.getPlaceholdersPull();
        let dipArr = enduranceModel.getPlaceholdersDips();

        let testedPullUps = [17, 9, 8, 7, 6, 5, 5];
        let testedDips = [31, 17, 15, 12, 12, 11, 10];

        for(let i in exer) {
            let current = 0;
            let empiricalMaxPull = testedPullUps[0];
            let empiricalMaxDip = testedDips[0];
            if (exer.hasOwnProperty(i)) {
                if(exer[i].children[0].id === "pull-tab") {
                    for (let j = 0; j < pullArr.length; j++) {
                        pullArr[j].value = Math.round(maxPull * testedPullUps[j + 1]  / empiricalMaxPull);
                        current += Math.round(Number(pullArr[j].value));
                    }
                    document.getElementById("totalPull").value = current;
                } else if (exer[i].children[0].id === "push-tab") {
                    for (let k = 0; k < dipArr.length; k++) {
                        dipArr[k].value = Math.round(maxDip * testedDips[k + 1]  / empiricalMaxDip);
                        current += Math.round(Number(dipArr[k].value));
                    }
                    document.getElementById("totalDip").value = current;
                }
            }
        }
    }

    return {
        doEndurance
    }
})();