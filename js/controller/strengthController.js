let strengthController = (() => {
    function showMovements() {
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
                    showMoves.value = 'ДОБАВИ'
                } else {
                    hidden.style.display = 'none';
                }
            }
        });
    }

    function checkAll() {
        let all = document.getElementById("all");
        let allChecked;
        all.addEventListener('click', function () {
            if (this.childNodes[1].children[0].checked) {
                $(':checkbox').each(function () {
                    this.checked = true;
                });
                allChecked = true;
            }
            else {
                $(':checkbox').each(function () {
                    this.checked = false;
                });
                allChecked = false;
            }
            return allChecked;
        })
    }

    function symmetricStrength() {
        let submit = document.getElementById("submit");
        submit.addEventListener('click', function (event) {
            event.preventDefault();
            let sex = document.querySelector('input[name="sex"]:checked').value;
            let height = document.getElementById("height").value;
            let body_weight = document.getElementById("body-weight").value;
            let age = document.getElementById("age").value;

            let deadlift = document.getElementById("deadlift").value;
            let squat = document.getElementById("squat").value;
            let overhead_press = document.getElementById("overhead-press").value;
            let lunge = document.getElementById("lunge").value;
            let pull_up = document.getElementById("pull-up").value;
            let dip = document.getElementById("dip").value;
            let front_squat = document.getElementById("front-squat").value;
            let sumo_deadlift = document.getElementById("sumo-deadlift").value;
            let push_press = document.getElementById("push-press").value;
            let renegade_row = document.getElementById("renegade-row").value;
            let good_morning = document.getElementById("good-morning").value;

            let deadlift_reps = document.getElementById("deadlift-reps").value;
            let squat_reps = document.getElementById("squat-reps").value;
            let overhead_press_reps = document.getElementById("overhead-press-reps").value;
            let lunge_reps = document.getElementById("lunge-reps").value;
            let pull_up_reps = document.getElementById("pull-up-reps").value;
            let dip_reps = document.getElementById("dip-reps").value;
            let front_psquat_reps = document.getElementById("front-squat-reps").value;
            let sumo_deadlift_reps = document.getElementById("sumo-deadlift-reps").value;
            let push_press_reps = document.getElementById("push-press-reps").value;
            let renegade_row_reps = document.getElementById("renegade-row-reps").value;
            let good_morning_reps = document.getElementById("good-morning-reps").value;

            let rank = document.getElementById("rank");
            let division = document.getElementById("division");
            let insignia = document.getElementById("insignia");
            let nextRank = document.getElementById("next-level-rank");
            let nextDivision = document.getElementById("next-level-division");
            let nextInsignia = document.getElementById("next-level-insignia");
            let strongest = document.getElementById("strongest");
            let weakest = document.getElementById("weakest");

            let maleRealDeadlift = Math.round(((1.72 * body_weight) / ((height * (1 / 3)) / 100)) / getLifterAge(age));
            let femaleRealDeadlift = Math.round(((1.486 * body_weight) / ((height * (1 / 3)) / 100)) / getLifterAge(age));

            let strengthIndexes = [0.25, 0.3375, 0.425, 0.5125, 0.6, 0.6833, 0.7666, 0.85, 0.925, 1];
            let ranks = ["Вербован", "Новобранец", "Редник", "Ефрейтор", "Сержант", "Лейтенант", "Капитан", "Майор", "Полковник", "Генерал"];
            let divisions = ["Зулу", "Зулу", "Зулу", "Зулу", "Лима", "Лима", "Лима", "Делта", "Делта", "Алфа"];
            let shoulder_mark = [
                '../static/images/1_2.png', '../static/images/2_2.png', '../static/images/3_2.png',
                '../static/images/4_2.png', '../static/images/5_2.png', '../static/images/6_2.png',
                '../static/images/8_2.png', '../static/images/7_2.png', '../static/images/9_2.png',
                '../static/images/10_2.png'
            ];

            let reps = [
                getIntensity(deadlift_reps),
                getIntensity(squat_reps),
                getIntensity(overhead_press_reps),
                getIntensity(lunge_reps),
                getIntensity(pull_up_reps),
                getIntensity(dip_reps),
                getIntensity(front_psquat_reps),
                getIntensity(sumo_deadlift_reps),
                getIntensity(push_press_reps),
                getIntensity(renegade_row_reps),
                getIntensity(good_morning_reps)
            ];

            let userInput = [
                { name: "Мъртва тяга", value: document.getElementById("deadlift"), reps: document.getElementById("deadlift-reps") },
                { name: "Клек", value: document.getElementById("squat"), reps: document.getElementById("squat-reps") },
                { name: "Военна преса", value: document.getElementById("overhead-press"), reps: document.getElementById("overhead-press-reps") },
                { name: "Напад", value: document.getElementById("lunge"), reps: document.getElementById("lunge-reps") },
                { name: "Набиране", value: document.getElementById("pull-up"), reps: document.getElementById("pull-up-reps") },
                { name: "Кофи", value: document.getElementById("dip"), reps: document.getElementById("dip-reps") },
                { name: "Преден клек", value: document.getElementById("front-squat"), reps: document.getElementById("front-squat-reps") },
                { name: "Сумо тяга", value: document.getElementById("sumo-deadlift"), reps: document.getElementById("sumo-deadlift-reps") },
                { name: "Пуш преса", value: document.getElementById("push-press"), reps: document.getElementById("push-press-reps") },
                { name: "Ренегатско гребане", value: document.getElementById("renegade-row"), reps: document.getElementById("renegade-row-reps") },
                { name: "Гуд морнинг", value: document.getElementById("good-morning"), reps: document.getElementById("good-morning-reps") }
            ];

            let movementsIndexes = [
                { name: "Мъртва тяга", value: 1 }, { name: "Клек", value: 0.83 },
                { name: "Военна преса", value: sex === 'male' ? 0.4 : 0.37 },
                { name: "Напад", value: 0.7 }, { name: "Набиране", value: sex === 'male' ? 0.65 : 0.56 },
                { name: "Кофи", value: sex === 'male' ? 0.8 : 0.63 },
                { name: "Преден клек", value: sex === 'male' ? 0.68 : 0.67 },
                { name: "Сумо тяга", value: 0.95 }, { name: "Пуш преса", value: sex === 'male' ? 0.56 : 0.49 },
                { name: "Ренегатско гребане", value: sex === 'male' ? 0.26 : 0.2 }, { name: "Гуд морнинг", value: 0.44 }
            ];

            let idealSet = [
                { name: "Мъртва тяга", value: document.getElementById("ideal-deadlift"), reps: document.getElementById("ideal-deadlift-reps") },
                { name: "Клек", value: document.getElementById("ideal-squat"), reps: document.getElementById("ideal-squat-reps") },
                { name: "Военна преса", value: document.getElementById("ideal-overhead-press"), reps: document.getElementById("ideal-overhead-press-reps") },
                { name: "Напад", value: document.getElementById("ideal-lunge"), reps: document.getElementById("ideal-lunge-reps") },
                { name: "Набиране", value: document.getElementById("ideal-pull-up"), reps: document.getElementById("ideal-pull-up-reps") },
                { name: "Кофи", value: document.getElementById("ideal-dip"), reps: document.getElementById("ideal-dip-reps") },
                { name: "Преден клек", value: document.getElementById("ideal-front-squat"), reps: document.getElementById("ideal-front-squat-reps") },
                { name: "Сумо тяга", value: document.getElementById("ideal-sumo-deadlift"), reps: document.getElementById("ideal-sumo-deadlift-reps") },
                { name: "Пуш преса", value: document.getElementById("ideal-push-press"), reps: document.getElementById("ideal-push-press-reps") },
                { name: "Ренегатско гребане", value: document.getElementById("ideal-renegade-row"), reps: document.getElementById("ideal-renegade-row-reps") },
                { name: "Гуд морнинг", value: document.getElementById("ideal-good-morning"), reps: document.getElementById("ideal-good-morning-reps") }
            ];

            let nextLevelSet = [
                { name: "Мъртва тяга", value: document.getElementById("next-level-deadlift"), reps: document.getElementById("next-level-deadlift-reps") },
                { name: "Клек", value: document.getElementById("next-level-squat"), reps: document.getElementById("next-level-squat-reps") },
                { name: "Военна преса", value: document.getElementById("next-level-overhead-press"), reps: document.getElementById("next-level-overhead-press-reps") },
                { name: "Напад", value: document.getElementById("next-level-lunge"), reps: document.getElementById("next-level-lunge-reps") },
                { name: "Набиране", value: document.getElementById("next-level-pull-up"), reps: document.getElementById("next-level-pull-up-reps") },
                { name: "Кофи", value: document.getElementById("next-level-dip"), reps: document.getElementById("next-level-dip-reps") },
                { name: "Преден клек", value: document.getElementById("next-level-front-squat"), reps: document.getElementById("next-level-front-squat-reps") },
                { name: "Сумо тяга", value: document.getElementById("next-level-sumo-deadlift"), reps: document.getElementById("next-level-sumo-deadlift-reps") },
                { name: "Пуш преса", value: document.getElementById("next-level-push-press"), reps: document.getElementById("next-level-push-press-reps") },
                { name: "Ренегатско гребане", value: document.getElementById("next-level-renegade-row"), reps: document.getElementById("next-level-renegade-row-reps") },
                { name: "Гуд морнинг", value: document.getElementById("next-level-good-morning"), reps: document.getElementById("next-level-good-morning-reps") }
            ];

            let perfectSet = [
                { name: "Мъртва тяга", value: document.getElementById("perfect-level-deadlift"), reps: document.getElementById("perfect-level-deadlift-reps") },
                { name: "Клек", value: document.getElementById("perfect-level-squat"), reps: document.getElementById("perfect-level-squat-reps") },
                { name: "Военна преса", value: document.getElementById("perfect-level-overhead-press"), reps: document.getElementById("perfect-level-overhead-press-reps") },
                { name: "Напад", value: document.getElementById("perfect-level-lunge"), reps: document.getElementById("perfect-level-lunge-reps") },
                { name: "Набиране", value: document.getElementById("perfect-level-pull-up"), reps: document.getElementById("perfect-level-pull-up-reps") },
                { name: "Кофи", value: document.getElementById("perfect-level-dip"), reps: document.getElementById("perfect-level-dip-reps") },
                { name: "Преден клек", value: document.getElementById("perfect-level-front-squat"), reps: document.getElementById("perfect-level-front-squat-reps") },
                { name: "Сумо тяга", value: document.getElementById("perfect-level-sumo-deadlift"), reps: document.getElementById("perfect-level-sumo-deadlift-reps") },
                { name: "Пуш преса", value: document.getElementById("perfect-level-push-press"), reps: document.getElementById("perfect-level-push-press-reps") },
                { name: "Ренегатско гребане", value: document.getElementById("next-level-renegade-row"), reps: document.getElementById("perfect-level-renegade-row-reps") },
                { name: "Гуд морнинг", value: document.getElementById("perfect-level-good-morning"), reps: document.getElementById("perfect-level-good-morning-reps") }
            ];

            let ideal_moves = [
                { name: "Мъртва тяга", value: (deadlift / getIntensity(deadlift_reps)) / 1 },
                { name: "Клек", value: (squat / getIntensity(squat_reps)) / 0.83 },
                {
                    name: "Военна преса",
                    value: sex === 'male'
                        ? (overhead_press / getIntensity(overhead_press_reps)) / 0.4
                        : (overhead_press / getIntensity(overhead_press_reps)) / 0.37
                },
                { name: "Напад", value: (lunge / getIntensity(lunge_reps)) / 0.7 },
                {
                    name: "Набиране",
                    value: sex === 'male'
                        ? (pull_up / getIntensity(pull_up_reps)) / 0.65
                        : (pull_up / getIntensity(pull_up_reps)) / 0.56
                },
                {
                    name: "Кофи",
                    value: sex === 'male'
                        ? (dip / getIntensity(dip_reps)) / 0.79
                        : (dip / getIntensity(dip_reps)) / 0.63
                },
                {
                    name: "Преден клек",
                    value: sex === 'male'
                        ? (front_squat / getIntensity(front_psquat_reps)) / 0.68
                        : (front_squat / getIntensity(front_psquat_reps)) / 0.67
                },
                { name: "Сумо тяга", value: (sumo_deadlift / getIntensity(sumo_deadlift_reps)) / 0.95 },
                {
                    name: "Пуш преса",
                    value: sex === 'male'
                        ? (push_press / getIntensity(push_press_reps)) / 0.56
                        : (push_press / getIntensity(push_press_reps)) / 0.49
                },
                {
                    name: "Ренегатско гребане",
                    value: sex === 'male'
                        ? (renegade_row / getIntensity(renegade_row_reps)) / 0.26
                        : (renegade_row / getIntensity(renegade_row_reps)) / 0.2
                },
                { name: "Гуд морнинг", value: (good_morning / getIntensity(good_morning_reps)) / 0.44 }
            ];

            let hidden = document.getElementById("ideal-hidden-div");
            let trows = document.getElementById("ideal-hidden-div").querySelectorAll("tr");
            let nextLvlHiddenDiv = document.getElementById("next-level-hidden-div");
            let nextLvlTRows = document.getElementById("next-level-hidden-div").querySelectorAll("tr");
            let perfectLvlHiddenDiv = document.getElementById("perfect-level-hidden-div");
            let prefectLvlTRows = document.getElementById("perfect-level-hidden-div").querySelectorAll("tr");

            let checked = []
            let ideal = []
            let nextLvl = []
            let perfectLvl = []
            checked = Array.from(document.querySelectorAll('input[type="checkbox"]'))
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value);
            for (let i = 0; i < trows.length; i++) {
                for (let j = 0; j < trows.length; j++) {
                    if (checked[j] === trows[i].classList.value
                        && checked[j] === nextLvlTRows[i].classList.value
                        && checked[j] === prefectLvlTRows[i].classList.value) {
                        ideal.push(trows[i]);
                        nextLvl.push(nextLvlTRows[i])
                        perfectLvl.push(prefectLvlTRows[i])
                    }
                    if (ideal.includes(trows[i])
                        || nextLvl.includes(nextLvlTRows[i])
                        || perfectLvl.includes(prefectLvlTRows[i])) {
                        ideal.splice(i, 1);
                        nextLvl.splice(i, 1)
                        perfectLvl.splice(i, 1)
                    }
                }
            }

            for (let f = 0; f < ideal.length; f++) {
                if (ideal.length >= 5) {
                    hidden.style.display = 'block';
                    ideal[f].style.display = 'table-row';
                    nextLvlHiddenDiv.style.display = 'block';
                    nextLvl[f].style.display = 'table-row';
                    perfectLvlHiddenDiv.style.display = 'block';
                    perfectLvl[f].style.display = 'table-row';
                } else {
                    hidden.style.display = 'none';
                    nextLvlHiddenDiv.style.display = 'none';
                    nextLvlHiddenDiv.style.display = 'none';
                }
            }

            let avg;
            let hasInput = [];
            let idealMax = Number.MIN_SAFE_INTEGER;
            let idealMaxName = '';
            let idealMin = Number.MAX_SAFE_INTEGER;
            let idealNameMin = '';
            for (let i = 0; i < ideal_moves.length; i++) {
                if (ideal_moves[i].value) {
                    hasInput.push(ideal_moves[i].value);
                    if (ideal_moves[i].value > idealMax) {
                        idealMax = Math.round(ideal_moves[i].value);
                        idealMaxName = ideal_moves[i].name;
                    }
                    if (ideal_moves[i].value < idealMin) {
                        idealMin = ideal_moves[i].value;
                        idealNameMin = ideal_moves[i].name;
                    }
                }
            }
            console.log(`Ideal max is ${idealMaxName} with value of ${Math.round(idealMax)}kg`)
            console.log(`Ideal min is ${idealNameMin} with value of ${Math.round(idealMin)}kg`)
            console.log(hasInput)
            avg = hasInput.reduce(function (a, b) { return (a + b) })
            avg /= hasInput.length;
            console.log(hasInput)
            console.log(avg)

            let nextLevelDeadlift = 0;
            let currentRank = '';
            let currentDivision = '';
            let nextLevelRank = '';
            let nextLevelDivision = '';
            let imgPos;
            let imgPosNext;
            for (let j = 0; j < strengthIndexes.length; j++) {
                if (sex === "male") {
                    if ((maleRealDeadlift * strengthIndexes[j]) >= idealMax) {
                        nextLevelDeadlift = Math.round(maleRealDeadlift * strengthIndexes[j]);
                        if (nextLevelDeadlift >= Math.round(avg)) {
                            nextLevelRank = ranks[j];
                            nextLevelDivision = divisions[j];
                            imgPosNext = j;
                            currentRank = ranks[j - 1];
                            currentDivision = divisions[j - 1];
                            imgPos = j - 1;
                        }
                        break;
                    } else {
                        nextLevelDeadlift = maleRealDeadlift;
                        imgPos = strengthIndexes.length - 1;
                        currentRank = ranks[strengthIndexes.length - 1];
                        currentDivision = divisions[strengthIndexes.length - 1];
                    }
                } else {
                    if ((femaleRealDeadlift * strengthIndexes[j]) >= idealMax) {
                        nextLevelDeadlift = Math.round(femaleRealDeadlift * strengthIndexes[j]);
                        if (nextLevelDeadlift >= avg) {
                            nextLevelRank = ranks[j];
                            nextLevelDivision = divisions[j];
                            imgPosNext = j;
                            currentRank = ranks[j - 1];
                            currentDivision = divisions[j - 1];
                            imgPos = j - 1;
                        }
                        break;
                    } else {
                        nextLevelDeadlift = femaleRealDeadlift;
                        imgPos = strengthIndexes.length - 1;
                        currentRank = ranks[strengthIndexes.length - 1];
                        currentDivision = divisions[strengthIndexes.length - 1];
                    }
                }
            }

            let relativeDeadlift = 0;
            if (idealMax > (deadlift / getIntensity(deadlift_reps))) {
                relativeDeadlift = Math.round(idealMax * getIntensity(deadlift_reps));
            } else {
                relativeDeadlift = Math.round((deadlift / getIntensity(deadlift_reps)) * getIntensity(deadlift_reps));
            }
            console.log(relativeDeadlift)

            let idealLabels = []
            let idealData = []
            let nextLevelLabels = []
            let nextLevelData = []
            let perfectLevelLabels = []
            let perfectLevelData = []
            for (let i = 0; i < idealSet.length; i++) {
                if (userInput[i].value.value) {
                    idealLabels.push(userInput[i].name)
                    nextLevelLabels.push(userInput[i].name)
                    perfectLevelLabels.push(userInput[i].name)
                    idealSet[i].value.value = Math.round(((relativeDeadlift / getIntensity(deadlift_reps)) * movementsIndexes[i].value) * reps[i]);
                    idealSet[i].reps.value = userInput[i].reps.value;
                    nextLevelSet[i].value.value = Math.round((nextLevelDeadlift * reps[i]) * movementsIndexes[i].value);
                    nextLevelSet[i].reps.value = userInput[i].reps.value;
                    perfectSet[i].reps.value = userInput[i].reps.value;
                    idealData.push(Math.round(((userInput[i].value.value - idealSet[i].value.value) / userInput[i].value.value) * 100))
                    nextLevelData.push(Math.round(((userInput[i].value.value - nextLevelSet[i].value.value) / userInput[i].value.value) * 100))
                    if (sex === "male") {
                        perfectSet[i].value.value = Math.round((maleRealDeadlift * movementsIndexes[i].value) * reps[i]);
                    } else {
                        perfectSet[i].value.value = Math.round((femaleRealDeadlift * movementsIndexes[i].value) * reps[i]);
                    }
                    perfectLevelData.push(Math.round(((userInput[i].value.value - perfectSet[i].value.value) / userInput[i].value.value) * 100))
                } else {
                    // nextLevelSet[i].value.value = '';
                    // idealSet[i].value.value = '';
                    // perfectSet[i].value.value = '';
                }
            }

            let idealChartBtn = document.getElementById("idealChartBtn");
            let nextLevelChartBtn = document.getElementById("nextLevelChartBtn");
            let perfectLevelChartBtn = document.getElementById("perfectLevelChartBtn");
            if (userInput.length > 0) {
                rank.innerHTML = `${currentRank}`;
                division.innerHTML = `${currentDivision}`;
                insignia.setAttribute('src', shoulder_mark[imgPos])
                nextRank.innerHTML = `${nextLevelRank}`;
                nextDivision.innerHTML = `${nextLevelDivision}`;
                nextInsignia.setAttribute('src', shoulder_mark[imgPosNext]);
                strongest.innerHTML = `${idealMaxName}`;
                // strongestRmDeadlift.innerHTML = `${Math.round(idealMax)}kg`;
                weakest.innerHTML = `${idealNameMin}`;
                // weakestRmDeadlift.innerHTML = `${Math.round(idealMin)}kg`;
                idealChartBtn.addEventListener('click', function (event) {
                    event.preventDefault();
                    let idealChart = document.getElementById("ideal-bar-chart-horizontal").getContext('2d');
                    let a = window.matchMedia("(max-width: 480px)");
                    if(window.chart && window.chart !== null){
                        window.chart.destroy();
                    }
                    myFunction(a);
                    a.addListener(myFunction);
                    window.chart = new Chart((idealChart), {
                        type: 'horizontalBar',
                        data: {
                            labels: idealLabels,
                            datasets: [
                                {
                                    label: "",
                                    backgroundColor: ["#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff"],
                                    data: idealData,
                                    color: "#ffffff"
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: "графика на равновесието"
                            }
                        }
                    });

                    function myFunction(a) {
                        if (a.matches) {
                            idealChart.height = window.innerHeight;
                            idealChart.width = window.innerWidth;
                        }
                    }
                })

                nextLevelChartBtn.addEventListener('click', function (event) {
                    event.preventDefault();
                    let nextLevelChart = document.getElementById("next-level-bar-chart-horizontal");
                    let a = window.matchMedia("(max-width: 480px)");
                    if(window.chart2 && window.chart2 !== null){
                        window.chart2.destroy();
                    }
                    myFunction(a);
                    a.addListener(myFunction);
                    window.chart2 = new Chart((nextLevelChart), {
                        type: 'horizontalBar',
                        data: {
                            labels: nextLevelLabels,
                            datasets: [
                                {
                                    label: "",
                                    backgroundColor: ["#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff"],
                                    data: nextLevelData,
                                    color: "#ffffff"
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: "графика на равновесието"
                            },
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });

                    function myFunction(a) {
                        if (a.matches) {
                            nextLevelChart.height = window.innerHeight;
                            nextLevelChart.width = window.innerWidth;
                        }
                    }
                })

                perfectLevelChartBtn.addEventListener('click', function (event) {
                    event.preventDefault();
                    let perfectLevelChart = document.getElementById("perfect-level-bar-chart-horizontal");
                    let a = window.matchMedia("(max-width: 480px)");
                    if(window.chart3 && window.chart3 !== null){
                        window.chart3.destroy();
                    }
                    myFunction(a);
                    a.addListener(myFunction);
                    window.chart3 = new Chart((perfectLevelChart), {
                        type: 'horizontalBar',
                        data: {
                            labels: perfectLevelLabels,
                            datasets: [
                                {
                                    label: "",
                                    backgroundColor: ["#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff", "#e5e5ff"],
                                    data: perfectLevelData,
                                    color: "#ffffff"
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                text: "графика на равновесието"
                            },
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });

                    function myFunction(a) {
                        if (a.matches) {
                            perfectLevelChart.height = window.innerHeight;
                            perfectLevelChart.width = window.innerWidth;
                        }
                    }
                })
            }
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
        checkAll,
        showMovements,
        symmetricStrength
    }
})();