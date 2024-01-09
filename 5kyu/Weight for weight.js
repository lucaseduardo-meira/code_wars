function orderWeight(strng) {
  const weights = [];
  strng.split(" ").forEach((item) => {
    const splItem = item.split("");
    const sum = splItem.reduce((acc, digit) => acc + parseInt(digit), 0);
    weights.push([item, sum]);
  });
  weights.sort();
  weights.sort((a, b) => {
    return a[1] - b[1];
  });
  const newList = weights
    .map((array) => {
      return array[0];
    })
    .join(" ");
  return newList;
}
