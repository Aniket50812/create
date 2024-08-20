document.getElementById('calculateButton').addEventListener('click', function() {
    
    let numberInput = document.getElementById('numberInput').value;
    let number = parseFloat(numberInput);

    
    if (isNaN(number)) {
        document.getElementById('result').textContent = 'Please enter a valid number.';
        return;
    }

    
    const difference = number - 13;
    const absoluteDifference = Math.abs(difference);

    
    let result;
    if (number > 13) {
        result = 2 * absoluteDifference;
    } else {
        result = absoluteDifference;
    }

    
    document.getElementById('result').textContent = `The result is: ${result}`;
});
