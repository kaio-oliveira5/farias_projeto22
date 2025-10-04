AOS.init();

document.addEventListener('DOMContentLoaded', function() {

    const fixedLaunchDate = "Feb 21, 2026 18:00:00"; 
    const launchDate = new Date(fixedLaunchDate).getTime();

    const countdownElement = document.getElementById('contador-regressivo');

    function updateCountdown() {
        const now = new Date().getTime();
        
        const distance = launchDate - now;

        const dayInMs = 24 * 60 * 60 * 1000;
        const hourInMs = 60 * 60 * 1000;
        const minuteInMs = 60 * 1000;

        const days = Math.floor(distance / dayInMs);
        const hours = Math.floor((distance % dayInMs) / hourInMs);
        const minutes = Math.floor((distance % hourInMs) / minuteInMs);
        const seconds = Math.floor((distance % minuteInMs) / 1000);

        let output = `
            ${days}d 
            ${hours.toString().padStart(2, '0')}h 
            ${minutes.toString().padStart(2, '0')}m 
            ${seconds.toString().padStart(2, '0')}s
        `;

        if (countdownElement) {
            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "Lançamento ocorrido!";
            } else {
                countdownElement.innerHTML = output;
            }
        }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

});