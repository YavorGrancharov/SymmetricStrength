let movementsController = (() => {
    function calculateLevels() {
        let sex = document.getElementById("sex").value;
        let height = document.getElementById("height").value;
        let weight = document.getElementById("weight").value;
        let age = document.getElementById("age").value;

        //http://forums.sjgames.com/showthread.php?t=21547
        //Male relative stregth: 100/76 = 1.57
        //Female relative strength: 66/60 = 1.1
        //Female/Male relative strength ratio: 1.1/1.32 = 0.83 (83%)

        let maleRealDeadlift = ((1.72 * weight) / ((height * (1 / 3)) / 100)) * 0.87;
        let femaleRealDeadlift = ((1.486 * weight) / ((height * (1 / 3)) / 100)) * 0.87;

        switch (age) {
            case "14":
                maleRealDeadlift /= 1.23;
                femaleRealDeadlift /= 1.23;
                break;
            case "15":
                maleRealDeadlift /= 1.18;
                femaleRealDeadlift /= 1.18;
                break;
            case "16":
                maleRealDeadlift /= 1.13;
                femaleRealDeadlift /= 1.13;
                break;
            case "17":
                maleRealDeadlift /= 1.08;
                femaleRealDeadlift /= 1.08;
                break;
            case "18":
                maleRealDeadlift /= 1.06;
                femaleRealDeadlift /= 1.06;
                break;
            case "19":
                maleRealDeadlift /= 1.04;
                femaleRealDeadlift /= 1.04;
                break;
            case "20":
                maleRealDeadlift /= 1.03;
                femaleRealDeadlift /= 1.03;
                break;
            case "21":
                maleRealDeadlift /= 1.02;
                femaleRealDeadlift /= 1.02;
                break;
            case "22":
                maleRealDeadlift /= 1.01;
                femaleRealDeadlift /= 1.01;
                break;
            case "41":
                maleRealDeadlift /= 1.01;
                femaleRealDeadlift /= 1.01;
                break;
            case "42":
                maleRealDeadlift /= 1.02;
                femaleRealDeadlift /= 1.02;
                break;
            case "43":
                maleRealDeadlift /= 1.031;
                femaleRealDeadlift /= 1.031;
                break;
            case "44":
                maleRealDeadlift /= 1.043;
                femaleRealDeadlift /= 1.043;
                break;
            case "45":
                maleRealDeadlift /= 1.055;
                femaleRealDeadlift /= 1.055;
                break;
            case "46":
                maleRealDeadlift /= 1.068;
                femaleRealDeadlift /= 1.068;
                break;
            case "47":
                maleRealDeadlift /= 1.082;
                femaleRealDeadlift /= 1.082;
                break;
            case "48":
                maleRealDeadlift /= 1.097;
                femaleRealDeadlift /= 1.097;
                break;
            case "49":
                maleRealDeadlift /= 1.113;
                femaleRealDeadlift /= 1.113;
                break;
            case "50":
                maleRealDeadlift /= 1.13;
                femaleRealDeadlift /= 1.13;
                break;
            case "51":
                maleRealDeadlift /= 1.147;
                femaleRealDeadlift /= 1.147;
                break;
            case "52":
                maleRealDeadlift /= 1.165;
                femaleRealDeadlift /= 1.165;
                break;
            case "53":
                maleRealDeadlift /= 1.184;
                femaleRealDeadlift /= 1.184;
                break;
            case "54":
                maleRealDeadlift /= 1.204;
                femaleRealDeadlift /= 1.204;
                break;
            case "55":
                maleRealDeadlift /= 1.225;
                femaleRealDeadlift /= 1.225;
                break;
            case "56":
                maleRealDeadlift /= 1.246;
                femaleRealDeadlift /= 1.246;
                break;
            case "57":
                maleRealDeadlift /= 1.268;
                femaleRealDeadlift /= 1.268;
                break;
            case "58":
                maleRealDeadlift /= 1.291;
                femaleRealDeadlift /= 1.291;
                break;
            case "59":
                maleRealDeadlift /= 1.315;
                femaleRealDeadlift /= 1.315;
                break;
            case "60":
                maleRealDeadlift /= 1.34;
                femaleRealDeadlift /= 1.34;
                break;
            case "61":
                maleRealDeadlift /= 1.366;
                femaleRealDeadlift /= 1.366;
                break;
            case "62":
                maleRealDeadlift /= 1.393;
                femaleRealDeadlift /= 1.393;
                break;
            case "63":
                maleRealDeadlift /= 1.421;
                femaleRealDeadlift /= 1.421;
                break;
            case "64":
                maleRealDeadlift /= 1.45;
                femaleRealDeadlift /= 1.45;
                break;
            case "65":
                maleRealDeadlift /= 1.48;
                femaleRealDeadlift /= 1.48;
                break;
            case "66":
                maleRealDeadlift /= 1.511;
                femaleRealDeadlift /= 1.511;
                break;
            case "67":
                maleRealDeadlift /= 1.543;
                femaleRealDeadlift /= 1.543;
                break;
            case "68":
                maleRealDeadlift /= 1.576;
                femaleRealDeadlift /= 1.576;
                break;
            case "69":
                maleRealDeadlift /= 1.61;
                femaleRealDeadlift /= 1.61;
                break;
            case "70":
                maleRealDeadlift /= 1.645;
                femaleRealDeadlift /= 1.645;
                break;
            case "71":
                maleRealDeadlift /= 1.681;
                femaleRealDeadlift /= 1.681;
                break;
            case "72":
                maleRealDeadlift /= 1.718;
                femaleRealDeadlift /= 1.718;
                break;
            case "73":
                maleRealDeadlift /= 1.756;
                femaleRealDeadlift /= 1.756;
                break;
            case "74":
                maleRealDeadlift /= 1.795;
                femaleRealDeadlift /= 1.795;
                break;
            case "75":
                maleRealDeadlift /= 1.835;
                femaleRealDeadlift /= 1.835;
                break;
            case "76":
                maleRealDeadlift /= 1.876;
                femaleRealDeadlift /= 1.876;
                break;
            case "77":
                maleRealDeadlift /= 1.918;
                femaleRealDeadlift /= 1.918;
                break;
            case "78":
                maleRealDeadlift /= 1.961;
                femaleRealDeadlift /= 1.961;
                break;
            case "79":
                maleRealDeadlift /= 2.005;
                femaleRealDeadlift /= 2.005;
                break;
            case "80":
                maleRealDeadlift /= 2.05;
                femaleRealDeadlift /= 2.05;
                break;
        }

        if (sex === "male") {
            document.getElementById("dl1").innerHTML = (Math.round(maleRealDeadlift * 0.25)).toString();
            document.getElementById("dl2").innerHTML = (Math.round(maleRealDeadlift * 0.3375)).toString();
            document.getElementById("dl3").innerHTML = (Math.round(maleRealDeadlift * 0.425)).toString();
            document.getElementById("dl4").innerHTML = (Math.round(maleRealDeadlift * 0.5125)).toString();
            document.getElementById("dl5").innerHTML = (Math.round(maleRealDeadlift * 0.60)).toString();
            document.getElementById("dl6").innerHTML = (Math.round(maleRealDeadlift * 0.68333333)).toString();
            document.getElementById("dl7").innerHTML = (Math.round(maleRealDeadlift * 0.76666667)).toString();
            document.getElementById("dl8").innerHTML = (Math.round(maleRealDeadlift * 0.85)).toString();
            document.getElementById("dl9").innerHTML = (Math.round(maleRealDeadlift * 0.925)).toString();
            document.getElementById("dl10").innerHTML = (Math.round(maleRealDeadlift)).toString();

            if (Math.round(((maleRealDeadlift * 0.75 * 0.25) - weight)) < 0) {
                document.getElementById("dip1").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.75 * 0.25)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip1").innerHTML = (Math.round((maleRealDeadlift * 0.75 * 0.25) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.75 * 0.3375) - weight)) < 0) {
                document.getElementById("dip2").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.75 * 0.3375)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip2").innerHTML = (Math.round((maleRealDeadlift * 0.75 * 0.3375) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.75 * 0.425) - weight)) < 0) {
                document.getElementById("dip3").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.75 * 0.425)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip3").innerHTML = (Math.round((maleRealDeadlift * 0.75 * 0.425) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.75 * 0.5125) - weight)) < 0) {
                document.getElementById("dip4").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.75 * 0.5125)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip4").innerHTML = (Math.round((maleRealDeadlift * 0.75 * 0.5125) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.75 * 0.60) - weight)) < 0) {
                document.getElementById("dip5").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.75 * 0.60)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip5").innerHTML = (Math.round((maleRealDeadlift * 0.75 * 0.60) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.75 * 0.68333333) - weight)) < 0) {
                document.getElementById("dip6").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.75 * 0.68333333)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip6").innerHTML = (Math.round((maleRealDeadlift * 0.75 * 0.68333333) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.75 * 0.76666667) - weight)) < 0) {
                document.getElementById("dip7").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.75 * 0.76666667)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip7").innerHTML = (Math.round((maleRealDeadlift * 0.75 * 0.76666667) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.75 * 0.85) - weight)) < 0) {
                document.getElementById("dip8").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.75 * 0.85)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip8").innerHTML = (Math.round((maleRealDeadlift * 0.75 * 0.85) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.75 * 0.925) - weight)) < 0) {
                document.getElementById("dip9").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.75 * 0.925)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip9").innerHTML = (Math.round((maleRealDeadlift * 0.75 * 0.925) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.75) - weight)) < 0) {
                document.getElementById("dip10").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.75)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip10").innerHTML = (Math.round((maleRealDeadlift * 0.75) - weight)).toString();
            }

            document.getElementById("mp1").innerHTML = (Math.round(maleRealDeadlift * 0.4 * 0.25)).toString();
            document.getElementById("mp2").innerHTML = (Math.round(maleRealDeadlift * 0.4 * 0.3375)).toString();
            document.getElementById("mp3").innerHTML = (Math.round(maleRealDeadlift * 0.4 * 0.425)).toString();
            document.getElementById("mp4").innerHTML = (Math.round(maleRealDeadlift * 0.4 * 0.5125)).toString();
            document.getElementById("mp5").innerHTML = (Math.round(maleRealDeadlift * 0.4 * 0.60)).toString();
            document.getElementById("mp6").innerHTML = (Math.round(maleRealDeadlift * 0.4 * 0.68333333)).toString();
            document.getElementById("mp7").innerHTML = (Math.round(maleRealDeadlift * 0.4 * 0.76666667)).toString();
            document.getElementById("mp8").innerHTML = (Math.round(maleRealDeadlift * 0.4 * 0.85)).toString();
            document.getElementById("mp9").innerHTML = (Math.round(maleRealDeadlift * 0.4 * 0.925)).toString();
            document.getElementById("mp10").innerHTML = (Math.round(maleRealDeadlift * 0.4)).toString();

            document.getElementById("gm1").innerHTML = (Math.round(maleRealDeadlift * 0.44 * 0.25)).toString();
            document.getElementById("gm2").innerHTML = (Math.round(maleRealDeadlift * 0.44 * 0.3375)).toString();
            document.getElementById("gm3").innerHTML = (Math.round(maleRealDeadlift * 0.44 * 0.425)).toString();
            document.getElementById("gm4").innerHTML = (Math.round(maleRealDeadlift * 0.44 * 0.5125)).toString();
            document.getElementById("gm5").innerHTML = (Math.round(maleRealDeadlift * 0.44 * 0.60)).toString();
            document.getElementById("gm6").innerHTML = (Math.round(maleRealDeadlift * 0.44 * 0.68333333)).toString();
            document.getElementById("gm7").innerHTML = (Math.round(maleRealDeadlift * 0.44 * 0.76666667)).toString();
            document.getElementById("gm8").innerHTML = (Math.round(maleRealDeadlift * 0.44 * 0.85)).toString();
            document.getElementById("gm9").innerHTML = (Math.round(maleRealDeadlift * 0.44 * 0.925)).toString();
            document.getElementById("gm10").innerHTML = (Math.round(maleRealDeadlift * 0.44)).toString();

            document.getElementById("sdl1").innerHTML = (Math.round(maleRealDeadlift * 0.9 * 0.25)).toString();
            document.getElementById("sdl2").innerHTML = (Math.round(maleRealDeadlift * 0.9 * 0.3375)).toString();
            document.getElementById("sdl3").innerHTML = (Math.round(maleRealDeadlift * 0.9 * 0.425)).toString();
            document.getElementById("sdl4").innerHTML = (Math.round(maleRealDeadlift * 0.9 * 0.5125)).toString();
            document.getElementById("sdl5").innerHTML = (Math.round(maleRealDeadlift * 0.9 * 0.60)).toString();
            document.getElementById("sdl6").innerHTML = (Math.round(maleRealDeadlift * 0.9 * 0.68333333)).toString();
            document.getElementById("sdl7").innerHTML = (Math.round(maleRealDeadlift * 0.9 * 0.76666667)).toString();
            document.getElementById("sdl8").innerHTML = (Math.round(maleRealDeadlift * 0.9 * 0.85)).toString();
            document.getElementById("sdl9").innerHTML = (Math.round(maleRealDeadlift * 0.9 * 0.925)).toString();
            document.getElementById("sdl10").innerHTML = (Math.round(maleRealDeadlift * 0.9)).toString();

            document.getElementById("sq1").innerHTML = (Math.round(maleRealDeadlift * 0.83 * 0.25)).toString();
            document.getElementById("sq2").innerHTML = (Math.round(maleRealDeadlift * 0.83 * 0.3375)).toString();
            document.getElementById("sq3").innerHTML = (Math.round(maleRealDeadlift * 0.83 * 0.425)).toString();
            document.getElementById("sq4").innerHTML = (Math.round(maleRealDeadlift * 0.83 * 0.5125)).toString();
            document.getElementById("sq5").innerHTML = (Math.round(maleRealDeadlift * 0.83 * 0.60)).toString();
            document.getElementById("sq6").innerHTML = (Math.round(maleRealDeadlift * 0.83 * 0.68333333)).toString();
            document.getElementById("sq7").innerHTML = (Math.round(maleRealDeadlift * 0.83 * 0.76666667)).toString();
            document.getElementById("sq8").innerHTML = (Math.round(maleRealDeadlift * 0.83 * 0.85)).toString();
            document.getElementById("sq9").innerHTML = (Math.round(maleRealDeadlift * 0.83 * 0.925)).toString();
            document.getElementById("sq10").innerHTML = (Math.round(maleRealDeadlift * 0.83)).toString();

            document.getElementById("lng1").innerHTML = (Math.round(maleRealDeadlift * 0.7 * 0.25)).toString();
            document.getElementById("lng2").innerHTML = (Math.round(maleRealDeadlift * 0.7 * 0.3375)).toString();
            document.getElementById("lng3").innerHTML = (Math.round(maleRealDeadlift * 0.7 * 0.425)).toString();
            document.getElementById("lng4").innerHTML = (Math.round(maleRealDeadlift * 0.7 * 0.5125)).toString();
            document.getElementById("lng5").innerHTML = (Math.round(maleRealDeadlift * 0.7 * 0.60)).toString();
            document.getElementById("lng6").innerHTML = (Math.round(maleRealDeadlift * 0.7 * 0.68333333)).toString();
            document.getElementById("lng7").innerHTML = (Math.round(maleRealDeadlift * 0.7 * 0.76666667)).toString();
            document.getElementById("lng8").innerHTML = (Math.round(maleRealDeadlift * 0.7 * 0.85)).toString();
            document.getElementById("lng9").innerHTML = (Math.round(maleRealDeadlift * 0.7 * 0.925)).toString();
            document.getElementById("lng10").innerHTML = (Math.round(maleRealDeadlift * 0.7)).toString();

            if (Math.round(((maleRealDeadlift * 0.65 * 0.25) - weight)) < 0) {
                document.getElementById("pup1").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.65 * 0.25)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup1").innerHTML = (Math.round((maleRealDeadlift * 0.65 * 0.25) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.65 * 0.3375) - weight)) < 0) {
                document.getElementById("pup2").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.65 * 0.3375)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup2").innerHTML = (Math.round((maleRealDeadlift * 0.65 * 0.3375) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.65 * 0.425) - weight)) < 0) {
                document.getElementById("pup3").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.65 * 0.425)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup3").innerHTML = (Math.round((maleRealDeadlift * 0.65 * 0.425) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.65 * 0.5125) - weight)) < 0) {
                document.getElementById("pup4").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.65 * 0.5125)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup4").innerHTML = (Math.round((maleRealDeadlift * 0.65 * 0.5125) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.65 * 0.60) - weight)) < 0) {
                document.getElementById("pup5").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.65 * 0.60)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup5").innerHTML = (Math.round((maleRealDeadlift * 0.65 * 0.60) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.65 * 0.68333333) - weight)) < 0) {
                document.getElementById("pup6").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.65 * 0.68333333)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup6").innerHTML = (Math.round((maleRealDeadlift * 0.65 * 0.68333333) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.65 * 0.76666667) - weight)) < 0) {
                document.getElementById("pup7").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.65 * 0.76666667)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup7").innerHTML = (Math.round((maleRealDeadlift * 0.65 * 0.76666667) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.65 * 0.85) - weight)) < 0) {
                document.getElementById("pup8").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.65 * 0.85)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup8").innerHTML = (Math.round((maleRealDeadlift * 0.65 * 0.85) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.65 * 0.925) - weight)) < 0) {
                document.getElementById("pup9").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.65 * 0.925)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup9").innerHTML = (Math.round((maleRealDeadlift * 0.65 * 0.925) - weight)).toString();
            }
            if (Math.round(((maleRealDeadlift * 0.65) - weight)) < 0) {
                document.getElementById("pup10").innerHTML = (Number(Math.round(((maleRealDeadlift * 0.65)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup10").innerHTML = (Math.round((maleRealDeadlift * 0.65) - weight)).toString();
            }

            document.getElementById("fsq1").innerHTML = (Math.round(maleRealDeadlift * 0.68 * 0.25)).toString();
            document.getElementById("fsq2").innerHTML = (Math.round(maleRealDeadlift * 0.68 * 0.3375)).toString();
            document.getElementById("fsq3").innerHTML = (Math.round(maleRealDeadlift * 0.68 * 0.425)).toString();
            document.getElementById("fsq4").innerHTML = (Math.round(maleRealDeadlift * 0.68 * 0.5125)).toString();
            document.getElementById("fsq5").innerHTML = (Math.round(maleRealDeadlift * 0.68 * 0.60)).toString();
            document.getElementById("fsq6").innerHTML = (Math.round(maleRealDeadlift * 0.68 * 0.68333333)).toString();
            document.getElementById("fsq7").innerHTML = (Math.round(maleRealDeadlift * 0.68 * 0.76666667)).toString();
            document.getElementById("fsq8").innerHTML = (Math.round(maleRealDeadlift * 0.68 * 0.85)).toString();
            document.getElementById("fsq9").innerHTML = (Math.round(maleRealDeadlift * 0.68 * 0.925)).toString();
            document.getElementById("fsq10").innerHTML = (Math.round(maleRealDeadlift * 0.68)).toString();

            document.getElementById("rdl1").innerHTML = (Math.round(maleRealDeadlift * 0.66 * 0.25)).toString();
            document.getElementById("rdl2").innerHTML = (Math.round(maleRealDeadlift * 0.66 * 0.3375)).toString();
            document.getElementById("rdl3").innerHTML = (Math.round(maleRealDeadlift * 0.66 * 0.425)).toString();
            document.getElementById("rdl4").innerHTML = (Math.round(maleRealDeadlift * 0.66 * 0.5125)).toString();
            document.getElementById("rdl5").innerHTML = (Math.round(maleRealDeadlift * 0.66 * 0.60)).toString();
            document.getElementById("rdl6").innerHTML = (Math.round(maleRealDeadlift * 0.66 * 0.68333333)).toString();
            document.getElementById("rdl7").innerHTML = (Math.round(maleRealDeadlift * 0.66 * 0.76666667)).toString();
            document.getElementById("rdl8").innerHTML = (Math.round(maleRealDeadlift * 0.66 * 0.85)).toString();
            document.getElementById("rdl9").innerHTML = (Math.round(maleRealDeadlift * 0.66 * 0.925)).toString();
            document.getElementById("rdl10").innerHTML = (Math.round(maleRealDeadlift * 0.66)).toString();

            document.getElementById("bp1").innerHTML = (Math.round(maleRealDeadlift * 0.61 * 0.25)).toString();
            document.getElementById("bp2").innerHTML = (Math.round(maleRealDeadlift * 0.61 * 0.3375)).toString();
            document.getElementById("bp3").innerHTML = (Math.round(maleRealDeadlift * 0.61 * 0.425)).toString();
            document.getElementById("bp4").innerHTML = (Math.round(maleRealDeadlift * 0.61 * 0.5125)).toString();
            document.getElementById("bp5").innerHTML = (Math.round(maleRealDeadlift * 0.61 * 0.60)).toString();
            document.getElementById("bp6").innerHTML = (Math.round(maleRealDeadlift * 0.61 * 0.68333333)).toString();
            document.getElementById("bp7").innerHTML = (Math.round(maleRealDeadlift * 0.61 * 0.76666667)).toString();
            document.getElementById("bp8").innerHTML = (Math.round(maleRealDeadlift * 0.61 * 0.85)).toString();
            document.getElementById("bp9").innerHTML = (Math.round(maleRealDeadlift * 0.61 * 0.925)).toString();
            document.getElementById("bp10").innerHTML = (Math.round(maleRealDeadlift * 0.61)).toString();

            document.getElementById("pp1").innerHTML = (Math.round(maleRealDeadlift * 0.56 * 0.25)).toString();
            document.getElementById("pp2").innerHTML = (Math.round(maleRealDeadlift * 0.56 * 0.3375)).toString();
            document.getElementById("pp3").innerHTML = (Math.round(maleRealDeadlift * 0.56 * 0.425)).toString();
            document.getElementById("pp4").innerHTML = (Math.round(maleRealDeadlift * 0.56 * 0.5125)).toString();
            document.getElementById("pp5").innerHTML = (Math.round(maleRealDeadlift * 0.56 * 0.60)).toString();
            document.getElementById("pp6").innerHTML = (Math.round(maleRealDeadlift * 0.56 * 0.68333333)).toString();
            document.getElementById("pp7").innerHTML = (Math.round(maleRealDeadlift * 0.56 * 0.76666667)).toString();
            document.getElementById("pp8").innerHTML = (Math.round(maleRealDeadlift * 0.56 * 0.85)).toString();
            document.getElementById("pp9").innerHTML = (Math.round(maleRealDeadlift * 0.56 * 0.925)).toString();
            document.getElementById("pp10").innerHTML = (Math.round(maleRealDeadlift * 0.56)).toString();

            document.getElementById("ohsq1").innerHTML = (Math.round(maleRealDeadlift * 0.558 * 0.25)).toString();
            document.getElementById("ohsq2").innerHTML = (Math.round(maleRealDeadlift * 0.558 * 0.3375)).toString();
            document.getElementById("ohsq3").innerHTML = (Math.round(maleRealDeadlift * 0.558 * 0.425)).toString();
            document.getElementById("ohsq4").innerHTML = (Math.round(maleRealDeadlift * 0.558 * 0.5125)).toString();
            document.getElementById("ohsq5").innerHTML = (Math.round(maleRealDeadlift * 0.558 * 0.60)).toString();
            document.getElementById("ohsq6").innerHTML = (Math.round(maleRealDeadlift * 0.558 * 0.68333333)).toString();
            document.getElementById("ohsq7").innerHTML = (Math.round(maleRealDeadlift * 0.558 * 0.76666667)).toString();
            document.getElementById("ohsq8").innerHTML = (Math.round(maleRealDeadlift * 0.558 * 0.85)).toString();
            document.getElementById("ohsq9").innerHTML = (Math.round(maleRealDeadlift * 0.558 * 0.925)).toString();
            document.getElementById("ohsq10").innerHTML = (Math.round(maleRealDeadlift * 0.558)).toString();

            document.getElementById("ablng1").innerHTML = (Math.round(maleRealDeadlift * 0.3888 * 0.25)).toString();
            document.getElementById("ablng2").innerHTML = (Math.round(maleRealDeadlift * 0.3888 * 0.3375)).toString();
            document.getElementById("ablng3").innerHTML = (Math.round(maleRealDeadlift * 0.3888 * 0.425)).toString();
            document.getElementById("ablng4").innerHTML = (Math.round(maleRealDeadlift * 0.3888 * 0.5125)).toString();
            document.getElementById("ablng5").innerHTML = (Math.round(maleRealDeadlift * 0.3888 * 0.60)).toString();
            document.getElementById("ablng6").innerHTML = (Math.round(maleRealDeadlift * 0.3888 * 0.68333333)).toString();
            document.getElementById("ablng7").innerHTML = (Math.round(maleRealDeadlift * 0.3888 * 0.76666667)).toString();
            document.getElementById("ablng8").innerHTML = (Math.round(maleRealDeadlift * 0.3888 * 0.85)).toString();
            document.getElementById("ablng9").innerHTML = (Math.round(maleRealDeadlift * 0.3888 * 0.925)).toString();
            document.getElementById("ablng10").innerHTML = (Math.round(maleRealDeadlift * 0.3888)).toString();

            document.getElementById("bor1").innerHTML = (Math.round(maleRealDeadlift * 0.53 * 0.25)).toString();
            document.getElementById("bor2").innerHTML = (Math.round(maleRealDeadlift * 0.53 * 0.3375)).toString();
            document.getElementById("bor3").innerHTML = (Math.round(maleRealDeadlift * 0.53 * 0.425)).toString();
            document.getElementById("bor4").innerHTML = (Math.round(maleRealDeadlift * 0.53 * 0.5125)).toString();
            document.getElementById("bor5").innerHTML = (Math.round(maleRealDeadlift * 0.53 * 0.60)).toString();
            document.getElementById("bor6").innerHTML = (Math.round(maleRealDeadlift * 0.53 * 0.68333333)).toString();
            document.getElementById("bor7").innerHTML = (Math.round(maleRealDeadlift * 0.53 * 0.76666667)).toString();
            document.getElementById("bor8").innerHTML = (Math.round(maleRealDeadlift * 0.53 * 0.85)).toString();
            document.getElementById("bor9").innerHTML = (Math.round(maleRealDeadlift * 0.53 * 0.925)).toString();
            document.getElementById("bor10").innerHTML = (Math.round(maleRealDeadlift * 0.53)).toString();

            document.getElementById("frr1").innerHTML = (Math.round(maleRealDeadlift * 0.2175 * 0.25)).toString();
            document.getElementById("frr2").innerHTML = (Math.round(maleRealDeadlift * 0.2175 * 0.3375)).toString();
            document.getElementById("frr3").innerHTML = (Math.round(maleRealDeadlift * 0.2175 * 0.425)).toString();
            document.getElementById("frr4").innerHTML = (Math.round(maleRealDeadlift * 0.2175 * 0.5125)).toString();
            document.getElementById("frr5").innerHTML = (Math.round(maleRealDeadlift * 0.2175 * 0.60)).toString();
            document.getElementById("frr6").innerHTML = (Math.round(maleRealDeadlift * 0.2175 * 0.68333333)).toString();
            document.getElementById("frr7").innerHTML = (Math.round(maleRealDeadlift * 0.2175 * 0.76666667)).toString();
            document.getElementById("frr8").innerHTML = (Math.round(maleRealDeadlift * 0.2175 * 0.85)).toString();
            document.getElementById("frr9").innerHTML = (Math.round(maleRealDeadlift * 0.2175 * 0.925)).toString();
            document.getElementById("frr10").innerHTML = (Math.round(maleRealDeadlift * 0.2175)).toString();

            document.getElementById("sp1").innerHTML = (Math.round(maleRealDeadlift * 0.18787 * 0.25)).toString();
            document.getElementById("sp2").innerHTML = (Math.round(maleRealDeadlift * 0.18787 * 0.3375)).toString();
            document.getElementById("sp3").innerHTML = (Math.round(maleRealDeadlift * 0.18787 * 0.425)).toString();
            document.getElementById("sp4").innerHTML = (Math.round(maleRealDeadlift * 0.18787 * 0.5125)).toString();
            document.getElementById("sp5").innerHTML = (Math.round(maleRealDeadlift * 0.18787 * 0.60)).toString();
            document.getElementById("sp6").innerHTML = (Math.round(maleRealDeadlift * 0.18787 * 0.68333333)).toString();
            document.getElementById("sp7").innerHTML = (Math.round(maleRealDeadlift * 0.18787 * 0.76666667)).toString();
            document.getElementById("sp8").innerHTML = (Math.round(maleRealDeadlift * 0.18787 * 0.85)).toString();
            document.getElementById("sp9").innerHTML = (Math.round(maleRealDeadlift * 0.18787 * 0.925)).toString();
            document.getElementById("sp10").innerHTML = (Math.round(maleRealDeadlift * 0.18787)).toString();

            document.getElementById("sw1").innerHTML = (Math.round(maleRealDeadlift * 0.322 * 0.25)).toString();
            document.getElementById("sw2").innerHTML = (Math.round(maleRealDeadlift * 0.322 * 0.3375)).toString();
            document.getElementById("sw3").innerHTML = (Math.round(maleRealDeadlift * 0.322 * 0.425)).toString();
            document.getElementById("sw4").innerHTML = (Math.round(maleRealDeadlift * 0.322 * 0.5125)).toString();
            document.getElementById("sw5").innerHTML = (Math.round(maleRealDeadlift * 0.322 * 0.60)).toString();
            document.getElementById("sw6").innerHTML = (Math.round(maleRealDeadlift * 0.322 * 0.68333333)).toString();
            document.getElementById("sw7").innerHTML = (Math.round(maleRealDeadlift * 0.322 * 0.76666667)).toString();
            document.getElementById("sw8").innerHTML = (Math.round(maleRealDeadlift * 0.322 * 0.85)).toString();
            document.getElementById("sw9").innerHTML = (Math.round(maleRealDeadlift * 0.322 * 0.925)).toString();
            document.getElementById("sw10").innerHTML = (Math.round(maleRealDeadlift * 0.322)).toString();

            document.getElementById("mbp1").innerHTML = (Math.round(maleRealDeadlift * 0.22857 * 0.25)).toString();
            document.getElementById("mbp2").innerHTML = (Math.round(maleRealDeadlift * 0.22857 * 0.3375)).toString();
            document.getElementById("mbp3").innerHTML = (Math.round(maleRealDeadlift * 0.22857 * 0.425)).toString();
            document.getElementById("mbp4").innerHTML = (Math.round(maleRealDeadlift * 0.22857 * 0.5125)).toString();
            document.getElementById("mbp5").innerHTML = (Math.round(maleRealDeadlift * 0.22857 * 0.60)).toString();
            document.getElementById("mbp6").innerHTML = (Math.round(maleRealDeadlift * 0.22857 * 0.68333333)).toString();
            document.getElementById("mbp7").innerHTML = (Math.round(maleRealDeadlift * 0.22857 * 0.76666667)).toString();
            document.getElementById("mbp8").innerHTML = (Math.round(maleRealDeadlift * 0.22857 * 0.85)).toString();
            document.getElementById("mbp9").innerHTML = (Math.round(maleRealDeadlift * 0.22857 * 0.925)).toString();
            document.getElementById("mbp10").innerHTML = (Math.round(maleRealDeadlift * 0.22857)).toString();

            document.getElementById("saw1").innerHTML = (Math.round(maleRealDeadlift * 0.5314 * 0.25)).toString();
            document.getElementById("saw2").innerHTML = (Math.round(maleRealDeadlift * 0.5314 * 0.3375)).toString();
            document.getElementById("saw3").innerHTML = (Math.round(maleRealDeadlift * 0.5314 * 0.425)).toString();
            document.getElementById("saw4").innerHTML = (Math.round(maleRealDeadlift * 0.5314 * 0.5125)).toString();
            document.getElementById("saw5").innerHTML = (Math.round(maleRealDeadlift * 0.5314 * 0.60)).toString();
            document.getElementById("saw6").innerHTML = (Math.round(maleRealDeadlift * 0.5314 * 0.68333333)).toString();
            document.getElementById("saw7").innerHTML = (Math.round(maleRealDeadlift * 0.5314 * 0.76666667)).toString();
            document.getElementById("saw8").innerHTML = (Math.round(maleRealDeadlift * 0.5314 * 0.85)).toString();
            document.getElementById("saw9").innerHTML = (Math.round(maleRealDeadlift * 0.5314 * 0.925)).toString();
            document.getElementById("saw10").innerHTML = (Math.round(maleRealDeadlift * 0.5314)).toString();

            document.getElementById("fct1").innerHTML = (Math.round(maleRealDeadlift * 0.3 * 0.25)).toString();
            document.getElementById("fct2").innerHTML = (Math.round(maleRealDeadlift * 0.3 * 0.3375)).toString();
            document.getElementById("fct3").innerHTML = (Math.round(maleRealDeadlift * 0.3 * 0.425)).toString();
            document.getElementById("fct4").innerHTML = (Math.round(maleRealDeadlift * 0.3 * 0.5125)).toString();
            document.getElementById("fct5").innerHTML = (Math.round(maleRealDeadlift * 0.3 * 0.60)).toString();
            document.getElementById("fct6").innerHTML = (Math.round(maleRealDeadlift * 0.3 * 0.68333333)).toString();
            document.getElementById("fct7").innerHTML = (Math.round(maleRealDeadlift * 0.3 * 0.76666667)).toString();
            document.getElementById("fct8").innerHTML = (Math.round(maleRealDeadlift * 0.3 * 0.85)).toString();
            document.getElementById("fct9").innerHTML = (Math.round(maleRealDeadlift * 0.3 * 0.925)).toString();
            document.getElementById("fct10").innerHTML = (Math.round(maleRealDeadlift * 0.3)).toString();

            document.getElementById("rr1").innerHTML = (Math.round(maleRealDeadlift * 0.2416 * 0.25)).toString();
            document.getElementById("rr2").innerHTML = (Math.round(maleRealDeadlift * 0.2416 * 0.3375)).toString();
            document.getElementById("rr3").innerHTML = (Math.round(maleRealDeadlift * 0.2416 * 0.425)).toString();
            document.getElementById("rr4").innerHTML = (Math.round(maleRealDeadlift * 0.2416 * 0.5125)).toString();
            document.getElementById("rr5").innerHTML = (Math.round(maleRealDeadlift * 0.2416 * 0.60)).toString();
            document.getElementById("rr6").innerHTML = (Math.round(maleRealDeadlift * 0.2416 * 0.68333333)).toString();
            document.getElementById("rr7").innerHTML = (Math.round(maleRealDeadlift * 0.2416 * 0.76666667)).toString();
            document.getElementById("rr8").innerHTML = (Math.round(maleRealDeadlift * 0.2416 * 0.85)).toString();
            document.getElementById("rr9").innerHTML = (Math.round(maleRealDeadlift * 0.2416 * 0.925)).toString();
            document.getElementById("rr10").innerHTML = (Math.round(maleRealDeadlift * 0.2416)).toString();

            document.getElementById("trsw1").innerHTML = (Math.round(maleRealDeadlift * 0.2545 * 0.25)).toString();
            document.getElementById("trsw2").innerHTML = (Math.round(maleRealDeadlift * 0.2545 * 0.3375)).toString();
            document.getElementById("trsw3").innerHTML = (Math.round(maleRealDeadlift * 0.2545 * 0.425)).toString();
            document.getElementById("trsw4").innerHTML = (Math.round(maleRealDeadlift * 0.2545 * 0.5125)).toString();
            document.getElementById("trsw5").innerHTML = (Math.round(maleRealDeadlift * 0.2545 * 0.60)).toString();
            document.getElementById("trsw6").innerHTML = (Math.round(maleRealDeadlift * 0.2545 * 0.68333333)).toString();
            document.getElementById("trsw7").innerHTML = (Math.round(maleRealDeadlift * 0.2545 * 0.76666667)).toString();
            document.getElementById("trsw8").innerHTML = (Math.round(maleRealDeadlift * 0.2545 * 0.85)).toString();
            document.getElementById("trsw9").innerHTML = (Math.round(maleRealDeadlift * 0.2545 * 0.925)).toString();
            document.getElementById("trsw10").innerHTML = (Math.round(maleRealDeadlift * 0.2545)).toString();

            document.getElementById("sb1").innerHTML = (Math.round(maleRealDeadlift * 0.35 * 0.25)).toString();
            document.getElementById("sb2").innerHTML = (Math.round(maleRealDeadlift * 0.35 * 0.3375)).toString();
            document.getElementById("sb3").innerHTML = (Math.round(maleRealDeadlift * 0.35 * 0.425)).toString();
            document.getElementById("sb4").innerHTML = (Math.round(maleRealDeadlift * 0.35 * 0.5125)).toString();
            document.getElementById("sb5").innerHTML = (Math.round(maleRealDeadlift * 0.35 * 0.60)).toString();
            document.getElementById("sb6").innerHTML = (Math.round(maleRealDeadlift * 0.35 * 0.68333333)).toString();
            document.getElementById("sb7").innerHTML = (Math.round(maleRealDeadlift * 0.35 * 0.76666667)).toString();
            document.getElementById("sb8").innerHTML = (Math.round(maleRealDeadlift * 0.35 * 0.85)).toString();
            document.getElementById("sb9").innerHTML = (Math.round(maleRealDeadlift * 0.35 * 0.925)).toString();
            document.getElementById("sb10").innerHTML = (Math.round(maleRealDeadlift * 0.35)).toString();

            document.getElementById("cp1").innerHTML = (Math.round(maleRealDeadlift * 0.125 * 0.25)).toString();
            document.getElementById("cp2").innerHTML = (Math.round(maleRealDeadlift * 0.125 * 0.3375)).toString();
            document.getElementById("cp3").innerHTML = (Math.round(maleRealDeadlift * 0.125 * 0.425)).toString();
            document.getElementById("cp4").innerHTML = (Math.round(maleRealDeadlift * 0.125 * 0.5125)).toString();
            document.getElementById("cp5").innerHTML = (Math.round(maleRealDeadlift * 0.125 * 0.60)).toString();
            document.getElementById("cp6").innerHTML = (Math.round(maleRealDeadlift * 0.125 * 0.68333333)).toString();
            document.getElementById("cp7").innerHTML = (Math.round(maleRealDeadlift * 0.125 * 0.76666667)).toString();
            document.getElementById("cp8").innerHTML = (Math.round(maleRealDeadlift * 0.125 * 0.85)).toString();
            document.getElementById("cp9").innerHTML = (Math.round(maleRealDeadlift * 0.125 * 0.925)).toString();
            document.getElementById("cp10").innerHTML = (Math.round(maleRealDeadlift * 0.125)).toString();
        } else {
            document.getElementById("dl1").innerHTML = (Math.round(femaleRealDeadlift * 0.25)).toString();
            document.getElementById("dl2").innerHTML = (Math.round(femaleRealDeadlift * 0.3375)).toString();
            document.getElementById("dl3").innerHTML = (Math.round(femaleRealDeadlift * 0.425)).toString();
            document.getElementById("dl4").innerHTML = (Math.round(femaleRealDeadlift * 0.5125)).toString();
            document.getElementById("dl5").innerHTML = (Math.round(femaleRealDeadlift * 0.60)).toString();
            document.getElementById("dl6").innerHTML = (Math.round(femaleRealDeadlift * 0.68333333)).toString();
            document.getElementById("dl7").innerHTML = (Math.round(femaleRealDeadlift * 0.76666667)).toString();
            document.getElementById("dl8").innerHTML = (Math.round(femaleRealDeadlift * 0.85)).toString();
            document.getElementById("dl9").innerHTML = (Math.round(femaleRealDeadlift * 0.925)).toString();
            document.getElementById("dl10").innerHTML = (Math.round(femaleRealDeadlift)).toString();

            if (Math.round(((femaleRealDeadlift * 0.63 * 0.25) - weight)) < 0) {
                document.getElementById("dip1").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.63 * 0.25)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip1").innerHTML = (Math.round((femaleRealDeadlift * 0.63 * 0.25) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.63 * 0.3375) - weight)) < 0) {
                document.getElementById("dip2").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.63 * 0.3375)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip2").innerHTML = (Math.round((femaleRealDeadlift * 0.63 * 0.3375) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.63 * 0.425) - weight)) < 0) {
                document.getElementById("dip3").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.63 * 0.425)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip3").innerHTML = (Math.round((femaleRealDeadlift * 0.63 * 0.425) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.63 * 0.5125) - weight)) < 0) {
                document.getElementById("dip4").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.63 * 0.5125)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip4").innerHTML = (Math.round((femaleRealDeadlift * 0.63 * 0.5125) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.63 * 0.60) - weight)) < 0) {
                document.getElementById("dip5").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.63 * 0.60)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip5").innerHTML = (Math.round((femaleRealDeadlift * 0.63 * 0.60) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.63 * 0.68333333) - weight)) < 0) {
                document.getElementById("dip6").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.63 * 0.68333333)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip6").innerHTML = (Math.round((femaleRealDeadlift * 0.63 * 0.68333333) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.63 * 0.76666667) - weight)) < 0) {
                document.getElementById("dip7").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.63 * 0.76666667)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip7").innerHTML = (Math.round((femaleRealDeadlift * 0.63 * 0.76666667) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.63 * 0.85) - weight)) < 0) {
                document.getElementById("dip8").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.63 * 0.85)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip8").innerHTML = (Math.round((femaleRealDeadlift * 0.63 * 0.85) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.63 * 0.925) - weight)) < 0) {
                document.getElementById("dip9").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.63 * 0.925)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip9").innerHTML = (Math.round((femaleRealDeadlift * 0.63 * 0.925) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.63) - weight)) < 0) {
                document.getElementById("dip10").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.63)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("dip10").innerHTML = (Math.round((femaleRealDeadlift * 0.63) - weight)).toString();
            }

            document.getElementById("mp1").innerHTML = (Math.round(femaleRealDeadlift * 0.37 * 0.25)).toString();
            document.getElementById("mp2").innerHTML = (Math.round(femaleRealDeadlift * 0.37 * 0.3375)).toString();
            document.getElementById("mp3").innerHTML = (Math.round(femaleRealDeadlift * 0.37 * 0.425)).toString();
            document.getElementById("mp4").innerHTML = (Math.round(femaleRealDeadlift * 0.37 * 0.5125)).toString();
            document.getElementById("mp5").innerHTML = (Math.round(femaleRealDeadlift * 0.37 * 0.60)).toString();
            document.getElementById("mp6").innerHTML = (Math.round(femaleRealDeadlift * 0.37 * 0.68333333)).toString();
            document.getElementById("mp7").innerHTML = (Math.round(femaleRealDeadlift * 0.37 * 0.76666667)).toString();
            document.getElementById("mp8").innerHTML = (Math.round(femaleRealDeadlift * 0.37 * 0.85)).toString();
            document.getElementById("mp9").innerHTML = (Math.round(femaleRealDeadlift * 0.37 * 0.925)).toString();
            document.getElementById("mp10").innerHTML = (Math.round(femaleRealDeadlift * 0.37)).toString();

            document.getElementById("gm1").innerHTML = (Math.round(femaleRealDeadlift * 0.44 * 0.25)).toString();
            document.getElementById("gm2").innerHTML = (Math.round(femaleRealDeadlift * 0.44 * 0.3375)).toString();
            document.getElementById("gm3").innerHTML = (Math.round(femaleRealDeadlift * 0.44 * 0.425)).toString();
            document.getElementById("gm4").innerHTML = (Math.round(femaleRealDeadlift * 0.44 * 0.5125)).toString();
            document.getElementById("gm5").innerHTML = (Math.round(femaleRealDeadlift * 0.44 * 0.60)).toString();
            document.getElementById("gm6").innerHTML = (Math.round(femaleRealDeadlift * 0.44 * 0.68333333)).toString();
            document.getElementById("gm7").innerHTML = (Math.round(femaleRealDeadlift * 0.44 * 0.76666667)).toString();
            document.getElementById("gm8").innerHTML = (Math.round(femaleRealDeadlift * 0.44 * 0.85)).toString();
            document.getElementById("gm9").innerHTML = (Math.round(femaleRealDeadlift * 0.44 * 0.925)).toString();
            document.getElementById("gm10").innerHTML = (Math.round(femaleRealDeadlift * 0.44)).toString();

            document.getElementById("sdl1").innerHTML = (Math.round(femaleRealDeadlift * 0.9 * 0.25)).toString();
            document.getElementById("sdl2").innerHTML = (Math.round(femaleRealDeadlift * 0.9 * 0.3375)).toString();
            document.getElementById("sdl3").innerHTML = (Math.round(femaleRealDeadlift * 0.9 * 0.425)).toString();
            document.getElementById("sdl4").innerHTML = (Math.round(femaleRealDeadlift * 0.9 * 0.5125)).toString();
            document.getElementById("sdl5").innerHTML = (Math.round(femaleRealDeadlift * 0.9 * 0.60)).toString();
            document.getElementById("sdl6").innerHTML = (Math.round(femaleRealDeadlift * 0.9 * 0.68333333)).toString();
            document.getElementById("sdl7").innerHTML = (Math.round(femaleRealDeadlift * 0.9 * 0.76666667)).toString();
            document.getElementById("sdl8").innerHTML = (Math.round(femaleRealDeadlift * 0.9 * 0.85)).toString();
            document.getElementById("sdl9").innerHTML = (Math.round(femaleRealDeadlift * 0.9 * 0.925)).toString();
            document.getElementById("sdl10").innerHTML = (Math.round(femaleRealDeadlift * 0.9)).toString();

            document.getElementById("sq1").innerHTML = (Math.round(femaleRealDeadlift * 0.83 * 0.25)).toString();
            document.getElementById("sq2").innerHTML = (Math.round(femaleRealDeadlift * 0.83 * 0.3375)).toString();
            document.getElementById("sq3").innerHTML = (Math.round(femaleRealDeadlift * 0.83 * 0.425)).toString();
            document.getElementById("sq4").innerHTML = (Math.round(femaleRealDeadlift * 0.83 * 0.5125)).toString();
            document.getElementById("sq5").innerHTML = (Math.round(femaleRealDeadlift * 0.83 * 0.60)).toString();
            document.getElementById("sq6").innerHTML = (Math.round(femaleRealDeadlift * 0.83 * 0.68333333)).toString();
            document.getElementById("sq7").innerHTML = (Math.round(femaleRealDeadlift * 0.83 * 0.76666667)).toString();
            document.getElementById("sq8").innerHTML = (Math.round(femaleRealDeadlift * 0.83 * 0.85)).toString();
            document.getElementById("sq9").innerHTML = (Math.round(femaleRealDeadlift * 0.83 * 0.925)).toString();
            document.getElementById("sq10").innerHTML = (Math.round(femaleRealDeadlift * 0.83)).toString();

            document.getElementById("lng1").innerHTML = (Math.round(femaleRealDeadlift * 0.7 * 0.25)).toString();
            document.getElementById("lng2").innerHTML = (Math.round(femaleRealDeadlift * 0.7 * 0.3375)).toString();
            document.getElementById("lng3").innerHTML = (Math.round(femaleRealDeadlift * 0.7 * 0.425)).toString();
            document.getElementById("lng4").innerHTML = (Math.round(femaleRealDeadlift * 0.7 * 0.5125)).toString();
            document.getElementById("lng5").innerHTML = (Math.round(femaleRealDeadlift * 0.7 * 0.60)).toString();
            document.getElementById("lng6").innerHTML = (Math.round(femaleRealDeadlift * 0.7 * 0.68333333)).toString();
            document.getElementById("lng7").innerHTML = (Math.round(femaleRealDeadlift * 0.7 * 0.76666667)).toString();
            document.getElementById("lng8").innerHTML = (Math.round(femaleRealDeadlift * 0.7 * 0.85)).toString();
            document.getElementById("lng9").innerHTML = (Math.round(femaleRealDeadlift * 0.7 * 0.925)).toString();
            document.getElementById("lng10").innerHTML = (Math.round(femaleRealDeadlift * 0.7)).toString();

            if (Math.round(((femaleRealDeadlift * 0.56 * 0.25) - weight)) < 0) {
                document.getElementById("pup1").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.56 * 0.25)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup1").innerHTML = (Math.round((femaleRealDeadlift * 0.56 * 0.25) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.56 * 0.3375) - weight)) < 0) {
                document.getElementById("pup2").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.56 * 0.3375)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup2").innerHTML = (Math.round((femaleRealDeadlift * 0.56 * 0.3375) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.56 * 0.425) - weight)) < 0) {
                document.getElementById("pup3").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.56 * 0.425)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup3").innerHTML = (Math.round((femaleRealDeadlift * 0.56 * 0.425) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.56 * 0.5125) - weight)) < 0) {
                document.getElementById("pup4").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.56 * 0.5125)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup4").innerHTML = (Math.round((femaleRealDeadlift * 0.56 * 0.5125) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.56 * 0.60) - weight)) < 0) {
                document.getElementById("pup5").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.56 * 0.60)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup5").innerHTML = (Math.round((femaleRealDeadlift * 0.56 * 0.60) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.56 * 0.68333333) - weight)) < 0) {
                document.getElementById("pup6").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.56 * 0.68333333)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup6").innerHTML = (Math.round((femaleRealDeadlift * 0.56 * 0.68333333) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.56 * 0.76666667) - weight)) < 0) {
                document.getElementById("pup7").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.56 * 0.76666667)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup7").innerHTML = (Math.round((femaleRealDeadlift * 0.56 * 0.76666667) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.56 * 0.85) - weight)) < 0) {
                document.getElementById("pup8").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.56 * 0.85)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup8").innerHTML = (Math.round((femaleRealDeadlift * 0.56 * 0.85) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.56 * 0.925) - weight)) < 0) {
                document.getElementById("pup9").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.56 * 0.925)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup9").innerHTML = (Math.round((femaleRealDeadlift * 0.56 * 0.925) - weight)).toString();
            }
            if (Math.round(((femaleRealDeadlift * 0.56) - weight)) < 0) {
                document.getElementById("pup10").innerHTML = (Number(Math.round(((femaleRealDeadlift * 0.56)) - weight) + Number(weight))).toString() + "*";
            } else {
                document.getElementById("pup10").innerHTML = (Math.round((femaleRealDeadlift * 0.56) - weight)).toString();
            }

            document.getElementById("fsq1").innerHTML = (Math.round(femaleRealDeadlift * 0.67 * 0.25)).toString();
            document.getElementById("fsq2").innerHTML = (Math.round(femaleRealDeadlift * 0.67 * 0.3375)).toString();
            document.getElementById("fsq3").innerHTML = (Math.round(femaleRealDeadlift * 0.67 * 0.425)).toString();
            document.getElementById("fsq4").innerHTML = (Math.round(femaleRealDeadlift * 0.67 * 0.5125)).toString();
            document.getElementById("fsq5").innerHTML = (Math.round(femaleRealDeadlift * 0.67 * 0.60)).toString();
            document.getElementById("fsq6").innerHTML = (Math.round(femaleRealDeadlift * 0.67 * 0.68333333)).toString();
            document.getElementById("fsq7").innerHTML = (Math.round(femaleRealDeadlift * 0.67 * 0.76666667)).toString();
            document.getElementById("fsq8").innerHTML = (Math.round(femaleRealDeadlift * 0.67 * 0.85)).toString();
            document.getElementById("fsq9").innerHTML = (Math.round(femaleRealDeadlift * 0.67 * 0.925)).toString();
            document.getElementById("fsq10").innerHTML = (Math.round(femaleRealDeadlift * 0.67)).toString();

            document.getElementById("rdl1").innerHTML = (Math.round(femaleRealDeadlift * 0.66 * 0.25)).toString();
            document.getElementById("rdl2").innerHTML = (Math.round(femaleRealDeadlift * 0.66 * 0.3375)).toString();
            document.getElementById("rdl3").innerHTML = (Math.round(femaleRealDeadlift * 0.66 * 0.425)).toString();
            document.getElementById("rdl4").innerHTML = (Math.round(femaleRealDeadlift * 0.66 * 0.5125)).toString();
            document.getElementById("rdl5").innerHTML = (Math.round(femaleRealDeadlift * 0.66 * 0.60)).toString();
            document.getElementById("rdl6").innerHTML = (Math.round(femaleRealDeadlift * 0.66 * 0.68333333)).toString();
            document.getElementById("rdl7").innerHTML = (Math.round(femaleRealDeadlift * 0.66 * 0.76666667)).toString();
            document.getElementById("rdl8").innerHTML = (Math.round(femaleRealDeadlift * 0.66 * 0.85)).toString();
            document.getElementById("rdl9").innerHTML = (Math.round(femaleRealDeadlift * 0.66 * 0.925)).toString();
            document.getElementById("rdl10").innerHTML = (Math.round(femaleRealDeadlift * 0.66)).toString();

            document.getElementById("bp1").innerHTML = (Math.round(femaleRealDeadlift * 0.57 * 0.25)).toString();
            document.getElementById("bp2").innerHTML = (Math.round(femaleRealDeadlift * 0.57 * 0.3375)).toString();
            document.getElementById("bp3").innerHTML = (Math.round(femaleRealDeadlift * 0.57 * 0.425)).toString();
            document.getElementById("bp4").innerHTML = (Math.round(femaleRealDeadlift * 0.57 * 0.5125)).toString();
            document.getElementById("bp5").innerHTML = (Math.round(femaleRealDeadlift * 0.57 * 0.60)).toString();
            document.getElementById("bp6").innerHTML = (Math.round(femaleRealDeadlift * 0.57 * 0.68333333)).toString();
            document.getElementById("bp7").innerHTML = (Math.round(femaleRealDeadlift * 0.57 * 0.76666667)).toString();
            document.getElementById("bp8").innerHTML = (Math.round(femaleRealDeadlift * 0.57 * 0.85)).toString();
            document.getElementById("bp9").innerHTML = (Math.round(femaleRealDeadlift * 0.57 * 0.925)).toString();
            document.getElementById("bp10").innerHTML = (Math.round(femaleRealDeadlift * 0.57)).toString();

            document.getElementById("pp1").innerHTML = (Math.round(femaleRealDeadlift * 0.49 * 0.25)).toString();
            document.getElementById("pp2").innerHTML = (Math.round(femaleRealDeadlift * 0.49 * 0.3375)).toString();
            document.getElementById("pp3").innerHTML = (Math.round(femaleRealDeadlift * 0.49 * 0.425)).toString();
            document.getElementById("pp4").innerHTML = (Math.round(femaleRealDeadlift * 0.49 * 0.5125)).toString();
            document.getElementById("pp5").innerHTML = (Math.round(femaleRealDeadlift * 0.49 * 0.60)).toString();
            document.getElementById("pp6").innerHTML = (Math.round(femaleRealDeadlift * 0.49 * 0.68333333)).toString();
            document.getElementById("pp7").innerHTML = (Math.round(femaleRealDeadlift * 0.49 * 0.76666667)).toString();
            document.getElementById("pp8").innerHTML = (Math.round(femaleRealDeadlift * 0.49 * 0.85)).toString();
            document.getElementById("pp9").innerHTML = (Math.round(femaleRealDeadlift * 0.49 * 0.925)).toString();
            document.getElementById("pp10").innerHTML = (Math.round(femaleRealDeadlift * 0.49)).toString();

            document.getElementById("bor1").innerHTML = (Math.round(femaleRealDeadlift * 0.53 * 0.25)).toString();
            document.getElementById("bor2").innerHTML = (Math.round(femaleRealDeadlift * 0.53 * 0.3375)).toString();
            document.getElementById("bor3").innerHTML = (Math.round(femaleRealDeadlift * 0.53 * 0.425)).toString();
            document.getElementById("bor4").innerHTML = (Math.round(femaleRealDeadlift * 0.53 * 0.5125)).toString();
            document.getElementById("bor5").innerHTML = (Math.round(femaleRealDeadlift * 0.53 * 0.60)).toString();
            document.getElementById("bor6").innerHTML = (Math.round(femaleRealDeadlift * 0.53 * 0.68333333)).toString();
            document.getElementById("bor7").innerHTML = (Math.round(femaleRealDeadlift * 0.53 * 0.76666667)).toString();
            document.getElementById("bor8").innerHTML = (Math.round(femaleRealDeadlift * 0.53 * 0.85)).toString();
            document.getElementById("bor9").innerHTML = (Math.round(femaleRealDeadlift * 0.53 * 0.925)).toString();
            document.getElementById("bor10").innerHTML = (Math.round(femaleRealDeadlift * 0.53)).toString();

            document.getElementById("fct1").innerHTML = (Math.round(femaleRealDeadlift * 0.28 * 0.25)).toString();
            document.getElementById("fct2").innerHTML = (Math.round(femaleRealDeadlift * 0.28 * 0.3375)).toString();
            document.getElementById("fct3").innerHTML = (Math.round(femaleRealDeadlift * 0.28 * 0.425)).toString();
            document.getElementById("fct4").innerHTML = (Math.round(femaleRealDeadlift * 0.28 * 0.5125)).toString();
            document.getElementById("fct5").innerHTML = (Math.round(femaleRealDeadlift * 0.28 * 0.60)).toString();
            document.getElementById("fct6").innerHTML = (Math.round(femaleRealDeadlift * 0.28 * 0.68333333)).toString();
            document.getElementById("fct7").innerHTML = (Math.round(femaleRealDeadlift * 0.28 * 0.76666667)).toString();
            document.getElementById("fct8").innerHTML = (Math.round(femaleRealDeadlift * 0.28 * 0.85)).toString();
            document.getElementById("fct9").innerHTML = (Math.round(femaleRealDeadlift * 0.28 * 0.925)).toString();
            document.getElementById("fct10").innerHTML = (Math.round(femaleRealDeadlift * 0.28)).toString();

            document.getElementById("sb1").innerHTML = (Math.round(femaleRealDeadlift * 0.35 * 0.25)).toString();
            document.getElementById("sb2").innerHTML = (Math.round(femaleRealDeadlift * 0.35 * 0.3375)).toString();
            document.getElementById("sb3").innerHTML = (Math.round(femaleRealDeadlift * 0.35 * 0.425)).toString();
            document.getElementById("sb4").innerHTML = (Math.round(femaleRealDeadlift * 0.35 * 0.5125)).toString();
            document.getElementById("sb5").innerHTML = (Math.round(femaleRealDeadlift * 0.35 * 0.60)).toString();
            document.getElementById("sb6").innerHTML = (Math.round(femaleRealDeadlift * 0.35 * 0.68333333)).toString();
            document.getElementById("sb7").innerHTML = (Math.round(femaleRealDeadlift * 0.35 * 0.76666667)).toString();
            document.getElementById("sb8").innerHTML = (Math.round(femaleRealDeadlift * 0.35 * 0.85)).toString();
            document.getElementById("sb9").innerHTML = (Math.round(femaleRealDeadlift * 0.35 * 0.925)).toString();
            document.getElementById("sb10").innerHTML = (Math.round(femaleRealDeadlift * 0.35)).toString();

            document.getElementById("mbp1").innerHTML = (Math.round(femaleRealDeadlift * 0.22 * 0.25)).toString();
            document.getElementById("mbp2").innerHTML = (Math.round(femaleRealDeadlift * 0.22 * 0.3375)).toString();
            document.getElementById("mbp3").innerHTML = (Math.round(femaleRealDeadlift * 0.22 * 0.425)).toString();
            document.getElementById("mbp4").innerHTML = (Math.round(femaleRealDeadlift * 0.22 * 0.5125)).toString();
            document.getElementById("mbp5").innerHTML = (Math.round(femaleRealDeadlift * 0.22 * 0.60)).toString();
            document.getElementById("mbp6").innerHTML = (Math.round(femaleRealDeadlift * 0.22 * 0.68333333)).toString();
            document.getElementById("mbp7").innerHTML = (Math.round(femaleRealDeadlift * 0.22 * 0.76666667)).toString();
            document.getElementById("mbp8").innerHTML = (Math.round(femaleRealDeadlift * 0.22 * 0.85)).toString();
            document.getElementById("mbp9").innerHTML = (Math.round(femaleRealDeadlift * 0.22 * 0.925)).toString();
            document.getElementById("mbp10").innerHTML = (Math.round(femaleRealDeadlift * 0.22)).toString();

            document.getElementById("rr1").innerHTML = (Math.round(femaleRealDeadlift * 0.2 * 0.25)).toString();
            document.getElementById("rr2").innerHTML = (Math.round(femaleRealDeadlift * 0.2 * 0.3375)).toString();
            document.getElementById("rr3").innerHTML = (Math.round(femaleRealDeadlift * 0.2 * 0.425)).toString();
            document.getElementById("rr4").innerHTML = (Math.round(femaleRealDeadlift * 0.2 * 0.5125)).toString();
            document.getElementById("rr5").innerHTML = (Math.round(femaleRealDeadlift * 0.2 * 0.60)).toString();
            document.getElementById("rr6").innerHTML = (Math.round(femaleRealDeadlift * 0.2 * 0.68333333)).toString();
            document.getElementById("rr7").innerHTML = (Math.round(femaleRealDeadlift * 0.2 * 0.76666667)).toString();
            document.getElementById("rr8").innerHTML = (Math.round(femaleRealDeadlift * 0.2 * 0.85)).toString();
            document.getElementById("rr9").innerHTML = (Math.round(femaleRealDeadlift * 0.2 * 0.925)).toString();
            document.getElementById("rr10").innerHTML = (Math.round(femaleRealDeadlift * 0.2)).toString();

            document.getElementById("frr1").innerHTML = (Math.round(femaleRealDeadlift * 0.18 * 0.25)).toString();
            document.getElementById("frr2").innerHTML = (Math.round(femaleRealDeadlift * 0.18 * 0.3375)).toString();
            document.getElementById("frr3").innerHTML = (Math.round(femaleRealDeadlift * 0.18 * 0.425)).toString();
            document.getElementById("frr4").innerHTML = (Math.round(femaleRealDeadlift * 0.18 * 0.5125)).toString();
            document.getElementById("frr5").innerHTML = (Math.round(femaleRealDeadlift * 0.18 * 0.60)).toString();
            document.getElementById("frr6").innerHTML = (Math.round(femaleRealDeadlift * 0.18 * 0.68333333)).toString();
            document.getElementById("frr7").innerHTML = (Math.round(femaleRealDeadlift * 0.18 * 0.76666667)).toString();
            document.getElementById("frr8").innerHTML = (Math.round(femaleRealDeadlift * 0.18 * 0.85)).toString();
            document.getElementById("frr9").innerHTML = (Math.round(femaleRealDeadlift * 0.18 * 0.925)).toString();
            document.getElementById("frr10").innerHTML = (Math.round(femaleRealDeadlift * 0.18)).toString();

            document.getElementById("cp1").innerHTML = (Math.round(femaleRealDeadlift * 0.145357 * 0.25)).toString();
            document.getElementById("cp2").innerHTML = (Math.round(femaleRealDeadlift * 0.145357 * 0.3375)).toString();
            document.getElementById("cp3").innerHTML = (Math.round(femaleRealDeadlift * 0.145357 * 0.425)).toString();
            document.getElementById("cp4").innerHTML = (Math.round(femaleRealDeadlift * 0.145357 * 0.5125)).toString();
            document.getElementById("cp5").innerHTML = (Math.round(femaleRealDeadlift * 0.145357 * 0.60)).toString();
            document.getElementById("cp6").innerHTML = (Math.round(femaleRealDeadlift * 0.145357 * 0.68333333)).toString();
            document.getElementById("cp7").innerHTML = (Math.round(femaleRealDeadlift * 0.145357 * 0.76666667)).toString();
            document.getElementById("cp8").innerHTML = (Math.round(femaleRealDeadlift * 0.145357 * 0.85)).toString();
            document.getElementById("cp9").innerHTML = (Math.round(femaleRealDeadlift * 0.145357 * 0.925)).toString();
            document.getElementById("cp10").innerHTML = (Math.round(femaleRealDeadlift * 0.145357)).toString();

            document.getElementById("sp1").innerHTML = (Math.round(femaleRealDeadlift * 0.173779 * 0.25)).toString();
            document.getElementById("sp2").innerHTML = (Math.round(femaleRealDeadlift * 0.173779 * 0.3375)).toString();
            document.getElementById("sp3").innerHTML = (Math.round(femaleRealDeadlift * 0.173779 * 0.425)).toString();
            document.getElementById("sp4").innerHTML = (Math.round(femaleRealDeadlift * 0.173779 * 0.5125)).toString();
            document.getElementById("sp5").innerHTML = (Math.round(femaleRealDeadlift * 0.173779 * 0.60)).toString();
            document.getElementById("sp6").innerHTML = (Math.round(femaleRealDeadlift * 0.173779 * 0.68333333)).toString();
            document.getElementById("sp7").innerHTML = (Math.round(femaleRealDeadlift * 0.173779 * 0.76666667)).toString();
            document.getElementById("sp8").innerHTML = (Math.round(femaleRealDeadlift * 0.173779 * 0.85)).toString();
            document.getElementById("sp9").innerHTML = (Math.round(femaleRealDeadlift * 0.173779 * 0.925)).toString();
            document.getElementById("sp10").innerHTML = (Math.round(femaleRealDeadlift * 0.173779)).toString();

            document.getElementById("sw1").innerHTML = (Math.round(femaleRealDeadlift * 0.322 * 0.25)).toString();
            document.getElementById("sw2").innerHTML = (Math.round(femaleRealDeadlift * 0.322 * 0.3375)).toString();
            document.getElementById("sw3").innerHTML = (Math.round(femaleRealDeadlift * 0.322 * 0.425)).toString();
            document.getElementById("sw4").innerHTML = (Math.round(femaleRealDeadlift * 0.322 * 0.5125)).toString();
            document.getElementById("sw5").innerHTML = (Math.round(femaleRealDeadlift * 0.322 * 0.60)).toString();
            document.getElementById("sw6").innerHTML = (Math.round(femaleRealDeadlift * 0.322 * 0.68333333)).toString();
            document.getElementById("sw7").innerHTML = (Math.round(femaleRealDeadlift * 0.322 * 0.76666667)).toString();
            document.getElementById("sw8").innerHTML = (Math.round(femaleRealDeadlift * 0.322 * 0.85)).toString();
            document.getElementById("sw9").innerHTML = (Math.round(femaleRealDeadlift * 0.322 * 0.925)).toString();
            document.getElementById("sw10").innerHTML = (Math.round(femaleRealDeadlift * 0.322)).toString();

            document.getElementById("trsw1").innerHTML = (Math.round(femaleRealDeadlift * 0.2545 * 0.25)).toString();
            document.getElementById("trsw2").innerHTML = (Math.round(femaleRealDeadlift * 0.2545 * 0.3375)).toString();
            document.getElementById("trsw3").innerHTML = (Math.round(femaleRealDeadlift * 0.2545 * 0.425)).toString();
            document.getElementById("trsw4").innerHTML = (Math.round(femaleRealDeadlift * 0.2545 * 0.5125)).toString();
            document.getElementById("trsw5").innerHTML = (Math.round(femaleRealDeadlift * 0.2545 * 0.60)).toString();
            document.getElementById("trsw6").innerHTML = (Math.round(femaleRealDeadlift * 0.2545 * 0.68333333)).toString();
            document.getElementById("trsw7").innerHTML = (Math.round(femaleRealDeadlift * 0.2545 * 0.76666667)).toString();
            document.getElementById("trsw8").innerHTML = (Math.round(femaleRealDeadlift * 0.2545 * 0.85)).toString();
            document.getElementById("trsw9").innerHTML = (Math.round(femaleRealDeadlift * 0.2545 * 0.925)).toString();
            document.getElementById("trsw10").innerHTML = (Math.round(femaleRealDeadlift * 0.2545)).toString();

            document.getElementById("ablng1").innerHTML = (Math.round(femaleRealDeadlift * 0.3888 * 0.25)).toString();
            document.getElementById("ablng2").innerHTML = (Math.round(femaleRealDeadlift * 0.3888 * 0.3375)).toString();
            document.getElementById("ablng3").innerHTML = (Math.round(femaleRealDeadlift * 0.3888 * 0.425)).toString();
            document.getElementById("ablng4").innerHTML = (Math.round(femaleRealDeadlift * 0.3888 * 0.5125)).toString();
            document.getElementById("ablng5").innerHTML = (Math.round(femaleRealDeadlift * 0.3888 * 0.60)).toString();
            document.getElementById("ablng6").innerHTML = (Math.round(femaleRealDeadlift * 0.3888 * 0.68333333)).toString();
            document.getElementById("ablng7").innerHTML = (Math.round(femaleRealDeadlift * 0.3888 * 0.76666667)).toString();
            document.getElementById("ablng8").innerHTML = (Math.round(femaleRealDeadlift * 0.3888 * 0.85)).toString();
            document.getElementById("ablng9").innerHTML = (Math.round(femaleRealDeadlift * 0.3888 * 0.925)).toString();
            document.getElementById("ablng10").innerHTML = (Math.round(femaleRealDeadlift * 0.3888)).toString();

            document.getElementById("ohsq1").innerHTML = (Math.round(femaleRealDeadlift * 0.512 * 0.25)).toString();
            document.getElementById("ohsq2").innerHTML = (Math.round(femaleRealDeadlift * 0.512 * 0.3375)).toString();
            document.getElementById("ohsq3").innerHTML = (Math.round(femaleRealDeadlift * 0.512 * 0.425)).toString();
            document.getElementById("ohsq4").innerHTML = (Math.round(femaleRealDeadlift * 0.512 * 0.5125)).toString();
            document.getElementById("ohsq5").innerHTML = (Math.round(femaleRealDeadlift * 0.512 * 0.60)).toString();
            document.getElementById("ohsq6").innerHTML = (Math.round(femaleRealDeadlift * 0.512 * 0.68333333)).toString();
            document.getElementById("ohsq7").innerHTML = (Math.round(femaleRealDeadlift * 0.512 * 0.76666667)).toString();
            document.getElementById("ohsq8").innerHTML = (Math.round(femaleRealDeadlift * 0.512 * 0.85)).toString();
            document.getElementById("ohsq9").innerHTML = (Math.round(femaleRealDeadlift * 0.512 * 0.925)).toString();
            document.getElementById("ohsq10").innerHTML = (Math.round(femaleRealDeadlift * 0.512)).toString();

            document.getElementById("saw1").innerHTML = (Math.round(femaleRealDeadlift * 0.4578 * 0.25)).toString();
            document.getElementById("saw2").innerHTML = (Math.round(femaleRealDeadlift * 0.4578 * 0.3375)).toString();
            document.getElementById("saw3").innerHTML = (Math.round(femaleRealDeadlift * 0.4578 * 0.425)).toString();
            document.getElementById("saw4").innerHTML = (Math.round(femaleRealDeadlift * 0.4578 * 0.5125)).toString();
            document.getElementById("saw5").innerHTML = (Math.round(femaleRealDeadlift * 0.4578 * 0.60)).toString();
            document.getElementById("saw6").innerHTML = (Math.round(femaleRealDeadlift * 0.4578 * 0.68333333)).toString();
            document.getElementById("saw7").innerHTML = (Math.round(femaleRealDeadlift * 0.4578 * 0.76666667)).toString();
            document.getElementById("saw8").innerHTML = (Math.round(femaleRealDeadlift * 0.4578 * 0.85)).toString();
            document.getElementById("saw9").innerHTML = (Math.round(femaleRealDeadlift * 0.4578 * 0.925)).toString();
            document.getElementById("saw10").innerHTML = (Math.round(femaleRealDeadlift * 0.4578)).toString();
        }
    }

    return {
        calculateLevels
    }
})();