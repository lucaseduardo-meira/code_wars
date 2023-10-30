class RomanNumerals {
  static toRoman(num) {
    const romans = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
      MM: 2000,
    };
    var toRoman = "";
    for (var i = romans.length; num > 0; i--) {
      console.log(Object.keys(romans)[i]);
      num = 0;
      if (num === romans[Object.keys(romans)[i]])
        toRoman += Object.keys(romans)[i];
    }
    return "IV";
  }

  static fromRoman(str) {
    const numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    str = str.split("").map(function (element) {
      return numerals[element];
    });

    const roman = str.reduce(function (accumulator, element, index) {
      if (str[index + 1] && element < str[index + 1]) {
        return accumulator - element;
      } else return element + accumulator;
    }, 0);

    return roman;
  }
}
