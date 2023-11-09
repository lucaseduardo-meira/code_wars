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
  const lines = provLine.map((line, idx) => {
    if (idx === provLine.length - 1) return line;
    else {
      while (line.length < width) {
        for (var i = 0; i <= line.length; i++) {
          if (line.length === width) break;
          else if (line[i] === " ") {
            line = line.slice(0, i) + " " + line.slice(i);
          }
        }
        return line;
      }
      return line;
    }
  });
  console.log(lines.join("\n"));
}

// justify("12 45 1234 12", 6);

var j = 1;

while (j < 11) {
  for (var i = 0; i < 4; i++) {
    console.log(i);
    j++;
  }
  console.log(j);
}
