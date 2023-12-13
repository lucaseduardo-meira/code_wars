function toCamelCase(str) {
  if (str === "") return "";
  if (str.includes("-")) str = str.replaceAll("-", "_");
  str = str.split("_");

  const camel = str.map((item, idx) => {
    if (idx === 0) return item;
    return `${item[0].toUpperCase()}${item.slice(1)}`;
  });
  return camel.join("");
}
