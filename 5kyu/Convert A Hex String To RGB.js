function hexStringToRGB(hexString) {
  const hex = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };

  hexString = hexString.split("").slice(1);
  const rgbArray = [];
  for (var i = 0; i < hexString.length; i += 2) {
    var first = hexString[i];
    var second = hexString[i + 1];

    if (!parseInt(first) && first !== "0")
      first = hex[`${first.toUpperCase()}`];
    if (!parseInt(second) && second !== "0")
      second = hex[`${second.toUpperCase()}`];

    const rgb = parseInt(first) * 16 + parseInt(second);
    rgbArray.push(rgb);
  }
  const result = { r: rgbArray[0], g: rgbArray[1], b: rgbArray[2] };
  return result;
}
