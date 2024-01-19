function longest(s1, s2) {
  var string = "";
  const newString = s1 + s2;
  newString.split("").forEach((letter) => {
    if (!string.includes(letter)) string += letter;
  });
  return string.split("").sort().join("");
}
