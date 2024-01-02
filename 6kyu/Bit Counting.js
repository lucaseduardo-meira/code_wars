var countBits = function (n) {
  if (n < 0) return -1;
  var bits = 0;
  n.toString(2)
    .split("")
    .forEach((digit) => {
      if (digit === "1") bits++;
    });
  return bits;
};
