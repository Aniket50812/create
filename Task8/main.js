function computeDifference() {
    const numberInput = document.getElementById('numberInput').value;
    const number = parseFloat(numberInput);

    if (isNaN(number)) {
        alert('Please enter a valid number.');
        return;
    }

    const target = 19;
    const absoluteDifference = Math.abs(number - target);
    let result;

    if (number > target) {
        result = 3 * absoluteDifference;
    } else {
        result = absoluteDifference;
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}
