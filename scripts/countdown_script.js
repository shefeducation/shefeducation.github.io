function startCountdown(targetDate, elementId) {
    const element = document.getElementById(elementId);
    const parentElement = element.closest(".countdown"); 
  
    function calculateTimeLeft() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
  
      if (timeLeft <= 0) {
        element.textContent = "Time's up!";
        if (parentElement) {
          parentElement.style.display = "none";
        }
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);
  
      element.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    calculateTimeLeft();
    setInterval(calculateTimeLeft, 1000);
  }
  
  // Set target dates
    const launchDate = Date.UTC(2025, 11, 10, 11, 59, 59);



  // Start the countdowns
  startCountdown(launchDate, "launchDateTimer");
