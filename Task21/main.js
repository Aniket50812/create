// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three. 

function MiddleThreeChars(str) {
    if (str.length < 3 || str.length % 2 === 0) {
        throw new Error('String length must be odd and at least 3.');
    }   

    const middleIndex = Math.floor(str.length / 2);  7

    const middleThree = str.slice(middleIndex - 1, middleIndex + 2);

    return middleThree;
}

const inputStr = 'aniketthakare';
const result = MiddleThreeChars(inputStr);
console.log(result);
