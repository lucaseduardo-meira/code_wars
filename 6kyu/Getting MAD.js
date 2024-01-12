function gettingMad(array) {
  const results = [];

  array.forEach((number, idx) => {
    array.forEach((number1, idx1) => {
      if (idx !== idx1) {
        results.push(Math.abs(number - number1));
      }
    });
  });
  results.sort((a, b) => a - b);
  return results[0];
}
