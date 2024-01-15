function solution(string) {
  return string
    .split("")
    .map((letter) => {
      if (letter.toUpperCase() === letter) return ` ${letter}`;
      else return letter;
    })
    .join("");
}
