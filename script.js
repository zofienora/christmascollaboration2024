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

    setTimeout(updateCountdown, 1000); // Update every second
}

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