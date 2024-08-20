function computeSum() {
    // Get the input values
    const num1 = parseInt(document.getElementById('number1').value, 10);
    const num2 = parseInt(document.getElementById('number2').value, 10);
    
    // Declare the result variable
    let result;

    // Check if input values are numbers
    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers in both fields.';
    } else if (num1 === num2) {
        result = 3 * (num1 + num2);
    } else {
        result = num1 + num2;
    }
    
    // Display the result in the HTML
    document.getElementById('result').textContent = `Result: ${result}`;
}
