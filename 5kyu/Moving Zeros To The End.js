function moveZeros(arr) {
  const newArray = [];
  arr.forEach(function (element) {
    if (element !== 0) newArray.push(element);
  });
  arr.forEach((element) => {
    if (element === 0) newArray.push(0);
  });
  return newArray;
}
