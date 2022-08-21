function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const makeBlueButton = document.getElementById('make-blue');
//console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const purpleButton = document.getElementById('make-purple');
//console.log(purpleButton);

purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}