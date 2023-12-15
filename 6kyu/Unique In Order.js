var uniqueInOrder = function (iterable) {
  if (typeof iterable === "string") iterable = iterable.split("");
  return iterable.filter((item, idx) => {
    if (iterable[idx + 1] !== item) return item;
  });
};
