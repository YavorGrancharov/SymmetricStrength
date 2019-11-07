let strengthController = (() => {
    function symmetricStrength() {
        // let count = 0, $hidden = $('.next-2, .next-3');
        // let nextMoves = document.getElementById("show-next");
        // $(nextMoves).click(function (event) {
        //     event.preventDefault();
        //     if(count < $hidden.length) {
        //         $hidden.eq(count).show('slow');
        //         count++
        //     }
        // });

        let showMoves = document.getElementById("show-next");
        let clientMovements = document.getElementById("chosen-movements");
        let m = document.getElementById("hidden-div");
        var x = document.getElementById("hidden-div").querySelectorAll("tr");
        showMoves.addEventListener('click', function (event) {
            event.preventDefault();
            let array = []
            let chosen = []
            array = Array.from(document.querySelectorAll('input[type="checkbox"]'))
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value);
            for (let i = 1; i < x.length; i++) {
                for (let j = 0; j < x.length + 1; j++) {
                    if (array[j] === x[i].classList.value) {
                        chosen.push(x[i])
                    }
                    if (chosen.includes(x[i])) {
                        chosen.splice(i, 1)
                    }
                }
            }
            console.log(chosen)
            for (let f = 0; f < chosen.length; f++) {
                if (chosen.length >= 5) {                  
                    chosen[f].style.display = 'table-row';
                } else {
                    chosen[f + 2].style.display = 'none';
                    chosen[f].style.display = 'none';
                }
            }
        });
    }

    function Showhidefunc(chkbox) {
        if ($(chkbox).is(":checked")) {
            $('tr td:first-child :checkbox:not(:checked)').closest('tr').hide();
        } else {
            $('tr td:first-child :checkbox:not(:checked)').closest('tr').show();
        }
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
        symmetricStrength
    }
})();