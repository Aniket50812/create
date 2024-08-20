// Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.  

function shift_to_first(input) {
    if (input.length < 3) {
        throw new Error("String length must be greater than or equal to 3");
    }
    let lastThreeCharacters = input.slice(-3);

    let remaining = input.slice(0, -3);

    return lastThreeCharacters + remaining;
}
let input = "aniket";
let result = shift_to_first(input);
console.log(result);
