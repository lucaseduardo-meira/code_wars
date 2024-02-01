Array.prototype.even = function () {
  return this.filter((item) => {
    if (item % 2 === 0 && Number.isInteger(item)) return item;
  });
};

Array.prototype.odd = function () {
  return this.filter((item) => {
    if (item % 2 !== 0 && Number.isInteger(item)) return item;
  });
};

Array.prototype.under = function (x) {
  return this.filter((item) => {
    if (item < x && Number.isInteger(item)) return item;
  });
};

Array.prototype.over = function (x) {
  return this.filter((item) => {
    if (item > x && Number.isInteger(item)) return item;
  });
};

Array.prototype.inRange = function (min, max) {
  return this.filter((item) => {
    if (item >= min && item <= max && Number.isInteger(item)) return item;
  });
};
