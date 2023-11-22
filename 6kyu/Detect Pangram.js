function isPangram(string) {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "W",
    "Y",
    "Z",
  ];
  string = string.toUpperCase();
  var result = true;
  letters.forEach((letter) => {
    if (!string.includes(letter)) {
      result = false;
      return false;
    }
  });
  return result;
}
