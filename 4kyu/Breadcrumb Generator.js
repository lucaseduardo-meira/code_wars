const ignore = [
  "the",
  "of",
  "in",
  "from",
  "by",
  "with",
  "and",
  "or",
  "for",
  "to",
  "at",
  "a",
];

function reduce(word) {
  if (word.length <= 30) {
    if (word.includes("-")) return word.replaceAll("-", " ");
    else return word;
  } else if (word.length > 30) {
    const newWord = word.split("-").map((word) => {
      ignore.forEach((toIgnore) => {
        if (word.includes(toIgnore)) return "";
      });
      console.log(word[0]);
      return word[0];
    });
  }
}

console.log(reduce("very-long-url-to-make-a-silly-yet-meaningful-example"));
