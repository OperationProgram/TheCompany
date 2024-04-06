// footer.js
// Function to load the footer
function loadFooter() {
    // Fetch the footer.html content
    fetch('../Footer/footer.html')
        .then(response => response.text())
        .then(data => {
            // Insert the footer HTML into the header of the current page
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Call the footerNavbar function when the page is loaded
window.addEventListener('DOMContentLoaded', loadFooter);


