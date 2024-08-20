// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  

function checkIncreasingMode(a, b, c) {
    const isStrictMode = a < b && b < c;
    
    const isSoftMode = a <= b && b <= c;
    if (isStrictMode) {
      return 'Strict mode';
    } else if (isSoftMode) {
      return 'Soft mode';
    } else {
      return 'Neither';
    }
  }
  
  console.log(checkIncreasingMode(10, 15, 31)); 
  console.log(checkIncreasingMode(24, 22, 31)); 
  console.log(checkIncreasingMode(22, 22, 31)); 
  console.log(checkIncreasingMode(31, 22, 10)); 
  