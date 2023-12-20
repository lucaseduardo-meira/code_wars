function rot13(message) {
  const alph = "abcdefghijklmnopqrstuvwxyz";

  const rot = message.split("").map((item) => {
    if (!alph.includes(item.toLowerCase())) return item;
    const index = alph.indexOf(item.toLowerCase()) + 13;

    if (index >= alph.length) {
      if (item === item.toUpperCase())
        return alph[index - alph.length].toUpperCase();
      else return alph[index - alph.length];
    } else {
      if (item === item.toUpperCase()) return alph[index].toUpperCase();
      else return alph[index];
    }
  });
  return rot.join("");
}
