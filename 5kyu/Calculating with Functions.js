function calculator(x, operator, y) {
  if (operator === "+") return x + y;
  if (operator === "-") return x - y;
  if (operator === "/") return Math.floor(x / y);
  if (operator === "*") return x * y;
}

function zero(operation) {
  if (operation === undefined) return 0;
  const operator = operation[0];
  const y = operation[1];
  return calculator(0, operator, y);
}
function one(operation) {
  if (operation === undefined) return 1;
  const operator = operation[0];
  const y = operation[1];
  return calculator(1, operator, y);
}
function two(operation) {
  if (operation === undefined) return 2;
  const operator = operation[0];
  const y = operation[1];
  return calculator(2, operator, y);
}
function three(operation) {
  if (operation === undefined) return 3;
  const operator = operation[0];
  const y = operation[1];
  return calculator(3, operator, y);
}
function four(operation) {
  if (operation === undefined) return 4;
  const operator = operation[0];
  const y = operation[1];
  return calculator(4, operator, y);
}
function five(operation) {
  if (operation === undefined) return 5;
  const operator = operation[0];
  const y = operation[1];
  return calculator(5, operator, y);
}
function six(operation) {
  if (operation === undefined) return 6;
  const operator = operation[0];
  const y = operation[1];
  return calculator(6, operator, y);
}
function seven(operation) {
  if (operation === undefined) return 7;
  const operator = operation[0];
  const y = operation[1];
  return calculator(7, operator, y);
}
function eight(operation) {
  if (operation === undefined) return 8;
  const operator = operation[0];
  const y = operation[1];
  return calculator(8, operator, y);
}
function nine(operation) {
  if (operation === undefined) return 9;
  const operator = operation[0];
  const y = operation[1];
  return calculator(9, operator, y);
}

function plus(n) {
  return ["+", n];
}
function minus(n) {
  return ["-", n];
}
function times(n) {
  return ["*", n];
}
function dividedBy(n) {
  return ["/", n];
}
