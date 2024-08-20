
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function checkGuess() {
    const randomNumber = getRandomNumber();
    const userGuess = parseInt(document.getElementById('userGuess').value, 10);
    const resultElement = document.getElementById('result');
    

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        resultElement.textContent = 'Please enter a number between 1 and 10.';
        return;
    }

    if (userGuess === randomNumber) {
        resultElement.textContent = 'Good Work !!  you have guess the number';
    } else {
        resultElement.textContent = 'Not matched try again !!!';
    }
}
