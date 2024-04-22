function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = formatTime(hours);
  minutes = formatTime(minutes);
  seconds = formatTime(seconds);

  var timeString = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock').innerHTML = timeString;
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();