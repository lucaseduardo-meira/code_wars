decodeMorse = function (morseCode) {
  const deCoded = morseCode.split(" ").map((item) => {
    if (item === "") return " ";
    return MORSE_CODE[item];
  });
  const result = deCoded
    .filter((item, idx) => {
      if (item === " " && deCoded[idx + 1] === " ") return;
      else return item;
    })
    .join("")
    .trim();

  return result;
};
