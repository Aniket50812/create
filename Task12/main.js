// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

function isinRange(val1,val2){
    let uppervalue=99;
    let lowervalue=50;
    return (val1>=lowervalue && val1<=uppervalue) || (val2>=lowervalue && val2 <=uppervalue);
    
}

console.log(isinRange(10,56));
console.log(isinRange(45,90));
console.log(isinRange(78,15));
console.log(isinRange(18,59));
console.log(isinRange(76,66));
console.log(isinRange(10,45));
