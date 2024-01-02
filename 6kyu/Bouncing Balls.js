function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  var bounces = 0;
  while (h > window) {
    bounces++;
    h = h * bounce;
    if (h > window) bounces++;
  }
  return bounces;
}
