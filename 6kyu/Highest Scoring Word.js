function high(x) {
  const alph = "abcdefghijklmnopqrstuvxwyz";
  var score = 0;
  var word = 0;
  x.split(" ").forEach((currWord) => {
    var currScore = 0;
    currWord.split("").forEach((letter) => {
      currScore += alph.indexOf(letter) + 1;
    });
    if (currScore > score) {
      score = currScore;
      word = currWord;
    }
  });
  return word;
}
