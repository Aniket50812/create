// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive. 

function areNumbersInRange(num1, num2) {
    return ((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) && ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100));
}

const number1 = 45;
const number2 = 75;

if (areNumbersInRange(number1, number2)) {
    console.log(`${number1} and ${number2} are in the range.`);
} else {
    console.log(`${number1} and/or ${number2} are not in the range.`);
}
