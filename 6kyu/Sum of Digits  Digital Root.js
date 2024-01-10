function digitalRoot(n) {
  while (n.toString().length > 1) {
    const strN = n.toString().split("");
    n = strN.reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return n;
}
