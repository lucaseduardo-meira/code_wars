function twoSum(numbers, target) {
  var index = [];
  numbers.forEach((number, idx) => {
    numbers.forEach((num2, idx2) => {
      if (idx !== idx2) {
        if (number + num2 === target) index.push(idx, idx2);
      }
    });
  });
  return index.slice(0, 2);
}
