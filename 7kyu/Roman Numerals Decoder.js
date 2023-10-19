function solution(roman) {
  // complete the solution by transforming the
  // string roman numeral into an integer
  const integerArray = [];
  for (numeral of roman) {
    if (numeral === "I") integerArray.push(1);
    if (numeral === "V") integerArray.push(5);
    if (numeral === "X") integerArray.push(10);
    if (numeral === "L") integerArray.push(50);
    if (numeral === "C") integerArray.push(100);
    if (numeral === "D") integerArray.push(500);
    if (numeral === "M") integerArray.push(1000);
  }
  var integer = 0;
  for (var i = 0; i < integerArray.length; i++) {
    if (integerArray[i] < integerArray[i + 1]) {
      integer -= integerArray[i];
      console.log(integer);
    } else {
      integer += integerArray[i];
    }
  }

  return integer;
}
