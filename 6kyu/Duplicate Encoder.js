function duplicateEncode(word) {
  word = word.toLowerCase();
  return word
    .split("")
    .map((letter, idx) => {
      const newString = word.slice(0, idx) + word.slice(idx + 1, word.length);
      if (!newString.includes(letter)) return "(";
      else return ")";
    })
    .join("");
}
