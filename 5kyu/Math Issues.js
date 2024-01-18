Math.round = function (number) {
  number = number.toString().split(".");
  if (number.length === 1) return parseInt(number[0]);
  if (parseInt(number[1][0]) <= 4) return parseInt(number[0]);
  else return parseInt(number[0]) + 1;
};

Math.ceil = function (number) {
  number = number.toString().split(".");
  if (number.length === 1) return parseInt(number[0]);
  return parseInt(number[0]) + 1;
};

Math.floor = function (number) {
  number = number.toString().split(".");
  if (number.length === 1) return parseInt(number[0]);
  return parseInt(number[0]);
};
