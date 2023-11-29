function rgb(r, g, b) {
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const rgb = [r, g, b];

  const hex = rgb.map((color) => {
    if (color < 0) return "00";
    if (color >= 255) return "FF";

    var hexValue = "";
    hexValue += values[Math.floor(color / 16)];
    hexValue += values[(color / 16 - Math.floor(color / 16)) * 16];
    console.log(hexValue);

    return hexValue;
  });
  return hex.join("");
}
