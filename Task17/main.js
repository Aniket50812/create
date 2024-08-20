// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.  

function haveSameRightmostDigit(a, b, c) {
    const lastDigitA = a % 10;
    const lastDigitB = b % 10;
    const lastDigitC = c % 10;
  

    if (lastDigitA === lastDigitB || lastDigitB === lastDigitC || lastDigitA === lastDigitC) {
      return true;
    }
  
    return false;
  }
  
  const num1 = 122;
  const num2 = 232;
  const num3 = 342;
  
  console.log(haveSameRightmostDigit(num1, num2, num3)); 
  