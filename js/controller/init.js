class User {
    constructor(sex, height, body_weight, age) {
        this.sex = sex
        this.height = height
        this.body_weight = body_weight
        this.age = age
    }

    realDeadlift() {
        if(this.sex === 'male') {
            return ((1.72 * this.body_weight) / ((this.height * (1 / 3)) / 100)) / getLifterAge(this.age);
        } else {
            return ((1.486 * this.body_weight) / ((this.height * (1 / 3)) / 100)) / getLifterAge(this.age);
        }
    }

    toString() {
        return `${this.sex.toUpperCase()} is ${this.realDeadlift()}kg`
    }
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

function getIntensity(reps) {
    let intensity = {
        1: 1, 2: 0.95, 3: 0.93, 4: 0.9, 5: 0.87, 6: 0.85, 7: 0.83, 8: 0.8, 9: 0.77, 10: 0.75
    };
    return (intensity[reps]);
}

const user = new User('male', 182, 80, 39);
const user2 = new User('female', 164, 58, 27);
console.log(user.realDeadlift())
console.log(user2.realDeadlift())