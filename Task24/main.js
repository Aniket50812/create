// Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.  

function modifyString(input) {
    if (input.length === 0) return input;

    const firstChar = input[0];
    const lastChar = input[input.length - 1];

    if (firstChar === 'P' && lastChar === 'P') {
        return input.substring(1, input.length - 1);
    }
    if (firstChar === 'P') {
        return input.substring(1);
    }
    if (lastChar === 'P') {
        return input.substring(0, input.length - 1); 
    }

    return input;
}
console.log(modifyString("PHelloP")); 
console.log(modifyString("PWorld"));  
console.log(modifyString("HelloP"));  
console.log(modifyString("Hello"));   
console.log(modifyString("PAniketP"));   
