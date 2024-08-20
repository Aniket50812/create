document.addEventListener('DOMContentLoaded', function() {
    let greetButton = document.getElementById('greetButton');
    let nameInput = document.getElementById('nameInput');
    let greetingMessage = document.getElementById('greetingMessage');

    greetButton.addEventListener('click', function() {
        let name = nameInput.value.trim();
        if (name) {
            greetingMessage.textContent = `Hello,Dear ${name}!! Welcome to the web page.`;
        } else {
            greetingMessage.textContent = 'Please enter your name.';
        }
    });
});
ss