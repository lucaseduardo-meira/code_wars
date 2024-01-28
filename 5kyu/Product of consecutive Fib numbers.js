function productFib(prod) {
  var fib = [0, 1];
  var result = [];
  while (fib[fib.length - 1] * fib[fib.length - 2] <= prod) {
    if (fib[fib.length - 1] * fib[fib.length - 2] === prod) {
      console.log(true);
      result.push(fib[fib.length - 2], fib[fib.length - 1], true);
      break;
    }
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  if (result[2] === true) return result;
  return [fib[fib.length - 2], fib[fib.length - 1], false];
}
