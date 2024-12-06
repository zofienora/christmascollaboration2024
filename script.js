// Added .addEventListener('DOMContentLoaded', () => {}) to ensure the DOM is fully loaded before running the script - countdown and snowfall weren't working properly before - feel free to delete this comment after reading
document.addEventListener('DOMContentLoaded', () => {
    // Countdown for Christmas Function
    function updateCountdown() {
        const now = new Date();
        const currentYear = now.getFullYear();
        const christmas = new Date(currentYear, 11, 25); // 11 = December (zero-indexed)
    
        if (now > christmas) {
            // If Christmas has passed this year, countdown to next year
            christmas.setFullYear(currentYear + 1);
        }

        const timeDifference = christmas - now;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }

    setInterval(updateCountdown, 1000); // Update every second  
    // DANI: Updated setTimeout to setInterval for better timing as Timeout can drift over time - feel free to delete this comment after reading

    updateCountdown(); // Start countdown


    // music 

    // Create an Audio object
    const audio = new Audio('music/christmas-jazzy-bells-249610.mp3');

    // Play button functionality
    document.getElementById('playButton').addEventListener('click', () => {
        audio.play();
    });

    // Pause button functionality
    document.getElementById('pauseButton').addEventListener('click', () => {
        audio.pause();
    });


    // snowfall

    function createSnowflake() {
        console.log('Creating snowflake');
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        const size = Math.random() * 10 + 5;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        snowflake.style.left = `${Math.random() * window.innerWidth}px`;

        document.getElementById('snow-container').appendChild(snowflake);

        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.animationDelay = `${Math.random() * 2}s`;

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }
    // `createSnowflake` every 100ms
    setInterval(createSnowflake, 100);
});