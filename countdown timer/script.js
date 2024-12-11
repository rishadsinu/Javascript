// Set the target date
const targetDate = new Date("2024-12-31T23:59:59").getTime();

// Update the countdown every second
const interval = setInterval(() => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    clearInterval(interval);
    document.querySelector(".timer").innerHTML = "<h2>Time's up!</h2>";
    return;
  }

  // Calculate time components
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the timer elements
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}, 1000);
