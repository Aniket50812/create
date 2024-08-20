// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function first_and_last(str){
    if(str.length<1){
        return 'string length must be at least 1.';
    }
    if(str.length===1){
        return str;
    }
    let firstchar=str[0];
    let middlechar=str.slice(1,str.length-1);
    let lastchar=str[str.length-1];
    return lastchar+middlechar+firstchar;
}


console.log(first_and_last("aniket"));
console.log(first_and_last("python"));
console.log(first_and_last("laptop"));
console.log(first_and_last("w"));
console.log(first_and_last("md"));
