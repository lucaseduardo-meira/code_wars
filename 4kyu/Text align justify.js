function justify(text, width) {
  if (text.length === 0) return "";
  text = text.split(" ");
  const provLine = [];

  var acc = 0;
  var currentWord = "";
  text.forEach((word, idx) => {
    if (currentWord.length + word.length < width) {
      if (currentWord.length === 0) currentWord += word;
      else currentWord += " " + word;
    } else if (currentWord.length + word.length >= width) {
      provLine.push(currentWord);

      if (idx === text.length - 1) provLine.push(word);
      else currentWord = word;
    }
  });
  const lines = provLine.map((line) => {
    while (line.length < width) {
      for (var i = 0; i <= line.length; i++) {
        if (line.length === width) break;
        else if (line[i] === " ") {
          line = line.split("").splice(i, 0, " ").join("");
        }
      }
    }
    return line;
  });
  console.log(lines);
}
