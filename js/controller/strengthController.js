let strengthController = (() => {
    // function checkAll() {
    //     let all = document.getElementById("all");
    //     all.addEventListener('click', function () {
    //         if (this.childNodes[1].children[0].checked) {
    //             $(':checkbox').each(function () {
    //                 this.checked = true;
    //             });
    //         }
    //         else {
    //             $(':checkbox').each(function () {
    //                 this.checked = false;
    //             });
    //         }
    //     })
    // }

    function showMovements() {
        // let all = document.getElementById("all");
        // all.addEventListener('click', function () {
        //     if (this.childNodes[1].children[0].checked) {
        //         $(':checkbox').each(function () {
        //             this.checked = true;
        //         });
        //     }
        //     else {
        //         $(':checkbox').each(function () {
        //             this.checked = false;
        //         });
        //     }
        // })

        let showMoves = document.getElementById("show-next");
        let hidden = document.getElementById("hidden-div");
        let trows = document.getElementById("hidden-div").querySelectorAll("tr");
        let originalState = $("hidden-div").clone(true, true); $("#some_div").replaceWith(originalState.clone(true, true));
        showMoves.addEventListener('click', function (event) {
            event.preventDefault();
            let checked = []
            let chosen = []
            checked = Array.from(document.querySelectorAll('input[type="checkbox"]'))
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value);
            for (let i = 0; i < trows.length; i++) {
                for (let j = 0; j < trows.length; j++) {
                    if (checked[j] === trows[i].classList.value) {
                        chosen.push(trows[i]);
                    }
                    if (chosen.includes(trows[i])) {
                        chosen.splice(i, 1);
                    }
                }
            }
            console.log(chosen)
            for (let f = 0; f < chosen.length; f++) {
                if (chosen.length >= 5) {
                    hidden.style.display = 'block';
                    chosen[f].style.display = 'table-row';
                } else {
                    hidden.style.display = 'none';
                }
            }
        });
    }

    function symmetricStrength() {
        let sex = strengthModel.getSex();
        let height = strengthModel.getHeight();
        let weight = strengthModel.getBodyWeight();
        let age = strengthModel.getAge();

        let deadlift = strengthModel.getDeadlift();
        let squat = strengthModel.getSquat();
        let overheadPress = strengthModel.getOverheadPress();
        let lunge = strengthModel.getLunge();
        let frontSquat = strengthModel.getFrontSquat();

        let deadlift_reps = strengthModel.getDeadliftReps();
        let squat_reps = strengthModel.getSquatReps();
        let overhead_press_reps = strengthModel.getOverheadPressReps();
        let lunge_reps = strengthModel.getLungeReps();
        let front_squat_reps = strengthModel.getFrontSquatReps();

        let submit = document.getElementById("submit");
        submit.addEventListener('click', function(event) {
            event.preventDefault();
            console.log(sex.value)
        })
    }

    function getIntensity(reps) {
        let intensity = {
            1: 1, 2: 0.95, 3: 0.93, 4: 0.9, 5: 0.87, 6: 0.85, 7: 0.83, 8: 0.8, 9: 0.77, 10: 0.75
        };
        return (intensity[reps]);
    }

    function getLifterAge(age) {
        let ageIndex = {
            14: 1.23, 15: 1.18, 16: 1.13, 17: 1.08, 18: 1.06, 19: 1.04, 20: 1.03, 21: 1.02, 22: 1.01,
            41: 1.01, 42: 1.02, 43: 1.031, 44: 1.043, 45: 1.055, 46: 1.068, 47: 1.082, 48: 1.097, 49: 1.113,
            50: 1.13, 51: 1.147, 52: 1.165, 53: 1.184, 54: 1.204, 55: 1.225, 56: 1.246, 57: 1.268, 58: 1.291,
            59: 1.315, 60: 1.34, 61: 1.366, 62: 1.393, 63: 1.421, 64: 1.45, 65: 1.48, 66: 1.511, 67: 1.543,
            68: 1.576, 69: 1.61, 70: 1.645, 71: 1.681, 72: 1.718, 73: 1.756, 74: 1.795, 75: 1.835, 76: 1.876,
            77: 1.918, 78: 1.961, 79: 2.005, 80: 2.05, "default": 1
        };
        return (ageIndex[age] || ageIndex["default"]);
    }

    return {
        showMovements,
        symmetricStrength
    }
})();