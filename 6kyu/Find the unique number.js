function findUniq(arr) {
  var unique = arr.filter((item) => {
    if (arr.lastIndexOf(item) === arr.indexOf(item)) return item;
  });
  return unique[0];
}
