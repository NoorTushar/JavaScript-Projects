const clockHour = document.querySelector("#hour");
const clockMinute = document.querySelector("#minute");
const clockSeconds = document.querySelector("#seconds");

function updateClock() {
  let time = new Date();
  console.log(time);
  let hour = time.getHours();
  let minute = time.getMinutes();
  let seconds = time.getSeconds();

  clockHour.textContent = hour;
  clockMinute.textContent = minute;
  clockSeconds.textContent = seconds;
}

setInterval(updateClock, 1000);
