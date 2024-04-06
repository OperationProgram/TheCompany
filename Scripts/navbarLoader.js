// navbar.js
// Function to load the navbar
function loadNavbar() {
    // Fetch the navbar.html content
    fetch('../Header/navigation-bar.html')
        .then(response => response.text())
        .then(data => {
            // Insert the navbar HTML into the header of the current page
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Call the loadNavbar function when the page is loaded
window.addEventListener('DOMContentLoaded', loadNavbar);