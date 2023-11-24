function pigIt(str) {
  const newStr = str.split(" ").map((word) => {
    if (!/^[a-zA-Z]+$/.test(word)) return word;
    return word.slice(1) + word.slice(0, 1) + "ay";
  });
  return newStr.join(" ");
}
