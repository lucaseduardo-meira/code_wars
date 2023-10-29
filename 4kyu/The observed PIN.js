function getPINs(observed) {
  const row1 = ["1", "4", "7"];
  const row2 = ["2", "5", "8", "0"];
  const row3 = ["3", "6", "9"];

  const posiblesDigits = [];
  for (var i = 0; i < observed.length; i++) {
    posiblesDigits.push([]);
  }

  for (var i = 0; i < observed.length; i++) {
    digit = observed[i];
    if (row1.includes(digit)) {
      const index = row1.indexOf(digit);

      posiblesDigits[i].push(digit);
      if (row1[index - 1] !== undefined)
        posiblesDigits[i].push(row1[index - 1]);
      if (row1[index + 1] !== undefined)
        posiblesDigits[i].push(row1[index + 1]);
      if (row1[index] !== undefined) posiblesDigits[i].push(row2[index]);
    }
    if (row2.includes(digit)) {
      const index = row2.indexOf(digit);

      posiblesDigits[i].push(digit);
      if (row2[index - 1] !== undefined)
        posiblesDigits[i].push(row2[index - 1]);
      if (row2[index + 1] !== undefined)
        posiblesDigits[i].push(row2[index + 1]);
      if (row1[index] !== undefined) posiblesDigits[i].push(row1[index]);
      if (row3[index] !== undefined) posiblesDigits[i].push(row3[index]);

      //console.log(row2[index-1])
      //console.log(row2[index+1])
      //console.log(row1[index])
      //console.log(row3[index])
    }
    if (row3.includes(digit)) {
      const index = row3.indexOf(digit);

      posiblesDigits[i].push(digit);
      if (row3[index - 1] !== undefined)
        posiblesDigits[i].push(row3[index - 1]);
      if (row3[index + 1] !== undefined)
        posiblesDigits[i].push(row3[index + 1]);
      if (row2[index] !== undefined) posiblesDigits[i].push(row2[index]);
    }
  }
  console.log(posiblesDigits);
  // TODO: This is your job, detective!
  const possiblesPin = [];
  for (digits1 of posiblesDigits[0]) {
    if (posiblesDigits[1].length === 0) possiblesPin.push(digits1);
    for (digits2 of posiblesDigits[1]) {
      if (posiblesDigits[2].length === 0) possiblesPin.push(digits1 + digits2);
      for (digits3 of posiblesDigits[2]) {
        if (posiblesDigits[3].length === 0)
          possiblesPin.push(digits1 + digits2 + digits3);
        for (digits4 of posiblesDigits[3]) {
          if (posiblesDigits[4].length === 0)
            possiblesPin.push(digits1 + digits2 + digits3 + digits4);
          for (digits5 of posiblesDigits[4]) {
            if (posiblesDigits[5].length === 0)
              possiblesPin.push(
                digits1 + digits2 + digits3 + digits4 + digits5
              );
            for (digits6 of posiblesDigits[5]) {
              if (posiblesDigits[6].length === 0)
                possiblesPin.push(
                  digits1 + digits2 + digits3 + digits4 + digits5 + digits6
                );
              for (digits7 of posiblesDigits[6]) {
                if (posiblesDigits[7].length === 0)
                  possiblesPin.push(
                    digits1 +
                      digits2 +
                      digits3 +
                      digits4 +
                      digits5 +
                      digits6 +
                      digits7
                  );
                for (digits8 of posiblesDigits[7]) {
                  possiblesPin.push(
                    digits1 +
                      digits2 +
                      digits3 +
                      digits4 +
                      digits5 +
                      digits6 +
                      digits7 +
                      digits8
                  );
                }
              }
            }
          }
        }
      }
    }
  }
  return possiblesPin;
}
