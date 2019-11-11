let strengthModel = (() => {
    function getSex() {
        return document.querySelector('input[name="sexes"]:checked');
    }

    function getHeight() {
        return document.getElementById("height");
    }

    function getBodyWeight() {
        return document.getElementById("body-weight");
    }

    function getAge() {
        return document.getElementById("age");
    }

    function getRank() {
        return document.getElementById("rank");
    }

    function getNextLevelRank() {
        return document.getElementById("next-level-rank");
    }

    function getNextLevelDivision() {
        return document.getElementById("next-level-division");
    }

    function getNextLevelInsignia() {
        return document.getElementById("next-level-insignia");
    }

    function getDivision() {
        return document.getElementById("division");
    }

    function getInsignia() {
        return document.getElementById("insignia");
    }

    function getStrongest() {
        return document.getElementById("strongest");
    }

    function getWeakest() {
        return document.getElementById("weakest");
    }

    function getDeadlift() {
        return document.getElementById("deadlift");
    }

    function getSquat() {
        return document.getElementById("squat");
    }

    function getOverheadPress() {
        return document.getElementById("overhead-press");
    }

    function getLunge() {
        return document.getElementById("lunge");
    }

    function getPullUp() {
        return document.getElementById("pull-up");
    }

    function getDip() {
        return document.getElementById("dip");
    }

    function getFrontSquat() {
        return document.getElementById("front-squat");
    }

    function getSumoDeadlift() {
        return document.getElementById("sumo-deadlift");
    }

    function getPushPress() {
        return document.getElementById("push-press");
    }

    function getDeadliftReps() {
        return document.getElementById("deadlift-reps");
    }

    function getSquatReps() {
        return document.getElementById("squat-reps");
    }

    function getOverheadPressReps() {
        return document.getElementById("overhead-press-reps");
    }

    function getLungeReps() {
        return document.getElementById("lunge-reps");
    }

    function getPullUpReps() {
        return document.getElementById("pull-up-reps");
    }

    function getDipReps() {
        return document.getElementById("dip-reps");
    }

    function getFrontSquatReps() {
        return document.getElementById("front-squat-reps");
    }

    function getSumoDeadliftReps() {
        return document.getElementById("sumo-deadlift-reps");
    }

    function getPushPressReps() {
        return document.getElementById("push-press-reps");
    }

    function getIdealDeadlift() {
        return document.getElementById("ideal-deadlift");
    }

    function getIdealSquat() {
        return document.getElementById("ideal-squat");
    }

    function getIdealOverheadPress() {
        return document.getElementById("ideal-overhead-press");
    }

    function getIdealLunge() {
        return document.getElementById("ideal-lunge");
    }

    function getIdealPullUp() {
        return document.getElementById("ideal-pull-up");
    }

    function getIdealDip() {
        return document.getElementById("ideal-dip");
    }

    function getIdealFrontSquat() {
        return document.getElementById("ideal-front-squat");
    }

    function getIdealSumoDeadlift() {
        return document.getElementById("ideal-sumo-deadlift");
    }

    function getIdealPushPress() {
        return document.getElementById("ideal-push-press");
    } 

    function getIdealDeadliftReps() {
        return document.getElementById("ideal-deadlift-reps");
    } 

    function getIdealSquatReps() {
        return document.getElementById("ideal-squat-reps");
    } 

    function getIdealOverheadPressReps() {
        return document.getElementById("ideal-overhead-press-reps");
    } 

    function getIdealLungeReps() {
        return document.getElementById("ideal-lunge-reps");
    } 

    function getIdealPullUpReps() {
        return document.getElementById("ideal-pull-up-reps");
    }
    
    function getIdealDipReps() {
        return document.getElementById("ideal-dip-reps");
    } 

    function getIdealFrontSquatReps() {
        return document.getElementById("ideal-front-squat-reps");
    } 

    function getIdealSumoDeadliftReps() {
        return document.getElementById("ideal-sumo-deadlift-reps");
    } 

    function getIdealPushPressReps() {
        return document.getElementById("ideal-push-press-reps");
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

    function getPatches() {
        let patches = [
            '../static/images/1_2.png',
            '../static/images/2_2.png',
            '../static/images/3_2.png',
            '../static/images/4_2.png',
            '../static/images/5_2.png',
            '../static/images/6_2.png',
            '../static/images/8_2.png',
            '../static/images/7_2.png',
            '../static/images/9_2.png',
            '../static/images/10_2.png'
        ];

        return patches;
    }

    function getInputReps() {
        let reps = [
            getIntensity(getDeadliftReps().value),
            getIntensity(getSquatReps().value),
            getIntensity(getOverheadPressReps().value),
            getIntensity(getLungeReps().value),
            getIntensity(getPullUpReps().value),
            getIntensity(getDipReps().value),
            getIntensity(getFrontSquatReps().value),
            getIntensity(getSumoDeadliftReps().value),
            getIntensity(getPushPressReps().value)
        ]

        return reps;
    }

    function strengthIndexes() {
        let strengthIndexes = [0.25, 0.3375, 0.425, 0.5125, 0.6, 0.6833, 0.7666, 0.85, 0.925, 1];

        return strengthIndexes;
    }

    function ranks() {
        let ranks = ["Recruit", "Rookie", "Private", "Corporal", "Sergeant", "Lieutenant", "Captain", "Major", "Colonel", "General"];

        return ranks;
    }

    function divisions() {
        let divisions = ["Zulu", "Zulu", "Zulu", "Zulu", "Lima", "Lima", "Lima", "Delta", "Delta", "Alfa"];

        return divisions;
    }

    function maleRealDeadlift() {
        let maleRealDeadlift = ((1.72 * getBodyWeight().value) / ((getHeight().value * (1 / 3)) / 100)) / getLifterAge(getAge().value);

        return maleRealDeadlift;
    }

    function femaleRealDeadlift() {
        let femaleRealDeadlift = ((1.486 * getBodyWeight().value) / ((getHeight().value * (1 / 3)) / 100)) / getLifterAge(getAge().value);

        return femaleRealDeadlift;
    }

    function userInput() {
        let userInput = [
            {
                name: "Deadlift",
                value: document.getElementById("deadlift")
            },
            {
                name: "Squat",
                value: document.getElementById("squat")
            },
            {
                name: "Overhead Press",
                value: document.getElementById("overhead-press")
            },
            {
                name: "Lunge",
                value: document.getElementById("lunge")
            },
            {
                name: "Pull-Up",
                value: document.getElementById("pull-up")
            },
            {
                name: "Dip",
                value: document.getElementById("dip")
            },
            {
                name: "Front Squat",
                value: document.getElementById("front-squat")
            },
            {
                name: "Sumo Deadlift",
                value: document.getElementById("sumo-deadlift")
            },
            {
                name: "Push Press",
                value: document.getElementById("push-press")
            }
        ]

        return userInput;
    }

    function movementsIndexes() {
        let indexes = [
            {
                name: "Deadlift",
                value: 1
            }, {
                name: "Squat",
                value: 0.83
            }, {
                name: "Overhead Press",
                value: getSex().value === 'male' ? 0.4 : 0.37
            },
            {
                name: "Lunge",
                value: 0.7
            }, {
                name: "Pull-Up",
                value: getSex().value === 'male' ? 0.65 : 0.56
            },
            {
                name: "Dip",
                value: getSex().value === 'male' ? 0.8 : 0.63
            }, 
            {
                name: "Front Squat",
                value: getSex().value === 'male' ? 0.68 : 0.67
            },
            {
                name: "Sumo Deadlift",
                value: 0.95
            },
            {
                name: "Push Press",
                value: getSex().value === 'male' ? 0.56 : 0.49
            }
        ];

        return indexes;
    }

    function idealSet() {
        let idealSet = [
            {
                name: "Deadlift",
                value: document.getElementById("ideal-deadlift")
            },
            {
                name: "Squat",
                value: document.getElementById("ideal-squat")
            },
            {
                name: "Overhead Press",
                value: document.getElementById("ideal-overhead-press")
            },
            {
                name: "Lunge",
                value: document.getElementById("ideal-lunge")
            },
            {
                name: "Pull-Up",
                value: document.getElementById("ideal-pull-up")
            },
            {
                name: "Dip",
                value: document.getElementById("ideal-dip")
            },
            {
                name: "Front Squat",
                value: document.getElementById("ideal-front-squat")
            },
            {
                name: "Sumo Dedadlift",
                value: document.getElementById("ideal-sumo-dealift")
            },
            {
                name: "Push Press",
                value: document.getElementById("ideal-push-press")
            }
        ];

        return idealSet;
    }

    function idealMoves() {
        let idealMoves = [
            {
                name: "Deadlift",
                value: (getDeadlift().value / getIntensity(getDeadliftReps().value)) / 1
            },
            {
                name: "Squat",
                value: (getSquat().value / getIntensity(getSquatReps().value)) / 0.83
            },
            {
                name: "Overhead Press",
                value: getSex().value === 'male' 
                ? (getOverheadPress().value / getIntensity(getOverheadPressReps().value)) / 0.4 
                : (getOverheadPress().value / getIntensity(getOverheadPressReps().value)) / 0.37
            },
            {
                name: "Lunge",
                value: (getLunge().value / getIntensity(getLungeReps().value)) / 0.7
            },
            {
                name: "Pull-Up",
                value: getSex().value === 'male' 
                ? (getPullUp().value / getIntensity(getPullUpReps().value)) / 0.65 
                : (getPullUp().value / getIntensity(getPullUpReps().value)) / 0.56
            },
            {
                name: "Dip",
                value: getSex().value === 'male' 
                ? (getDip().value / getIntensity(getDipReps().value)) / 0.79
                : (getPullUp().value / getIntensity(getPullUpReps().value)) / 0.63
            },
            {
                name: "Front Squat",
                value: getSex().value === 'male' 
                ? (getFrontSquat().value / getIntensity(getFrontSquatReps().value)) / 0.68
                : (getFrontSquat().value / getIntensity(getFrontSquatReps().value)) / 0.67
            },
            {
                name: "Sumo Deadlift",
                value: (getSumoDeadlift().value / getIntensity(getSumoDeadliftReps().value)) / 0.95
            },
            {
                name: "Push Press",
                value: getSex().value === 'male' 
                ? (getPushPress().value / getIntensity(getPushPressReps().value)) / 0.56
                : (getPushPress().value / getIntensity(getPushPressReps().value)) / 0.49
            }
        ];

        return idealMoves;
    }

    return {
        getSex,
        getHeight,
        getBodyWeight,
        getAge,
        getRank,
        getNextLevelRank,
        getNextLevelDivision,
        getNextLevelInsignia,
        getDivision,
        getInsignia,
        getStrongest,
        getWeakest,
        getDeadlift,
        getSquat,
        getOverheadPress,
        getLunge,
        getPullUp,
        getDip,
        getFrontSquat,
        getSumoDeadlift,
        getPushPress,
        getDeadliftReps,
        getSquatReps,
        getOverheadPressReps,
        getLungeReps,
        getPullUpReps,
        getDipReps,
        getFrontSquatReps,
        getSumoDeadliftReps,
        getPushPressReps,
        getIdealDeadlift,
        getIdealSquat,
        getIdealOverheadPress,
        getIdealLunge,
        getIdealPullUp,
        getIdealDip,
        getIdealFrontSquat,
        getIdealSumoDeadlift,
        getIdealPushPress,
        getIdealDeadliftReps,
        getIdealSquatReps,
        getIdealOverheadPressReps,
        getIdealLungeReps,
        getIdealPullUpReps,
        getIdealDipReps,
        getIdealFrontSquatReps,
        getIdealSumoDeadliftReps,
        getIdealPushPressReps,
        getIntensity,
        getLifterAge,
        getPatches,
        getInputReps,
        strengthIndexes,
        ranks,
        divisions,
        maleRealDeadlift,
        femaleRealDeadlift,
        userInput,
        movementsIndexes,
        idealSet,
        idealMoves
    }
})();