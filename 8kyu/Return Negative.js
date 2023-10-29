function makeNegative(num) {
  if (num <= 0) return num;
  return Number("-" + num.toString());
}
