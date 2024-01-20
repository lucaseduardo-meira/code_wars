function getCount(str) {
  var count = 0;
  str.split("").forEach((item) => {
    if ("aeiou".includes(item)) count++;
  });
  return count;
}
