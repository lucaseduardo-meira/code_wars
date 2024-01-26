function findEvenIndex(arr) {
  var response = -1;
  for (var i = 1; i <= arr.length; i++) {
    const leftSide = arr.slice(0, i - 1).reduce((num, acc) => num + acc, 0);
    const rightSide = arr.slice(i).reduce((num, acc) => num + acc, 0);
    if (leftSide === rightSide) {
      response = i - 1;
      break;
    }
  }
  return response;
}
