function descendingOrder(n) {
  //...
  const digitArray = n
    .toString()
    .split("")
    .map((digit) => {
      return Number(digit);
    });
  return Number(digitArray.sort().reverse().join(""));
}
