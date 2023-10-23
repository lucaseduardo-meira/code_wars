function ipsBetween(start, end) {
  //TODO
  start = start.split(".");
  end = end.split(".");
  const startArray = start.map((str) => {
    return parseInt(str, 10);
  });
  const endArray = end.map((str) => {
    return parseInt(str, 10);
  });
  var startNumber = 0;
  var endNumber = 0;
  for (var i = 1; i <= startArray.length; i++) {
    if (i === 1) {
      startNumber += startArray[startArray.length - i];
    } else {
      const size = startArray[startArray.length - i] * 256 ** (i - 1);
      startNumber += size;
    }
  }
  for (var i = 1; i <= endArray.length; i++) {
    if (i === 1) {
      const size = endArray[endArray.length - i];
      endNumber += size;
    } else {
      const size = endArray[endArray.length - i] * 256 ** (i - 1);
      endNumber += size;
    }
  }
  return endNumber - startNumber;
}
