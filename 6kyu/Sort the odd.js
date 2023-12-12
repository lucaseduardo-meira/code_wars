function sortArray(array) {
  // Return a sorted array.
  var oddArray = [];
  const evenArray = array.map((item) => {
    if (item % 2 === 0) return item;
    else oddArray.push(item);
  });
  var i = 0;
  oddArray = oddArray.sort(function (a, b) {
    return a - b;
  });
  const fullArray = [];
  evenArray.forEach((item, idx) => {
    if (item === undefined) {
      fullArray.push(oddArray[i]);
      i++;
    } else fullArray.push(item);
  });
  return fullArray;
}
