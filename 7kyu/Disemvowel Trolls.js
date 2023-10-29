function disemvowel(str) {
  str = str.split("");
  const noVolwel = str.map(function (letter) {
    if (!"AEIOU".includes(letter.toUpperCase())) return letter;
  });
  return noVolwel.join("");
}
