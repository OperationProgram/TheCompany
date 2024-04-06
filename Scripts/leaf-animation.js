
document.addEventListener("DOMContentLoaded", function() {
    // Function to position leaves
    function positionLeaves() {
        const fallingLeaves = document.querySelectorAll('.leaf');
        
        // Iterate through each leaf
        fallingLeaves.forEach(leaf => {
            const randomX = Math.random() * window.innerWidth; // Random X position
            const randomDelay = Math.random() * 5; // Random delay for starting animation
            leaf.style.left = randomX + 'px'; // Set the left position
            leaf.style.animationDelay = randomDelay + 's'; // Set the animation delay
        });
    }

    // Call the function initially
    positionLeaves();

    // Update leaf positions at regular intervals
    setInterval(positionLeaves, 5000); // Adjust the interval as needed (in milliseconds)
});