function sumStrings(a, b) {
  if (!parseInt(a)) return b;
  if (!parseInt(b)) return a;
  return (BigInt(a) + BigInt(b)).toString();
}
