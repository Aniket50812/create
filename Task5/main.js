const currentURL = window.location.href;
console.log("Current URL:", currentURL);
const urlElement = document.getElementById('url-display');
urlElement.textContent = "Current URL: " + currentURL;
// alert("Current URL: " + currentURL);
