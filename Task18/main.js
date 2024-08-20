// Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two.

function checkIntegers(a, b, c){
    function isInRange(value,min,max){
        return value >= min && value < max;
    }
    if (isInRange(a, 20, Math.max(b, c)) || isInRange(b, 20, Math.max(a, c)) || isInRange(c, 20, Math.max(a, b))){
        return true;
    }
    return false;
}

const a = 15;
const b = 25;
const c = 30;

console.log(checkIntegers(a, b, c));  
