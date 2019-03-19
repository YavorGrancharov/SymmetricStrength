let fatController = (() => {
    function calcFat() {
        let sex = document.querySelector('input[name="radios"]:checked');
        let age = document.getElementById("age");
        let weight = document.getElementById("weight");
        let folds = document.getElementById("folds");
        folds = folds[folds.options.selectedIndex];
        let formula = document.querySelector('input[name="formula"]:checked');

        let triceps = document.getElementById("triceps");
        let subscapula = document.getElementById("subscapula");
        let midaxilla = document.getElementById("midaxilla");
        let chest = document.getElementById("chest");
        let abdominal = document.getElementById("abdominal");
        let suprailiac = document.getElementById("suprailiac");
        let thigh = document.getElementById("thigh");

        let sum = document.getElementById("sum");

        let fat = document.getElementById("fat-percent");
        let fatMass = document.getElementById("fat-mass");
        let lbm = document.getElementById("lbm");
        let submit = document.getElementById("submit");
        let result = document.getElementById("result");

        if ((age.value <= 0) || (age.value === 'NaN')) {
            fat.innerHTML = '';
        }
        if ((weight.value <= 0) || (weight.value === 'NaN')) {
            fat.innerHTML = '';
        }
        if ((sum.value <= 0) || (sum.value === 'NaN')) {
            fat.innerHTML = '';
        }

        if (folds.value === '7') {
            sum.value =
                ((triceps.value * 1) + // * 1 is for converting a string into integer
                    (subscapula.value * 1) +
                    (midaxilla.value * 1) +
                    (chest.value * 1) +
                    (abdominal.value * 1) +
                    (suprailiac.value * 1) +
                    (thigh.value * 1)).toFixed(1);
        }

        if (folds.value === '4') {
            sum.value =
                ((triceps.value * 1) +
                    (abdominal.value * 1) +
                    (suprailiac.value * 1) +
                    (thigh.value * 1)).toFixed(1);
        }

        if (folds.value === '3') {
            if (sex.value === 'male') {
                sum.value =
                    ((chest.value * 1) +
                        (abdominal.value * 1) +
                        (thigh.value * 1)).toFixed(1);
            }

            else if (sex.value === 'female') {
                sum.value =
                    ((triceps.value * 1) +
                        (suprailiac.value * 1) +
                        (thigh.value * 1)).toFixed(1);
            }
        }


        if (sum.value != 0 && age.value !== '' && weight.value !== '') {
            submit.disabled = false;
            submit.addEventListener('click', function (event) {
                event.preventDefault();
                let bodyDensity = 0;
                let bodyFat = 0;

                if (sex.value === 'male' && folds.value === '7') {
                    bodyDensity = 1.112 - (0.00043499 * sum.value) + (0.00000055 * sum.value * sum.value) - (0.00028826 * age.value);
                    if (formula.value === 'brozek') {
                        fat.innerHTML = Math.round(((457 / bodyDensity) - 414.2) * 10) / 10;
                    }

                    if (formula.value === 'siri') {
                        fat.innerHTML = Math.round(((495 / bodyDensity) - 450) * 10) / 10;
                    }
                }

                if (sex.value === 'female' && folds.value === '7') {
                    bodyDensity = 1.097 - (0.00046971 * sum.value) + (0.00000056 * sum.value * sum.value) - (0.00012828 * age.value);
                    if (formula.value === 'brozek') {
                        fat.innerHTML = Math.round(((457 / bodyDensity) - 414.2) * 10) / 10;
                    }

                    if (formula === 'siri') {
                        fat.innerHTML = Math.round(((495 / bodyDensity) - 450) * 10) / 10;
                    }
                }

                if (sex.value === 'male' && folds.value === '4') {
                    bodyFat = (0.29288 * sum.value) - (0.0005 * sum.value * sum.value) + (0.15845 * age.value) - 5.76377;

                    fat.innerHTML = Math.round(bodyFat * 10) / 10;
                }

                if (sex.value === 'female' && folds.value === '4') {
                    bodyFat = (0.29669 * sum.value) - (0.00043 * sum.value * sum.value) + (0.02963 * age.value) + 1.4072;

                    fat.innerHTML = Math.round(bodyFat * 10) / 10;
                }

                if (sex.value === 'male' && folds.value === '3') {
                    bodyDensity = 1.10938 - (0.0008267 * sum.value) + (0.0000016 * sum.value * sum.value) - (0.0002574 * age.value);
                    if (formula.value === 'brozek') {
                        fat.innerHTML = Math.round(((457 / bodyDensity) - 414.2) * 10) / 10;
                    }

                    if (formula.value === 'siri') {
                        fat.innerHTML = Math.round(((495 / bodyDensity) - 450) * 10) / 10;
                    }
                }

                if (sex.value === 'female' && folds.value === '3') {
                    bodyDensity = 1.0994921 - (0.0009929 * sum.value) + (0.0000023 * sum.value * sum.value) - (0.0001392 * age.value);
                    if (formula.value === 'brozek') {
                        fat.innerHTML = Math.round(((457 / bodyDensity) - 414.2) * 10) / 10;
                    }

                    if (formula === 'siri') {
                        fat.innerHTML = Math.round(((495 / bodyDensity) - 450) * 10) / 10;
                    }
                }

                //document.f.density.value = (bodyDensity).toFixed(4);
                fatMass.value = Math.round((weight.value * fat.value) / 10) / 10;
                lbm.value = weight.value - fatMass.value;

                if (result.hidden === true) {
                    result.hidden = false
                }
            })
        } else {
            submit.disabled = true;
        }

        [sex, weight, age, folds, formula, triceps, subscapula, midaxilla, chest, abdominal, suprailiac, thigh].forEach(function (elem) {
            elem.addEventListener('change', function () {
                calcFat();
            });
        });
    }
    alert('Попълнете задължителните полета и въведете поне три измервания!');

    return {
        calcFat
    }
})();