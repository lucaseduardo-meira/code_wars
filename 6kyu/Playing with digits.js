function digPow(n, p) {
  const numbers = n.toString().split("");
  var pow = 0;
  // ...
  for (var i = 0; i < numbers.length; i++) {
    pow += Math.pow(parseInt(numbers[i]), p + i);
  }
  if (pow % n === 0) {
    return pow / n;
  } else return -1;
}
