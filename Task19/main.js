// Write a JavaScript program to concatenate two strings except for their first character. 
function SkipFirstChar(str1, str2) {
    return str1.slice(1) + str2.slice(1);
}


const string1 = "Aniket";
const string2 = "python";
console.log(SkipFirstChar(string1, string2)); 
