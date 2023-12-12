function findOdd(A) {
  var answer = 0;
  A.forEach((item) => {
    const occurrences = A.filter((occ) => occ === item).length;
    if (occurrences % 2 !== 0) answer = item;
    return;
  });

  //happy coding!
  return answer;
}
