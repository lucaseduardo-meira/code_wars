function countSmileys(arr) {
  const validEyes = [":", ";"];
  const validNose = ["-", "~"];
  const validMouth = [")", "D"];
  if (arr.length === 0) return 0;
  var smiles = 0;
  arr.forEach((item) => {
    if (item.length === 2) {
      if (validEyes.includes(item[0]) && validMouth.includes(item[1])) smiles++;
    } else if (item.length === 3) {
      if (
        validEyes.includes(item[0]) &&
        validNose.includes(item[1]) &&
        validMouth.includes(item[2])
      )
        smiles++;
    }
  });
  return smiles;
}
