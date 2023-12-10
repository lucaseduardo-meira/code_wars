function arrayDiff(a, b) {
  const newArray = [];
  a.forEach((item) => {
    if (!b.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
}
