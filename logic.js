let submitButton = document.getElementById("submit");
let calcButton = document.getElementById("calcRiseRun");
let output = document.getElementById("result");
let ninety = document.getElementById("90");
let forty_five = document.getElementById("45");
let degree;


function calcElbowOut() {
    let nomSize = parseFloat(document.getElementById("nomSize").value);

    if(ninety.checked) {
        degree = 90;
    } else if(forty_five.checked) {
        degree = 45;
    }

    if(degree === 90) {
        calcNinety(nomSize);
    } else if(degree === 45) {
        output.innerHTML = calc45(nomSize).toString();
    }
}

function calcNinety(nomSize) {
    output.innerHTML = (nomSize * 1.5).toString();
}

function calc45(nomSize) {
    let num2 = nomSize / 2;
    let num3 = num2 / 2;
    let num4 = num3 / 2;
    return num2 + num4;
}

let height;
function calcRiseRun() {
    let nomSize = parseFloat(document.getElementById("pipeSize").value);
    let elev1 = parseFloat(document.getElementById("elevation_1").value);
    let elev2 = parseFloat(document.getElementById("elevation_2").value);

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

calcButton.addEventListener('click', calcRiseRun);
submitButton.addEventListener('click', calcElbowOut);