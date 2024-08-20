function shift_to_first(input){
    if(input.length<3){
        throw new Error("string length must be greater than or equal to 3")
    }
    let lastcharacter=input.slice(-3);
    let remaining=input.slice(0,-3);
    return lastcharacter+remaining
}
let input="aniket";
result=shift_to_first(input);
console.log(result);

