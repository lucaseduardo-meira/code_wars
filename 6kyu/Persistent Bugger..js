function persistence(num) {
  //code me
  if (num.toString().length <= 1) return 0;
  var result = 1;
  function multipleDigits(n) {
    n = n.toString();
    var newNumber = 1;
    for (var i = 0; i < n.length; i++) {
      newNumber = newNumber * parseInt(n[i]);
    }
    if (newNumber.toString().length > 1) {
      result++;
      multipleDigits(newNumber);
    } else return newNumber;
  }
  multipleDigits(num);
  return result;
}
