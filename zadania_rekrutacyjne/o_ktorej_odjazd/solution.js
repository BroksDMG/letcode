("use strict");

function secToString(seconds) {
  if (seconds < 0 || seconds > 86399) {
    throw new Error("Seconds should be in range 0 - 86399");
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}

console.log(secToString(3600)); //=> ”01:00:00”
console.log(secToString(64)); //=> ”00:01:04”
