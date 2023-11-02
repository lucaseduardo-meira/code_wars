function spinWords(string) {
  //TODO Have fun :)
  const newString = string.split(" ").map(function (word) {
    if (word.length >= 5) {
      const newWord = [];
      for (var i = word.length - 1; i >= 0; i--) {
        newWord.push(word[i]);
      }
      console.log(newWord.join(""));
      return newWord.join("");
    } else {
      return word;
    }
  });
  return newString.join(" ");
}
