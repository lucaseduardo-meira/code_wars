function middlePermutation(s) {
  //coding and coding..
  for (var i = 0; i < s.length; i++) {
    var newString = s.replace(s[i], "");

    for (var j = 0; j < newString.length; j++) {
      var newString1 = newString.replace(newString[j], "");

      for (var k = 0; k < newString1.length; k++) {
        console.log(s[i], newString[j], newString1[k]);
      }
    }
  }
}

function doIt(str) {
  console.log(str);
  if (str.length > 1) {
    for (var k = 0; k < str.length; k++) {
      var newString = str.replace(str[k], "");
      doIt(newString);
    }
  }
}

doIt("abc");
// middlePermutation("abc");
