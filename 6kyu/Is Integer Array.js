function isIntArray(arr) {
  if (!arr) return false;
  var ret = true;
  arr.forEach((item) => {
    if (!Number.isInteger(item)) ret = false;
  });
  return ret;
}
