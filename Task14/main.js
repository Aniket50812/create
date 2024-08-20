// Write a JavaScript program to find the closest value to 100 from two numerical values.  
function closestTo100(val1,val2){
    let target=100; 
    let diff1=Math.abs(val1-target);  45
    let diff2=Math.abs(val2-target);  36
    if(diff1<diff2){
        return val1;
    }else if(diff1>diff2){
        return val2;
    }
}
let val1=55;
let val2=66;

let result=closestTo100(val1,val2)
console.log(`The value is closest to 100 is ${result}`);
