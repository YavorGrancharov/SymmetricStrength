let lbmController = (() => {
    function evalLBM() {
        let user = lbmModel.getUser();
        let submit = document.getElementById("submit");
        let result = document.getElementById("result");

        function heightLbm() {
            let heightRelativeLbm = user.sex.value === 'male'
                ? lbmModel.heightRelativeLBM(user.height.value, 0.973, 99.515)
                : lbmModel.heightRelativeLBM(user.height.value, 0.861, 91.556);

            return heightRelativeLbm;
        }

        function wristLBM() {
            let heightRelativeWrist = user.sex.value === 'male'
                ? lbmModel.heightRelativeWrist(user.height.value, 0.048, 7.954)
                : lbmModel.heightRelativeWrist(user.height.value, 0.043, 7.22);

            let wristLbm = lbmModel.wristLbm(user.wrist.value, heightRelativeWrist, heightLbm());

            return wristLbm;
        }

        function ankleLBM() {
            let heightRelativeAnkle = user.sex.value === 'male'
                ? lbmModel.heightRelativeAnkle(user.height.value, 0.059, 12.181)
                : lbmModel.heightRelativeAnkle(user.height.value, 0.083, 5.667);

            let ankleLbm = lbmModel.ankleLbm(user.ankle.value, heightRelativeAnkle, heightLbm());

            return ankleLbm;
        }

        function bodyHeight() {
            let bodyHeight = lbmModel.fatPercentBodyWeight(user.fat.value, heightLbm());

            return bodyHeight;
        }

        function bodyWrist() {
            let bodyWrist = lbmModel.fatPercentBodyWeight(user.fat.value, wristLBM());

            return bodyWrist;
        }

        function bodyAnkle() {
            let bodyAnkle = lbmModel.fatPercentBodyWeight(user.fat.value, ankleLBM());

            return bodyAnkle;
        }

        if (user.height.value) {
            submit.disabled = false;
            submit.addEventListener('click', function (event) {
                event.preventDefault();
                if (user.height.value && !user.wrist.value && !user.ankle.value) {
                    user.lbm.innerHTML = Math.round(heightLbm());
                    user.lbmLowerBound.innerHTML = Math.round(heightLbm());
                    user.lbmHigherBound.innerHTML = Math.round(heightLbm());
                    if (user.fat.value) {
                        user.weightLowerBound.innerHTML = Math.round(bodyHeight());
                        user.weightHigherBound.innerHTML = Math.round(bodyHeight());
                    }
                } else if (user.height.value && user.wrist.value && !user.ankle.value) {
                    user.lbm.innerHTML = Math.round(wristLBM());
                    user.lbmLowerBound.innerHTML = Math.round(wristLBM());
                    user.lbmHigherBound.innerHTML = Math.round(wristLBM());
                    if (user.fat.value) {
                        user.weightLowerBound.innerHTML = Math.round(bodyWrist());
                        user.weightHigherBound.innerHTML = Math.round(bodyWrist());
                    }
                } else if (user.height.value && !user.wrist.value && user.ankle.value) {
                    user.lbm.innerHTML = Math.round(ankleLBM());
                    user.lbmLowerBound.innerHTML = Math.round(ankleLBM());
                    user.lbmHigherBound.innerHTML = Math.round(ankleLBM());
                    if (user.fat.value) {
                        user.weightLowerBound.innerHTML = Math.round(bodyAnkle());
                        user.weightHigherBound.innerHTML = Math.round(bodyAnkle());
                    }
                } else {
                    if (wristLBM() < ankleLBM()) {
                        user.lbm.innerHTML = Math.round((wristLBM() + ankleLBM()) / 2);
                        user.lbmLowerBound.innerHTML = Math.round(wristLBM());
                        user.lbmHigherBound.innerHTML = Math.round(ankleLBM());
                        if (user.fat.value) {
                            user.weightLowerBound.innerHTML = Math.round(bodyWrist());
                            user.weightHigherBound.innerHTML = Math.round(bodyAnkle());
                        }
                    } else if (wristLBM() > ankleLBM()) {
                        user.lbm.innerHTML = Math.round((wristLBM() + ankleLBM()) / 2);
                        user.lbmLowerBound.innerHTML = Math.round(ankleLBM());
                        user.lbmHigherBound.innerHTML = Math.round(wristLBM());
                        if (user.fat.value) {
                            user.weightLowerBound.innerHTML = Math.round(bodyAnkle());
                            user.weightHigherBound.innerHTML = Math.round(bodyWrist());
                        }
                    } else {
                        if (wristLBM() === ankleLBM()) {
                            user.lbm.innerHTML = Math.round(wristLBM());
                            user.lbmLowerBound.innerHTML = Math.round(wristLBM());
                            user.lbmHigherBound.innerHTML = Math.round(wristLBM());
                        }
                        if (user.fat.value) {
                            user.weightLowerBound.innerHTML = Math.round(bodyWrist());
                            user.weightHigherBound.innerHTML = Math.round(bodyWrist());
                        }
                    }
                }
                if (result.hidden === true) {
                    result.hidden = false;
                }
            })
        } else {
            submit.disabled = true;
        }
    }

    return {
        evalLBM
    }
})();