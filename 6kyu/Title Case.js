function titleCase(title, minorWords) {
  if (minorWords) {
    minorWords = minorWords.toUpperCase().split(" ");
  }
  if (title.length === 0) return "";
  const titled = title.split(" ").map((item, idx) => {
    if (idx === 0)
      return item[0].toUpperCase() + item.substring(1).toLowerCase();

    if (minorWords && minorWords.includes(item.toUpperCase()))
      return item.toLowerCase();
    else
      return `${item[0].toUpperCase()}` + `${item.substring(1).toLowerCase()}`;
  });
  return titled.join(" ");
}
