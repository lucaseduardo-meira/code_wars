function wave(str) {
  str = str.split("");
  var waved = str.map((item, idx) => {
    if (item !== " ") {
      var string = str.join("").toLowerCase().split("");
      string[idx] = item.toUpperCase();
      return string.join("");
    }
  });
  return waved.filter((element) => {
    if (element !== undefined) return element;
  });
}
