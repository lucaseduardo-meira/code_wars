function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;

  const compared = array1.every((number) => {
    if (array2.includes(number * number)) {
      array2.splice(array2.indexOf(number * number), 1);
      console.log(array2);
      return true;
    }
    return false;
  });
  return compared;
}
