// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string. 

function concatenatetwostrings(str1, str2) {
    let concatenated = str1 + str2;  
    
    let length1 = str1.length;
    let length2 = str2.length;
    
    if (length1 !== length2) {
        let minLength = Math.min(length1, length2);
        
        concatenated = concatenated.slice(0, minLength * 2);
    }
    
    return concatenated;
}
console.log(concatenatetwostrings("hello", "world")); 
console.log(concatenatetwostrings("short", "a bit longer string"));
