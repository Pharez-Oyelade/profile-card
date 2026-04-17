const timeElement = document.getElementById("epoch-time");

function updateTime() {
  const now = Date.now();
  timeElement.textContent = now;
}

// Initial render
updateTime();

// Update
// setInterval(updateTime, 1000);
