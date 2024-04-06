document.addEventListener("DOMContentLoaded", function() {
    // Function to position leaves
    function positionLeaves() {
        const fallingLeaves = document.querySelectorAll('.leaf');
        

        // Iterate through each leaf
        fallingLeaves.forEach(leaf => {
            const randomX = Math.random() * window.innerWidth; // Random X position
            const staticY = calculateStaticY(); // Calculate staticY for each leaf
            const randomDelay = Math.random() * 5; // Random delay for starting animation
            leaf.style.left = randomX + 'px'; // Set the left position
            leaf.style.top = staticY + 'px'; // Set the top position
            leaf.style.animationDelay = randomDelay + 's'; // Set the animation delay
        });
    }

    // Function to calculate staticY based on viewport height
    function calculateStaticY() {
        const windowHeight = window.innerHeight;
        // Adjust the multiplier as needed to determine the desired position
        // return -(windowHeight * 0.1); // 10% of the viewport height above the top
        console.log('WH')
        return -50;
    }
    
    
    // Function to make leaves disappear when reaching a certain position
    function checkLeafPositions() {
        const divY = document.querySelector('.header-grid');
        const disappearY = divY.clientHeight * 0.9; // 90% of the div height
        console.log('disY: ' + disappearY)

        const fallingLeaves = document.querySelectorAll('.leaf');
        fallingLeaves.forEach(leaf => {
            const leafTop = leaf.getBoundingClientRect().top;
            console.log('leafTop: ' + leafTop);
            console.log('leaf.style.top:' + leaf.style.top);
            if (leafTop > disappearY) {
                leaf.style.display = 'none'; // Hide the leaf
                console.log('Poof')
            
            }
        });
    }

    // Call the function initially
    positionLeaves();

    // Update leaf positions at regular intervals
    setInterval(checkLeafPositions, 100); // Check leaf positions every 100 milliseconds
});