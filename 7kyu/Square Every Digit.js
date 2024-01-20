function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((item) => {
        return Math.pow(parseInt(item), 2);
      })
      .join("")
  );
}
