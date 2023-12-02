function countPositivesSumNegatives(input) {
  // your code here
  if (input === null || input.length === 0) return [];
  var positives = 0;
  var negatives = 0;
  input.forEach((number) => {
    if (number > 0) positives++;
    else if (number < 0) negatives += number;
  });

  return [positives, negatives];
}
