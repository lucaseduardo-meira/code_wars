function solution(str) {
  const array = [];
  for (var i = 0; i < str.length; i += 2) {
    if (str[i + 1] === undefined) {
      const pair = str[i] + "_";
      array.push(pair);
    } else {
      const pair = str[i] + str[i + 1];
      array.push(pair);
    }
  }
  return array;
}
