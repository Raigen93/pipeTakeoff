//general page elements

let cycle = document.getElementById('cycle');
let riseRuns = document.getElementById('rise_runs');
let degree;
let height;

//elements for calculating elbow take outs
let elbowNom = document.getElementById('nomSize');
let ninety = document.getElementById("90");
let forty_five = document.getElementById("45");
let submitButton = document.getElementById("submit");
let elbowCalc = document.getElementById('elbows');
let output = document.getElementById("result");

//elements for calculating Rise Runs
let calcButton = document.getElementById("calcRiseRun");
let pipeSize = document.getElementById("pipeSize");
let el1 = document.getElementById("elevation_1");
let el2 = document.getElementById("elevation_2");

//elements for run calculations
let calcRun = document.getElementById('calcRun');
let fit1 = document.getElementById('pick1');
let fit2 = document.getElementById('pick2');
let runNom = document.getElementById('runNom');
let runOverall = document.getElementById('runOverall');
let fitClass = document.getElementById('fitClass');

//import flanges
let flanges = {
     raisedFaces150 : {
        halfInch : 1.88,
        threeQuarters : 2.06,
        oneInch : 2.19,
        oneAndQuarter : 2.25,
        oneAndHalf : 2.44,
        twoInch : 2.5,
        twoAndHalf : 2.75,
        three : 2.75,
        threeAndHalf : 2.81,
        four : 3,
        five : 3.5,
        six : 3.5,
        eight : 4,
        ten : 4,
        twelve : 4.5,
        fourT : 5,
        sixT : 5,
        eightT : 5.5,
        twenty : 5.69,
        twenTwo : 5.88,
        twenFour : 6
    },

    flatFaces150 : {
        halfInch : 1.82,
        threeQuarters : 2,
        oneInch : 2.13,
        oneAndQuarter : 2.19,
        oneAndHalf : 2.38,
        twoInch : 2.44,
        twoAndHalf : 2.69,
        three : 2.69,
        threeAndHalf : 2.75,
        four : 2.94,
        five : 3.44,
        six : 3.44,
        eight : 3.94,
        ten : 3.94,
        twelve : 4.44,
        fourT : 4.94,
        sixT : 4.94,
        eightT : 5.44,
        twenty : 5.63,
        twenTwo : 5.82,
        twenFour : 5.94
    },

    raisedFaces300 : {
        halfInch : 2.06,
        threeQuarters : 2.25,
        oneInch : 2.44,
        oneAndQuarter : 2.56,
        oneAndHalf : 2.69,
        twoInch : 2.75,
        twoAndHalf : 3,
        three : 3.12,
        threeAndHalf : 3.19,
        four : 3.38,
        five : 3.88,
        six : 3.88,
        eight : 4.38,
        ten : 4.62,
        twelve : 5.12,
        fourT : 5.62,
        sixT : 5.75,
        eightT : 6.25,
        twenty : 6.38,
        twenTwo : 6.5,
        twenFour : 6.62
    },

    flatFaces300 : {
        halfInch : 2,
        threeQuarters : 2.19,
        oneInch : 2.38,
        oneAndQuarter : 2.5,
        oneAndHalf : 2.63,
        twoInch : 2.69,
        twoAndHalf : 2.94,
        three : 3.06,
        threeAndHalf : 3.13,
        four : 3.32,
        five : 3.82,
        six : 3.82,
        eight : 4.32,
        ten : 4.56,
        twelve : 5.06,
        fourT : 5.56,
        sixT : 5.69,
        eightT : 6.19,
        twenty : 6.32,
        twenTwo : 6.44,
        twenFour : 6.56
    },

    raisedFaces400 : {
        halfInch : 2.31,
        threeQuarters : 2.5,
        oneInch : 2.69,
        oneAndQuarter : 2.87,
        oneAndHalf : 3,
        twoInch : 3.13,
        twoAndHalf : 3.37,
        three : 3.5,
        threeAndHalf : 3.63,
        four : 3.75,
        five : 4.25,
        six : 4.31,
        eight : 4.87,
        ten : 5.13,
        twelve : 5.63,
        fourT : 6.13,
        sixT : 6.25,
        eightT : 6.75,
        twenty : 6.87,
        twenTwo : 7,
        twenFour : 7.13
    },

    flatFaces400 : {
        halfInch : 2.06,
        threeQuarters : 2.25,
        oneInch : 2.44,
        oneAndQuarter : 2.75,
        oneAndHalf : 2.75,
        twoInch : 2.88,
        twoAndHalf : 3.12,
        three : 3.25,
        threeAndHalf : 3.38,
        four : 3.5,
        five : 4,
        six : 4.06,
        eight : 4.62,
        ten : 4.88,
        twelve : 5.38,
        fourT : 5.88,
        sixT : 6,
        eightT : 6.5,
        twenty : 6.62,
        twenTwo : 6.75,
        twenFour : 6.88
    },

    raisedFaces600 : {
        halfInch : 2.31,
        threeQuarters : 2.5,
        oneInch : 2.69,
        oneAndQuarter : 2.87,
        oneAndHalf : 3,
        twoInch : 3.13,
        twoAndHalf : 3.37,
        three : 3.5,
        threeAndHalf : 3.63,
        four : 4.25,
        five : 4.75,
        six : 4.87,
        eight : 5.5,
        ten : 6.25,
        twelve : 6.37,
        fourT : 6.75,
        sixT : 7.25,
        eightT : 7.5,
        twenty : 7.75,
        twenTwo : 8,
        twenFour : 8.25
    },

    flatFaces600 : {
        halfInch : 2.06,
        threeQuarters : 2.25,
        oneInch : 2.44,
        oneAndQuarter : 2.62,
        oneAndHalf : 2.75,
        twoInch : 2.88,
        twoAndHalf : 3.12,
        three : 3.25,
        threeAndHalf : 3.38,
        four : 4,
        five : 4.5,
        six : 4.62,
        eight : 5.25,
        ten : 6,
        twelve : 6.12,
        fourT : 6.5,
        sixT : 7,
        eightT : 7.25,
        twenty : 7.5,
        twenTwo : 7.75,
        twenFour : 8
    },

    raisedFaces900 : {
        three : 4.25,
        four : 4.75,
        five : 5.25,
        six : 5.75,
        eight : 6.63,
        ten : 7.5,
        twelve : 8.13,
        fourT : 8.63,
        sixT : 8.75,
        eightT : 9.25,
        twenty : 10,
        twenFour : 11.75
    },

    flatFaces900 : {
        three : 4,
        four : 4.5,
        five : 5,
        six : 5.5,
        eight : 6.38,
        ten : 7.25,
        twelve : 7.88,
        fourT : 8.38,
        sixT : 8.5,
        eightT : 9,
        twenty : 9.75,
        twenFour : 11.5
    },

    raisedFaces1500 : {
        halfInch : 2.63,
        threeQuarters : 3,
        oneInch : 3.13,
        oneAndQuarter : 3.13,
        oneAndHalf : 3.5,
        twoInch : 4.25,
        twoAndHalf : 4.38,
        three : 4.88,
        four : 5.13,
        five : 6.38,
        six : 7,
        eight : 8.63,
        ten : 10.25,
        twelve : 11.38,
        fourT : 12,
        sixT : 12.5,
        eightT : 13.13,
        twenty : 14.25,
        twenFour : 16.25
    },

    flatFaces1500 : {
        halfInch : 2.38,
        threeQuarters : 2.75,
        oneInch : 2.88,
        oneAndQuarter : 2.88,
        oneAndHalf : 3.25,
        twoInch : 4,
        twoAndHalf : 4.13,
        three : 4.63,
        four : 4.88,
        five : 6.13,
        six : 6.75,
        eight : 8.38,
        ten : 10,
        twelve : 11.13,
        fourT : 11.75,
        sixT : 12,
        eightT : 12.88,
        twenty : 14,
        twenFour : 16
    },

    raisedFaces2500 : {
        halfInch : 3.13,
        threeQuarters : 3.38,
        oneInch : 3.75,
        oneAndQuarter : 4,
        oneAndHalf : 4.63,
        twoInch : 5.25,
        twoAndHalf : 5.88,
        three : 6.88,
        four : 7.75,
        five : 9.25,
        six : 11,
        eight : 12.75,
        ten : 16.75,
        twelve : 18.5,
    },

      flatFaces2500 : {
        halfInch : 2.88,
        threeQuarters : 3.13,
        oneInch : 3.5,
        oneAndQuarter : 3.75,
        oneAndHalf : 4.38,
        twoInch : 5,
        twoAndHalf : 5.63,
        three : 6.63,
        four : 7.5,
        five : 9,
        six : 10.75,
        eight : 12.5,
        ten : 16.5,
        twelve : 18.25,
    }
}

function calcElbowOut() {
    let nomSize = parseFloat(elbowNom.value);

    if(ninety.checked) {
        degree = 90;
    } else if(forty_five.checked) {
        degree = 45;
    }

    if(degree === 90) {
        output.innerHTML = calcNinety(nomSize);
    } else if(degree === 45) {
        output.innerHTML = calc45(nomSize).toString();
    }
}

function calcNinety(nomSize) {
    return (nomSize * 1.5);
}

function calc45(nomSize) {
    let response;

    if(nomSize < 4) {
        switch (nomSize) {
            case 3.5:
                response = 2.5;
                break;
            case 3:
                response = 2;
                break;
            case 2.5:
                response = 1.75;
                break;
            case 2:
                response = 1.375;
                break;
            case 1.5:
                response = 1.125;
                break;
            case 1.25:
                response = 1;
                break;
            case 1:
                response = 0.875;
                break;
            case 0.75:
                response = 0.4375;
                break;
            case 0.5:
                response = 0.625;
                break;
        }
    } else if(nomSize > 4 && nomSize <= 24) {
        let num2 = nomSize / 2;
        let num3 = num2 / 2;
        let num4 = num3 / 2;
        response = num2 + num4;
    }
    return response;
}



function calcRiseRun() {
    let nomSize = parseFloat(pipeSize.value);
    let elev1 = parseFloat(el1.value);
    let elev2 = parseFloat(el2.value);

    if(elev2 > elev1) {
        height = elev2 - elev1;
    } else {
        height = elev1 - elev2;
    }

    let a = Math.pow(height, 2);
    let c = a + a;
    let overall = Math.sqrt(c);
    overall = parseFloat(overall.toFixed(2));

    document.getElementById('overall_length').innerHTML = (overall).toString();

    let takeOut = calc45(nomSize) * 2;
    let pieceLength = overall - (takeOut + 0.25);

    document.getElementById('pieceLength').innerHTML = pieceLength.toString();
}

function calcRuns() {
    let fitClassSize = parseFloat(fitClass.value);
    let nomSize = parseFloat(runNom.value);
    let overall = parseFloat(runOverall.value);
    
    let fit1Takeout;
    let fit2Takeout;

    if(fit1.value === 'none'){
        fit1Takeout = 0;
    } else if(fit1.value === '90') {
        fit1Takeout = calcNinety(nomSize) + 0.125;
    } else if(fit1.value === '45') {
        fit1Takeout = calc45(nomSize) + 0.125;
    } else if(fit1.value === 'weldNeckRF' && fitClassSize === 150) {
        if(nomSize === 0.5) {
            fit1Takeout = flanges.raisedFaces150.halfInch;
        } else if(nomSize === 0.75) {
            fit1Takeout = flanges.raisedFaces150.threeQuarters;
        } else if(nomSize === 1) {
            fit1Takeout = flanges.raisedFaces150.oneInch;
        } else if(nomSize === 1.25) {
            fit1Takeout = flanges.raisedFaces150.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit1Takeout = flanges.raisedFaces150.oneAndHalf;
        } else if(nomSize === 2) {
            fit1Takeout = flanges.raisedFaces150.twoInch;
        } else if(nomSize === 2.5) {
            fit1Takeout = flanges.raisedFaces150.twoAndHalf;
        } else if(nomSize === 3) {
            fit1Takeout = flanges.raisedFaces150.three;
        } else if(nomSize === 3.5) {
            fit1Takeout = flanges.raisedFaces150.threeAndHalf;
        } else if(nomSize === 4) {
            fit1Takeout = flanges.raisedFaces150.four;
        } else if(nomSize === 5) {
            fit1Takeout = flanges.raisedFaces150.five;
        } else if(nomSize === 6) {
            fit1Takeout = flanges.raisedFaces150.six;
        } else if(nomSize === 8) {
            fit1Takeout = flanges.raisedFaces150.eight;
        } else if(nomSize === 10) {
            fit1Takeout = flanges.raisedFaces150.ten;
        } else if(nomSize === 12) {
            fit1Takeout = flanges.raisedFaces150.twelve;
        } else if(nomSize === 14) {
            fit1Takeout = flanges.raisedFaces150.fourT;
        } else if(nomSize === 16) {
            fit1Takeout = flanges.raisedFaces150.sixT;
        } else if(nomSize === 18) {
            fit1Takeout = flanges.raisedFaces150.eightT;
        } else if(nomSize === 20) {
            fit1Takeout = flanges.raisedFaces150.twenty;
        } else if(nomSize === 22) {
            fit1Takeout = flanges.raisedFaces150.twenTwo;
        } else if(nomSize === 24) {
            fit1Takeout = flanges.raisedFaces150.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckFF' && fitClassSize === 150) {
        if(nomSize === 0.5) {
            fit1Takeout = flanges.flatFaces150.halfInch;
        } else if(nomSize === 0.75) {
            fit1Takeout = flanges.flatFaces150.threeQuarters;
        } else if(nomSize === 1) {
            fit1Takeout = flanges.flatFaces150.oneInch;
        } else if(nomSize === 1.25) {
            fit1Takeout = flanges.flatFaces150.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit1Takeout = flanges.flatFaces150.oneAndHalf;
        } else if(nomSize === 2) {
            fit1Takeout = flanges.flatFaces150.twoInch;
        } else if(nomSize === 2.5) {
            fit1Takeout = flanges.flatFaces150.twoAndHalf;
        } else if(nomSize === 3) {
            fit1Takeout = flanges.flatFaces150.three;
        } else if(nomSize === 3.5) {
            fit1Takeout = flanges.flatFaces150.threeAndHalf;
        } else if(nomSize === 4) {
            fit1Takeout = flanges.flatFaces150.four;
        } else if(nomSize === 5) {
            fit1Takeout = flanges.flatFaces150.five;
        } else if(nomSize === 6) {
            fit1Takeout = flanges.flatFaces150.six;
        } else if(nomSize === 8) {
            fit1Takeout = flanges.flatFaces150.eight;
        } else if(nomSize === 10) {
            fit1Takeout = flanges.flatFaces150.ten;
        } else if(nomSize === 12) {
            fit1Takeout = flanges.flatFaces150.twelve;
        } else if(nomSize === 14) {
            fit1Takeout = flanges.flatFaces150.fourT;
        } else if(nomSize === 16) {
            fit1Takeout = flanges.flatFaces150.sixT;
        } else if(nomSize === 18) {
            fit1Takeout = flanges.flatFaces150.eightT;
        } else if(nomSize === 20) {
            fit1Takeout = flanges.flatFaces150.twenty;
        } else if(nomSize === 22) {
            fit1Takeout = flanges.flatFaces150.twenTwo;
        } else if(nomSize === 24) {
            fit1Takeout = flanges.flatFaces150.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckRF' && fitClassSize === 300) {
        if(nomSize === 0.5) {
            fit1Takeout = flanges.raisedFaces300.halfInch;
        } else if(nomSize === 0.75) {
            fit1Takeout = flanges.raisedFaces300.threeQuarters;
        } else if(nomSize === 1) {
            fit1Takeout = flanges.raisedFaces300.oneInch;
        } else if(nomSize === 1.25) {
            fit1Takeout = flanges.raisedFaces300.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit1Takeout = flanges.raisedFaces300.oneAndHalf;
        } else if(nomSize === 2) {
            fit1Takeout = flanges.raisedFaces300.twoInch;
        } else if(nomSize === 2.5) {
            fit1Takeout = flanges.raisedFaces300.twoAndHalf;
        } else if(nomSize === 3) {
            fit1Takeout = flanges.raisedFaces300.three;
        } else if(nomSize === 3.5) {
            fit1Takeout = flanges.raisedFaces300.threeAndHalf;
        } else if(nomSize === 4) {
            fit1Takeout = flanges.raisedFaces300.four;
        } else if(nomSize === 5) {
            fit1Takeout = flanges.raisedFaces300.five;
        } else if(nomSize === 6) {
            fit1Takeout = flanges.raisedFaces300.six;
        } else if(nomSize === 8) {
            fit1Takeout = flanges.raisedFaces300.eight;
        } else if(nomSize === 10) {
            fit1Takeout = flanges.raisedFaces300.ten;
        } else if(nomSize === 12) {
            fit1Takeout = flanges.raisedFaces300.twelve;
        } else if(nomSize === 14) {
            fit1Takeout = flanges.raisedFaces300.fourT;
        } else if(nomSize === 16) {
            fit1Takeout = flanges.raisedFaces300.sixT;
        } else if(nomSize === 18) {
            fit1Takeout = flanges.raisedFaces300.eightT;
        } else if(nomSize === 20) {
            fit1Takeout = flanges.raisedFaces300.twenty;
        } else if(nomSize === 22) {
            fit1Takeout = flanges.raisedFaces300.twenTwo;
        } else if(nomSize === 24) {
            fit1Takeout = flanges.raisedFaces300.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckFF' && fitClassSize === 300) {
        if (nomSize === 0.5) {
            fit1Takeout = flanges.flatFaces300.halfInch;
        } else if (nomSize === 0.75) {
            fit1Takeout = flanges.flatFaces300.threeQuarters;
        } else if (nomSize === 1) {
            fit1Takeout = flanges.flatFaces300.oneInch;
        } else if (nomSize === 1.25) {
            fit1Takeout = flanges.flatFaces300.oneAndQuarter;
        } else if (nomSize === 1.5) {
            fit1Takeout = flanges.flatFaces300.oneAndHalf;
        } else if (nomSize === 2) {
            fit1Takeout = flanges.flatFaces300.twoInch;
        } else if (nomSize === 2.5) {
            fit1Takeout = flanges.flatFaces300.twoAndHalf;
        } else if (nomSize === 3) {
            fit1Takeout = flanges.flatFaces300.three;
        } else if (nomSize === 3.5) {
            fit1Takeout = flanges.flatFaces300.threeAndHalf;
        } else if (nomSize === 4) {
            fit1Takeout = flanges.flatFaces300.four;
        } else if (nomSize === 5) {
            fit1Takeout = flanges.flatFaces300.five;
        } else if (nomSize === 6) {
            fit1Takeout = flanges.flatFaces300.six;
        } else if (nomSize === 8) {
            fit1Takeout = flanges.flatFaces300.eight;
        } else if (nomSize === 10) {
            fit1Takeout = flanges.flatFaces300.ten;
        } else if (nomSize === 12) {
            fit1Takeout = flanges.flatFaces300.twelve;
        } else if (nomSize === 14) {
            fit1Takeout = flanges.flatFaces300.fourT;
        } else if (nomSize === 16) {
            fit1Takeout = flanges.flatFaces300.sixT;
        } else if (nomSize === 18) {
            fit1Takeout = flanges.flatFaces300.eightT;
        } else if (nomSize === 20) {
            fit1Takeout = flanges.flatFaces300.twenty;
        } else if (nomSize === 22) {
            fit1Takeout = flanges.flatFaces300.twenTwo;
        } else if (nomSize === 24) {
            fit1Takeout = flanges.flatFaces300.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckRF' && fitClassSize === 400) {
        if(nomSize === 0.5) {
            fit1Takeout = flanges.raisedFaces400.halfInch;
        } else if(nomSize === 0.75) {
            fit1Takeout = flanges.raisedFaces400.threeQuarters;
        } else if(nomSize === 1) {
            fit1Takeout = flanges.raisedFaces400.oneInch;
        } else if(nomSize === 1.25) {
            fit1Takeout = flanges.raisedFaces400.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit1Takeout = flanges.raisedFaces400.oneAndHalf;
        } else if(nomSize === 2) {
            fit1Takeout = flanges.raisedFaces400.twoInch;
        } else if(nomSize === 2.5) {
            fit1Takeout = flanges.raisedFaces400.twoAndHalf;
        } else if(nomSize === 3) {
            fit1Takeout = flanges.raisedFaces400.three;
        } else if(nomSize === 3.5) {
            fit1Takeout = flanges.raisedFaces400.threeAndHalf;
        } else if(nomSize === 4) {
            fit1Takeout = flanges.raisedFaces400.four;
        } else if(nomSize === 5) {
            fit1Takeout = flanges.raisedFaces400.five;
        } else if(nomSize === 6) {
            fit1Takeout = flanges.raisedFaces400.six;
        } else if(nomSize === 8) {
            fit1Takeout = flanges.raisedFaces400.eight;
        } else if(nomSize === 10) {
            fit1Takeout = flanges.raisedFaces400.ten;
        } else if(nomSize === 12) {
            fit1Takeout = flanges.raisedFaces400.twelve;
        } else if(nomSize === 14) {
            fit1Takeout = flanges.raisedFaces400.fourT;
        } else if(nomSize === 16) {
            fit1Takeout = flanges.raisedFaces400.sixT;
        } else if(nomSize === 18) {
            fit1Takeout = flanges.raisedFaces400.eightT;
        } else if(nomSize === 20) {
            fit1Takeout = flanges.raisedFaces400.twenty;
        } else if(nomSize === 22) {
            fit1Takeout = flanges.raisedFaces400.twenTwo;
        } else if(nomSize === 24) {
            fit1Takeout = flanges.raisedFaces400.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckFF' && fitClassSize === 400) {
        if (nomSize === 0.5) {
            fit1Takeout = flanges.flatFaces400.halfInch;
        } else if (nomSize === 0.75) {
            fit1Takeout = flanges.flatFaces400.threeQuarters;
        } else if (nomSize === 1) {
            fit1Takeout = flanges.flatFaces400.oneInch;
        } else if (nomSize === 1.25) {
            fit1Takeout = flanges.flatFaces400.oneAndQuarter;
        } else if (nomSize === 1.5) {
            fit1Takeout = flanges.flatFaces400.oneAndHalf;
        } else if (nomSize === 2) {
            fit1Takeout = flanges.flatFaces400.twoInch;
        } else if (nomSize === 2.5) {
            fit1Takeout = flanges.flatFaces400.twoAndHalf;
        } else if (nomSize === 3) {
            fit1Takeout = flanges.flatFaces400.three;
        } else if (nomSize === 3.5) {
            fit1Takeout = flanges.flatFaces400.threeAndHalf;
        } else if (nomSize === 4) {
            fit1Takeout = flanges.flatFaces400.four;
        } else if (nomSize === 5) {
            fit1Takeout = flanges.flatFaces400.five;
        } else if (nomSize === 6) {
            fit1Takeout = flanges.flatFaces400.six;
        } else if (nomSize === 8) {
            fit1Takeout = flanges.flatFaces400.eight;
        } else if (nomSize === 10) {
            fit1Takeout = flanges.flatFaces400.ten;
        } else if (nomSize === 12) {
            fit1Takeout = flanges.flatFaces400.twelve;
        } else if (nomSize === 14) {
            fit1Takeout = flanges.flatFaces400.fourT;
        } else if (nomSize === 16) {
            fit1Takeout = flanges.flatFaces400.sixT;
        } else if (nomSize === 18) {
            fit1Takeout = flanges.flatFaces400.eightT;
        } else if (nomSize === 20) {
            fit1Takeout = flanges.flatFaces400.twenty;
        } else if (nomSize === 22) {
            fit1Takeout = flanges.flatFaces400.twenTwo;
        } else if (nomSize === 24) {
            fit1Takeout = flanges.flatFaces400.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckRF' && fitClassSize === 600) {
        if(nomSize === 0.5) {
            fit1Takeout = flanges.raisedFaces600.halfInch;
        } else if(nomSize === 0.75) {
            fit1Takeout = flanges.raisedFaces600.threeQuarters;
        } else if(nomSize === 1) {
            fit1Takeout = flanges.raisedFaces600.oneInch;
        } else if(nomSize === 1.25) {
            fit1Takeout = flanges.raisedFaces600.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit1Takeout = flanges.raisedFaces600.oneAndHalf;
        } else if(nomSize === 2) {
            fit1Takeout = flanges.raisedFaces600.twoInch;
        } else if(nomSize === 2.5) {
            fit1Takeout = flanges.raisedFaces600.twoAndHalf;
        } else if(nomSize === 3) {
            fit1Takeout = flanges.raisedFaces600.three;
        } else if(nomSize === 3.5) {
            fit1Takeout = flanges.raisedFaces600.threeAndHalf;
        } else if(nomSize === 4) {
            fit1Takeout = flanges.raisedFaces600.four;
        } else if(nomSize === 5) {
            fit1Takeout = flanges.raisedFaces600.five;
        } else if(nomSize === 6) {
            fit1Takeout = flanges.raisedFaces600.six;
        } else if(nomSize === 8) {
            fit1Takeout = flanges.raisedFaces600.eight;
        } else if(nomSize === 10) {
            fit1Takeout = flanges.raisedFaces600.ten;
        } else if(nomSize === 12) {
            fit1Takeout = flanges.raisedFaces600.twelve;
        } else if(nomSize === 14) {
            fit1Takeout = flanges.raisedFaces600.fourT;
        } else if(nomSize === 16) {
            fit1Takeout = flanges.raisedFaces600.sixT;
        } else if(nomSize === 18) {
            fit1Takeout = flanges.raisedFaces600.eightT;
        } else if(nomSize === 20) {
            fit1Takeout = flanges.raisedFaces600.twenty;
        } else if(nomSize === 22) {
            fit1Takeout = flanges.raisedFaces600.twenTwo;
        } else if(nomSize === 24) {
            fit1Takeout = flanges.raisedFaces600.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckFF' && fitClassSize === 600) {
        if (nomSize === 0.5) {
            fit1Takeout = flanges.flatFaces600.halfInch;
        } else if (nomSize === 0.75) {
            fit1Takeout = flanges.flatFaces600.threeQuarters;
        } else if (nomSize === 1) {
            fit1Takeout = flanges.flatFaces600.oneInch;
        } else if (nomSize === 1.25) {
            fit1Takeout = flanges.flatFaces600.oneAndQuarter;
        } else if (nomSize === 1.5) {
            fit1Takeout = flanges.flatFaces600.oneAndHalf;
        } else if (nomSize === 2) {
            fit1Takeout = flanges.flatFaces600.twoInch;
        } else if (nomSize === 2.5) {
            fit1Takeout = flanges.flatFaces600.twoAndHalf;
        } else if (nomSize === 3) {
            fit1Takeout = flanges.flatFaces600.three;
        } else if (nomSize === 3.5) {
            fit1Takeout = flanges.flatFaces600.threeAndHalf;
        } else if (nomSize === 4) {
            fit1Takeout = flanges.flatFaces600.four;
        } else if (nomSize === 5) {
            fit1Takeout = flanges.flatFaces600.five;
        } else if (nomSize === 6) {
            fit1Takeout = flanges.flatFaces600.six;
        } else if (nomSize === 8) {
            fit1Takeout = flanges.flatFaces600.eight;
        } else if (nomSize === 10) {
            fit1Takeout = flanges.flatFaces600.ten;
        } else if (nomSize === 12) {
            fit1Takeout = flanges.flatFaces600.twelve;
        } else if (nomSize === 14) {
            fit1Takeout = flanges.flatFaces600.fourT;
        } else if (nomSize === 16) {
            fit1Takeout = flanges.flatFaces600.sixT;
        } else if (nomSize === 18) {
            fit1Takeout = flanges.flatFaces600.eightT;
        } else if (nomSize === 20) {
            fit1Takeout = flanges.flatFaces600.twenty;
        } else if (nomSize === 22) {
            fit1Takeout = flanges.flatFaces600.twenTwo;
        } else if (nomSize === 24) {
            fit1Takeout = flanges.flatFaces600.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckRF' && fitClassSize === 900) {
        if(nomSize === 3) {
            fit1Takeout = flanges.raisedFaces900.three;
        } else if(nomSize === 4) {
            fit1Takeout = flanges.raisedFaces900.four;
        } else if(nomSize === 5) {
            fit1Takeout = flanges.raisedFaces900.five;
        } else if(nomSize === 6) {
            fit1Takeout = flanges.raisedFaces900.six;
        } else if(nomSize === 8) {
            fit1Takeout = flanges.raisedFaces900.eight;
        } else if(nomSize === 10) {
            fit1Takeout = flanges.raisedFaces900.ten;
        } else if(nomSize === 12) {
            fit1Takeout = flanges.raisedFaces900.twelve;
        } else if(nomSize === 14) {
            fit1Takeout = flanges.raisedFaces900.fourT;
        } else if(nomSize === 16) {
            fit1Takeout = flanges.raisedFaces900.sixT;
        } else if(nomSize === 18) {
            fit1Takeout = flanges.raisedFaces900.eightT;
        } else if(nomSize === 20) {
            fit1Takeout = flanges.raisedFaces900.twenty;
        } else if(nomSize === 24) {
            fit1Takeout = flanges.raisedFaces900.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckFF' && fitClassSize === 9000) {
        if (nomSize === 3) {
            fit1Takeout = flanges.flatFaces900.three;
        } else if (nomSize === 4) {
            fit1Takeout = flanges.flatFaces900.four;
        } else if (nomSize === 5) {
            fit1Takeout = flanges.flatFaces900.five;
        } else if (nomSize === 6) {
            fit1Takeout = flanges.flatFaces900.six;
        } else if (nomSize === 8) {
            fit1Takeout = flanges.flatFaces900.eight;
        } else if (nomSize === 10) {
            fit1Takeout = flanges.flatFaces900.ten;
        } else if (nomSize === 12) {
            fit1Takeout = flanges.flatFaces900.twelve;
        } else if (nomSize === 14) {
            fit1Takeout = flanges.flatFaces900.fourT;
        } else if (nomSize === 16) {
            fit1Takeout = flanges.flatFaces900.sixT;
        } else if (nomSize === 18) {
            fit1Takeout = flanges.flatFaces900.eightT;
        } else if (nomSize === 20) {
            fit1Takeout = flanges.flatFaces900.twenty;
        } else if (nomSize === 24) {
            fit1Takeout = flanges.flatFaces900.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckRF' && fitClassSize === 1500) {
        if(nomSize === 0.5) {
            fit1Takeout = flanges.raisedFaces1500.halfInch;
        } else if(nomSize === 0.75) {
            fit1Takeout = flanges.raisedFaces1500.threeQuarters;
        } else if(nomSize === 1) {
            fit1Takeout = flanges.raisedFaces1500.oneInch;
        } else if(nomSize === 1.25) {
            fit1Takeout = flanges.raisedFaces1500.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit1Takeout = flanges.raisedFaces1500.oneAndHalf;
        } else if(nomSize === 2) {
            fit1Takeout = flanges.raisedFaces1500.twoInch;
        } else if(nomSize === 2.5) {
            fit1Takeout = flanges.raisedFaces1500.twoAndHalf;
        } else if(nomSize === 3) {
            fit1Takeout = flanges.raisedFaces1500.three;
        } else if(nomSize === 4) {
            fit1Takeout = flanges.raisedFaces1500.four;
        } else if(nomSize === 5) {
            fit1Takeout = flanges.raisedFaces1500.five;
        } else if(nomSize === 6) {
            fit1Takeout = flanges.raisedFaces1500.six;
        } else if(nomSize === 8) {
            fit1Takeout = flanges.raisedFaces1500.eight;
        } else if(nomSize === 10) {
            fit1Takeout = flanges.raisedFaces1500.ten;
        } else if(nomSize === 12) {
            fit1Takeout = flanges.raisedFaces1500.twelve;
        } else if(nomSize === 14) {
            fit1Takeout = flanges.raisedFaces1500.fourT;
        } else if(nomSize === 16) {
            fit1Takeout = flanges.raisedFaces1500.sixT;
        } else if(nomSize === 18) {
            fit1Takeout = flanges.raisedFaces1500.eightT;
        } else if(nomSize === 20) {
            fit1Takeout = flanges.raisedFaces1500.twenty;
        } else if(nomSize === 24) {
            fit1Takeout = flanges.raisedFaces1500.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckFF' && fitClassSize === 1500) {
        if (nomSize === 0.5) {
            fit1Takeout = flanges.flatFaces1500.halfInch;
        } else if (nomSize === 0.75) {
            fit1Takeout = flanges.flatFaces1500.threeQuarters;
        } else if (nomSize === 1) {
            fit1Takeout = flanges.flatFaces1500.oneInch;
        } else if (nomSize === 1.25) {
            fit1Takeout = flanges.flatFaces1500.oneAndQuarter;
        } else if (nomSize === 1.5) {
            fit1Takeout = flanges.flatFaces1500.oneAndHalf;
        } else if (nomSize === 2) {
            fit1Takeout = flanges.flatFaces1500.twoInch;
        } else if (nomSize === 2.5) {
            fit1Takeout = flanges.flatFaces1500.twoAndHalf;
        } else if (nomSize === 3) {
            fit1Takeout = flanges.flatFaces1500.three;
        } else if (nomSize === 4) {
            fit1Takeout = flanges.flatFaces1500.four;
        } else if (nomSize === 5) {
            fit1Takeout = flanges.flatFaces1500.five;
        } else if (nomSize === 6) {
            fit1Takeout = flanges.flatFaces1500.six;
        } else if (nomSize === 8) {
            fit1Takeout = flanges.flatFaces1500.eight;
        } else if (nomSize === 10) {
            fit1Takeout = flanges.flatFaces1500.ten;
        } else if (nomSize === 12) {
            fit1Takeout = flanges.flatFaces1500.twelve;
        } else if (nomSize === 14) {
            fit1Takeout = flanges.flatFaces1500.fourT;
        } else if (nomSize === 16) {
            fit1Takeout = flanges.flatFaces1500.sixT;
        } else if (nomSize === 18) {
            fit1Takeout = flanges.flatFaces1500.eightT;
        } else if (nomSize === 20) {
            fit1Takeout = flanges.flatFaces1500.twenty;
        } else if (nomSize === 24) {
            fit1Takeout = flanges.flatFaces1500.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckRF' && fitClassSize === 2500) {
        if(nomSize === 0.5) {
            fit1Takeout = flanges.raisedFaces2500.halfInch;
        } else if(nomSize === 0.75) {
            fit1Takeout = flanges.raisedFaces2500.threeQuarters;
        } else if(nomSize === 1) {
            fit1Takeout = flanges.raisedFaces2500.oneInch;
        } else if(nomSize === 1.25) {
            fit1Takeout = flanges.raisedFaces2500.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit1Takeout = flanges.raisedFaces2500.oneAndHalf;
        } else if(nomSize === 2) {
            fit1Takeout = flanges.raisedFaces2500.twoInch;
        } else if(nomSize === 2.5) {
            fit1Takeout = flanges.raisedFaces2500.twoAndHalf;
        } else if(nomSize === 3) {
            fit1Takeout = flanges.raisedFaces2500.three;
        } else if(nomSize === 4) {
            fit1Takeout = flanges.raisedFaces2500.four;
        } else if(nomSize === 5) {
            fit1Takeout = flanges.raisedFaces2500.five;
        } else if(nomSize === 6) {
            fit1Takeout = flanges.raisedFaces2500.six;
        } else if(nomSize === 8) {
            fit1Takeout = flanges.raisedFaces2500.eight;
        } else if(nomSize === 10) {
            fit1Takeout = flanges.raisedFaces2500.ten;
        } else if(nomSize === 12) {
            fit1Takeout = flanges.raisedFaces2500.twelve;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit1.value === 'weldNeckFF' && fitClassSize === 2500) {
        if (nomSize === 0.5) {
            fit1Takeout = flanges.flatFaces2500.halfInch;
        } else if (nomSize === 0.75) {
            fit1Takeout = flanges.flatFaces2500.threeQuarters;
        } else if (nomSize === 1) {
            fit1Takeout = flanges.flatFaces2500.oneInch;
        } else if (nomSize === 1.25) {
            fit1Takeout = flanges.flatFaces2500.oneAndQuarter;
        } else if (nomSize === 1.5) {
            fit1Takeout = flanges.flatFaces2500.oneAndHalf;
        } else if (nomSize === 2) {
            fit1Takeout = flanges.flatFaces2500.twoInch;
        } else if (nomSize === 2.5) {
            fit1Takeout = flanges.flatFaces2500.twoAndHalf;
        } else if (nomSize === 3) {
            fit1Takeout = flanges.flatFaces2500.three;
        } else if (nomSize === 4) {
            fit1Takeout = flanges.flatFaces2500.four;
        } else if (nomSize === 5) {
            fit1Takeout = flanges.flatFaces2500.five;
        } else if (nomSize === 6) {
            fit1Takeout = flanges.flatFaces2500.six;
        } else if (nomSize === 8) {
            fit1Takeout = flanges.flatFaces2500.eight;
        } else if (nomSize === 10) {
            fit1Takeout = flanges.flatFaces2500.ten;
        } else if (nomSize === 12) {
            fit1Takeout = flanges.flatFaces2500.twelve;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    }

    if(fit2.value === 'none') {
        fit2Takeout = 0;
    } else if(fit2.value === '90') {
        fit2Takeout = calcNinety(nomSize) + 0.125;
    } else if(fit2.value === '45') {
        fit2Takeout = calc45(nomSize) + 0.125;
    } else if(fit2.value === 'weldNeckRF' && fitClassSize === 150) {
        if(nomSize === 0.5) {
            fit2Takeout = flanges.raisedFaces150.halfInch;
        } else if(nomSize === 0.75) {
            fit2Takeout = flanges.raisedFaces150.threeQuarters;
        } else if(nomSize === 1) {
            fit2Takeout = flanges.raisedFaces150.oneInch;
        } else if(nomSize === 1.25) {
            fit2Takeout = flanges.raisedFaces150.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit2Takeout = flanges.raisedFaces150.oneAndHalf;
        } else if(nomSize === 2) {
            fit2Takeout = flanges.raisedFaces150.twoInch;
        } else if(nomSize === 2.5) {
            fit2Takeout = flanges.raisedFaces150.twoAndHalf;
        } else if(nomSize === 3) {
            fit2Takeout = flanges.raisedFaces150.three;
        } else if(nomSize === 3.5) {
            fit2Takeout = flanges.raisedFaces150.threeAndHalf;
        } else if(nomSize === 4) {
            fit2Takeout = flanges.raisedFaces150.four;
        } else if(nomSize === 5) {
            fit2Takeout = flanges.raisedFaces150.five;
        } else if(nomSize === 6) {
            fit2Takeout = flanges.raisedFaces150.six;
        } else if(nomSize === 8) {
            fit2Takeout = flanges.raisedFaces150.eight;
        } else if(nomSize === 10) {
            fit2Takeout = flanges.raisedFaces150.ten;
        } else if(nomSize === 12) {
            fit2Takeout = flanges.raisedFaces150.twelve;
        } else if(nomSize === 14) {
            fit2Takeout = flanges.raisedFaces150.fourT;
        } else if(nomSize === 16) {
            fit2Takeout = flanges.raisedFaces150.sixT;
        } else if(nomSize === 18) {
            fit2Takeout = flanges.raisedFaces150.eightT;
        } else if(nomSize === 20) {
            fit2Takeout = flanges.raisedFaces150.twenty;
        } else if(nomSize === 22) {
            fit2Takeout = flanges.raisedFaces150.twenTwo;
        } else if(nomSize === 24) {
            fit2Takeout = flanges.raisedFaces150.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckFF' && fitClassSize === 150) {
        if(nomSize === 0.5) {
            fit2Takeout = flanges.flatFaces150.halfInch;
        } else if(nomSize === 0.75) {
            fit2Takeout = flanges.flatFaces150.threeQuarters;
        } else if(nomSize === 1) {
            fit2Takeout = flanges.flatFaces150.oneInch;
        } else if(nomSize === 1.25) {
            fit2Takeout = flanges.flatFaces150.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit2Takeout = flanges.flatFaces150.oneAndHalf;
        } else if(nomSize === 2) {
            fit2Takeout = flanges.flatFaces150.twoInch;
        } else if(nomSize === 2.5) {
            fit2Takeout = flanges.flatFaces150.twoAndHalf;
        } else if(nomSize === 3) {
            fit2Takeout = flanges.flatFaces150.three;
        } else if(nomSize === 3.5) {
            fit2Takeout = flanges.flatFaces150.threeAndHalf;
        } else if(nomSize === 4) {
            fit2Takeout = flanges.flatFaces150.four;
        } else if(nomSize === 5) {
            fit2Takeout = flanges.flatFaces150.five;
        } else if(nomSize === 6) {
            fit2Takeout = flanges.flatFaces150.six;
        } else if(nomSize === 8) {
            fit2Takeout = flanges.flatFaces150.eight;
        } else if(nomSize === 10) {
            fit2Takeout = flanges.flatFaces150.ten;
        } else if(nomSize === 12) {
            fit2Takeout = flanges.flatFaces150.twelve;
        } else if(nomSize === 14) {
            fit2Takeout = flanges.flatFaces150.fourT;
        } else if(nomSize === 16) {
            fit2Takeout = flanges.flatFaces150.sixT;
        } else if(nomSize === 18) {
            fit2Takeout = flanges.flatFaces150.eightT;
        } else if(nomSize === 20) {
            fit2Takeout = flanges.flatFaces150.twenty;
        } else if(nomSize === 22) {
            fit2Takeout = flanges.flatFaces150.twenTwo;
        } else if(nomSize === 24) {
            fit2Takeout = flanges.flatFaces150.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckRF' && fitClassSize === 300) {
        if(nomSize === 0.5) {
            fit2Takeout = flanges.raisedFaces300.halfInch;
        } else if(nomSize === 0.75) {
            fit2Takeout = flanges.raisedFaces300.threeQuarters;
        } else if(nomSize === 1) {
            fit2Takeout = flanges.raisedFaces300.oneInch;
        } else if(nomSize === 1.25) {
            fit2Takeout = flanges.raisedFaces300.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit2Takeout = flanges.raisedFaces300.oneAndHalf;
        } else if(nomSize === 2) {
            fit2Takeout = flanges.raisedFaces300.twoInch;
        } else if(nomSize === 2.5) {
            fit2Takeout = flanges.raisedFaces300.twoAndHalf;
        } else if(nomSize === 3) {
            fit2Takeout = flanges.raisedFaces300.three;
        } else if(nomSize === 3.5) {
            fit2Takeout = flanges.raisedFaces300.threeAndHalf;
        } else if(nomSize === 4) {
            fit2Takeout = flanges.raisedFaces300.four;
        } else if(nomSize === 5) {
            fit2Takeout = flanges.raisedFaces300.five;
        } else if(nomSize === 6) {
            fit2Takeout = flanges.raisedFaces300.six;
        } else if(nomSize === 8) {
            fit2Takeout = flanges.raisedFaces300.eight;
        } else if(nomSize === 10) {
            fit2Takeout = flanges.raisedFaces300.ten;
        } else if(nomSize === 12) {
            fit2Takeout = flanges.raisedFaces300.twelve;
        } else if(nomSize === 14) {
            fit2Takeout = flanges.raisedFaces300.fourT;
        } else if(nomSize === 16) {
            fit2Takeout = flanges.raisedFaces300.sixT;
        } else if(nomSize === 18) {
            fit2Takeout = flanges.raisedFaces300.eightT;
        } else if(nomSize === 20) {
            fit2Takeout = flanges.raisedFaces300.twenty;
        } else if(nomSize === 22) {
            fit2Takeout = flanges.raisedFaces300.twenTwo;
        } else if(nomSize === 24) {
            fit2Takeout = flanges.raisedFaces300.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckFF' && fitClassSize === 300) {
        if (nomSize === 0.5) {
            fit2Takeout = flanges.flatFaces300.halfInch;
        } else if (nomSize === 0.75) {
            fit2Takeout = flanges.flatFaces300.threeQuarters;
        } else if (nomSize === 1) {
            fit2Takeout = flanges.flatFaces300.oneInch;
        } else if (nomSize === 1.25) {
            fit2Takeout = flanges.flatFaces300.oneAndQuarter;
        } else if (nomSize === 1.5) {
            fit2Takeout = flanges.flatFaces300.oneAndHalf;
        } else if (nomSize === 2) {
            fit2Takeout = flanges.flatFaces300.twoInch;
        } else if (nomSize === 2.5) {
            fit2Takeout = flanges.flatFaces300.twoAndHalf;
        } else if (nomSize === 3) {
            fit2Takeout = flanges.flatFaces300.three;
        } else if (nomSize === 3.5) {
            fit2Takeout = flanges.flatFaces300.threeAndHalf;
        } else if (nomSize === 4) {
            fit2Takeout = flanges.flatFaces300.four;
        } else if (nomSize === 5) {
            fit2Takeout = flanges.flatFaces300.five;
        } else if (nomSize === 6) {
            fit2Takeout = flanges.flatFaces300.six;
        } else if (nomSize === 8) {
            fit2Takeout = flanges.flatFaces300.eight;
        } else if (nomSize === 10) {
            fit2Takeout = flanges.flatFaces300.ten;
        } else if (nomSize === 12) {
            fit2Takeout = flanges.flatFaces300.twelve;
        } else if (nomSize === 14) {
            fit2Takeout = flanges.flatFaces300.fourT;
        } else if (nomSize === 16) {
            fit2Takeout = flanges.flatFaces300.sixT;
        } else if (nomSize === 18) {
            fit2Takeout = flanges.flatFaces300.eightT;
        } else if (nomSize === 20) {
            fit2Takeout = flanges.flatFaces300.twenty;
        } else if (nomSize === 22) {
            fit2Takeout = flanges.flatFaces300.twenTwo;
        } else if (nomSize === 24) {
            fit2Takeout = flanges.flatFaces300.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckRF' && fitClassSize === 400) {
        if(nomSize === 0.5) {
            fit2Takeout = flanges.raisedFaces400.halfInch;
        } else if(nomSize === 0.75) {
            fit2Takeout = flanges.raisedFaces400.threeQuarters;
        } else if(nomSize === 1) {
            fit2Takeout = flanges.raisedFaces400.oneInch;
        } else if(nomSize === 1.25) {
            fit2Takeout = flanges.raisedFaces400.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit2Takeout = flanges.raisedFaces400.oneAndHalf;
        } else if(nomSize === 2) {
            fit2Takeout = flanges.raisedFaces400.twoInch;
        } else if(nomSize === 2.5) {
            fit2Takeout = flanges.raisedFaces400.twoAndHalf;
        } else if(nomSize === 3) {
            fit2Takeout = flanges.raisedFaces400.three;
        } else if(nomSize === 3.5) {
            fit2Takeout = flanges.raisedFaces400.threeAndHalf;
        } else if(nomSize === 4) {
            fit2Takeout = flanges.raisedFaces400.four;
        } else if(nomSize === 5) {
            fit2Takeout = flanges.raisedFaces400.five;
        } else if(nomSize === 6) {
            fit2Takeout = flanges.raisedFaces400.six;
        } else if(nomSize === 8) {
            fit2Takeout = flanges.raisedFaces400.eight;
        } else if(nomSize === 10) {
            fit2Takeout = flanges.raisedFaces400.ten;
        } else if(nomSize === 12) {
            fit2Takeout = flanges.raisedFaces400.twelve;
        } else if(nomSize === 14) {
            fit2Takeout = flanges.raisedFaces400.fourT;
        } else if(nomSize === 16) {
            fit2Takeout = flanges.raisedFaces400.sixT;
        } else if(nomSize === 18) {
            fit2Takeout = flanges.raisedFaces400.eightT;
        } else if(nomSize === 20) {
            fit2Takeout = flanges.raisedFaces400.twenty;
        } else if(nomSize === 22) {
            fit2Takeout = flanges.raisedFaces400.twenTwo;
        } else if(nomSize === 24) {
            fit2Takeout = flanges.raisedFaces400.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckFF' && fitClassSize === 400) {
        if (nomSize === 0.5) {
            fit2Takeout = flanges.flatFaces400.halfInch;
        } else if (nomSize === 0.75) {
            fit2Takeout = flanges.flatFaces400.threeQuarters;
        } else if (nomSize === 1) {
            fit2Takeout = flanges.flatFaces400.oneInch;
        } else if (nomSize === 1.25) {
            fit2Takeout = flanges.flatFaces400.oneAndQuarter;
        } else if (nomSize === 1.5) {
            fit2Takeout = flanges.flatFaces400.oneAndHalf;
        } else if (nomSize === 2) {
            fit2Takeout = flanges.flatFaces400.twoInch;
        } else if (nomSize === 2.5) {
            fit2Takeout = flanges.flatFaces400.twoAndHalf;
        } else if (nomSize === 3) {
            fit2Takeout = flanges.flatFaces400.three;
        } else if (nomSize === 3.5) {
            fit2Takeout = flanges.flatFaces400.threeAndHalf;
        } else if (nomSize === 4) {
            fit2Takeout = flanges.flatFaces400.four;
        } else if (nomSize === 5) {
            fit2Takeout = flanges.flatFaces400.five;
        } else if (nomSize === 6) {
            fit2Takeout = flanges.flatFaces400.six;
        } else if (nomSize === 8) {
            fit2Takeout = flanges.flatFaces400.eight;
        } else if (nomSize === 10) {
            fit2Takeout = flanges.flatFaces400.ten;
        } else if (nomSize === 12) {
            fit2Takeout = flanges.flatFaces400.twelve;
        } else if (nomSize === 14) {
            fit2Takeout = flanges.flatFaces400.fourT;
        } else if (nomSize === 16) {
            fit2Takeout = flanges.flatFaces400.sixT;
        } else if (nomSize === 18) {
            fit2Takeout = flanges.flatFaces400.eightT;
        } else if (nomSize === 20) {
            fit2Takeout = flanges.flatFaces400.twenty;
        } else if (nomSize === 22) {
            fit2Takeout = flanges.flatFaces400.twenTwo;
        } else if (nomSize === 24) {
            fit2Takeout = flanges.flatFaces400.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckRF' && fitClassSize === 600) {
        if(nomSize === 0.5) {
            fit2Takeout = flanges.raisedFaces600.halfInch;
        } else if(nomSize === 0.75) {
            fit2Takeout = flanges.raisedFaces600.threeQuarters;
        } else if(nomSize === 1) {
            fit2Takeout = flanges.raisedFaces600.oneInch;
        } else if(nomSize === 1.25) {
            fit2Takeout = flanges.raisedFaces600.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit2Takeout = flanges.raisedFaces600.oneAndHalf;
        } else if(nomSize === 2) {
            fit2Takeout = flanges.raisedFaces600.twoInch;
        } else if(nomSize === 2.5) {
            fit2Takeout = flanges.raisedFaces600.twoAndHalf;
        } else if(nomSize === 3) {
            fit2Takeout = flanges.raisedFaces600.three;
        } else if(nomSize === 3.5) {
            fit2Takeout = flanges.raisedFaces600.threeAndHalf;
        } else if(nomSize === 4) {
            fit2Takeout = flanges.raisedFaces600.four;
        } else if(nomSize === 5) {
            fit2Takeout = flanges.raisedFaces600.five;
        } else if(nomSize === 6) {
            fit2Takeout = flanges.raisedFaces600.six;
        } else if(nomSize === 8) {
            fit2Takeout = flanges.raisedFaces600.eight;
        } else if(nomSize === 10) {
            fit2Takeout = flanges.raisedFaces600.ten;
        } else if(nomSize === 12) {
            fit2Takeout = flanges.raisedFaces600.twelve;
        } else if(nomSize === 14) {
            fit2Takeout = flanges.raisedFaces600.fourT;
        } else if(nomSize === 16) {
            fit2Takeout = flanges.raisedFaces600.sixT;
        } else if(nomSize === 18) {
            fit2Takeout = flanges.raisedFaces600.eightT;
        } else if(nomSize === 20) {
            fit2Takeout = flanges.raisedFaces600.twenty;
        } else if(nomSize === 22) {
            fit2Takeout = flanges.raisedFaces600.twenTwo;
        } else if(nomSize === 24) {
            fit2Takeout = flanges.raisedFaces600.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckFF' && fitClassSize === 600) {
        if (nomSize === 0.5) {
            fit2Takeout = flanges.flatFaces600.halfInch;
        } else if (nomSize === 0.75) {
            fit2Takeout = flanges.flatFaces600.threeQuarters;
        } else if (nomSize === 1) {
            fit2Takeout = flanges.flatFaces600.oneInch;
        } else if (nomSize === 1.25) {
            fit2Takeout = flanges.flatFaces600.oneAndQuarter;
        } else if (nomSize === 1.5) {
            fit2Takeout = flanges.flatFaces600.oneAndHalf;
        } else if (nomSize === 2) {
            fit2Takeout = flanges.flatFaces600.twoInch;
        } else if (nomSize === 2.5) {
            fit2Takeout = flanges.flatFaces600.twoAndHalf;
        } else if (nomSize === 3) {
            fit2Takeout = flanges.flatFaces600.three;
        } else if (nomSize === 3.5) {
            fit2Takeout = flanges.flatFaces600.threeAndHalf;
        } else if (nomSize === 4) {
            fit2Takeout = flanges.flatFaces600.four;
        } else if (nomSize === 5) {
            fit2Takeout = flanges.flatFaces600.five;
        } else if (nomSize === 6) {
            fit2Takeout = flanges.flatFaces600.six;
        } else if (nomSize === 8) {
            fit2Takeout = flanges.flatFaces600.eight;
        } else if (nomSize === 10) {
            fit2Takeout = flanges.flatFaces600.ten;
        } else if (nomSize === 12) {
            fit2Takeout = flanges.flatFaces600.twelve;
        } else if (nomSize === 14) {
            fit2Takeout = flanges.flatFaces600.fourT;
        } else if (nomSize === 16) {
            fit2Takeout = flanges.flatFaces600.sixT;
        } else if (nomSize === 18) {
            fit2Takeout = flanges.flatFaces600.eightT;
        } else if (nomSize === 20) {
            fit2Takeout = flanges.flatFaces600.twenty;
        } else if (nomSize === 22) {
            fit2Takeout = flanges.flatFaces600.twenTwo;
        } else if (nomSize === 24) {
            fit2Takeout = flanges.flatFaces600.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckRF' && fitClassSize === 900) {
        if(nomSize === 3) {
            fit2Takeout = flanges.raisedFaces900.three;
        } else if(nomSize === 4) {
            fit2Takeout = flanges.raisedFaces900.four;
        } else if(nomSize === 5) {
            fit2Takeout = flanges.raisedFaces900.five;
        } else if(nomSize === 6) {
            fit2Takeout = flanges.raisedFaces900.six;
        } else if(nomSize === 8) {
            fit2Takeout = flanges.raisedFaces900.eight;
        } else if(nomSize === 10) {
            fit2Takeout = flanges.raisedFaces900.ten;
        } else if(nomSize === 12) {
            fit2Takeout = flanges.raisedFaces900.twelve;
        } else if(nomSize === 14) {
            fit2Takeout = flanges.raisedFaces900.fourT;
        } else if(nomSize === 16) {
            fit2Takeout = flanges.raisedFaces900.sixT;
        } else if(nomSize === 18) {
            fit2Takeout = flanges.raisedFaces900.eightT;
        } else if(nomSize === 20) {
            fit2Takeout = flanges.raisedFaces900.twenty;
        } else if(nomSize === 24) {
            fit2Takeout = flanges.raisedFaces900.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckFF' && fitClassSize === 9000) {
        if (nomSize === 3) {
            fit2Takeout = flanges.flatFaces900.three;
        } else if (nomSize === 4) {
            fit2Takeout = flanges.flatFaces900.four;
        } else if (nomSize === 5) {
            fit2Takeout = flanges.flatFaces900.five;
        } else if (nomSize === 6) {
            fit2Takeout = flanges.flatFaces900.six;
        } else if (nomSize === 8) {
            fit2Takeout = flanges.flatFaces900.eight;
        } else if (nomSize === 10) {
            fit2Takeout = flanges.flatFaces900.ten;
        } else if (nomSize === 12) {
            fit2Takeout = flanges.flatFaces900.twelve;
        } else if (nomSize === 14) {
            fit2Takeout = flanges.flatFaces900.fourT;
        } else if (nomSize === 16) {
            fit2Takeout = flanges.flatFaces900.sixT;
        } else if (nomSize === 18) {
            fit2Takeout = flanges.flatFaces900.eightT;
        } else if (nomSize === 20) {
            fit2Takeout = flanges.flatFaces900.twenty;
        } else if (nomSize === 24) {
            fit2Takeout = flanges.flatFaces900.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckRF' && fitClassSize === 1500) {
        if(nomSize === 0.5) {
            fit2Takeout = flanges.raisedFaces1500.halfInch;
        } else if(nomSize === 0.75) {
            fit2Takeout = flanges.raisedFaces1500.threeQuarters;
        } else if(nomSize === 1) {
            fit2Takeout = flanges.raisedFaces1500.oneInch;
        } else if(nomSize === 1.25) {
            fit2Takeout = flanges.raisedFaces1500.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit2Takeout = flanges.raisedFaces1500.oneAndHalf;
        } else if(nomSize === 2) {
            fit2Takeout = flanges.raisedFaces1500.twoInch;
        } else if(nomSize === 2.5) {
            fit2Takeout = flanges.raisedFaces1500.twoAndHalf;
        } else if(nomSize === 3) {
            fit2Takeout = flanges.raisedFaces1500.three;
        } else if(nomSize === 4) {
            fit2Takeout = flanges.raisedFaces1500.four;
        } else if(nomSize === 5) {
            fit2Takeout = flanges.raisedFaces1500.five;
        } else if(nomSize === 6) {
            fit2Takeout = flanges.raisedFaces1500.six;
        } else if(nomSize === 8) {
            fit2Takeout = flanges.raisedFaces1500.eight;
        } else if(nomSize === 10) {
            fit2Takeout = flanges.raisedFaces1500.ten;
        } else if(nomSize === 12) {
            fit2Takeout = flanges.raisedFaces1500.twelve;
        } else if(nomSize === 14) {
            fit2Takeout = flanges.raisedFaces1500.fourT;
        } else if(nomSize === 16) {
            fit2Takeout = flanges.raisedFaces1500.sixT;
        } else if(nomSize === 18) {
            fit2Takeout = flanges.raisedFaces1500.eightT;
        } else if(nomSize === 20) {
            fit2Takeout = flanges.raisedFaces1500.twenty;
        } else if(nomSize === 24) {
            fit2Takeout = flanges.raisedFaces1500.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckFF' && fitClassSize === 1500) {
        if (nomSize === 0.5) {
            fit2Takeout = flanges.flatFaces1500.halfInch;
        } else if (nomSize === 0.75) {
            fit2Takeout = flanges.flatFaces1500.threeQuarters;
        } else if (nomSize === 1) {
            fit2Takeout = flanges.flatFaces1500.oneInch;
        } else if (nomSize === 1.25) {
            fit2Takeout = flanges.flatFaces1500.oneAndQuarter;
        } else if (nomSize === 1.5) {
            fit2Takeout = flanges.flatFaces1500.oneAndHalf;
        } else if (nomSize === 2) {
            fit2Takeout = flanges.flatFaces1500.twoInch;
        } else if (nomSize === 2.5) {
            fit2Takeout = flanges.flatFaces1500.twoAndHalf;
        } else if (nomSize === 3) {
            fit2Takeout = flanges.flatFaces1500.three;
        } else if (nomSize === 4) {
            fit2Takeout = flanges.flatFaces1500.four;
        } else if (nomSize === 5) {
            fit2Takeout = flanges.flatFaces1500.five;
        } else if (nomSize === 6) {
            fit2Takeout = flanges.flatFaces1500.six;
        } else if (nomSize === 8) {
            fit2Takeout = flanges.flatFaces1500.eight;
        } else if (nomSize === 10) {
            fit2Takeout = flanges.flatFaces1500.ten;
        } else if (nomSize === 12) {
            fit2Takeout = flanges.flatFaces1500.twelve;
        } else if (nomSize === 14) {
            fit2Takeout = flanges.flatFaces1500.fourT;
        } else if (nomSize === 16) {
            fit2Takeout = flanges.flatFaces1500.sixT;
        } else if (nomSize === 18) {
            fit2Takeout = flanges.flatFaces1500.eightT;
        } else if (nomSize === 20) {
            fit2Takeout = flanges.flatFaces1500.twenty;
        } else if (nomSize === 24) {
            fit2Takeout = flanges.flatFaces1500.twenFour;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckRF' && fitClassSize === 2500) {
        if(nomSize === 0.5) {
            fit2Takeout = flanges.raisedFaces2500.halfInch;
        } else if(nomSize === 0.75) {
            fit2Takeout = flanges.raisedFaces2500.threeQuarters;
        } else if(nomSize === 1) {
            fit2Takeout = flanges.raisedFaces2500.oneInch;
        } else if(nomSize === 1.25) {
            fit2Takeout = flanges.raisedFaces2500.oneAndQuarter;
        } else if(nomSize === 1.5) {
            fit2Takeout = flanges.raisedFaces2500.oneAndHalf;
        } else if(nomSize === 2) {
            fit2Takeout = flanges.raisedFaces2500.twoInch;
        } else if(nomSize === 2.5) {
            fit2Takeout = flanges.raisedFaces2500.twoAndHalf;
        } else if(nomSize === 3) {
            fit2Takeout = flanges.raisedFaces2500.three;
        } else if(nomSize === 4) {
            fit2Takeout = flanges.raisedFaces2500.four;
        } else if(nomSize === 5) {
            fit2Takeout = flanges.raisedFaces2500.five;
        } else if(nomSize === 6) {
            fit2Takeout = flanges.raisedFaces2500.six;
        } else if(nomSize === 8) {
            fit2Takeout = flanges.raisedFaces2500.eight;
        } else if(nomSize === 10) {
            fit2Takeout = flanges.raisedFaces2500.ten;
        } else if(nomSize === 12) {
            fit2Takeout = flanges.raisedFaces2500.twelve;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    } else if(fit2.value === 'weldNeckFF' && fitClassSize === 2500) {
        if (nomSize === 0.5) {
            fit2Takeout = flanges.flatFaces2500.halfInch;
        } else if (nomSize === 0.75) {
            fit2Takeout = flanges.flatFaces2500.threeQuarters;
        } else if (nomSize === 1) {
            fit2Takeout = flanges.flatFaces2500.oneInch;
        } else if (nomSize === 1.25) {
            fit2Takeout = flanges.flatFaces2500.oneAndQuarter;
        } else if (nomSize === 1.5) {
            fit2Takeout = flanges.flatFaces2500.oneAndHalf;
        } else if (nomSize === 2) {
            fit2Takeout = flanges.flatFaces2500.twoInch;
        } else if (nomSize === 2.5) {
            fit2Takeout = flanges.flatFaces2500.twoAndHalf;
        } else if (nomSize === 3) {
            fit2Takeout = flanges.flatFaces2500.three;
        } else if (nomSize === 4) {
            fit2Takeout = flanges.flatFaces2500.four;
        } else if (nomSize === 5) {
            fit2Takeout = flanges.flatFaces2500.five;
        } else if (nomSize === 6) {
            fit2Takeout = flanges.flatFaces2500.six;
        } else if (nomSize === 8) {
            fit2Takeout = flanges.flatFaces2500.eight;
        } else if (nomSize === 10) {
            fit2Takeout = flanges.flatFaces2500.ten;
        } else if (nomSize === 12) {
            fit2Takeout = flanges.flatFaces2500.twelve;
        } else {
            throw new Error('fitting class not valid for size of pipe')
        }
    }

    let fittingTOut = fit1Takeout + fit2Takeout;
    if(fit1.value === 'weldNeckRF' || fit1.value === 'weldNeckFF') {
        fittingTOut = fittingTOut + 0.125;
    }
    if(fit2.value === 'weldNeckRF' || fit2.value === 'weldNeckFF') {
        fittingTOut = fittingTOut + 0.125;
    }


    let answer = overall - fittingTOut;
    if(answer < 0) {
        throw new Error('Overall length to short to support the selected fittings')
    }
    if(fitClassSize.value === 'none') {
        throw new Error('fitting class must be specified')
    }

    document.getElementById('runAnswer').innerHTML = answer.toString();
}

function cyclePage() {

    if(elbowCalc.style.display === 'none') {
        elbowCalc.style.display = 'block';
        riseRuns.style.display = 'none';
    } else if(elbowCalc.style.display !== 'none') {
        elbowCalc.style.display = 'none';
        riseRuns.style.display = 'block';
    }
}

calcRun.addEventListener('click', calcRuns);
cycle.addEventListener('click', cyclePage)
calcButton.addEventListener('click', calcRiseRun);
submitButton.addEventListener('click', calcElbowOut);