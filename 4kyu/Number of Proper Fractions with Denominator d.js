function properFractions(n) {
  if (n <= 1) return 0;
  const divisible = [n];
  const notDivisible = [1];
  for (var i = 2; i < n; i++) {
    for (var j = 0; j <= divisible.length; j++) {
      if (divisible[j] % i === 0 || i % divisible[j] === 0) {
        divisible.push(i);
        break;
      }
    }
  }
  return n - divisible.length;
}

// Not working for bigger numbers
