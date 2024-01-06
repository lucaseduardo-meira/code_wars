function perimeter(n) {
  const number = [1];
  for (var i = 1; i <= n; i++) {
    if (number.length === 1) {
      number.push(1);
    } else {
      const last = number[number.length - 1];
      const secLast = number[number.length - 2];
      number.push(last + secLast);
    }
  }
  const sum = number.reduce((acc, currentValue) => acc + currentValue, 0);
  return 4 * sum;
}
