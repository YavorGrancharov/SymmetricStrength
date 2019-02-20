let movementsController = (() => {
    function calculateLevels() {
        //http://forums.sjgames.com/showthread.php?t=21547
        //Male relative stregth: 100/76 = 1.57
        //Female relative strength: 66/60 = 1.1
        //Female/Male relative strength ratio: 1.1/1.32 = 0.83 (83%)

        let sex = clientModel.getSex();
        let height = clientModel.getHeight();
        let weight = clientModel.getWeight();
        let age = clientModel.getLifterAge();
        let reps = clientModel.getLifterReps();
        let round = document.getElementById("round");
        round = round.options[round.selectedIndex].value;

        let maleRealDeadlift = (((1.72 * weight) / ((height * (1 / 3)) / 100)) * reps) / age;
        let femaleRealDeadlift = (((1.486 * weight) / ((height * (1 / 3)) / 100)) * reps) / age;

        let levelIndexes = [0.25, 0.3375, 0.425, 0.5125, 0.6, 0.6833, 0.7666, 0.85, 0.925, 1];

        //main lifts
        let bp = document.getElementById("benchPress").children;
        let dl = document.getElementById("deadlift").children;
        let dip = document.getElementById("weightedDips").children;
        let mp = document.getElementById("militaryPress").children;
        let sdl = document.getElementById("sumoDeadlift").children;
        let sq = document.getElementById("squat").children;
        let lng = document.getElementById("barbellLunge").children;
        let pup = document.getElementById("weightedPullUps").children;
        let fsq = document.getElementById("frontSquat").children;
        let pp = document.getElementById("pushPress").children;
        let ohsq = document.getElementById("overheadSquat").children;
        let airsq = document.getElementById("airborneSquat").children;
        //secondary lifts
        let sp = document.getElementById("sidePress").children;
        let bor = document.getElementById("bentOverRow").children;
        let gm = document.getElementById("goodMorning").children;
        let sb = document.getElementById("sideBend").children;
        let rdl = document.getElementById("romanianDeadlift").children;
        let sw = document.getElementById("swing").children;
        let abp = document.getElementById("abdominalBenchPress").children;
        let saw = document.getElementById("bucksaw").children;
        let rr = document.getElementById("renegadeRow").children;
        let fct = document.getElementById("fullContactTwist").children;
        let cp = document.getElementById("curlAndPress").children;
        let tripsw = document.getElementById("tripleSwing").children;
        let frr = document.getElementById("flyingRenegadeRow").children;

        for (let i = 1; i < 11; i++) {
            if (sex === "male") {
                //main lifts
                bp[i].innerHTML = (Math.round((maleRealDeadlift * 0.61 * levelIndexes[i - 1]) / round) * round).toString();
                dl[i].innerHTML = (Math.round((maleRealDeadlift * levelIndexes[i - 1]) / round) * round).toString();
                if (Math.round(((maleRealDeadlift * 0.75 * levelIndexes[i - 1]) - weight)) > 0) {
                    dip[i].innerHTML = (Math.round(((maleRealDeadlift * 0.75 * levelIndexes[i - 1]) - weight) / round) * round).toString();
                } else {
                    dip[i].innerHTML = ((Math.round(((maleRealDeadlift * 0.75 * levelIndexes[i - 1]) - weight) + Number(weight)) / round) * round).toString() + "*";
                }
                mp[i].innerHTML = (Math.round((maleRealDeadlift * 0.4 * levelIndexes[i - 1]) / round) * round).toString();
                sdl[i].innerHTML = (Math.round((maleRealDeadlift * 0.9 * levelIndexes[i - 1]) / round) * round).toString();
                sq[i].innerHTML = (Math.round((maleRealDeadlift * 0.83 * levelIndexes[i - 1]) / round) * round).toString();
                lng[i].innerHTML = (Math.round((maleRealDeadlift * 0.7 * levelIndexes[i - 1]) / round) * round).toString();
                if (Math.round(((maleRealDeadlift * 0.65 * levelIndexes[i - 1]) - weight)) > 0) {
                    pup[i].innerHTML = (Math.round(((maleRealDeadlift * 0.65 * levelIndexes[i - 1]) - weight) / round) * round).toString();
                } else {
                    pup[i].innerHTML = ((Math.round(((maleRealDeadlift * 0.65 * levelIndexes[i - 1]) - weight) + Number(weight) * 0.93) / round) * round).toString() + "*";
                }
                fsq[i].innerHTML = (Math.round((maleRealDeadlift * 0.68 * levelIndexes[i - 1]) / round) * round).toString();
                pp[i].innerHTML = (Math.round((maleRealDeadlift * 0.56 * levelIndexes[i - 1]) / round) * round).toString();
                ohsq[i].innerHTML = (Math.round((maleRealDeadlift * 0.558 * levelIndexes[i - 1]) / round) * round).toString();
                airsq[i].innerHTML = (Math.round((maleRealDeadlift * 0.3888 * levelIndexes[i - 1]) / round) * round).toString();
                //secondary lifts
                sp[i].innerHTML = (Math.round((maleRealDeadlift * 0.18787 * levelIndexes[i - 1]) / round) * round).toString();
                bor[i].innerHTML = (Math.round((maleRealDeadlift * 0.53 * levelIndexes[i - 1]) / round) * round).toString();
                gm[i].innerHTML = (Math.round((maleRealDeadlift * 0.44 * levelIndexes[i - 1]) / round) * round).toString();
                sb[i].innerHTML = (Math.round((maleRealDeadlift * 0.35 * levelIndexes[i - 1]) / round) * round).toString();
                rdl[i].innerHTML = (Math.round((maleRealDeadlift * 0.66 * levelIndexes[i - 1]) / round) * round).toString();
                sw[i].innerHTML = (Math.round((maleRealDeadlift * 0.322 * levelIndexes[i - 1]) / round) * round).toString();
                abp[i].innerHTML = (Math.round((maleRealDeadlift * 0.22857 * levelIndexes[i - 1]) / round) * round).toString();
                saw[i].innerHTML = (Math.round((maleRealDeadlift * 0.5314 * levelIndexes[i - 1]) / round) * round).toString();
                rr[i].innerHTML = (Math.round((maleRealDeadlift * 0.2416 * levelIndexes[i - 1]) / round) * round).toString();
                fct[i].innerHTML = (Math.round((maleRealDeadlift * 0.3 * levelIndexes[i - 1] - 9) / round) * round).toString();
                cp[i].innerHTML = (Math.round((maleRealDeadlift * 0.125 * levelIndexes[i - 1]) / round) * round).toString();
                tripsw[i].innerHTML = (Math.round((maleRealDeadlift * 0.2545 * levelIndexes[i - 1]) / round) * round).toString();
                frr[i].innerHTML = (Math.round((maleRealDeadlift * 0.2175 * levelIndexes[i - 1]) / round) * round).toString();
            } else {
                //main lifts
                bp[i].innerHTML = (Math.round((femaleRealDeadlift * 0.57 * levelIndexes[i - 1]) / round) * round).toString();
                dl[i].innerHTML = (Math.round((femaleRealDeadlift * levelIndexes[i - 1]) / round) * round).toString();
                if (Math.round(((femaleRealDeadlift * 0.63 * levelIndexes[i - 1]) - weight)) > 0) {
                    dip[i].innerHTML = (Math.round(((femaleRealDeadlift * 0.63 * levelIndexes[i - 1]) - weight) / round) * round).toString();
                } else {
                    dip[i].innerHTML = ((Math.round(((femaleRealDeadlift * 0.63 * levelIndexes[i - 1]) - weight) + Number(weight)) / round) * round).toString() + "*";
                }
                mp[i].innerHTML = (Math.round((femaleRealDeadlift * 0.37 * levelIndexes[i - 1]) / round) * round).toString();
                sdl[i].innerHTML = (Math.round((femaleRealDeadlift * 0.9 * levelIndexes[i - 1]) / round) * round).toString();
                sq[i].innerHTML = (Math.round((femaleRealDeadlift * 0.83 * levelIndexes[i - 1]) / round) * round).toString();
                lng[i].innerHTML = (Math.round((femaleRealDeadlift * 0.7 * levelIndexes[i - 1]) / round) * round).toString();
                if (Math.round(((femaleRealDeadlift * 0.56 * levelIndexes[i - 1]) - weight)) > 0) {
                    pup[i].innerHTML = (Math.round(((femaleRealDeadlift * 0.56 * levelIndexes[i - 1]) - weight) / round) * round).toString();
                } else {
                    pup[i].innerHTML = ((Math.round(((femaleRealDeadlift * 0.56 * levelIndexes[i - 1]) - weight) + Number(weight) * 0.93) / round) * round).toString() + "*";
                }
                fsq[i].innerHTML = (Math.round((femaleRealDeadlift * 0.67 * levelIndexes[i - 1]) / round) * round).toString();
                pp[i].innerHTML = (Math.round((femaleRealDeadlift * 0.49 * levelIndexes[i - 1]) / round) * round).toString();
                ohsq[i].innerHTML = (Math.round((femaleRealDeadlift * 0.512 * levelIndexes[i - 1]) / round) * round).toString();
                airsq[i].innerHTML = (Math.round((femaleRealDeadlift * 0.3888 * levelIndexes[i - 1]) / round) * round).toString();
                //secondary lifts
                sp[i].innerHTML = (Math.round((femaleRealDeadlift * 0.173779 * levelIndexes[i - 1]) / round) * round).toString();
                bor[i].innerHTML = (Math.round((femaleRealDeadlift * 0.53 * levelIndexes[i - 1]) / round) * round).toString();
                gm[i].innerHTML = (Math.round((femaleRealDeadlift * 0.44 * levelIndexes[i - 1]) / round) * round).toString();
                sb[i].innerHTML = (Math.round((femaleRealDeadlift * 0.35 * levelIndexes[i - 1]) / round) * round).toString();
                rdl[i].innerHTML = (Math.round((femaleRealDeadlift * 0.66 * levelIndexes[i - 1]) / round) * round).toString();
                sw[i].innerHTML = (Math.round((femaleRealDeadlift * 0.322 * levelIndexes[i - 1]) / round) * round).toString();
                abp[i].innerHTML = (Math.round((femaleRealDeadlift * 0.22 * levelIndexes[i - 1]) / round) * round).toString();
                saw[i].innerHTML = (Math.round((femaleRealDeadlift * 0.4578 * levelIndexes[i - 1]) / round) * round).toString();
                rr[i].innerHTML = (Math.round((femaleRealDeadlift * 0.2 * levelIndexes[i - 1]) / round) * round).toString();
                fct[i].innerHTML = (Math.round((femaleRealDeadlift * 0.28 * levelIndexes[i - 1] - 9) / round) * round).toString();
                cp[i].innerHTML = (Math.round((femaleRealDeadlift * 0.145357 * levelIndexes[i - 1]) / round) * round).toString();
                tripsw[i].innerHTML = (Math.round((femaleRealDeadlift * 0.2545 * levelIndexes[i - 1]) / round) * round).toString();
                frr[i].innerHTML = (Math.round((femaleRealDeadlift * 0.18 * levelIndexes[i - 1]) / round) * round).toString();
            }
        }
    }

    return {
        calculateLevels
    }
})();