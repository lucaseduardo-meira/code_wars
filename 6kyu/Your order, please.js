function order(words) {
  const newWord = [];
  words = words.split(" ");
  for (var i = 0; i <= words.length; i++) {
    words.forEach((word) => {
      if (word.includes(i)) newWord.push(word);
    });
  }
  return newWord.join(" ");
}
