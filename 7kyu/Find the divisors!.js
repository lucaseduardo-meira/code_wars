function divisors(integer) {
  const divisors = [];
  for (var i = 2; i < integer; i++) {
    if (integer % i === 0) divisors.push(i);
  }
  if (divisors.length === 0) return `${integer} is prime`;
  return divisors;
}
