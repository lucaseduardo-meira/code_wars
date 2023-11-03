function solution(list) {
  // TODO: complete solution
  var solve = [];
  var actual = [];
  list.forEach((item, idx) => {
    if (actual.length === 0) actual.push(item);
    else if (
      actual[actual.length - 1] + 1 === item ||
      item - 1 === actual[actual.length - 1]
    ) {
      actual.push(item);
    } else {
      solve.push(actual);
      actual = [item];
    }
  });
  solve.push(actual);
  var solution = solve.map((item) => {
    if (item.length >= 3) {
      const range = [item[0] + "-" + item[item.length - 1]];
      return range;
    } else {
      return item;
    }
  });
  solution = solution.join(",");
  return solution;
}
