function sumDigPow(a, b) {
  // Your code here
  var numbers = [];
  for (a; a <= b; a++) {
    var sum = 0;
    const numberString = a.toString();
    for (var i = 0; i < numberString.length; i++) {
      const digit = parseInt(numberString[i]);
      sum += digit ** (i + 1);
    }
    if (sum === a) numbers.push(sum);
  }
  return numbers;
}
