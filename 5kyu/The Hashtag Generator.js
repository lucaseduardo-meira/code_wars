function generateHashtag(str) {
  if (!/\S/.test(str)) return false;
  var string = "#";
  for (var i = 0; i < str.length; i++) {
    if (i === 0) string += str[i].toUpperCase();
    else if (str[i - 1] === " ") string += str[i].toUpperCase();
    else string += str[i];
  }
  string = string.replace(/\s/g, "");
  if (string.length > 140) return false;
  return string;
}
