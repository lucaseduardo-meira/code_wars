function multiples(m, n) {
  const result = [];
  for (var i = 1; i <= m; i++) {
    result.push(n * i);
  }
  return result;
}
