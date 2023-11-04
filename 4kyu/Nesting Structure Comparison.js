function checkOne(array) {
  array.forEach((item) => {
    if (typeof item === "object") checkOne(item);
    else console.log(item);
  });
}

checkOne([1, 2, [3, [4, [5, 6], 7], 8]]);
