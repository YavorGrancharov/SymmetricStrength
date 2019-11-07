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

    function getDeadlift() {
        return document.getElementById("deadlift-input");
    }

    function getSquat() {
        return document.getElementById("squat-input");
    }

    function getOverheadPress() {
        return document.getElementById("overhead-press-input");
    }

    function getLunge() {
        return document.getElementById("lunge-input");
    }

    function getFrontSquat() {
        return document.getElementById("front-squat-input");
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

    function getFrontSquatReps() {
        return document.getElementById("front-squat-reps");
    }

    return {
        getSex,
        getHeight,
        getBodyWeight,
        getAge,
        getDeadlift,
        getSquat,
        getOverheadPress,
        getLunge,
        getFrontSquat,
        getDeadliftReps,
        getSquatReps,
        getOverheadPressReps,
        getLungeReps,
        getFrontSquatReps
    }
})();