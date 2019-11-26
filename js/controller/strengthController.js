let strengthController = (() => {
    function showMovements() {
        let showMoves = document.getElementById("show-next");
        let hidden = document.getElementById("hidden-div");
        let trows = document.getElementById("hidden-div").querySelectorAll("tr");
        let realTRows = document.getElementById("real-hidden-div").querySelectorAll("tr");
        let idealTrows = document.getElementById("ideal-hidden-div").querySelectorAll("tr");
        let nextLvlTRows = document.getElementById("next-level-hidden-div").querySelectorAll("tr");
        let prefectLvlTRows = document.getElementById("perfect-level-hidden-div").querySelectorAll("tr");
        let strengthStandardRows = document.getElementById("list").querySelectorAll("tr");
        console.log(strengthStandardRows)
        let originalState = $("hidden-div").clone(true, true); $("#some_div").replaceWith(originalState.clone(true, true));
        showMoves.addEventListener('click', function (event) {
            event.preventDefault();
            let checked = [];
            checked = Array.from(document.querySelectorAll('input[type="checkbox"]'))
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value);
            for (let i = 1; i < trows.length - 1; i++) {
                if (!checked.includes(trows[i].classList.value)) {
                    trows[i].style.display = 'none';
                    realTRows[i].style.display = 'none';
                    idealTrows[i].style.display = 'none';
                    nextLvlTRows[i].style.display = 'none';
                    prefectLvlTRows[i].style.display = 'none';
                    if (!checked.includes(strengthStandardRows[i + 2].classList.value)) {
                        strengthStandardRows[i + 2].style.display = 'none';
                    }

                }
                for (let j = 0; j < trows.length; j++) {
                    if (checked[j] === trows[i].classList.value) {
                        hidden.style.display = 'block';
                        trows[i].style.display = 'table-row';
                        realTRows[i].style.display = 'table-row';
                        idealTrows[i].style.display = 'table-row';
                        nextLvlTRows[i].style.display = 'table-row';
                        prefectLvlTRows[i].style.display = 'table-row';
                        showMoves.value = 'ОПРЕСНИ';
                        if (checked[j] === strengthStandardRows[i + 2].classList.value) {
                            strengthStandardRows[i + 2].style.display = 'table-row';
                        }
                    }
                    if (checked.length < 5) {
                        hidden.style.display = 'none';
                        showMoves.value = 'ПОКАЖИ';
                    }
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

            let hidden = document.getElementById("hidden");
            let rank = document.getElementById("rank");
            let division = document.getElementById("division");
            let insignia = document.getElementById("insignia");
            let nextRank = document.getElementById("next-level-rank");
            let nextDivision = document.getElementById("next-level-division");
            let nextInsignia = document.getElementById("next-level-insignia");
            let strongest = document.getElementById("strongest");
            let weakest = document.getElementById("weakest");

            let maleRealDeadlift = ((1.72 * body_weight) / ((height * (1 / 3)) / 100)) / getLifterAge(age);
            let femaleRealDeadlift = ((1.486 * body_weight) / ((height * (1 / 3)) / 100)) / getLifterAge(age);

            //main lifts
            let dl = document.getElementById("user-deadlift").children;
            let sq = document.getElementById("user-squat").children;
            let mp = document.getElementById("user-militaryPress").children;
            let lng = document.getElementById("barbellLunge").children;
            let pup = document.getElementById("weightedPullUps").children;
            let dips = document.getElementById("weightedDips").children;
            let fsq = document.getElementById("frontSquat").children;
            let sdl = document.getElementById("sumoDeadlift").children;
            let pp = document.getElementById("pushPress").children;
            let rr = document.getElementById("renegadeRow").children;
            let gm = document.getElementById("goodMorning").children;

            let strengthIndexes = [0.25, 0.33, 0.42, 0.51, 0.6, 0.68, 0.76, 0.85, 0.92, 1];
            let ranks = ["Вербован", "Новобранец", "Редник", "Ефрейтор", "Сержант", "Лейтенант", "Капитан", "Майор", "Полковник", "Генерал"];
            let divisions = ["Зулу", "Зулу", "Зулу", "Зулу", "Лима", "Лима", "Лима", "Делта", "Делта", "Алфа"];
            let shoulder_mark = [
                '../static/images/1_2.png', '../static/images/2_2.png', '../static/images/3_2.png',
                '../static/images/4_2.png', '../static/images/5_2.png', '../static/images/6_2.png',
                '../static/images/8_2.png', '../static/images/7_2.png', '../static/images/9_2.png',
                '../static/images/10_2.png'
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

            let userChoice = ["Мъртва тяга", "Клек", "Военна преса", "Напад", "Набиране", "Кофи", "Преден клек", "Сумо тяга", "Пуш преса", "Ренегатско гребане", "Гуд морнинг"]

            let movementsIndexes = [
                { name: "Мъртва тяга", value: 1 }, { name: "Клек", value: 0.83 },
                { name: "Военна преса", value: sex === 'male' ? 0.4 : 0.37 },
                { name: "Напад", value: 0.7 }, { name: "Набиране", value: sex === 'male' ? 0.65 : 0.56 },
                { name: "Кофи", value: sex === 'male' ? 0.8 : 0.63 },
                { name: "Преден клек", value: sex === 'male' ? 0.68 : 0.67 },
                { name: "Сумо тяга", value: 0.95 }, { name: "Пуш преса", value: sex === 'male' ? 0.56 : 0.49 },
                { name: "Ренегатско гребане", value: sex === 'male' ? 0.26 : 0.2 }, { name: "Гуд морнинг", value: 0.44 }
            ];

            let realSet = [
                { name: "Мъртва тяга", value: document.getElementById("real-deadlift"), reps: document.getElementById("real-deadlift-reps"), max: document.getElementById("real-deadlift-max") },
                { name: "Клек", value: document.getElementById("real-squat"), reps: document.getElementById("real-squat-reps"), max: document.getElementById("real-squat-max") },
                { name: "Военна преса", value: document.getElementById("real-overhead-press"), reps: document.getElementById("real-overhead-press-reps"), max: document.getElementById("real-overhead-press-max") },
                { name: "Напад", value: document.getElementById("real-lunge"), reps: document.getElementById("real-lunge-reps"), max: document.getElementById("real-lunge-max") },
                { name: "Набиране", value: document.getElementById("real-pull-up"), reps: document.getElementById("real-pull-up-reps"), max: document.getElementById("real-pull-up-max") },
                { name: "Кофи", value: document.getElementById("real-dip"), reps: document.getElementById("real-dip-reps"), max: document.getElementById("real-dip-max") },
                { name: "Преден клек", value: document.getElementById("real-front-squat"), reps: document.getElementById("real-front-squat-reps"), max: document.getElementById("real-front-squat-max") },
                { name: "Сумо тяга", value: document.getElementById("real-sumo-deadlift"), reps: document.getElementById("real-sumo-deadlift-reps"), max: document.getElementById("real-sumo-deadlift-max") },
                { name: "Пуш преса", value: document.getElementById("real-push-press"), reps: document.getElementById("real-push-press-reps"), max: document.getElementById("real-push-press-max") },
                { name: "Ренегатско гребане", value: document.getElementById("real-renegade-row"), reps: document.getElementById("real-renegade-row-reps"), max: document.getElementById("real-renegade-row-max") },
                { name: "Гуд морнинг", value: document.getElementById("real-good-morning"), reps: document.getElementById("real-good-morning-reps"), max: document.getElementById("real-good-morning-max") }
            ];

            let idealSet = [
                { name: "Мъртва тяга", value: document.getElementById("ideal-deadlift"), reps: document.getElementById("ideal-deadlift-reps"), max: document.getElementById("ideal-deadlift-max") },
                { name: "Клек", value: document.getElementById("ideal-squat"), reps: document.getElementById("ideal-squat-reps"), max: document.getElementById("ideal-squat-max") },
                { name: "Военна преса", value: document.getElementById("ideal-overhead-press"), reps: document.getElementById("ideal-overhead-press-reps"), max: document.getElementById("ideal-overhead-press-max") },
                { name: "Напад", value: document.getElementById("ideal-lunge"), reps: document.getElementById("ideal-lunge-reps"), max: document.getElementById("ideal-lunge-max") },
                { name: "Набиране", value: document.getElementById("ideal-pull-up"), reps: document.getElementById("ideal-pull-up-reps"), max: document.getElementById("ideal-pull-up-max") },
                { name: "Кофи", value: document.getElementById("ideal-dip"), reps: document.getElementById("ideal-dip-reps"), max: document.getElementById("ideal-dip-max") },
                { name: "Преден клек", value: document.getElementById("ideal-front-squat"), reps: document.getElementById("ideal-front-squat-reps"), max: document.getElementById("ideal-front-squat-max") },
                { name: "Сумо тяга", value: document.getElementById("ideal-sumo-deadlift"), reps: document.getElementById("ideal-sumo-deadlift-reps"), max: document.getElementById("ideal-sumo-deadlift-max") },
                { name: "Пуш преса", value: document.getElementById("ideal-push-press"), reps: document.getElementById("ideal-push-press-reps"), max: document.getElementById("ideal-push-press-max") },
                { name: "Ренегатско гребане", value: document.getElementById("ideal-renegade-row"), reps: document.getElementById("ideal-renegade-row-reps"), max: document.getElementById("ideal-renegade-row-max") },
                { name: "Гуд морнинг", value: document.getElementById("ideal-good-morning"), reps: document.getElementById("ideal-good-morning-reps"), max: document.getElementById("ideal-good-morning-max") }
            ];

            let nextLevelSet = [
                { name: "Мъртва тяга", value: document.getElementById("next-level-deadlift"), reps: document.getElementById("next-level-deadlift-reps"), max: document.getElementById("next-level-deadlift-max") },
                { name: "Клек", value: document.getElementById("next-level-squat"), reps: document.getElementById("next-level-squat-reps"), max: document.getElementById("next-level-squat-max") },
                { name: "Военна преса", value: document.getElementById("next-level-overhead-press"), reps: document.getElementById("next-level-overhead-press-reps"), max: document.getElementById("next-level-overhead-press-max") },
                { name: "Напад", value: document.getElementById("next-level-lunge"), reps: document.getElementById("next-level-lunge-reps"), max: document.getElementById("next-level-lunge-max") },
                { name: "Набиране", value: document.getElementById("next-level-pull-up"), reps: document.getElementById("next-level-pull-up-reps"), max: document.getElementById("next-level-pull-up-max") },
                { name: "Кофи", value: document.getElementById("next-level-dip"), reps: document.getElementById("next-level-dip-reps"), max: document.getElementById("next-level-dip-max") },
                { name: "Преден клек", value: document.getElementById("next-level-front-squat"), reps: document.getElementById("next-level-front-squat-reps"), max: document.getElementById("next-level-front-squat-max") },
                { name: "Сумо тяга", value: document.getElementById("next-level-sumo-deadlift"), reps: document.getElementById("next-level-sumo-deadlift-reps"), max: document.getElementById("next-level-sumo-deadlift-max") },
                { name: "Пуш преса", value: document.getElementById("next-level-push-press"), reps: document.getElementById("next-level-push-press-reps"), max: document.getElementById("next-level-push-press-max") },
                { name: "Ренегатско гребане", value: document.getElementById("next-level-renegade-row"), reps: document.getElementById("next-level-renegade-row-reps"), max: document.getElementById("next-level-renegade-row-max") },
                { name: "Гуд морнинг", value: document.getElementById("next-level-good-morning"), reps: document.getElementById("next-level-good-morning-reps"), max: document.getElementById("next-level-good-morning-max") }
            ];

            let perfectSet = [
                { name: "Мъртва тяга", value: document.getElementById("perfect-level-deadlift"), reps: document.getElementById("perfect-level-deadlift-reps"), max: document.getElementById("perfect-level-deadlift-max") },
                { name: "Клек", value: document.getElementById("perfect-level-squat"), reps: document.getElementById("perfect-level-squat-reps"), max: document.getElementById("perfect-level-squat-max") },
                { name: "Военна преса", value: document.getElementById("perfect-level-overhead-press"), reps: document.getElementById("perfect-level-overhead-press-reps"), max: document.getElementById("perfect-level-overhead-press-max") },
                { name: "Напад", value: document.getElementById("perfect-level-lunge"), reps: document.getElementById("perfect-level-lunge-reps"), max: document.getElementById("perfect-level-lunge-max") },
                { name: "Набиране", value: document.getElementById("perfect-level-pull-up"), reps: document.getElementById("perfect-level-pull-up-reps"), max: document.getElementById("perfect-level-pull-up-max") },
                { name: "Кофи", value: document.getElementById("perfect-level-dip"), reps: document.getElementById("perfect-level-dip-reps"), max: document.getElementById("perfect-level-dip-max") },
                { name: "Преден клек", value: document.getElementById("perfect-level-front-squat"), reps: document.getElementById("perfect-level-front-squat-reps"), max: document.getElementById("perfect-level-front-squat-max") },
                { name: "Сумо тяга", value: document.getElementById("perfect-level-sumo-deadlift"), reps: document.getElementById("perfect-level-sumo-deadlift-reps"), max: document.getElementById("perfect-level-sumo-deadlift-max") },
                { name: "Пуш преса", value: document.getElementById("perfect-level-push-press"), reps: document.getElementById("perfect-level-push-press-reps"), max: document.getElementById("perfect-level-push-press-max") },
                { name: "Ренегатско гребане", value: document.getElementById("perfect-level-renegade-row"), reps: document.getElementById("perfect-level-renegade-row-reps"), max: document.getElementById("perfect-level-renegade-row-max") },
                { name: "Гуд морнинг", value: document.getElementById("perfect-level-good-morning"), reps: document.getElementById("perfect-level-good-morning-reps"), max: document.getElementById("perfect-level-good-morning-max") }
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
                        ? ((Number(pull_up) + Number(body_weight)) / getIntensity(pull_up_reps)) / 0.65
                        : ((Number(pull_up) + Number(body_weight)) / getIntensity(pull_up_reps)) / 0.56
                },
                {
                    name: "Кофи",
                    value: sex === 'male'
                        ? ((Number(dip) + Number(body_weight)) / getIntensity(dip_reps)) / 0.79
                        : ((Number(dip) + Number(body_weight)) / getIntensity(dip_reps)) / 0.63
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

            let perfect_moves = [
                {
                    name: "Мъртва тяга",
                    value: sex === 'male'
                        ? (maleRealDeadlift * getIntensity(deadlift_reps)) * 1
                        : (femaleRealDeadlift * getIntensity(deadlift_reps)) * 1
                },
                {
                    name: "Клек",
                    value: sex === 'male'
                        ? (maleRealDeadlift * 0.83 * getIntensity(squat_reps))
                        : (femaleRealDeadlift * 0.83 * getIntensity(squat_reps))
                },
                {
                    name: "Военна преса",
                    value: sex === 'male'
                        ? (maleRealDeadlift * 0.4 * getIntensity(overhead_press_reps))
                        : (femaleRealDeadlift * 0.37 * getIntensity(overhead_press_reps))
                },
                {
                    name: "Напад",
                    value: sex === 'male'
                        ? (maleRealDeadlift * 0.7 * getIntensity(lunge_reps))
                        : (femaleRealDeadlift * 0.7 * getIntensity(lunge_reps))
                },
                {
                    name: "Набиране",
                    value: sex === 'male'
                        ? (maleRealDeadlift * 0.65 * getIntensity(pull_up_reps))
                        : (femaleRealDeadlift * 0.56 * getIntensity(pull_up_reps))
                },
                {
                    name: "Кофи",
                    value: sex === 'male'
                        ? (maleRealDeadlift * 0.79 * getIntensity(dip_reps))
                        : (femaleRealDeadlift * 0.63 * getIntensity(dip_reps))
                },
                {
                    name: "Преден клек",
                    value: sex === 'male'
                        ? (maleRealDeadlift * 0.68 * getIntensity(front_psquat_reps))
                        : (femaleRealDeadlift * 0.67 * getIntensity(front_psquat_reps))
                },
                {
                    name: "Сумо тяга",
                    value: sex === 'male'
                        ? (maleRealDeadlift * 0.95 * getIntensity(sumo_deadlift_reps))
                        : (femaleRealDeadlift * 0.95 * getIntensity(sumo_deadlift_reps))
                },
                {
                    name: "Пуш преса",
                    value: sex === 'male'
                        ? (maleRealDeadlift * 0.56 * getIntensity(push_press_reps))
                        : (femaleRealDeadlift * 0.49 * getIntensity(push_press_reps))
                },
                {
                    name: "Ренегатско гребане",
                    value: sex === 'male'
                        ? (maleRealDeadlift * 0.26 * getIntensity(renegade_row_reps))
                        : (femaleRealDeadlift * 0.2 * getIntensity(renegade_row_reps))
                },
                {
                    name: "Гуд морнинг",
                    value: sex === 'male'
                        ? (maleRealDeadlift * 0.44 * getIntensity(good_morning_reps))
                        : (femaleRealDeadlift * 0.44 * getIntensity(good_morning_reps))
                }
            ];

            let realTRows = document.getElementById("real-hidden-div").querySelectorAll("tr");
            let trows = document.getElementById("ideal-hidden-div").querySelectorAll("tr");
            let nextLvlHiddenDiv = document.getElementById("next-level-hidden-div");
            let nextLvlTRows = document.getElementById("next-level-hidden-div").querySelectorAll("tr");
            let perfectLvlHiddenDiv = document.getElementById("perfect-level-hidden-div");
            let prefectLvlTRows = document.getElementById("perfect-level-hidden-div").querySelectorAll("tr");

            let checked = []
            let real = []
            let ideal = []
            let nextLvl = []
            let perfectLvl = []
            checked = Array.from(document.querySelectorAll('input[type="checkbox"]'))
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value);
            for (let i = 0; i < trows.length; i++) {
                for (let j = 0; j < trows.length; j++) {
                    if (checked[j] === trows[i].classList.value
                        && checked[j] === realTRows[i].classList.value
                        && checked[j] === nextLvlTRows[i].classList.value
                        && checked[j] === prefectLvlTRows[i].classList.value) {
                        real.push(realTRows[i])
                        ideal.push(trows[i]);
                        nextLvl.push(nextLvlTRows[i])
                        perfectLvl.push(prefectLvlTRows[i])
                    }
                    if (ideal.includes(trows[i])
                        || real.includes(realTRows[i])
                        || nextLvl.includes(nextLvlTRows[i])
                        || perfectLvl.includes(prefectLvlTRows[i])) {
                        real.splice(i, 1)
                        ideal.splice(i, 1);
                        nextLvl.splice(i, 1)
                        perfectLvl.splice(i, 1)
                    }
                }
            }

            for (let f = 0; f < ideal.length; f++) {
                checked[f]
                hidden.style.display = 'block';
                real[f].style.display = 'table-row';
                ideal[f].style.display = 'table-row';
                nextLvl[f].style.display = 'table-row';
                perfectLvl[f].style.display = 'table-row';
            }

            let idealLabels = []
            let idealData = []
            let nextLevelLabels = []
            let nextLevelData = []
            let perfectLevelLabels = []
            let perfectLevelData = []

            let labels = []
            labels = Array.from(document.querySelectorAll('input[type="checkbox"]'))
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.name);
            for (let i = 0; i < idealLabels.length; i++) {
                if (idealLabels[i] !== labels[i]) {
                    idealLabels.splice(i, 1)
                    idealData.splice(i, 1)
                }
                if (nextLevelLabels[i] !== labels[i]) {
                    nextLevelLabels.splice(i, 1)
                    nextLevelData.splice(i, 1)
                }
                if (perfectLevelLabels[i] !== labels[i]) {
                    perfectLevelLabels.splice(i, 1)
                    perfectLevelData.splice(i, 1)
                }
            }

            let currentLevel = 0;
            let idealAvg;
            let perfectAvg;
            let idealInput = [];
            let perfectInput = []
            let idealMax = Number.MIN_SAFE_INTEGER;
            let idealMaxName = '';
            let idealMin = Number.MAX_SAFE_INTEGER;
            let idealNameMin = '';
            for (let i = 0; i < ideal_moves.length; i++) {
                for (let j = 0; j < labels.length; j++) {
                    if (userChoice[i] === labels[j]) {
                        idealInput.push(ideal_moves[i].value);
                        perfectInput.push(perfect_moves[i].value)
                        currentLevel += userInput[i].value.value / perfect_moves[i].value
                        if (ideal_moves[i].value > idealMax) {
                            idealMax = ideal_moves[i].value;
                            idealMaxName = ideal_moves[i].name;
                        }
                        if (ideal_moves[i].value < idealMin) {
                            idealMin = ideal_moves[i].value;
                            idealNameMin = ideal_moves[i].name;
                        }
                    }
                }
            }
            currentLevel /= idealInput.length;
            console.log(currentLevel)

            let info = document.getElementById("info");
            let nextLevelDeadlift = 0;
            let imgPos;
            let currentRank = '';
            let currentDivision = '';
            let nextLevelRank = '';
            let nextLevelDivision = '';
            let imgPosNext;
            for (let i = 0; i < strengthIndexes.length; i++) {
                if (sex === 'male') {
                    if (currentLevel.toFixed(2) < strengthIndexes[i].toFixed(2)) {
                        if ((maleRealDeadlift * strengthIndexes[i]) < idealMax) {
                            nextLevelDeadlift = maleRealDeadlift * strengthIndexes[i + 1];
                            nextLevelRank = ranks[i + 1];
                            nextLevelDivision = divisions[i + 1];
                            imgPosNext = i + 1;
                            info.innerHTML = `Поради прескачане на текущото най-силно движение едно ниво нагоре, в таблицата "Следващо ниво" вместо за ${ranks[i]}, са изведени стойностите за ${ranks[i + 1]}!`
                        } else {
                            nextLevelDeadlift = maleRealDeadlift * strengthIndexes[i]
                            nextLevelRank = ranks[i];
                            nextLevelDivision = divisions[i];
                            imgPosNext = i;
                            info.innerHTML = ''
                        }
                        currentRank = ranks[i - 1];
                        currentDivision = divisions[i - 1];
                        imgPos = i - 1;
                        break
                    } else {
                        nextLevelDeadlift = maleRealDeadlift
                        imgPos = strengthIndexes.length - 1;
                        currentRank = ranks[strengthIndexes.length - 1];
                        currentDivision = divisions[strengthIndexes.length - 1];
                        imgPosNext = strengthIndexes.length - 1;
                        nextLevelRank = ranks[strengthIndexes.length - 1];
                        nextLevelDivision = divisions[strengthIndexes.length - 1];
                    }
                } else {
                    if (currentLevel.toFixed(2) < strengthIndexes[i].toFixed(2)) {
                        if ((femaleRealDeadlift * strengthIndexes[i]) < idealMax) {
                            nextLevelDeadlift = femaleRealDeadlift * strengthIndexes[i + 1];
                            nextLevelRank = ranks[i + 1];
                            nextLevelDivision = divisions[i + 1];
                            imgPosNext = i + 1;
                            info.innerHTML = `Поради прескачане на текущото най-силно движение едно ниво нагоре, в таблицата "Следващо ниво" вместо за ${ranks[i]}, са изведени стойностите за ${ranks[i + 1]}!`
                        } else {
                            nextLevelDeadlift = femaleRealDeadlift * strengthIndexes[i]
                            nextLevelRank = ranks[i];
                            nextLevelDivision = divisions[i];
                            imgPosNext = i;
                            info.innerHTML = ''
                        }
                        currentRank = ranks[i - 1];
                        currentDivision = divisions[i - 1];
                        imgPos = i - 1;
                        break
                    } else {
                        nextLevelDeadlift = femaleRealDeadlift
                        imgPos = strengthIndexes.length - 1;
                        currentRank = ranks[strengthIndexes.length - 1];
                        currentDivision = divisions[strengthIndexes.length - 1];
                        imgPosNext = strengthIndexes.length - 1;
                        nextLevelRank = ranks[strengthIndexes.length - 1];
                        nextLevelDivision = divisions[strengthIndexes.length - 1];
                    }
                }
            }
            console.log(nextLevelDeadlift)
            console.log(idealMax)
            idealAvg = idealInput.reduce(function (a, b) { return (a + b) })
            idealAvg /= idealInput.length;

            let relativeDeadlift = 0;
            if (idealMax > (deadlift / getIntensity(deadlift_reps))) {
                relativeDeadlift = idealMax;
            } else {
                relativeDeadlift = deadlift / getIntensity(deadlift_reps);
            }
            console.log(relativeDeadlift)
            let counter = 0;
            let fill = document.getElementById("fill");
            let fill2 = document.getElementById("fill2");
            for (let i = 0; i < userChoice.length; i++) {
                for (let j = 0; j < labels.length; j++) {
                    if (userChoice[i] === labels[j]) {
                        if (userInput[i].name === userChoice[i]) {
                            if (i === 4 || i === 5) {
                                realSet[i].value.value = userInput[i].value.value;
                                realSet[i].reps.value = userInput[i].reps.value;
                                realSet[i].max.value = Math.round(realSet[i].value.value / getIntensity(realSet[i].reps.value));
                                idealSet[i].reps.value = userInput[i].reps.value;
                                idealSet[i].value.value = Math.round((((relativeDeadlift * movementsIndexes[i].value)) * getIntensity(idealSet[i].reps.value)) - body_weight);
                                idealSet[i].max.value = Math.round(((idealSet[i].value.value + body_weight) / getIntensity(idealSet[i].reps.value)) - body_weight);
                                nextLevelSet[i].value.value = Math.round(((nextLevelDeadlift * movementsIndexes[i].value) * getIntensity(userInput[i].reps.value)) - body_weight);
                                nextLevelSet[i].reps.value = userInput[i].reps.value;
                                nextLevelSet[i].max.value = Math.round(((nextLevelSet[i].value.value + body_weight) / getIntensity(userInput[i].reps.value)) - body_weight);
                                idealLabels.push(userInput[i].name);
                                nextLevelLabels.push(userInput[i].name);
                                perfectLevelLabels.push(userInput[i].name);
                                continue
                            }
                            idealLabels.push(userInput[i].name);
                            nextLevelLabels.push(userInput[i].name);
                            perfectLevelLabels.push(userInput[i].name);
                            realSet[i].value.value = userInput[i].value.value;
                            realSet[i].reps.value = userInput[i].reps.value;
                            realSet[i].max.value = Math.round(realSet[i].value.value / getIntensity(realSet[i].reps.value));
                            idealSet[i].reps.value = userInput[i].reps.value;
                            idealSet[i].value.value = Math.round(((relativeDeadlift * movementsIndexes[i].value)) * getIntensity(idealSet[i].reps.value));
                            idealSet[i].max.value = Math.round(idealSet[i].value.value / getIntensity(idealSet[i].reps.value));
                            nextLevelSet[i].value.value = Math.round((nextLevelDeadlift * getIntensity(userInput[i].reps.value)) * movementsIndexes[i].value);
                            nextLevelSet[i].reps.value = userInput[i].reps.value;
                            nextLevelSet[i].max.value = Math.round(nextLevelSet[i].value.value / getIntensity(userInput[i].reps.value));
                            perfectSet[i].reps.value = userInput[i].reps.value;
                            idealData.push(Math.round(((userInput[i].value.value - idealSet[i].value.value) / userInput[i].value.value) * 100));
                            nextLevelData.push(Math.round(((userInput[i].value.value - nextLevelSet[i].value.value) / userInput[i].value.value) * 100));
                            if (sex === "male") {
                                perfectSet[i].value.value = Math.round((maleRealDeadlift * movementsIndexes[i].value) * getIntensity(userInput[i].reps.value));
                                perfectSet[i].max.value = Math.round(perfectSet[i].value.value / getIntensity(perfectSet[i].reps.value))
                            } else {
                                perfectSet[i].value.value = Math.round((femaleRealDeadlift * movementsIndexes[i].value) * getIntensity(userInput[i].reps.value));
                            }
                            perfectLevelData.push(Math.round(((userInput[i].value.value - perfectSet[i].value.value) / userInput[i].value.value) * 100));
                            perfectSet[i].max.value = Math.round(perfectSet[i].value.value / getIntensity(perfectSet[i].reps.value));
                        }
                        break
                    }
                }
            }

            for (let i = 1; i < 11; i++) {
                if (sex === "male") {
                    dl[i].innerHTML = (Math.round((maleRealDeadlift * strengthIndexes[i - 1]) * getIntensity(deadlift_reps))).toString();
                    sq[i].innerHTML = (Math.round((maleRealDeadlift * 0.83 * strengthIndexes[i - 1]) * getIntensity(squat_reps))).toString();
                    mp[i].innerHTML = (Math.round((maleRealDeadlift * 0.4 * strengthIndexes[i - 1]) * getIntensity(overhead_press_reps))).toString();
                    lng[i].innerHTML = (Math.round((maleRealDeadlift * 0.7 * strengthIndexes[i - 1]) * getIntensity(overhead_press_reps))).toString();
                    if (Math.round(((maleRealDeadlift * 0.65 * strengthIndexes[i - 1]) - body_weight)) > 0) {
                        pup[i].innerHTML = (Math.round((((maleRealDeadlift * 0.65 * strengthIndexes[i - 1]) * getIntensity(pull_up_reps)) - body_weight))).toString();
                    } else {
                        pup[i].innerHTML = ((Math.round(((maleRealDeadlift * 0.65 * strengthIndexes[i - 1]) - body_weight) + Number(body_weight) * 0.93))).toString() + "*";
                    }
                    fsq[i].innerHTML = (Math.round((maleRealDeadlift * 0.68 * strengthIndexes[i - 1]) * getIntensity(overhead_press_reps))).toString();
                    sdl[i].innerHTML = (Math.round((maleRealDeadlift * 0.95 * strengthIndexes[i - 1]) * getIntensity(overhead_press_reps))).toString();
                    fsq[i].innerHTML = (Math.round((maleRealDeadlift * 0.68 * strengthIndexes[i - 1]) * getIntensity(overhead_press_reps))).toString();
                    pp[i].innerHTML = (Math.round((maleRealDeadlift * 0.56 * strengthIndexes[i - 1]) * getIntensity(overhead_press_reps))).toString();
                    rr[i].innerHTML = (Math.round((maleRealDeadlift * 0.26 * strengthIndexes[i - 1]) * getIntensity(overhead_press_reps))).toString();
                    gm[i].innerHTML = (Math.round((maleRealDeadlift * 0.44 * strengthIndexes[i - 1]) * getIntensity(overhead_press_reps))).toString();
                }
            }
            // for (let i = 0; i < userInput.length; i++) {
            //     if (userInput[i].value.value) {
            //         fill.addEventListener("click", function (event) {
            //             event.preventDefault();
            //             userInput[i].value.value = Math.round(((relativeDeadlift * getIntensity(idealSet[i].reps.value)) * movementsIndexes[i].value));
            //         })
            //         fill2.addEventListener("click", function (event) {
            //             event.preventDefault();
            //             userInput[i].value.value = Math.round((nextLevelDeadlift * getIntensity(userInput[i].reps.value)) * movementsIndexes[i].value);
            //         })
            //     }
            // }
            console.log(labels)

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
                weakest.innerHTML = `${idealNameMin}`;
                idealChartBtn.addEventListener('click', function (event) {
                    event.preventDefault();
                    let idealChart = document.getElementById("ideal-bar-chart-horizontal");
                    let a = window.matchMedia("(max-width: 480px)");
                    if (window.chart1 && window.chart1 !== null) {
                        window.chart1.destroy();
                    }
                    myFunction(a);
                    a.addListener(myFunction);
                    window.chart1 = new Chart((idealChart), {
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
                            idealChart.height = window.innerHeight;
                            idealChart.width = window.innerWidth;
                        }
                    }
                })

                nextLevelChartBtn.addEventListener('click', function (event) {
                    event.preventDefault();
                    let nextLevelChart = document.getElementById("next-level-bar-chart-horizontal");
                    let a = window.matchMedia("(max-width: 480px)");
                    if (window.chart2 && window.chart2 !== null) {
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
                    if (window.chart3 && window.chart3 !== null) {
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

    function newMaxMin(ideal_moves) {
        let idealMax = Number.MIN_SAFE_INTEGER;
        let idealMaxName = '';
        let idealMin = Number.MAX_SAFE_INTEGER;
        let idealNameMin = '';
        for (let i = 0; i < ideal_moves.length; i++) {
            if (ideal_moves[i].value) {
                if (ideal_moves[i].value > idealMax) {
                    idealMax = ideal_moves[i].value;
                    idealMaxName = ideal_moves[i].name;
                }
                if (ideal_moves[i].value < idealMin) {
                    idealMin = ideal_moves[i].value;
                    idealNameMin = ideal_moves[i].name;
                }
            }
        }
        return [idealMax, idealMaxName, idealMin, idealNameMin]
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

    function isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }

    return {
        checkAll,
        showMovements,
        symmetricStrength
    }
})();