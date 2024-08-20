// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  
function isMultipleof3or7(value){
    if (value<=0){
        return "please enter positive number..";
    }
    if (value%3===0||value%7===0){
        return `${value} is a multiple of 3 and 7.`;
    }else{
        return `${value} is a not multiple of 3 and 7`;
    }
}

console.log(isMultipleof3or7(14));
console.log(isMultipleof3or7(5));
console.log(isMultipleof3or7(9));
console.log(isMultipleof3or7(10));
console.log(isMultipleof3or7(-8));
console.log(isMultipleof3or7(27));
