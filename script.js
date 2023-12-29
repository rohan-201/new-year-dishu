document.addEventListener('DOMContentLoaded', function () {
    function updateCountdown() {
        // Set the date we're counting down to
        const countDownDate = new Date('December 31, 2023 23:59:59').getTime();

        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countDownDate - now;

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(distance / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown with a smooth transition
        const countdownElement = document.getElementById('countdown');
        
        setTimeout(() => {
            countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
            countdownElement.style.transform = 'scale(1)';
            countdownElement.style.opacity = '1';
        }, 500);

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = 'Happy New Year!';
        }
    }

    // Update the countdown every 1 second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Initial call to display countdown immediately
    updateCountdown();
});

