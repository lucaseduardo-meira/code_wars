function findMissingLetter(array) {
  const alph = "abcdefghijklmnopqrstuvxwyz";
  var missing = "";
  array.every((letter, idx) => {
    if (
      alph.indexOf(letter.toLowerCase()) !==
      alph.indexOf(array[0].toLowerCase()) + idx
    ) {
      const index = alph.indexOf(array[0].toLowerCase()) + idx;
      missing = alph[`${index}`];
      return false;
    }
    return true;
  });
  if (array[0].toUpperCase() === array[0]) return missing.toUpperCase();
  return missing;
}
