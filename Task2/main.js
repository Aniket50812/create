let outputElement = document.getElementById('output');
let startButton = document.getElementById('startBtn');
let stopButton = document.getElementById('stopBtn');

let str = 'Hi All Welcome';
let intervalId = null; 

function reverseString(s) {
    return s.split('').reverse().join('');
}

function rotateString() {
    
    let reversedStr = reverseString(str);


    reversedStr = reversedStr.slice(1) + reversedStr[0];


    str = reverseString(reversedStr);


    outputElement.innerHTML = `<em>${str}</em>`;
}

function startRotation() {
    if (!intervalId) {
        intervalId = setInterval(rotateString, 1000);
    }
}

function stopRotation() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

startButton.addEventListener('click', startRotation);
stopButton.addEventListener('click', stopRotation);
