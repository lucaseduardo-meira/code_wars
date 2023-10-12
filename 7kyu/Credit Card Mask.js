// return masked string
function maskify(cc) {
  if (cc.length > 3) {
    const numbers = cc.slice(cc.length - 4, cc.length);
    const sign = "#".repeat(cc.length - 4);
    return sign + numbers;
  } else {
    return cc;
  }
}
