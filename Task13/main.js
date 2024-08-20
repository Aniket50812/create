// // Write a JavaScript program to find the largest of three given integers.  
function lagestvalue(val1,val2,val3){
    let largest;
    if(val1>=val2 && val1>=val3){
        largest=val1;
    }else if(val2>=val1 && val2 >=val3){
        largest=val2;
    }else{
        largest=val3
    }
    return largest
}
let val1=25;
let val2=35;
let val3=45;
result=lagestvalue(val1,val2,val3);
console.log(`the largest value from ${val1},${val2},${val3} is ${result}`);
