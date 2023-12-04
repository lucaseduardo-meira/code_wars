function nerdify(txt) {
  const nerdy = txt.split("").map((letter) => {
    if (letter.toUpperCase() === "A") return 4;
    if (letter.toUpperCase() === "E") return 3;
    if (letter === "l") return 1;
    else return letter;
  });
  return nerdy.join("");
}
