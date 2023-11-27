function humanReadable(seconds) {
  const time = {};
  time.hour = Math.floor(seconds / 3600);
  seconds -= time.hour * 3600;
  time.minutes = Math.floor(seconds / 60);
  seconds -= time.minutes * 60;
  time.seconds = seconds;

  const timeArray = [];

  for (const [key, value] of Object.entries(time)) {
    timeArray.push(value > 9 ? "" + value : "0" + value);
  }
  return timeArray.join(":");
}
