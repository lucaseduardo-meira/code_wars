function inArray(array1, array2) {
  const result = [];
  array1.forEach((subString) => {
    array2.forEach((string) => {
      if (string.includes(subString)) {
        if (!result.includes(subString)) result.push(subString);
      }
    });
  });
  result.sort();
  return result;
}
