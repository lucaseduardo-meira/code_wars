function properFractions(n) {
  if (n <= 1) return 0;
  const divisible = [];
  const notDivisible = [1];
  for (var i = 2; i <= n; i++) {
    if (n % i === 0) divisible.push(i);
    else if (n % i !== 0) {
      var push = true;
      for (var j = 0; j <= divisible.length; j++) {
        if (i % divisible[j] === 0) {
          push = false;
          divisible.push(i);
          break;
        }
      }
      if (push === true) notDivisible.push(i);
    }
  }
  return notDivisible.length;
}
