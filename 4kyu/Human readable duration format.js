function formatDuration(seconds) {
  if (seconds === 0) return "now";
  var result = { year: 0, day: 0, hour: 0, minute: 0, second: 0 };
  while (seconds > 0) {
    if (seconds >= 31536000) {
      result.year += 1;
      seconds -= 31536000;
    } else if (seconds >= 86400) {
      // Day
      result.day += 1;
      seconds -= 86400;
    } else if (seconds >= 3600) {
      // Hour
      result.hour += 1;
      seconds -= 3600;
    } else if (seconds >= 60) {
      // Minute
      result.minute += 1;
      seconds -= 60;
    } else {
      result.second += 1;
      seconds -= 1;
    }
  }
  var expression = [];
  for (const [key, value] of Object.entries(result)) {
    if (value > 0) {
      if (value < 2) expression.push(`${value} ${key}`);
      else expression.push(`${value} ${key}s`);
    }
  }
  if (expression.length > 2)
    return expression.slice(0, -1).join(", ") + " and " + expression.slice(-1);

  return expression.join(" and ");
}
