function nbYear(p0, percent, aug, p) {
  var steps = 0;
  while (p0 < p) {
    steps++;
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
  }
  return steps;
}
