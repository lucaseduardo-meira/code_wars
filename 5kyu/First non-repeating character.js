function firstNonRepeatingLetter(s) {
  const sLower = s.toLowerCase().split("");
  // Add your code here
  var firstLetter = "";
  sLower.forEach((letter, idx) => {
    if (sLower.indexOf(letter) === sLower.lastIndexOf(letter))
      firstLetter += s[idx];
    return;
  });
  if (firstLetter.length === 0) return "";
  return firstLetter[0];
}
