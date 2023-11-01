function solution(input, markers) {
  input = input.split("\n");
  var newString = "";

  input.forEach(function (line, idx) {
    for (var i = 0; i < markers.length; i++) {
      if (line.includes(markers[i])) {
        newString += line.slice(0, line.indexOf(markers[i])).trim();
        if (idx !== input.length - 1) newString += "\n";
        return 0;
      }
      if (i === markers.length - 1 && !line.includes(markers[i])) {
        newString += line.trim();
        if (idx !== input.length - 1) newString += "\n";
      }
    }
  });

  return newString;
}
