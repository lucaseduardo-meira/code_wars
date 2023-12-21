function narcissistic(value) {
  var newNum = value
    .toString()
    .split("")
    .map((digit) => {
      return Math.pow(parseInt(digit), value.toString().length);
    })
    .reduce((acc, cur) => acc + cur);
  newNum = parseInt(newNum);
  if (newNum === value) return true;
  return false;
}
