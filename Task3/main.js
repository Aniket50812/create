function checkLeapYear() {
    let year = parseInt(document.getElementById('year').value, 10);
    let resultElement = document.getElementById('result');
    
    if (isNaN(year)) {
        resultElement.textContent = 'Please enter a valid year.';
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        resultElement.textContent = `${year} is a leap year.`;
    } else {
        resultElement.textContent = `${year} is not a leap year.`;
    }
}
